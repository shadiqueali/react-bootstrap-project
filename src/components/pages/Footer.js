import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <section className="section footer bg-dark text-white">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h6>Company Inforation</h6>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque saepe beatae molestiae culpa totam labore excepturi vitae ut inventore, earum qui accusamus id corrupti, numquam, unde provident ducimus laboriosam ratione perferendis deserunt illum ex recusandae sit! Alias recusandae velit illum.
                    </p>
                </div>
                <div className="col-md-4">
                    <h6>Quick Links</h6>
                    <hr />
                    <div><Link to='/'>Home</Link></div>
                    <div><Link to='/about'>About</Link></div>
                    <div><Link to='/contact'>Contact</Link></div>
                    <div><Link to='/'>Blog</Link></div>
                </div>
                <div className="col-md-4">
                    <h6>Contact Information</h6>
                    <hr />
                    <div><p className='text-white mb-1'>B64 Bangloore Karnataka, India</p></div>
                    <div><p className='text-white mb-1'>+91-xxxxxxx</p></div>
                    <div><p className='text-white mb-1'>+91-xxxxxxx</p></div>
                    <div><p className='text-white mb-1'>email@gmail.com</p></div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Footer