import React from 'react';
import Carousel from 'react-multi-carousel';

function MarkdownCarousel({
  caption,
  images,
}: { caption: string, images: string }) {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={{
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        }
      }}
      ssr={true}
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
      {
        images.split(',').map(image => (
          <div>
            <img src={image} alt={caption} />
          </div>
        ))
      }
    </Carousel>
  );
}

export default MarkdownCarousel;
