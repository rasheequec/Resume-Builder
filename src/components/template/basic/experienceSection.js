import React from 'react'

const ExperienceSection = (props) => {
    const { heading, list} = props.data.experience;
return(
    <React.Fragment>

<div className="maincontent">
                        <hr />
                        <h5>{heading}</h5>
                    </div>
                    {list.map(data => {
                        return(
                            <React.Fragment>
                        <div className="experience-details">
                        <p>{data.description}</p>
                        </div>
                        <div className="experience-date">
                        <p>{data.from} - {data.to}</p>
                        </div>
                            </React.Fragment>
                        )
                    })}
    </React.Fragment>
)
}

export default ExperienceSection