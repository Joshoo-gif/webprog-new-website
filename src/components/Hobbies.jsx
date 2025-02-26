import styles from './Hobbies.module.css';

const Hobbies = () => {
  const hobbies = [
    {
      id: 1,
      icon: '🤖',
      title: 'Gunpla Building',
      description: 'Passionate about building and customizing Gundam plastic models, fulfilling my childhood fascination with robots.',
    },
    {
      id: 2,
      icon: '⌨️',
      title: 'Mechanical Keyboards',
      description: 'Enjoy building and customizing mechanical keyboards, exploring different switches and layouts.',
    },
    {
      id: 3,
      icon: '🎮',
      title: 'Gaming',
      description: 'Love playing online games, connecting with friends, and experiencing new virtual adventures.',
    },
    {
      id: 4,
      icon: '🎬',
      title: 'Entertainment',
      description: 'Watching movies and anime, appreciating different storytelling styles and creative expressions.',
    },
    {
      id: 5,
      icon: '🏍️',
      title: 'Motorcycle Riding',
      description: 'Passionate about motorcycle rides and traveling, exploring new places and enjoying the freedom of the road.',
    },
    {
      id: 6,
      icon: '📖',
      title: 'Manga Reading',
      description: 'Reading manga in my free time, enjoying Japanese comic art and storytelling.',
    },
  ];

  return (
    <section className={styles.hobbies}>
      <div className={styles.container}>
        <h1 className={styles.title}>Hobbies & Interests</h1>
        <div className={styles.hobbyGrid}>
          {hobbies.map((hobby) => (
            <div key={hobby.id} className={styles.hobbyCard}>
              <div className={styles.icon}>{hobby.icon}</div>
              <h3 className={styles.hobbyTitle}>{hobby.title}</h3>
              <p className={styles.description}>{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies; 