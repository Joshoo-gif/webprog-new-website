import styles from './ITExperience.module.css';

const ITExperience = () => {
  const experiences = [
    {
      id: 1,
      role: 'BSIT-MI Student',
      company: 'Asia Pacific College',
      period: '2023 - Present',
      description: 'Currently pursuing Bachelor of Science in Information Technology, focusing on Mobile and Internet Technology.',
      skills: ['Python', 'Java', 'C++', 'Basic Web Development'],
      achievements: [
        'Learning core programming concepts',
        'Developing problem-solving skills',
        'Exploring mobile and web technologies',
      ],
    },
    {
      id: 2,
      role: 'BS-ECE Student',
      company: 'Asia Pacific College',
      period: '2023',
      description: 'Initially started with Bachelor of Science in Electronics and Communications Engineering before finding my true passion in IT.',
      skills: ['Basic Electronics', 'Mathematics', 'Engineering Concepts'],
      achievements: [
        'Gained foundational knowledge in electronics',
        'Developed analytical thinking skills',
        'Made informed decision to shift to IT',
      ],
    },
    {
      id: 3,
      role: 'STEM Student',
      company: 'Sto. Nino Catholic School',
      period: '2021 - 2023',
      description: 'Completed Senior High School with a focus on Science, Technology, Engineering, and Mathematics.',
      skills: ['Basic IT Knowledge', 'Scientific Methods', 'Technical Writing'],
      achievements: [
        'Graduated with honors',
        'Developed interest in technology',
        'Built foundation for IT career',
      ],
    },
  ];

  return (
    <section className={styles.experience}>
      <div className={styles.container}>
        <h1 className={styles.title}>IT Experience</h1>
        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <div className={styles.period}>{exp.period}</div>
                <h2 className={styles.role}>{exp.role}</h2>
                <h3 className={styles.company}>{exp.company}</h3>
                <p className={styles.description}>{exp.description}</p>
                
                <div className={styles.skillsContainer}>
                  <h4>Skills:</h4>
                  <div className={styles.skills}>
                    {exp.skills.map((skill, index) => (
                      <span key={index} className={styles.skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.achievementsContainer}>
                  <h4>Key Learnings:</h4>
                  <ul className={styles.achievements}>
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITExperience;

 