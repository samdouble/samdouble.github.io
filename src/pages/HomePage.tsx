import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PostsList from 'components/PostsList';
import content from 'content.json';

function HomePage() {
  const latestPosts = content.posts
    .sort((postA, postB) => postA.date < postB.date ? 1 : -1)
    .slice(0, 10);

  return (
    <Container
      fluid
    >
      <Row>
        <Col lg={8}>
          <a href="https://forums.docker.com/u/samdouble/summary">
            <img src="/assets/icons/docker.webp" alt="Docker" width="60"/>
          </a>

          <a href="https://github.com/samdouble">
            <img src="/assets/icons/github.png" alt="GitHub" width="60"/>
          </a>

          <a href="https://medium.com/@samdouble">
            <img src="/assets/icons/medium.png" alt="Medium" width="60"/>
          </a>

          <a href="https://community.snowflake.com/s/profile/005VI000000oojB">
            <img src="/assets/icons/snowflake.png" alt="Snowflake" width="60"/>
          </a>

          <a href="https://stackoverflow.com/users/12787394/samdouble">
            <img src="/assets/icons/stackoverflow.webp" alt="GitHub" width="60"/>
          </a>

          <a href="https://www.npmjs.com/~samdouble">
            <img src="/assets/icons/stackoverflow.webp" alt="npm" width="60"/>
          </a>

          <a href="https://pypi.org/user/samdouble/">
            <img src="/assets/icons/stackoverflow.webp" alt="PyPI" width="60"/>
          </a>
        </Col>
        <Col lg={4}>
          <div>
            <h2>Latest Posts</h2>
            <PostsList
              posts={latestPosts}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
