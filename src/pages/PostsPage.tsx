import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import content from 'content/content.json';

function PostsPage() {
  const { category } = useParams();

  return (
    <Container
      fluid
    >
      <Row>
        <Col lg={12}>
          {
            content.posts
              .filter((post: any) => post.category === category)
              .map((post: any) => (
                <div key={post.id}>
                  <Link to={`/post/${post.id}`}>
                    {post.title}
                  </Link>
                </div>
              ))
          }
        </Col>
      </Row>
    </Container>
  );
}

export default PostsPage;
