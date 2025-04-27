import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CategoriesList from 'components/CategoriesList';
import PostsList from 'components/PostsList';
import { LanguageContext } from 'services/contexts';
import { Category, Post } from 'utils/types';
import content from 'content.json';

function CategoryPage() {
  const { id } = useParams();
  const category = content.categories.find(cat => cat.id === id);

  const language = useContext(LanguageContext);
  const categoryLanguageInfo = category?.translation.find(t => t.language === language);

  const subCategories = (content.categories as Category[])
    .filter(cat => cat.parent === id);

  const latestPosts = (content.posts as Post[])
    .filter(post => post.category === id);

  return (
    <Container
      style={{
        paddingTop: 30,
        textAlign: 'left',
      }}
    >
      <Row>
        <Col lg={12}>
          <h2>{categoryLanguageInfo?.title}</h2>
          <CategoriesList categories={subCategories} />
          <PostsList
            posts={latestPosts}
            showScore
          />
        </Col>
      </Row>
    </Container>
  );
}

export default CategoryPage;
