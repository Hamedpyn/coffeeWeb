import React from 'react'

export default function Testimonial({ comments }) {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="text-primary text-uppercase" style={{ letterSpacing: '5px' }}>Testimonial</h4>
                    <h1 className="display-4">Our Clients Say</h1>
                </div>
                <div className="owl-carousel testimonial-carousel">
                    {comments.map(item => (
                        <div key={item.id} className="testimonial-item">
                            <div className="d-flex items-center mb-3">
                                <img className="img-fluid" src={item.profile} alt="" />
                                <div className="ml-3">
                                    <h4>{item.username}</h4>
                                    <i>Profession</i>
                                </div>
                            </div>
                            <p className="m-0">{item.body}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
