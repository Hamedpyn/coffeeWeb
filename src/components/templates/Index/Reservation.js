import React, { useState } from 'react';

export default function Reservation() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [selectBox, setSelectBox] = useState('');

    const bookTable = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:4000/reserve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name, email, date, time, count: selectBox,
            }),
        });
        if (res.ok) {
            alert('Congrats! You have booked your table.');
            setEmail(''); setName(''); setDate(''); setTime(''); setSelectBox('');
        } else {
            alert('An Unknown Error has occurred! Try Again.');
        }
    };

    return (
        <div className="container-fluid my-5">
            <div className="container">
                <div className="reservation rounded overflow-hidden position-relative overlay-top overlay-bottom">
                    <div className="row align-items-center">
                        <div className="col-lg-6 my-5 my-lg-0">
                            <div className="p-5">
                                <div className="mb-4">
                                    <h1 className="display-3 text-primary">30% OFF</h1>
                                    <h1 className="text-white">For Online Reservation</h1>
                                </div>
                                <p className="text-white">
                                    Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et
                                    dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea
                                </p>
                                <ul className="list-inline text-white m-0">
                                    <li className="py-2">
                                        <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet
                                    </li>
                                    <li className="py-2">
                                        <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet
                                    </li>
                                    <li className="py-2">
                                        <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center p-5" style={{ backgroundColor: 'rgba(51, 33, 29, .8)' }}>
                                <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                                <form onSubmit={bookTable} className="mb-5">
                                    <div className="form-group">
                                        <input
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            type="text"
                                            className="form-control bg-transparent border-primary p-4"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            type="email"
                                            className="form-control bg-transparent border-primary p-4"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <div className="date" id="date" data-target-input="nearest">
                                            <input
                                                value={date}
                                                onChange={(e) => setDate(e.target.value)}
                                                required
                                                type="date"
                                                className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                                                placeholder="Date"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="time" id="time" data-target-input="nearest">
                                            <input
                                                value={time}
                                                onChange={(e) => setTime(e.target.value)}
                                                required
                                                type="time"
                                                className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                                                placeholder="Time"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <select
                                            required
                                            value={selectBox}
                                            onChange={(e) => setSelectBox(e.target.value)}
                                            className="custom-select bg-transparent border-primary px-4"
                                            style={{ height: '49px' }}
                                        >
                                            <option value="">Count</option>
                                            <option value="1">1 Person</option>
                                            <option value="2">2 People</option>
                                            <option value="3">3 People</option>
                                            <option value="4">4 People</option>
                                        </select>
                                    </div>

                                    <button className="btn btn-primary btn-block font-weight-bold py-3" type="submit">
                                        Book Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}