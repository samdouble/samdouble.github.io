import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function MarkdownCarousel({
  caption,
  images,
}: { caption: string, images: string }) {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots
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
        },
      }}
      ssr
      infinite
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {
        images.split(',').map((image, index) => (
          <div key={index}>
            <img src={image} alt={caption} />
          </div>
        ))
      }
    </Carousel>
  );
}
