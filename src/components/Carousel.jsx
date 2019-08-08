import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Carousel = ({ files }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const [imagesUrlArr, setImagesUrlArr] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slider1, slider2]);

  useEffect(() => {
    fetchImageUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchImageUrl = () => {
    const imagesArr = files.map(file => {
      const imageUrl = `https://${file.bucket}.s3.${
        file.region
      }.amazonaws.com/public/${file.key}`;
      return imageUrl;
    });
    setImagesUrlArr([...imagesArr]);
  };

  return (
    <div>
      <Slider asNavFor={nav2} ref={slider => setSlider1(slider)}>
        {imagesUrlArr &&
          imagesUrlArr.map((url, i) => (
            <div key={i}>
              <img className="carousel-main-img" src={url} alt="product img" />
            </div>
          ))}
      </Slider>
      <h4>Mais Fotos</h4>
      <Slider
        asNavFor={nav1}
        ref={slider => setSlider2(slider)}
        slidesToShow={imagesUrlArr && imagesUrlArr.length}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {imagesUrlArr &&
          imagesUrlArr.map((url, i) => (
            <div key={i}>
              <img
                className="carousel-sub-img"
                src={url}
                alt="product sub img"
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;
