const icons = [
  {
    link: 'https://github.com/samdouble',
    image: '/assets/icons/github.png',
    name: 'GitHub',
  },
  {
    link: 'https://medium.com/@samdouble',
    image: '/assets/icons/medium.png',
    name: 'Medium',
  },
  {
    link: 'https://snowflake.discourse.group/u/samdouble/summary',
    image: '/assets/icons/snowflake.png',
    name: 'Snowflake',
  },
  {
    link: 'https://stackoverflow.com/users/12787394/samdouble',
    image: '/assets/icons/stackoverflow.webp',
    name: 'Stack Overflow',
  },
  {
    link: 'https://www.npmjs.com/~samdouble',
    image: '/assets/icons/npm.png',
    name: 'npm',
  },
  {
    link: 'https://pypi.org/user/samdouble',
    image: '/assets/icons/pypi.png',
    name: 'PyPI',
  },
  {
    link: 'https://forums.docker.com/u/samdouble/summary',
    image: '/assets/icons/docker.webp',
    name: 'Docker',
  },
  {
    link: 'https://www.kaggle.com/samdouble',
    image: '/assets/icons/kaggle.webp',
    name: 'Kaggle',
  },
];

function SocialMedia() {
  return (
    <div
      style={{
        columnGap: 10,
        display: 'grid',
        gridTemplateColumns: '15% 15% 15% 15% 15% 15%',
        gridTemplateRows: 'auto auto',
        rowGap: 15,
      }}
    >
      {
        icons.map(icon => (
          <div key={icon.name}>
            <a href={icon.link}>
              <img
                alt={icon.name}
                src={icon.image}
                style={{
                  height: 30,
                  marginTop: 10,
                  objectFit: 'cover',
                  transform: 'scale(1.8) translate(10px, 0px)',
                  width: 30,
                }}
              />
            </a>
          </div>
        ))
      }
    </div>
  );
}

export default SocialMedia;
