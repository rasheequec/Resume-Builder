import React from 'react'

const ProfileSection = (props) => {
    const { photo, name, title, address1, address2, phone, website, email } = props.data.profile;
    return(
        <React.Fragment>
                     <div className="image">
                         <img className="profileimage" src="https://i.pinimg.com/originals/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
                      </div>
                     <div className="text">
                      <h5>{name}</h5>
                         <p>{title}</p>
                         <p>{address1}</p>
                         <p>{address2}</p>
                     </div>
                    <div className="contactdetails">
                         <small>{phone}</small><br/>
                          <small>{email}</small><br/>
                          <small>{website}</small>
                    </div>
        </React.Fragment>
    )
}

export default ProfileSection