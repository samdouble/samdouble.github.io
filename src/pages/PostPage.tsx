import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DateTime } from 'luxon';
import Icon from 'components/Icon';
import PostMarkdown from 'components/posts/PostMarkdown';
import ScoreToStars from 'components/ScoreToStars';
import { LanguageContext } from 'services/contexts';
import content from 'content.json';
import './PostPage.css';
import './styles.css';

function PostPage() {
  const [text, setText] = useState<string>('');
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation();
  const post = content.posts.find(p => p.id === id);
  const category = post?.category;
  const categoryPosts = category
    ? content.posts.filter(p => p.category === category).filter(p => !p.isHidden)
    : [];
  const currentPostIndex = categoryPosts.findIndex(p => p.id === id);
  const prevPost = categoryPosts[currentPostIndex - 1];
  const nextPost = categoryPosts[currentPostIndex + 1];

  const language = useContext(LanguageContext);
  const postLanguageInfo = post?.translation.find(tr => tr.language === language);

  useEffect(() => {
    if (postLanguageInfo) {
      try {
        fetch(`/assets/${postLanguageInfo.path}`)
          .then(response => response.text())
          .then(responseText => setText(responseText));
      } catch {
        navigate('/404');
      }
    }
  }, [post, language]);

  const date = post && DateTime.fromFormat(post.date, 'yyyy-MM-dd');

  return post
    ? (
      <div
        className="page-container post-container"
        style={{
          marginTop: 30,
          textAlign: 'justify',
        }}
      >
        <div className="page-row">
          <div className="page-col page-col--full">
            <h2>{postLanguageInfo?.title}</h2>
            <p><b>{date?.toRelative()}</b></p>
            {
              post.score !== undefined && (
                <div>
                  <ScoreToStars
                    score={post.score}
                  />
                </div>
              )
            }
            <PostMarkdown>
              {text}
            </PostMarkdown>
          </div>
        </div>
        <div className="page-row">
          <div className="page-col page-col--third">
            {
              prevPost && (
                <div className="prevnext-post-button">
                  <Link
                    to={`/post/${prevPost.id}`}
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
                      <tbody>
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
                            {prevPost.date}
                            &nbsp;
                            -
                            &nbsp;
                            {prevPost.translation.find(tr => tr.language === language)?.title}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Link>
                </div>
              )
            }
          </div>
          <div className="page-col page-col--third" />
          <div className="page-col page-col--third">
            {
              nextPost && (
                <div className="prevnext-post-button">
                  <Link
                    to={`/post/${nextPost.id}`}
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
                      <tbody>
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
                            {nextPost.date}
                            &nbsp;
                            -
                            &nbsp;
                            {nextPost.translation.find(tr => tr.language === language)?.title}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Link>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
    : null;
}

export default PostPage;
