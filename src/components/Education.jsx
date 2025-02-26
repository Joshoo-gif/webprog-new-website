import styles from './Education.module.css';

const Education = () => {
  const educationHistory = [
    {
      id: 1,
      year: '2023 - Present',
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Asia Pacific College',
      description: 'Major in Mobile and Internet Technology (BSIT-MI231). Shifted from BS-ECE to pursue a stronger focus in software development and technology.',
    },
    {
      id: 2,
      year: '2021 - 2023',
      degree: 'Senior High School - STEM',
      institution: 'Sto. Nino Catholic School',
      description: 'Completed Senior High School with Honors, focusing on Science, Technology, Engineering, and Mathematics track.',
    },
    {
      id: 3,
      year: '2017 - 2021',
      degree: 'Junior High School',
      institution: 'Sto. Nino Catholic School',
      description: 'Graduated with Honors, developing a strong foundation in academics and discovering a passion for technology.',
    },
  ];

  return (
    <section className={styles.education}>
      <div className={styles.container}>
        <h1 className={styles.title}>Education</h1>
        <div className={styles.timeline}>
          {educationHistory.map((edu) => (
            <div key={edu.id} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.year}>{edu.year}</div>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <h4 className={styles.institution}>{edu.institution}</h4>
                <p className={styles.description}>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 