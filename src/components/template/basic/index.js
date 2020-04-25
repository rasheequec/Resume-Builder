import React from 'react'
import './index.css'
import ProfileSection from './profileSection'
import ObjectiveSection from './objectiveSection'
import SkillSection from './skillSection'
import EducationSection from './educationSection'
import ExperienceSection from './experienceSection'
import CertificationSection from './certificationSection'

const BasicTemplate = (props) => {
  const { photo, name, title, address1, address2, phone, website, email } = props.data.profile;
 
        return(
            <div id="basic">
              <ProfileSection data ={props.data} />
              <ObjectiveSection data = {props.data} />
              <ExperienceSection data = {props.data} />
              <SkillSection data = {props.data}/>
              <EducationSection data = {props.data}/>
              <CertificationSection data = {props.data}/>
            </div>
        )
}

export default BasicTemplate