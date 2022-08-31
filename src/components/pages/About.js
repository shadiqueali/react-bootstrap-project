import React from 'react'
import Vission from './Vission'

function About() {
  return (
   
        <div>
            <section className="bg-info py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section  border-bottom">
                <div className="container">
                    <h5>Our Company</h5>
                    <div className="under-line"></div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia aut consectetur libero, temporibus nemo nisi id odit, quidem recusandae tempora totam, sequi maxime. Porro at repudiandae nisi modi, explicabo hic. Incidunt, ut tenetur animi unde nobis saepe delectus exercitationem quas alias nam sapiente inventore nostrum voluptate praesentium eveniet magnam assumenda officiis eaque odit earum beatae itaque dignissimos nihil sunt! A!
                    </p>
                </div>
            </section>

            <Vission/>
        </div>
      
  )
}

export default About