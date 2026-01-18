import React, { useState } from 'react';

const Calendar = () => {
  // Configure your open dates here (format: 'YYYY-MM-DD')
  const openDates = [
    '2026-03-14',
  ];

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek, year, month };
  };

  const formatDateKey = (year, month, day) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const isOpenDate = (year, month, day) => {
    return openDates.includes(formatDateKey(year, month, day));
  };

  const isPastDate = (year, month, day) => {
    const date = new Date(year, month, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const renderCalendar = (date) => {
    const { daysInMonth, startingDayOfWeek, year, month } = getDaysInMonth(date);
    const monthName = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isOpen = isOpenDate(year, month, day);
      const isPast = isPastDate(year, month, day) && !isOpen;
      const dateKey = formatDateKey(year, month, day);

      days.push(
        <div
          key={dateKey}
          className={`calendar-day ${isOpen ? 'open' : ''} ${isPast ? 'past' : ''}`}
        >
          {day}
        </div>
      );
    }

    return (
      <div className="calendar-month">
        <h3>{monthName}</h3>
        <div className="calendar-weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="calendar-days">{days}</div>
      </div>
    );
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  return (
    <div className="calendar-widget">
      <div className="calendar-controls">
        <button onClick={prevMonth} className="calendar-nav">←</button>
        <button onClick={nextMonth} className="calendar-nav">→</button>
      </div>
      {renderCalendar(currentMonth)}
      <div className="calendar-legend">
        <div className="legend-item">
          <span className="legend-dot open"></span>
          <span>Open (10 AM - 2 PM)</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

