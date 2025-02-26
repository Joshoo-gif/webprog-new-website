import styles from './Goals.module.css';

const Goals = () => {
  const goals = [
    {
      id: 1,
      category: 'Academic & Career',
      items: [
        'Successfully complete BSIT-MI degree',
        'Secure a fulfilling job in the tech industry',
        'Continue learning and improving IT skills',
        'Build a strong professional network',
      ],
    },
    {
      id: 2,
      category: 'Family Support',
      items: [
        'Help parents financially',
        'Support second sibling through graduation',
        'Assist third sibling with education if possible',
        'Maintain strong family bonds',
      ],
    },
    {
      id: 3,
      category: 'Personal Growth',
      items: [
        'Build a better life for myself',
        'Achieve work-life balance',
        'Nurture relationship with special someone',
        'Continue pursuing hobbies and interests',
      ],
    },
  ];

  return (
    <section className={styles.goals}>
      <div className={styles.container}>
        <h1 className={styles.title}>My Goals</h1>
        <div className={styles.goalsGrid}>
          {goals.map((goalCategory) => (
            <div key={goalCategory.id} className={styles.goalCard}>
              <h2 className={styles.categoryTitle}>{goalCategory.category}</h2>
              <ul className={styles.goalList}>
                {goalCategory.items.map((item, index) => (
                  <li key={index} className={styles.goalItem}>
                    <span className={styles.checkmark}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.quote}>
          <blockquote>
            "Success means not only achieving personal goals but also helping family members reach their dreams."
          </blockquote>
          <cite>- Personal Aspiration</cite>
        </div>
      </div>
    </section>
  );
};

export default Goals; 