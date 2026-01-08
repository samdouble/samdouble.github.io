import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';
import ProjectsGrid from 'components/home/ProjectsGrid';
import PostsList from 'components/PostsList';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import { LanguageContext } from 'services/contexts';
import { Post } from 'utils/types';
import content from 'content.json';
import './styles.css';

function HomePage() {
  const { t } = useTranslation();

  const language = useContext(LanguageContext);

  const latestPosts = (content.posts as Post[])
    .filter(post => post.translation?.some(tr => tr.language === language))
    .filter(post => !post.hideFromMainFeed)
    .sort((postA, postB) => (postA.date < postB.date ? 1 : -1))
    .slice(0, 5);

  return (
    <Container
      fluid
    >
      <Row>
        <Col
          xl={8}
          lg={7}
          sm={12}
        >
          <h2>{t('projects')}</h2>
          <ProjectsGrid />
          <br />
        </Col>
        <Col
          xl={4}
          lg={5}
          sm={12}
        >
          <div
            style={{
              marginBottom: 20,
            }}
          >
            <h2>{t('blog')}</h2>
            <PostsList
              posts={latestPosts}
              showSeeMore
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
