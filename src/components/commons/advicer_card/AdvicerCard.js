import './AdvicerCard.css'

const AdvicerCard = (props) => {
    return (
        <div className="main container">
            <div className="adviser_card_container">
                <div className=" advicer_image" >
                    <img className="driver_image" src="./images/driver.jpg" />
                    </div>
                    <div className="advicer_details">
                        <h1>Jon doe</h1>
                        <p>Toyta Prius -DL3636</p>
                    </div>
                <div className="adviser_trip_detail">
                <div class="adviser_trip">
                    <h2> Trip</h2>
                    <span> 234 </span>
                </div>
                <div class="adviser_trip">
                    <h2> Year</h2>
                    <span> 4 </span>
                </div>
                <div class="adviser_trip">
                    <h2> ☆</h2>                                                                
                    <span> 5</span>
                </div>
                </div>
            </div>
        </div>
    );
}
export default AdvicerCard;