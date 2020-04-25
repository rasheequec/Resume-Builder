import React from 'react'
import './index.css'
import ProfileSection from './profileSection'
import ObjectiveSection from './objectiveSection'
import SkillSection from './skillSection'
import EducationSection from './educationSection'

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
                        <SkillSection data = {props.data}/>
                        <EducationSection data = {props.data}/>

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