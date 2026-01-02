'use client';

import { useTheme } from 'next-themes';
import { FireworksBackground } from '@/components/animate-ui/components/backgrounds/fireworks';

export default function FireworksBackgroundDemo({ population = 2, active = true }) {
  const { resolvedTheme: theme } = useTheme();

  // Themed color palette - blues and purples matching the project theme
  const colors = theme === 'dark' 
    ? [
        '#ffffff',           // white
        '#4A6FA5',           // muted-blue
        '#6B5B95',           // muted-purple
        '#5A7FB8',           // lighter blue
        '#7B6BA5',           // lighter purple
        '#3A5F8F',           // darker blue
        '#5B4B85',           // darker purple
        '#8B9DC3',           // light blue-gray
      ]
    : [
        '#000000',           // black
        '#2A4F75',           // darker muted-blue
        '#4B3B75',           // darker muted-purple
        '#1A3F5F',           // very dark blue
        '#3B2B65',           // very dark purple
        '#0B0E14',           // background color
        '#1A1F2E',           // slightly lighter than background
        '#2A2F3E',           // medium dark
      ];

  const stickColor = theme === 'dark' ? '#ffffff' : '#000000';

  return (
    <FireworksBackground
      className="absolute inset-0 flex items-center justify-center rounded-xl"
      color={colors}
      stickColor={stickColor}
      population={population}
      fireworkSpeed={{ min: 6, max: 12 }}
      particleSpeed={{ min: 3, max: 10 }}
      paused={!active}
    />
  );
}

