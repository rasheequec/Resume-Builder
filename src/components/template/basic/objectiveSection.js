import React from 'react'

const ObjectiveSection = (props) => {
    const { heading, description} = props.data.objective;
return(
    <React.Fragment>
         <div className="maincontent">
                    <hr/>
                    <h5>{heading}</h5>
                    <p>{description}</p>
                    </div>
    </React.Fragment>
)
}

export default ObjectiveSection