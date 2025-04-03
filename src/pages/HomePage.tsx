import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTranslation } from 'react-i18next';
import { useElementSize } from '@custom-react-hooks/use-element-size';
import Icon from 'components/Icon';
import PostsList from 'components/PostsList';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import { LanguageContext } from 'services/contexts';
import { Category, Post } from 'utils/types';
import content from 'content.json';
import './styles.css';

function HomePage() {
  const [setRef, size] = useElementSize();

  const { t } = useTranslation();

  const language = useContext(LanguageContext);

  const latestPosts = (content.posts as Post[])
    .filter(post => post.translation.some(tr => tr.language === language))
    .sort((postA, postB) => postA.date < postB.date ? 1 : -1)
    .slice(0, 5);

  const projects = (content.categories as Category[])
    .filter(category => category.parent === 'projects')
    .sort((categoryA, categoryB) => categoryA.date! < categoryB.date! ? 1 : -1);

  const {
    width: projectGridWidth,
  } = size;
  const projectGridTemplateColumns = (projectGridWidth < 800)
    ? '32% 32% 32%'
    : '24% 24% 24% 24%';

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
          <div
            ref={setRef}
            style={{
              columnGap: 10,
              display: 'grid',
              gridTemplateColumns: projectGridTemplateColumns,
              gridTemplateRows: 'auto auto auto',
              rowGap: 15,
            }}
          >
            {
              projects.map(project => (
                <Card
                  key={project.id}
                  style={{
                    cursor: 'auto',
                    maxWidth: '18rem',
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={project.mainImage}
                    style={{
                      objectPosition: '0 -8px',
                    }}
                  />
                  <Card.Body
                    style={{
                      marginBottom: 35,
                      position: 'relative',
                    }}
                  >
                    <div>
                      {
                        project.techs?.map(tech => (
                          <Icon
                            key={tech}
                            name={`tech-${tech}`}
                            style={{
                              height: 20,
                              margin: '-5px 5px 0 0',
                              width: 20,
                            }}
                          />
                        ))
                      }
                    </div>
                    <Card.Title>{project.translation.find(tr => tr.language === language)?.title}</Card.Title>
                    <Card.Text>
                      {project.translation.find(tr => tr.language === language)?.description}
                    </Card.Text>
                    <Link
                      style={{
                        position: 'absolute',
                        bottom: -20,
                      }}
                      to={`/category/${project.id}`}
                    >
                      <Button
                        variant="primary"
                      >
                        {t('seeMore')}
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              ))
            }
          </div>
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
