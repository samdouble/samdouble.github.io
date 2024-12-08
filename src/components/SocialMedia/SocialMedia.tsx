import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
    <div>
      <Container>
        <Row>
          {
            icons.map(icon => (
              <Col key={icon.name}>
                <div>
                  <a href={icon.link}>
                    <img
                      src={icon.image}
                      alt={icon.name}
                      width="60"
                    />
                  </a>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  );
}

export default SocialMedia;
