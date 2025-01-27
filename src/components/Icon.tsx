import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faFilm,
  faFolder,
  faPlane,
  faStar,
  faStarHalfStroke,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import {
  faStar as faStarRegular,
} from '@fortawesome/free-regular-svg-icons';

interface IconProps {
  name?: string;
  size?: 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
  style?: React.CSSProperties;
}

function Icon({
  name,
  size = undefined,
  style = {},
}: IconProps) {
  const icons = {
    'book': faBook,
    'film': faFilm,
    'folder': faFolder,
    'plane': faPlane,
    'star': faStar,
    'star-half': faStarHalfStroke,
    'star-regular': faStarRegular,
    'utensils': faUtensils,
  };
  const icon = name && icons[name as keyof typeof icons];

  return icon
    ? (
      <FontAwesomeIcon
        icon={icon}
        size={size}
        style={style}
      />
    ) : null;
}

export default Icon;
