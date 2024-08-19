import React from 'react';
import Style from '../assets/styles/Index.module.css';

const Index = () => {
  return (
    <div className={Style.homeContainer}>
      <header className={Style.homeHeader}>
        <h1 className={Style.homeTitle}>Bienvenid@ a Project Nexus</h1>
        <p className={Style.homeDescription}>
          Descubre los ultimos y mejores dispositivos tecnologicos, para ti.
        </p>
        <button className={Style.homeButton}>Get Started</button>
      </header>
    </div>
  );
};

export default Index;
