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
  if (name?.startsWith('flag-')) {
    const flagIcons = {
      'flag-japan': 'flag-japan.svg',
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
  } else if (name?.startsWith('project-')) {
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
  } else if (name?.startsWith('tech-')) {
    const techIcons = {
      'tech-dart': 'dart.png',
      'tech-flutter': 'flutter.webp',
      'tech-github-actions': 'github-actions.svg',
      'tech-go': 'go.png',
      'tech-jest': 'jest.svg',
      'tech-markdown': 'markdown.png',
      'tech-npm': 'npm.png',
      'tech-playwright': 'playwright.png',
      'tech-puppeteer': 'puppeteer.svg',
      'tech-python': 'python.webp',
      'tech-react': 'react.png',
      'tech-rust': 'rust.png',
      'tech-snowflake': 'snowflake.png',
      'tech-svelte': 'svelte.png',
      'tech-typescript': 'typescript.webp',
    };
    const imgFileName = techIcons[name as keyof typeof techIcons];
    return (
      <img
        alt={name}
        src={`/assets/icons/techs/${imgFileName}`}
        style={style}
      />
    );
  }
  const icons = {
    'book': faBook,
    'caret-left': faCaretLeft,
    'caret-right': faCaretRight,
    'film': faFilm,
    'folder': faFolder,
    'gamepad': faGamepad,
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
