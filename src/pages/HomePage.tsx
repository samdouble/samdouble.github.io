import React from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-multi-carousel';
import { useTranslation } from 'react-i18next';
import PostsList from 'components/PostsList';
import SocialMedia from 'components/SocialMedia/SocialMedia';
import { RootState } from 'store';
import { Post } from 'utils/types';
import content from 'content.json';
import 'react-multi-carousel/lib/styles.css';

function HomePage() {
  const { t } = useTranslation();

  const { language } = useSelector((state: RootState) => state.language);

  const latestPosts = (content.posts as Post[])
    .filter(post => post.translation.some(tr => tr.language === language))
    .sort((postA, postB) => postA.date < postB.date ? 1 : -1)
    .slice(0, 5);

  return (
    <Container
      fluid
    >
      <Row>
        <Col lg={8}>
          <h2>{t('projects')}</h2>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 3 // optional, default to 1.
              },
              tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2 // optional, default to 1.
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
              }
            }}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </Carousel>
        </Col>
        <Col lg={4}>
          <div>
            <h2>{t('blog')}</h2>
            <PostsList
              posts={latestPosts}
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
