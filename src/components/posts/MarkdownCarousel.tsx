import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function MarkdownCarousel({
  caption,
  captions,
  images,
}: { caption?: string, captions?: string, images: string }) {
  const imagesPaths = images.split(',');
  const imageCaptions = captions ? captions.split('|') : [];
  
  // For backward compatibility, if no individual captions are provided, use the single caption for all images
  const getImageCaption = (index: number) => {
    if (imageCaptions.length > index && imageCaptions[index].trim()) {
      return imageCaptions[index].trim();
    }
    return caption || '';
  };

  return (
    <Carousel
      arrows={imagesPaths.length > 1}
      draggable={false}
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
      showDots={imagesPaths.length > 1}
      ssr
      swipeable={false}
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
        imagesPaths.map((image, index) => (
          <div key={index} style={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: '30px' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <img src={image} alt={getImageCaption(index)} style={{ width: '100%', height: 'auto', display: 'block' }} />
              {getImageCaption(index) && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  padding: '8px 12px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  boxSizing: 'border-box'
                }}>
                  {getImageCaption(index)}
                </div>
              )}
            </div>
          </div>
        ))
      }
    </Carousel>
  );
}
