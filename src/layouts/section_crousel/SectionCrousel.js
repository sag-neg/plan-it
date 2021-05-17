import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AdvicerCard from "../../components/commons/advicer_card/AdvicerCard";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

let expertList = [
    {
        id: 1, name: "a"
    }, {
        id: 2, name: "b"
    }, {
        id: 3, name: "c"
    }, {
        id: 4, name: "d"
    }, {
        id: 5, name: "e"
    }, {
        id: 6, name: "f"
    }, {
        id: 7, name: "g"
    }, {
        id: 8, name: "h"
    }, {
        id: 9, name: "i"
    }
];

const SectionCrousel =()=>{
    return(
        <div className="crousel_container">
    <Carousel responsive={responsive}>
        {
            expertList.map(element =>  <AdvicerCard data={element}/> )
        }
        <AdvicerCard/>
        {/* <AdvicerCard/>
        <AdvicerCard/>
        <AdvicerCard/>
        <AdvicerCard/>
        <AdvicerCard/> */}
      </Carousel>
      </div>
      );
}
export default SectionCrousel;