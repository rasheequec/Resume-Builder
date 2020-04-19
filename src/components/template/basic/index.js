import React from 'react'
import './index.css'
import ProfileSection from './profileSection'
import ObjectiveSection from './objectiveSection'

const BasicTemplate = (props) => {
  const { photo, name, title, address1, address2, phone, website, email } = props.data.profile;
 
        return(
            <div id="basic">
              <ProfileSection data ={props.data} />
              <ObjectiveSection data = {props.data} />

                    <div className="maincontent">
                        <hr />
                        <h5>Work Experience</h5>
                    </div>
                        <div className="experience-details">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</p>
                        </div>
                        <div className="experience-date">
                            <p>2012 - 2016</p>
                        </div>
                        <div className="experience-details">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. unknown printer took.</p>
                        </div>
                        <div className="experience-date">
                            <p>2018 - 2019</p>
                        </div>
                        <div className="maincontent">
                            <hr/>
                            <h5>Skills</h5>
                            <p className="skills">HTML5</p>
                            <p className="skills">CSS3</p>
                            <p className="skills">Javascript</p>
                            <p className="skills">React</p>
                            <p className="skills">Node</p>
                        </div>
                        <div className="maincontent">
                            <hr />
                            <h5>Education</h5>
                        </div>
                        <div className="education">
                            <p className="university">University of Calicut</p>
                            <p>Master of Computer Application</p>
                        </div>
                        <div className="passout-date">
                            <p>2015 - 2018</p>
                        </div>
                        <div className="education">
                            <p className="university">MG University, Kochi</p>
                            <p>Bachelor of Computer Application</p>
                        </div>
                        <div className="passout-date">
                            <p>2018 - 2020</p>
                        </div>
                        <div className="maincontent">
                            <hr />
                            <h5>Certifications</h5>
                            <p className="certifications">Developer certification - Amazon web service</p>
                            <p className="certifications">Web developer - Microsoft</p>
                        </div>
            </div>
        )
}

export default BasicTemplate