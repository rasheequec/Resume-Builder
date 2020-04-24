import React from 'react'

const SkillSection = (props) => {
    const { heading, list } = props.data.skills;
return(
    <React.Fragment>
                        <div className="maincontent">
                            <hr/>
                            <h5>{heading}</h5>
                            {
                                list.map(item => {
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