import SectionCrousel from "../layouts/section_crousel/SectionCrousel"
import AdvicerCard from "./commons/advicer_card/AdvicerCard"
import CategoryComponent from "./commons/catageryComponent/CategoryItem"
import { HeroImage } from "./commons/hero/HeroImage"

const Newcomponent = ()=>{

    return(<>
    <HeroImage/>
    <CategoryComponent/>
    {/* <AdvicerCard/> */}
    <SectionCrousel/>
    </>);
}
export default Newcomponent;