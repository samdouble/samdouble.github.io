import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';
import PostsList from 'components/PostsList';
import SocialMedia from 'components/SocialMedia';
import content from 'content.json';

function HomePage() {
  const { t } = useTranslation();

  const latestPosts = content.posts
    .sort((postA, postB) => postA.date < postB.date ? 1 : -1)
    .slice(0, 10);

  return (
    <Container
      fluid
    >
      <Row>
        <Col lg={8}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <div>
            <h2>{t('blog')}</h2>
            <PostsList
              posts={latestPosts}
            />
            <h2>{t('elsewhereInternet')}</h2>
            <SocialMedia />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
