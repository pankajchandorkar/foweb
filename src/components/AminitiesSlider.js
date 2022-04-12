import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/AminitiesSlider.scss";

const SliderContent = (props) => {

  const refs = useRef(null);
  const [prevDisable, setPrevDiable] = useState(true);
  const nextbtnDisable = refs && refs.current && refs.current.offsetWidth >= refs.current.scrollWidth ? true : false;
  const [nextDisable, setNextDisable] = useState(nextbtnDisable);
  const [scrollVal, setScrollVal] = useState(0);

  const checkButtons = (offsetWidthValue, scrollWidthValue) => {
    //  const prevDisable = refs.current.scrollLeft <= 0 ? true : false;
    const prevDisable = scrollVal <= 0 ? true : false;
    const nextDisable = scrollVal + offsetWidthValue >= scrollWidthValue ? true : false;
    setPrevDiable(prevDisable);
    setNextDisable(nextDisable);
  };

  useEffect(() => {
    checkButtons(refs.current.offsetWidth, refs.current.scrollWidth);
  });

  const showSlides = (param) => {
    const offsetWidthValue = refs && refs.current && refs.current.offsetWidth;
    const scrollWidthValue = refs && refs.current && refs.current.scrollWidth;
    if (param === "left") {
      refs.current.scrollLeft -= offsetWidthValue / 2;
      let scrollval = refs.current.scrollLeft - offsetWidthValue / 2;
      setScrollVal(scrollval);
    } else {
      refs.current.scrollLeft += offsetWidthValue / 2;
      let scrollval = refs.current.scrollLeft + offsetWidthValue / 2;
      setScrollVal(scrollval);
    }
    checkButtons(offsetWidthValue, scrollWidthValue);
  };

  return (
    <div className="slider-container" ref={refs}>
      <div className="slider-wrapper">{props.children}</div>
      <div
        className={`btn prev ${prevDisable ? "disable" : ""}`}
        disabled={prevDisable}
        onClick={() => showSlides("left")}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div
        className={`btn next ${nextDisable ? "disable" : ""}`}
        disabled={nextDisable}
        onClick={() => showSlides("right")}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
  );
};

const AminitiesSlider = () => {

  const [sliderdata, setSliderData] = useState([
    { id: "1", type: "GPS", image: "gpsamineties.png" },
    { id: "2", type: "WiFI", image: "wifiamineties.png" },
    { id: "3", type: "Blanket", image: "blanket.png" },
    { id: "4", type: "Water_Bottle", image: "water-bottle.png" },
    { id: "7", type: "Toilet", image: "toilet.png" },
    { id: "8", type: "Charging_Point", image: "charger.png" },
    { id: "9", type: "Personal_TV", image: "personal-tv.png" },
    { id: "10", type: "Snacks", image: "snacks.png" },
    { id: "11", type: "Newspaper", image: "news-paper.png" },
    { id: "12", type: "Pillow", image: "pillow.png" },
    { id: "13", type: "Reading_Light", image: "wifiamineties.png" },
    { id: "14", type: "Fan", image: "fan.png" },
    { id: "15", type: "Water_Bottle Holder", image: "bottle-holder.png" },
    { id: "16", type: "CCTV", image: "cctv.png" },
    { id: "17", type: "First_Aid Box", image: "first-aid-box.png" },
    { id: "18", type: "Novel", image: "novel.png" },
    { id: "19", type: "Vomiting_Bag", image: "vomiting-bag.png" },
    { id: "20", type: "Fire_Extinguisher", image: "fire-extinguisher.png" },
    { id: "21", type: "Central_TV", image: "tv.png" },
    { id: "22", type: "Emergency_Exit", image: "emergency-exit.png" },
    { id: "23", type: "Hammer", image: "hammer.png" },
    { id: "24", type: "Heater", image: "heater.png" },
    { id: "25", type: "Facial_Tissues", image: "tissue.png" },
    { id: "26", type: "Meal", image: "meal.png" },
    { id: "27", type: "Extra_Leg Space", image: "extra-leg.png" },
    { id: "28", type: "Hand_Sanitizer", image: "hand-sanitizer.png" },
    { id: "29", type: "Thermal_Screening", image: "thermal-screening.png" },
    { id: "30", type: "Bus_Sanitization", image: "bus-sanitization.png" },
    { id: "31", type: "Bus_Crew Mask", image: "bus-crew-mask.png" },
    { id: "32", type: "Social_Distancing", image: "social-distancing.png" },
    { id: "33", type: "Passenger_Face Mask", image: "passenger-face-mask.png" },
    { id: "34", type: "Bus_Crew COVID Tested", image: "bus-crew-covid-tested.png" },
    { id: "35", type: "Bipolar_Ionisation", image: "bipolar.png" },
    { id: "36", type: "Filteration", image: "filteration.png" },
    { id: "37", type: "Fumigation", image: "fumigation.png" },
  ]);

  return (
    <div className="slider">
      <SliderContent>
        {
          sliderdata.map((value) => {
            return (
              <div key={value.id} className={"item"}>
                <input type="checkbox" id={value.id} style={{ marginRight: "6px" }} />
                <label htmlFor={value.id} className="item-label">
                  <img src={`./images/${value.image}`} alt={value.type} style={{ paddingRight: "5px" }} />
                  {value.type}
                </label>
              </div>
            );
          })
        }
      </SliderContent>
    </div>
  )
}

export default AminitiesSlider