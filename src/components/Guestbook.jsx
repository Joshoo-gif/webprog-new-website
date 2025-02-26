import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import styles from './Guestbook.module.css';

const Guestbook = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Fetch initial comments
    fetchComments();

    // Set up real-time subscription
    const channel = supabase.channel('comments')
      .on('postgres_changes', 
        { 
          event: 'INSERT', 
          schema: 'public', 
          table: 'comments' 
        }, 
        (payload) => {
          handleNewComment(payload.new);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleNewComment = (newComment) => {
    setComments(prevComments => {
      // Check if comment already exists to prevent duplicates
      const exists = prevComments.some(comment => comment.id === newComment.id);
      if (exists) return prevComments;
      
      // Add new comment at the beginning
      return [newComment, ...prevComments];
    });
  };

  const fetchComments = async () => {
    try {
      setError(null);
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments(data);
    } catch (err) {
      setError('Failed to fetch comments');
      console.error('Error fetching comments:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setIsSubmitting(true);
    setError(null);
    setSuccess('');

    try {
      // Create a temporary comment for optimistic update
      const tempComment = {
        id: 'temp-' + Date.now(),
        name: formData.name,
        email: formData.email || null,
        message: formData.message,
        created_at: new Date().toISOString(),
      };

      // Optimistically add the comment
      setComments(prev => [tempComment, ...prev]);

      // Send to Supabase
      const { data, error } = await supabase
        .from('comments')
        .insert([
          {
            name: formData.name,
            email: formData.email || null,
            message: formData.message,
          },
        ])
        .select()
        .single();

      if (error) throw error;

      // Replace temporary comment with real one
      setComments(prev => 
        prev.map(comment => 
          comment.id === tempComment.id ? data : comment
        )
      );

      // Clear form and show success
      setFormData({ name: '', email: '', message: '' });
      setSuccess('Message posted successfully!');

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to post comment');
      console.error('Error posting comment:', err);
      
      // Remove temporary comment if there was an error
      setComments(prev => 
        prev.filter(comment => !comment.id.toString().startsWith('temp-'))
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString(undefined, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <section className={styles.guestbook}>
      <div className={styles.container}>
        <h1 className={styles.title}>Guestbook</h1>
        
        <div className={styles.content}>
          {/* Form Section */}
          <div className={styles.formSection}>
            <div className={styles.formCard}>
              <h2>Leave a Message</h2>
              {success && (
                <div className={styles.success} role="alert">
                  {success}
                </div>
              )}
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email (optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message"
                    required
                    rows="4"
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Posting...' : 'Post Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Comments Section */}
          <div className={styles.commentsSection}>
            <h2>Messages</h2>
            <div className={styles.commentsList} aria-live="polite">
              {error && (
                <div className={styles.error} role="alert">
                  {error}
                </div>
              )}
              {isLoading ? (
                <div className={styles.loading}>Loading comments...</div>
              ) : comments.length === 0 ? (
                <div className={styles.noComments}>No messages yet. Be the first to leave a message!</div>
              ) : (
                <div className={styles.commentsGrid}>
                  {comments.map((comment) => (
                    <div 
                      key={comment.id} 
                      className={`${styles.commentCard} ${
                        comment.id.toString().startsWith('temp-') ? styles.tempComment : ''
                      }`}
                    >
                      <div className={styles.commentHeader}>
                        <h3>{comment.name}</h3>
                        <span className={styles.timestamp}>
                          {formatTimestamp(comment.created_at)}
                        </span>
                      </div>
                      <p className={styles.message}>{comment.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook; 