import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { DateTime } from 'luxon';
import Markdown from 'markdown-to-jsx';
import { RootState } from 'store';
import content from '@/content.json';
import MarkdownCarousel from 'components/posts/MarkdownCarousel';
import ScoreToStars from 'components/ScoreToStars';
import './styles.css';

function PostPage() {
  const [text, setText] = useState<string>('');
  const { id } = useParams();
  const post = content.posts.find(p => p.id === id);

  const { language } = useSelector((state: RootState) => state.language);
  const postLanguageInfo = post?.translation.find(t => t.language === language);

  useEffect(() => {
    if (postLanguageInfo) {
      const termsFrPath = require(`../content/${postLanguageInfo?.path}`);
      fetch(termsFrPath)
        .then(response => response.text())
        .then(t => setText(t));
    }
  }, [post, language]);

  const date = post && DateTime.fromFormat(post.date, 'yyyy-MM-dd');

  return post
  ? (
      <Container
        className="post-container"
        style={{
          marginTop: 30,
          textAlign: 'justify',
        }}
      >
        <Row>
          <Col lg={12}>
            <h2>{postLanguageInfo?.title}</h2>
            <p>{date?.toRelative()}</p>
            {
              post.score !== undefined && (
                <p>
                  <ScoreToStars
                    score={post.score}
                  />
                </p>
              )
            }
            <Markdown
              options={{
                overrides: {
                  Carousel: {
                    component: MarkdownCarousel,
                  },
                },
              }}
            >
              {text}
            </Markdown>
          </Col>
        </Row>
      </Container>
    )
  : null;
}

export default PostPage;
