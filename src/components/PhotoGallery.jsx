import { useState } from 'react';
import styles from './PhotoGallery.module.css';
import gallery1 from '../assets/images/gallery1.jpg';
import gallery2 from '../assets/images/gallery2.jpg';
import gallery3 from '../assets/images/gallery3.jpg';
import gallery4 from '../assets/images/gallery4.jpg';
import gallery5 from '../assets/images/gallery5.jpg';
import gallery6 from '../assets/images/gallery6.jpg';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    {
      id: 1,
      url: gallery1,
      title: 'Gaming Setup',
      description: 'My cat companion keeping me company while gaming, featuring my custom mechanical keyboard with yellow keycaps.',
    },
    {
      id: 2,
      url: gallery2,
      title: 'PC Build',
      description: 'Inside view of my custom PC build featuring clean cable management and RGB lighting.',
    },
    {
      id: 3,
      url: gallery3,
      title: 'Relaxing Cats',
      description: 'My two adorable cats taking a peaceful nap together.',
    },
    {
      id: 4,
      url: gallery4,
      title: 'Manga Collection',
      description: 'A peek at my manga collection shelf with my cat making a special appearance.',
    },
    {
      id: 5,
      url: gallery5,
      title: 'Gunpla Collection',
      description: 'My latest Gunpla build - the Zeta Gundam Ver.Ka, showcasing the detailed model kit.',
    },
    {
      id: 6,
      url: gallery6,
      title: 'Motorcycle Gear',
      description: 'My white motorcycle helmet, ready for the next adventure on the road.',
    }
  ];

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        <h1 className={styles.title}>Photo Gallery</h1>
        <div className={styles.photoGrid}>
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={styles.photoCard}
              onClick={() => setSelectedImage(photo)}
            >
              <div className={styles.imageContainer}>
                <img src={photo.url} alt={photo.title} />
              </div>
              <div className={styles.photoInfo}>
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className={styles.modal} onClick={() => setSelectedImage(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button
                className={styles.closeButton}
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <img src={selectedImage.url} alt={selectedImage.title} />
              <div className={styles.modalInfo}>
                <h2>{selectedImage.title}</h2>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery; 