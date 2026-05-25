import React from "react";
import { Trip } from "../data/trips";
import styles from "../pages/styles/TripPage.module.css";

const DefaultTrip: React.FC<{ trip: Trip }> = ({ trip }) => (
  <div>
    <h1 className={styles.title}>{trip.name}</h1>
    <p className={styles.overview}>Coming soon.</p>
  </div>
);

export default DefaultTrip;
