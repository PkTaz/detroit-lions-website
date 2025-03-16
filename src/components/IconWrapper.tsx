import React from 'react';
import { IconType } from 'react-icons';

interface IconWrapperProps {
  icon: IconType;
  className?: string;
  size?: number;
}

const IconWrapper: React.FC<IconWrapperProps> = (props) => {
  const { icon, className, size } = props;
  
  // Use a more explicit type casting approach
  const Icon = icon as React.ComponentType<{ className?: string; size?: number }>;
  
  return <Icon className={className} size={size} />;
};

export default IconWrapper; 