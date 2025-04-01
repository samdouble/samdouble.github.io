const icons = [
  {
    link: 'https://github.com/samdouble',
    image: '/assets/icons/platforms/github.png',
    name: 'GitHub',
  },
  {
    link: 'https://stackoverflow.com/users/12787394/samdouble',
    image: '/assets/icons/platforms/stackoverflow.webp',
    name: 'Stack Overflow',
  },
  {
    link: 'https://www.npmjs.com/~samdouble',
    image: '/assets/icons/platforms/npm.png',
    name: 'npm',
  },
  {
    link: 'https://pypi.org/user/samdouble',
    image: '/assets/icons/platforms/pypi.png',
    name: 'PyPI',
  },
  {
    link: 'https://www.kaggle.com/samdouble',
    image: '/assets/icons/platforms/kaggle.webp',
    name: 'Kaggle',
  },
  {
    link: 'https://medium.com/@samdouble',
    image: '/assets/icons/platforms/medium.png',
    name: 'Medium',
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
