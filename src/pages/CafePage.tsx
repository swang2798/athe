import React from 'react';
import Calendar from '../components/Calendar';
import Drinks from '../components/Drinks';
import Food from '../components/Food';
import styles from './CafePage.module.css';

const CafePage: React.FC = () => (
  <>
    <Calendar />
    <section>
      <div className={styles.menuGrid}>
        <Drinks />
        <Food />
      </div>
    </section>
  </>
);

export default CafePage;
