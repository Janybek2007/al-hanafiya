import React from 'react';
import styles from './QADetailPage.module.scss';
import { TEXTS } from './constants/texts';

const QuestionsAnsDetail: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Суроо бөлүмү */}
      <h2 className={styles.title}>{TEXTS.title}</h2>
      <p
        className={styles.question}
        dangerouslySetInnerHTML={{ __html: TEXTS.question }}
      />

      <hr className={styles.divider} />

      {/* Хоон бөлүмү */}
      <h3 className={styles.author}>{TEXTS.author}</h3>
      <p
        className={styles.authorText}
        dangerouslySetInnerHTML={{ __html: TEXTS.authorText }}
      />

      {/* Түшүндүрмө бөлүмү */}
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: TEXTS.description }}
      />

      {/* Кол коюу */}
      <p className={styles.signature}>{TEXTS.signature}</p>

      {/* Лайк саны */}
      <div className={styles.likes}>
        <span className={styles.heartIcon}>❤️</span> 15
      </div>
    </div>
  );
};

export default QuestionsAnsDetail;
