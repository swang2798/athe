import React, { useState } from 'react';

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
    days.push(<div key={`empty-${i}`} className="calendar-day empty" />);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    const isOpen = isOpenDate(year, month, day);
    const isPast = isPastDate(year, month, day) && !isOpen;
    days.push(
      <div key={formatDateKey(year, month, day)} className={`calendar-day ${isOpen ? 'open' : ''} ${isPast ? 'past' : ''}`}>
        {day}
      </div>
    );
  }

  return (
    <div className="calendar-widget">
      <div className="calendar-controls">
        <button onClick={() => setCurrentMonth(new Date(year, month - 1, 1))} className="calendar-nav">←</button>
        <button onClick={() => setCurrentMonth(new Date(year, month + 1, 1))} className="calendar-nav">→</button>
      </div>
      <div className="calendar-month">
        <h3>{monthName}</h3>
        <div className="calendar-weekdays">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
        </div>
        <div className="calendar-days">{days}</div>
      </div>
      <div className="calendar-legend">
        <div className="legend-item">
          <span className="legend-dot open" />
          <span>Open (10 AM - 2 PM)</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
