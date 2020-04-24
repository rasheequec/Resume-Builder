import React from 'react'

const SkillSection = (props) => {
    const { skills } = props.data;
return(
    <React.Fragment>
                        <div className="maincontent">
                            <hr/>
                            <h5>Skills</h5>
                            {
                                skills.map(item => {
                                    return(
                                    <p className="skills">{item}</p>
                                    )
                                })
                            }
                        </div>
    </React.Fragment>
)
}

export default SkillSection