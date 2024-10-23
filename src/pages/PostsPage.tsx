import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';
import { RootState } from 'store';
import PostsList from 'components/PostsList';
import { Post } from 'utils/types';
import content from 'content.json';
import './styles.css';

function PostsPage() {
  const { language } = useSelector((state: RootState) => state.language);

  const latestPosts = (content.posts as Post[])
    .filter(post => post.translation.some(tr => tr.language === language))
    .sort((postA, postB) => postA.date < postB.date ? 1 : -1)
    .slice(0, 100);

  return (
    <Container
      className="post-container"
      style={{
        marginTop: 30,
        textAlign: 'justify',
      }}
    >
      <Row>
        <Col lg={12}>
          <PostsList posts={latestPosts} />
          <Pagination
            style={{
              margin: '0 auto',
            }}
          >
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
}

export default PostsPage;
