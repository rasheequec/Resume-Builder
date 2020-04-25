import React from 'react'

const CertificationSection = (props) => {
    const { heading, list } = props.data.certificate;
return(
    <React.Fragment>
                         <div className="maincontent">
                            <hr />
                            <h5>{heading}</h5>
                            {list.map(data => {
                                return <p className="certifications">{data.text}</p>
                            })}
                        </div>
    </React.Fragment>
)
}

export default CertificationSection