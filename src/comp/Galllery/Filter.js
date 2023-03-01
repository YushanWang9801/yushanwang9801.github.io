import "./../../css/Filter.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const tags = ["All", "Music Live", "Goodwood_2022", "London", 
        "Southend", "San Francisco", "Santa Monica",
        "Nagoya and Osaka", "798","Music Live", "Goodwood_2019",
        "Chicago", "Silverstone", "Edinburgh", "Gundam",
        "Taiwan", "Johns Hopkins University", "Baltimore", 
        "Atlanta", "He 77",];

const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", 
                    margin: "0px -5px", background: "transparent"
                }}
        onClick={onClick}
      />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",
                    margin: "0px -5px", background: "transparent",
              }}
        onClick={onClick}
      />
    );
}

function Filter({setCategory}){
    return (
        <div className="filter-container">
            <Slider {...settings}>
            {
                tags.map((tag) =>(
                    <button onClick={() =>setCategory(tag)}>{tag}</button>
                ))
            }
            </Slider>
        </div>
    );
};

export default Filter;