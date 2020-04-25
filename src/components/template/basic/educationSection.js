import React from 'react'

const EducationSection = (props) => {
    const { heading, list} = props.data.education;
return(
    <React.Fragment>
                        <div className="maincontent">
                            <hr />
                            <h5>{heading}</h5>
                        </div>
                        {list.map(data => {
                            return(
                                <React.Fragment>
                                 <div className="education">
                        <p className="university">{data.university}</p>
                        <p>{data.course}</p>
                        </div>
                        <div className="passout-date">
                        <p>{data.from} - {data.to}</p>
                        </div>
                        </React.Fragment>
                        )})}
    </React.Fragment>
)
}

export default EducationSection