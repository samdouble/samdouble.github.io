import React from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CategoriesList from 'components/CategoriesList';
import PostsList from 'components/PostsList';
import content from 'content.json';

function CategoryPage() {
  const { id } = useParams();

  const subCategories = content.categories
    .filter(cat => cat.parent === id);

  const latestPosts = content.posts
    .filter(post => post.category === id);

  return (
    <Container
      fluid
    >
      <Row>
        <Col lg={12}>
          <CategoriesList categories={subCategories} />
          <PostsList posts={latestPosts} />
        </Col>
      </Row>
    </Container>
  );
}

export default CategoryPage;
