import React from 'react';
import { 
  Microscope, AlertTriangle, ShieldAlert, Brain, Pill, 
  Bug, Thermometer, Activity, Heart, Stethoscope, Syringe, ShieldCheck 
} from 'lucide-react';

const iconMap = {
  microscope: Microscope,
  alertTriangle: AlertTriangle,
  shieldAlert: ShieldAlert,
  brain: Brain,
  pill: Pill,
  bug: Bug,
  thermometer: Thermometer,
  activity: Activity,
  heart: Heart,
  stethoscope: Stethoscope,
  syringe: Syringe,
  shieldCheck: ShieldCheck
};

export const getIcon = (iconName, props = { size: 24 }) => {
  const IconComponent = iconMap[iconName];
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
};
