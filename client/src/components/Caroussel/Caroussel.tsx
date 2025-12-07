import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png'; 
import './Caroussel.css';

const Caroussel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="wrapper">
      <Slider {...settings} className="caroussel">
        <div><img src={img1} alt="Imagem 1" /></div>
        <div><img src={img2} alt="Imagem 2" /></div>
        <div><img src={img3} alt="Imagem 3" /></div>
      </Slider>
    </div>
  );
};

export default Caroussel;