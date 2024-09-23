import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Markdown from 'markdown-to-jsx';
import content from 'content.json';
import './styles.css';

function PostPage() {
  const [text, setText] = useState<string>('');
  const { id } = useParams();
  const post = content.posts.find(p => p.id === id);

  useEffect(() => {
    const termsFrPath = require(`../content/${post?.path}`);
    fetch(termsFrPath)
      .then(response => response.text())
      .then(t => setText(t))
  }, [post]);

  return (
    <Container
      fluid
    >
      <Row>
        <Col lg={12}>
          <h2>{post?.title}</h2>
          <Markdown>{text}</Markdown>
        </Col>
      </Row>
    </Container>
  );
}

export default PostPage;
