import React from "react";
import styles from "./Calendar.module.css";

const Calendar: React.FC = () => (
  <div className={styles.banner}>
    <img
      src="https://pub-e607f1b3e5cd407c80ae57baa3c09ecc.r2.dev/assets/soft-open-flyer.png"
      alt="Athe soft opening flyer"
      className={styles.flyer}
    />
  </div>
);

export default Calendar;
