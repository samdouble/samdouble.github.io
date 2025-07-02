import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';
import Pagination from 'components/Pagination';
import PostsList from 'components/PostsList';
import { LanguageContext } from 'services/contexts';
import { Post } from 'utils/types';
import content from 'content.json';
import './styles.css';

const nbPostsPerPage = 10;

function PostsPage() {
  const language = useContext(LanguageContext);
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();

  let page = 1;
  try {
    page = parseInt(searchParams.get('page') || '1', 10);
  } catch {
    page = 1;
  }

  const filteredPosts = (content.posts as Post[])
    .filter(post => !post.hideFromMainFeed)
    .filter(post => post.translation.some(tr => tr.language === language));

  const nbPages = Math.ceil(filteredPosts.length / nbPostsPerPage);

  const latestPosts = filteredPosts
    .sort((postA, postB) => (postA.date < postB.date ? 1 : -1))
    .slice((page - 1) * nbPostsPerPage, page * nbPostsPerPage);

  return (
    <Container
      style={{
        marginTop: 30,
        textAlign: 'justify',
      }}
    >
      <Row>
        <Col lg={8}>
          <h2>{t('blog')}</h2>
          <PostsList
            posts={latestPosts}
            showScore
          />
          <br />
          <Pagination
            currentPage={page}
            getUrl={pageNo => `/posts?page=${pageNo}`}
            nbPages={nbPages}
          />
        </Col>
        <Col lg={4}>
          <div />
        </Col>
      </Row>
    </Container>
  );
}

export default PostsPage;
