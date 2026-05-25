import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { trips } from "../data/trips";
import tripLayouts from "../trips";
import DefaultTrip from "../trips/DefaultTrip";

const TripPage: React.FC = () => {
  const { id } = useParams();
  const trip = trips.find((t) => t.id === id);

  if (!trip) return <Navigate to="/404" replace />;

  const Layout = tripLayouts[trip.id];

  return Layout ? <Layout /> : <DefaultTrip trip={trip} />;
};

export default TripPage;
