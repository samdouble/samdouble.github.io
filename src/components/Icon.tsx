import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faCaretLeft,
  faCaretRight,
  faFilm,
  faFolder,
  faGamepad,
  faPlane,
  faStar,
  faStarHalfStroke,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import {
  faStar as faStarRegular,
} from '@fortawesome/free-regular-svg-icons';
import { Tooltip } from 'react-tooltip';
import techs from 'utils/techs.json';

type IconProps = {
  name?: string;
  size?: 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
  style?: React.CSSProperties;
};

function Icon({
  name,
  size = undefined,
  style = {},
}: IconProps) {
  if (name?.startsWith('flag-')) {
    const flagIcons = {
      'flag-eu': 'flag-eu.webp',
      'flag-japan': 'flag-japan.svg',
      'flag-uk': 'flag-uk.webp',
      'flag-usa': 'flag-usa.webp',
    };
    const imgFileName = flagIcons[name as keyof typeof flagIcons];
    return (
      <img
        alt={name}
        src={`/assets/icons/flags/${imgFileName}`}
        style={{
          height: 15,
          position: 'relative',
          top: -1,
          ...style,
        }}
      />
    );
  } if (name?.startsWith('project-')) {
    const projectIcons = {
      'project-biblio': 'biblio.png',
      'project-fikas': 'fikas.png',
      'project-textlinter': 'textlinter.png',
    };
    const imgFileName = projectIcons[name as keyof typeof projectIcons];
    return (
      <img
        alt={name}
        src={`/assets/icons/projects/${imgFileName}`}
        style={{
          aspectRatio: 1,
          height: 15,
          objectFit: 'cover',
          position: 'relative',
          ...style,
        }}
      />
    );
  } if (name?.startsWith('tech-')) {
    const tech = techs.find(t => t.id === name);
    return (
      <>
        <Tooltip id={`icon-tech-tooltip-${tech?.id}`} />
        <img
          alt={tech?.name}
          src={`/assets/icons/techs/${tech?.logo}`}
          style={style}
          data-tooltip-id={`icon-tech-tooltip-${tech?.id}`}
          data-tooltip-content={tech?.name}
        />
      </>
    );
  }
  const icons = {
    book: faBook,
    'caret-left': faCaretLeft,
    'caret-right': faCaretRight,
    film: faFilm,
    folder: faFolder,
    gamepad: faGamepad,
    plane: faPlane,
    star: faStar,
    'star-half': faStarHalfStroke,
    'star-regular': faStarRegular,
    utensils: faUtensils,
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
