import './CategoryCard.css'
const CategoryCard= ()=>{
    return(
       <a href=""> <div className="card_container">
                <div className="card_icon">
                    <img className="image_card" src="./images/logo.png" alt="logo" />
                    <div className="card_details">
                         <span>automobile</span>
                    </div>

                </div>
        
        </div></a>
    );

}
export default CategoryCard;