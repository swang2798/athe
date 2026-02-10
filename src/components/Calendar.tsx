import React, { useState } from 'react';
import styles from './Calendar.module.css';

const openDates = ['2026-03-14'];

const Calendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    return {
      daysInMonth: lastDay.getDate(),
      startingDayOfWeek: firstDay.getDay(),
      year,
      month,
    };
  };

  const formatDateKey = (year: number, month: number, day: number) =>
    `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  const isOpenDate = (year: number, month: number, day: number) =>
    openDates.includes(formatDateKey(year, month, day));

  const isPastDate = (year: number, month: number, day: number) => {
    const date = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(currentMonth);
  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const days = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(<div key={`empty-${i}`} className={`${styles.day} ${styles.empty}`} />);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const isOpen = isOpenDate(year, month, day);
    const isPast = isPastDate(year, month, day) && !isOpen;
    days.push(
      <div key={formatDateKey(year, month, day)} className={`${styles.day} ${isOpen ? styles.open : ''} ${isPast ? styles.past : ''} ${isOpen && isPastDate(year, month, day) ? styles.openPast : ''}`}>
        {day}
      </div>
    );
  }

  return (
    <div className={styles.widget}>
      <div className={styles.controls}>
        <button onClick={() => setCurrentMonth(new Date(year, month - 1, 1))} className={styles.nav}>←</button>
        <button onClick={() => setCurrentMonth(new Date(year, month + 1, 1))} className={styles.nav}>→</button>
      </div>
      <div className={styles.month}>
        <h3>{monthName}</h3>
        <div className={styles.weekdays}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
        </div>
        <div className={styles.days}>{days}</div>
      </div>
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={`${styles.legendDot} ${styles.legendDotOpen}`} />
          <span>Open (10 AM - 2 PM)</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
