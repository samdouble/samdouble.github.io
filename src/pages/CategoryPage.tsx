import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DefaultPageTemplate from 'pages/blogTemplates/DefaultPageTemplate';
import ProjectPageTemplate, { ProjectPageTemplateProps } from 'pages/blogTemplates/ProjectPageTemplate';
import TripPageTemplate, { TripPageTemplateProps } from 'pages/blogTemplates/TripPageTemplate';
import TripsPageTemplate, { TripsPageTemplateProps } from 'pages/blogTemplates/TripsPageTemplate';
import { LanguageContext } from 'services/contexts';
import { Category } from 'utils/types';
import content from 'content.json';


const pageTemplates: {
  [key: string]: (
    React.FC<ProjectPageTemplateProps>
  )
} = {
  'ProjectPageTemplate': ProjectPageTemplate,
  'TripPageTemplate': TripPageTemplate,
  'TripsPageTemplate': TripsPageTemplate,
}

function CategoryPage() {
  const { id } = useParams();
  const category: Category | undefined = content.categories.find(cat => cat.id === id);

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
          <br />
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
