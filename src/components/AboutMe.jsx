import styles from './AboutMe.module.css';
import profileImage from '../assets/images/profile.jpg';

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.content}>
          <div className={styles.profileImage}>
            <div className={styles.imageContainer}>
              <img 
                src={profileImage}
                alt="Joshua Concepcion" 
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.info}>
            <h2>Hello, I'm Joshua Concepcion</h2>
            <p className={styles.introduction}>
              Welcome to my personal website! I'm a 19-year-old tech enthusiast from Taguig City. 
              As the eldest of three siblings, I balance my academic pursuits with my passions for 
              technology, gaming, and mechanical hobbies.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <h3>🤖 Tech & Hobbies</h3>
                <p>Passionate about Gundam building, mechanical keyboards, and exploring new technologies</p>
              </div>
              <div className={styles.highlight}>
                <h3>🎮 Gaming & Entertainment</h3>
                <p>Avid gamer, anime enthusiast, and manga reader with a love for creative storytelling</p>
              </div>
              <div className={styles.highlight}>
                <h3>🏍️ Adventure</h3>
                <p>Motorcycle enthusiast who enjoys exploring new places and spending time with friends</p>
              </div>
            </div>
            <div className={styles.quote}>
              <blockquote>
                "My goal is not just to succeed personally, but to help my siblings achieve their dreams as well."
              </blockquote>
              <cite>- Personal Philosophy</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 