import React from 'react';
import styles from './Calendar.module.css';

const openDates = [''];
const hours = '10 AM – 2 PM';

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
};

const Calendar: React.FC = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = openDates
    .filter((d) => new Date(d + 'T00:00:00') >= today)
    .sort();

  return (
    <div className={styles.banner}>
      {upcoming.length > 0 ? (
        upcoming.map((d) => (
          <p key={d} className={styles.date}>
            <span className={styles.dot} />
            Next open: <strong>{formatDate(d)}</strong> · {hours}
          </p>
        ))
      ) : (
        <p className={styles.date}>No upcoming dates — check back soon!</p>
      )}
    </div>
  );
};

export default Calendar;
