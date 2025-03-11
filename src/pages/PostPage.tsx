import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';
import Markdown from 'markdown-to-jsx';
import { LanguageContext } from 'services/contexts';
import content from 'content.json';
import Icon from 'components/Icon';
import MarkdownCarousel from 'components/posts/MarkdownCarousel';
import ScoreToStars from 'components/ScoreToStars';
import './PostPage.css';
import './styles.css';

function PostPage() {
  const [text, setText] = useState<string>('');
  const { id } = useParams();
  const { t } = useTranslation();
  const post = content.posts.find(p => p.id === id);
  const category = post?.category;
  const categoryPosts = category ? content.posts.filter(p => p.category === category) : [];
  const currentPostIndex = categoryPosts.findIndex(p => p.id === id);
  const prevPost = categoryPosts[currentPostIndex - 1];
  const nextPost = categoryPosts[currentPostIndex + 1];

  const language = useContext(LanguageContext);
  const postLanguageInfo = post?.translation.find(tr => tr.language === language);

  useEffect(() => {
    if (postLanguageInfo) {
      const termsFrPath = require(`../content/${postLanguageInfo?.path}`);
      fetch(termsFrPath)
        .then(response => response.text())
        .then(responseText => setText(responseText));
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
        <Row>
          <Col lg={4}>
            <div className="prevnext-post-button">
              <Link
                to={`/post/${prevPost?.id}`}
                style={{
                  color: '#000000',
                  textAlign: 'left',
                  textDecoration: 'none',
                }}
              >
                <table
                  style={{
                    display: 'table',
                    tableLayout: 'fixed',
                    width: '100%',
                  }}
                >
                  <tr>
                    <td
                      rowSpan={2}
                      style={{
                        paddingRight: 40,
                        width: 30,
                      }}
                    >
                      <Icon
                        name="caret-left"
                        size="4x"
                      />
                    </td>
                    <td
                      style={{
                        width: '99%',
                      }}
                    >
                      <u>{t('previous')}</u>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        fontSize: 20,
                      }}
                    >
                      {prevPost?.date}
                      &nbsp;
                      -
                      &nbsp;
                      {prevPost?.translation.find(tr => tr.language === language)?.title}
                    </td>
                  </tr>
                </table>
              </Link>
            </div>
          </Col>
          <Col lg={4} />
          <Col lg={4}>
            <div className="prevnext-post-button">
              <Link
                to={`/post/${nextPost?.id}`}
                style={{
                  color: '#000000',
                  textAlign: 'left',
                  textDecoration: 'none',
                }}
              >
                <table
                  style={{
                    display: 'table',
                    tableLayout: 'fixed',
                    width: '100%',
                  }}
                >
                  <tr>
                    <td
                      style={{
                        width: '99%',
                      }}
                    >
                      <u>{t('next')}</u>
                    </td>
                    <td
                      rowSpan={2}
                      style={{
                        width: 30,
                      }}
                    >
                      <Icon
                        name="caret-right"
                        size="4x"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        fontSize: 20,
                      }}
                    >
                      {nextPost?.date}
                      &nbsp;
                      -
                      &nbsp;
                      {nextPost?.translation.find(tr => tr.language === language)?.title}
                    </td>
                  </tr>
                </table>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    )
  : null;
}

export default PostPage;
