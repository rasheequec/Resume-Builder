import React from 'react'
import './index.css'

class BasicTemplate extends React.Component{

    render(){
        return(
            <div id="basic">
                <div className="maindiv">
                    <div className="profilesection">
                     <div>
                         <img className="profileimage" src="https://i.pinimg.com/originals/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
                      </div>
                     <div>
                         <h3>Rasheeque</h3>
                         <h5>Full Stack Web Developer</h5>
                         <p>Ddhfjffgjf House</p>
                         <p>pasdsdsdfgggg, Pacdlakkad</p>
                         <p>Kerala, India</p>
                     </div>
                    </div>
                    <div className="contactdetails">
                         <small>+91-9644332212</small><br/>
                         <small>www.rasheeqme.com</small><br/>
                         <small>rasheeque@gmail.com</small>
                    </div>
                    <div className="maincontent">
                        <h3>Objective</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                      <div className="maincontent">
                        <h3>Work Experience</h3>
                    </div>
                        <div className="experience-details">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                        </div>
                        <div className="experience-date">
                            <p>2012 - 2016</p>
                        </div>
                        <div className="experience-details">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                        </div>
                        <div className="experience-date">
                            <p>2018 - 2019</p>
                        </div>
                        <div className="maincontent">Hello</div>
                </div>
            </div>
        )
    }
}

export default BasicTemplate