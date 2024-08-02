// src/components/IntroComponent.tsx

import React from 'react';

interface IntroComponentProps {
  imageSrc: string;
}

const IntroComponent: React.FC<IntroComponentProps> = ({ imageSrc }) => {
  return (
    <div className="intro">
      <img className="intro__img" src={imageSrc} alt="Intro" />
    </div>
  );
};

export default IntroComponent;