
import React from 'react';
import ImmersiveHero from '@/components/ImmersiveHero';
import JourneySteps from '@/components/JourneySteps';
import ImmersiveCallToAction from '@/components/ImmersiveCallToAction';
import RamaQualities from '@/components/RamaQualities';

const ImmersiveView = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-sky-50">
      <ImmersiveHero />
      <JourneySteps />
      <RamaQualities />
      <ImmersiveCallToAction />
    </div>
  );
};

export default ImmersiveView;
