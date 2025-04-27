import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';
import PostsList from 'components/PostsList';
import { LanguageContext } from 'services/contexts';
import { Post } from 'utils/types';
import content from 'content.json';
import './styles.css';

const nbPostsPerPage = 10;

function PostsPage() {
  const language = useContext(LanguageContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  let page = 1;
  try {
    page = parseInt(searchParams.get('page') || '1', 10);
  } catch (error) {
    page = 1;
  }

  const filteredPosts = (content.posts as Post[])
    .filter(post => post.translation.some(tr => tr.language === language));

  const nbPages = Math.ceil(filteredPosts.length / nbPostsPerPage);

  const latestPosts = filteredPosts
    .sort((postA, postB) => postA.date < postB.date ? 1 : -1)
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
          <PostsList
            posts={latestPosts}
            showScore
          />
          <Pagination
            style={{
              margin: '0 auto',
            }}
          >
            <Pagination.First
              disabled={page === 1}
            />
            <Pagination.Prev
              disabled={page === 1}
            />
            {
              Array.from({ length: nbPages }).map((_, index) => (
                <Pagination.Item
                  active={index + 1 === page}
                  key={index}
                  onClick={() => navigate(`/posts?page=${index + 1}`)}
                >
                  {index + 1}
                </Pagination.Item>
              ))
            }
            <Pagination.Next
              disabled={page === nbPages}
            />
            <Pagination.Last
              disabled={page === nbPages}
            />
          </Pagination>
        </Col>
        <Col lg={4}>
          <div>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PostsPage;
