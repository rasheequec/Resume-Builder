import React from 'react'
import './index.css'

const BasicTemplate = (props) => {
  const { photo, name, title, address1, address2, phone, website, email } = props.data.profile;
  const { heading, description} = props.data.objective;
        return(
            <div id="basic">

                    {/* <div className="profilesection"> */}
                     <div className="image">
                         <img className="profileimage" src="https://i.pinimg.com/originals/97/31/02/9731022f0be7c965e880505461643850.jpg"/>
                      </div>
                     <div className="text">
                      <h5>{name}</h5>
                         <p>{title}</p>
                         <p>{address1}</p>
                         <p>{address2}</p>
                     </div>
                    {/* </div> */}
                    <div className="contactdetails">
                         <small>{phone}</small><br/>
                          <small>{email}</small><br/>
                          <small>{website}</small>
                    </div>
                    <div className="maincontent">
                    <hr/>
                    <h5>{heading}</h5>
                    <p>{description}</p>
                    </div>
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

        {/* <div className="section"> */}
                {/* <div> */}
                  {/* <div className="section__list-item"> */}
                    {/* <div className="left">
                      <div className="name">KlowdBox</div>
                      <div className="addr">San Fr, CA</div>
                      <div className="duration">Jan 2011 - Feb 2015</div>
                    </div>
                    <div className="right">
                      <div className="name">Fr developer</div>
                      <div className="desc">did This and that</div>
                    </div> */}
                  {/* </div> */}
                {/* </div>
              </div> */}
            {/* <div className="header">
              <div className="full-name">
                <span className="first-name">John</span> 
                <span className="last-name">Doe</span>
              </div>
              <div className="contact-info">
                <span className="email">Email: </span>
                <span className="email-val">john.doe@gmail.com</span>
                <span className="separator"></span>
                <span className="phone">Phone: </span>
                <span className="phone-val">111-222-3333</span>
              </div>
              
              <div className="about">
                <span className="position">Front-End Developer </span>
                <span className="desc">
                  I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. 
                </span>
              </div>
            </div> */}
             {/* <div className="details"> */}
              {/* <div className="section">
                <div className="section__title">Experience</div>
                <div className="section__list">
                  <div className="section__list-item">
                    <div className="left">
                      <div className="name">KlowdBox</div>
                      <div className="addr">San Fr, CA</div>
                      <div className="duration">Jan 2011 - Feb 2015</div>
                    </div>
                    <div className="right">
                      <div className="name">Fr developer</div>
                      <div className="desc">did This and that</div>
                    </div>
                  </div>
                          <div className="section__list-item">
                    <div className="left">
                      <div className="name">Akount</div>
                      <div className="addr">San Monica, CA</div>
                      <div className="duration">Jan 2011 - Feb 2015</div>
                    </div>
                    <div className="right">
                      <div className="name">Fr developer</div>
                      <div className="desc">did This and that</div>
                    </div>
                  </div>
          
                </div>
              </div> */}
              {/* <div className="section">
                <div className="section__title">Education</div>
                <div className="section__list">
                  <div className="section__list-item">
                    <div className="left">
                      <div className="name">Sample Institute of technology</div>
                      <div className="addr">San Fr, CA</div>
                      <div className="duration">Jan 2011 - Feb 2015</div>
                    </div>
                    <div className="right">
                      <div className="name">Fr developer</div>
                      <div className="desc">did This and that</div>
                    </div>
                  </div>
                  <div className="section__list-item">
                    <div className="left">
                      <div className="name">Akount</div>
                      <div className="addr">San Monica, CA</div>
                      <div className="duration">Jan 2011 - Feb 2015</div>
                    </div>
                    <div className="right">
                      <div className="name">Fr developer</div>
                      <div className="desc">did This and that</div>
                    </div>
                  </div>
          
                </div>
                
            </div>
               <div className="section">
                <div className="section__title">Projects</div> 
                 <div className="section__list">
                   <div className="section__list-item">
                     <div className="name">DSP</div>
                     <div className="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>
                   </div>
                   
                   <div className="section__list-item">
                              <div className="name">DSP</div>
                     <div className="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. <a href="/login">link</a>
                     </div>
                   </div>
                 </div>
              </div>
               <div className="section">
                 <div className="section__title">Skills</div>
                 <div className="skills">
                   <div className="skills__item">
                     <div className="left"><div className="name">
                       Javascript
                       </div></div>
                     <div className="right">
                                    <input  id="ck1" type="checkbox" checked/>
          
                       <label for="ck1"></label>
                                    <input id="ck2" type="checkbox" checked/>
          
                        <label for="ck2"></label>
                                   <input id="ck3" type="checkbox" />
          
                        <label for="ck3"></label>
                                     <input id="ck4" type="checkbox" />
                      <label for="ck4"></label>
                                    <input id="ck5" type="checkbox" />
                        <label for="ck5"></label>
          
                     </div>
                   </div>
                   
                 </div>
                 <div className="skills__item">
                     <div className="left"><div className="name">
                       CSS</div></div>
                     <div className="right">
                                    <input  id="ck1" type="checkbox" checked/>
          
                       <label for="ck1"></label>
                                    <input id="ck2" type="checkbox" checked/>
          
                        <label for="ck2"></label>
                                   <input id="ck3" type="checkbox" />
          
                        <label for="ck3"></label>
                                     <input id="ck4" type="checkbox" />
                      <label for="ck4"></label>
                                    <input id="ck5" type="checkbox" />
                        <label for="ck5"></label>
          
                     </div>
                   </div>
                   
                 </div>
               <div className="section">
               <div className="section__title">
                 Interests
                 </div>
                 <div className="section__list">
                   <div className="section__list-item">
                            Football, programming.
                    </div>
                 </div>
               </div> */}
            </div>
        )
}

export default BasicTemplate