import React from "react";

const ApptCard = (props) =>{

    if(props.getView.length > 0){
        return(
            <div class="row">
                {props.getView.map ( myApp => {

                    return (
                        <div class="col-3">
                            <div className="card">
                                <img className="card-img-top"
                                     src="https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364"
                                     alt="Card Image"/>
                                <div className="card-body">
                                    <h4 className="card-title">{getView.name}</h4>
                                    <p className="card-text">Some example text</p>
                                    <a href="#" className="btn btn-primary">See Profile</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }else{
    return(
        <h1>No appointments found</h1>
    )
    }
}

export default ApptCard