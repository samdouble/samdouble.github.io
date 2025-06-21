import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DefaultPageTemplate from 'pages/blogTemplates/DefaultPageTemplate';
import ProjectPageTemplate from 'pages/blogTemplates/ProjectPageTemplate';
import { LanguageContext } from 'services/contexts';
import content from 'content.json';


const pageTemplates: { [key: string]: any } = {
  ProjectPageTemplate,
}

function CategoryPage() {
  const { id } = useParams();
  const category = content.categories.find(cat => cat.id === id);

  const language = useContext(LanguageContext);
  const categoryLanguageInfo = category?.translation.find(t => t.language === language);

  const PageTemplate = category?.pageTemplate && Object.prototype.hasOwnProperty.call(pageTemplates, category.pageTemplate)
    ? pageTemplates[category.pageTemplate]
    : DefaultPageTemplate;

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
          {
            React.createElement(PageTemplate, {
              category,
            })
          }
        </Col>
      </Row>
    </Container>
  );
}

export default CategoryPage;
