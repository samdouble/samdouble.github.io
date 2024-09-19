import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PostsList from 'components/PostsList';
import SocialMedia from 'components/SocialMedia';
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
        </Col>
        <Col lg={4}>
          <div>
            <h2>Latest Posts</h2>
            <PostsList
              posts={latestPosts}
            />
            <h2>Social Media</h2>
            <SocialMedia />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
