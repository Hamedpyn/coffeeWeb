import React, { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('');
    const submitUserEmail = async (e) => {
      e.preventDefault();
  
      const res = await fetch('http://localhost:4000/newsletters', {
        method: 'POST',
        body: JSON.stringify({ email })
      })
      res.ok ? (
        alert('Congrats! You have joined our website.'),
        setEmail('')
      ) : (
        alert('An Unknown Error has occurred! Try Again.')
      )
    };
  return (
    <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
      <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>Get In Touch</h4>
          <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
          <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
          <p className="m-0"><i className="fa fa-envelope mr-2"></i>info@example.com</p>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>Follow Us</h4>
          <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
          <div className="d-flex justify-content-start">
            <a className="btn b group tn-lg btn-outline-light btn-lg-square mr-2" href="#">
              <span className='flex justify-center items-center h-full'><svg className='size-9 fill-white group-hover:fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg></span>
            </a>
            <a className="btn b group tn-lg btn-outline-light btn-lg-square mr-2" href="#">
              <span className='flex justify-center items-center h-full'><svg className='size-9 fill-white group-hover:fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg></span>
            </a>
            <a className="btn group  btn-lg btn-outline-light btn-lg-square mr-2" href="#">
            <span className='flex justify-center items-center h-full'><svg className='size-9 fill-white group-hover:fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></span>
            </a>
            <a className="btn b group tn-lg btn-outline-light btn-lg-square" href="#">
              <span className='flex justify-center items-center h-full'><svg className='size-9 fill-white group-hover:fill-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>Open Hours</h4>
          <div>
            <h6 className="text-white text-uppercase">Monday - Friday</h6>
            <p>8.00 AM - 8.00 PM</p>
            <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
            <p>2.00 PM - 8.00 PM</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>Newsletter</h4>
          <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
          <form className="w-100">
            <div className="input-group">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="form-control border-light" style={{ padding: '25px' }}
                placeholder="Your Email" />
              <div className="input-group-append">
                <button onClick={submitUserEmail} className="btn btn-primary font-weight-bold px-3">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5"
        style={{ borderColor: 'rgba(256, 256, 256, .1) !important' }}>
        <p className="mb-2 text-white">Copyright &copy; <a className="font-weight-bold" href="#">Domain</a>. All
          Rights Reserved.</p>
        <p className="m-0 text-white">Designed by <a className="font-weight-bold" href="https://htmlcodex.com">HTML
          Codex</a></p>
      </div>
    </div >
  )
}
