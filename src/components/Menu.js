import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import './Menu.css';

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ErrorModal from "../LoadingSpinner/ErrorModal";

import { GiCoffeeBeans } from "react-icons/gi";


const Menu = () => {

    const url = 'https://maxim-backend.onrender.com' ; 

    const [loading, setLoading] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const [menu, setMenu] = useState([])

    useEffect(() => {
        let timerId;
        if (loading) {
            setIsLoading(true);
            timerId = setTimeout(async () => {
                await axios.get(url).then((res) => {
                    setMenu(res.data.items)
                    console.log(res.data.items)
                });
                setLoading(false);
                setIsLoading(false);
            });
        }
        return () => clearTimeout(timerId);
    }, [loading]);

    const errorHandler = () => {
        setError(null);
        window.location.reload(true);
    };

    return isLoading ? (
        <LoadingSpinner asOverlay />
    ) : (
        <div className="admin-page row w-100 p-0 m-0">
            <ErrorModal error={error} onClear={errorHandler} />
            {isLoading && <LoadingSpinner asOverlay />}

            <div className="col-12 header">
                <div className="pt-1 ">
                    <div className='row justify-content-center text-center py-2'>
                        <div className="col-12 col-md-7">
                            <h1 className='admin-logo text-white  p-3 '>
                                <GiCoffeeBeans /> MaXim Cafe <GiCoffeeBeans />
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* /////////////////////////////////////////// */}
            <div className="fw-bold row w-100 p-0 m-0 justify-content-start ">

                <div className="col-6 col-lg-3 row text-center p-0 m-0 py-2">
                    <div className='row p-0 m-0 w-100 justify-content-center'>
                        <h5 className="drink-title p-0 m-0 py-3">المشروبات الساخنة</h5>
                        <hr className="line" />
                    </div>
                    <div className="h-100">
                        {menu.map(item => (
                            item.category == 'hot' ?
                                <ul key={item._id} className="row p-0 m-0 justify-content-start text-end w-100 py-1">
                                    <li className="row p-0 m-0 w-100 justify-content-start">
                                        <div className="col-9 drink-name p-0 m-0">
                                           - {item.name} 
                                        </div>
                                        <div className="col-2 drink-price  p-0 m-0">
                                            {item.price}.00LE</div>
                                    </li>
                                </ul> : ''
                        ))}
                    </div>
                </div>
                {/* ///////////////////////////////////// */}

                <div className="col-5 col-lg-3 row text-center p-0 m-0 mx-2 py-2 ">
                    <div className='row p-0 m-0 w-100 justify-content-center'>
                        <h5 className="drink-title p-0 m-0 py-3">المشروبات الباردة</h5>
                        <hr className="line" />

                    </div>
                    <div className="h-100">
                        {menu.map(item => (
                            item.category == 'cold' ?
                                <ul key={item._id} className="row p-0 m-0 justify-content-start text-end w-100 py-1">
                                    <li className="row p-0 m-0 w-100 justify-content-start">
                                        <div className="col-9 drink-name  p-0 m-0">
                                           - {item.name}
                                        </div>
                                        <div className="col-2 drink-price  p-0 m-0">
                                            {item.price}.00LE</div>
                                    </li>
                                </ul> : ''
                        ))}
                    </div>
                </div>

                {/* ///////////////////////////////////// */}

                <div className="col-6 col-lg-3 row text-center p-0 m-0  py-2">
                    <div className='row p-0 m-0 w-100 justify-content-center'>
                        <h5 className="drink-title p-0 m-0 py-3">الحلويات</h5>
                        <hr className="line" />

                    </div>
                    <div className="h-100">
                        {menu.map(item => (
                            item.category == 'sweets' ?
                                <ul key={item._id} className="row p-0 m-0 justify-content-start text-end w-100 py-1">
                                    <li className="row p-0 m-0 w-100 justify-content-start">
                                        <div className="col-9 drink-name  p-0 m-0">
                                           - {item.name}
                                        </div>
                                        <div className="col-2 drink-price  p-0 m-0">
                                            {item.price}.00LE</div>
                                    </li>
                                </ul> : ''
                        ))}
                    </div>
                </div>

                {/* ///////////////////////////////////// */}

                <div className="col-5 col-lg-2 row text-center p-0 m-0 mx-2 py-2">
                    <div className='row p-0 m-0 w-100 justify-content-center'>
                        <h5 className="drink-title p-0 m-0 py-3">المشروبات الغازية</h5>
                        <hr className="line" />

                    </div>
                    <div className="h-100">
                        {menu.map(item => (
                            item.category == 'cola' ?
                                <ul key={item._id} className="row p-0 m-0 justify-content-start text-end w-100 py-1">
                                    <li className="row p-0 m-0 w-100 justify-content-start">
                                        <div className="col-9 drink-name  p-0 m-0">
                                           - {item.name}
                                        </div>
                                        <div className="col-2 drink-price  p-0 m-0">
                                            {item.price}.00LE</div>
                                    </li>
                                </ul> : ''
                        ))}
                    </div>
                </div>

                {/* ///////////////////////////////////// */}

                <div className="col-6 col-lg-3 row text-center p-0 m-0 py-2">
                    <div className='row p-0 m-0 w-100 justify-content-center'>
                        <h5 className="drink-title p-0 m-0 py-3">الشيشه </h5>
                        <hr className="line" />

                    </div>
                    <div className="">
                        {menu.map(item => (
                            item.category == 'shisha' ?
                                <ul key={item._id} className="row p-0 m-0 justify-content-start text-end w-100 py-1">
                                    <li className="row p-0 m-0 w-100 justify-content-start">
                                        <div className="col-9 drink-name  p-0 m-0">
                                           - {item.name}
                                        </div>
                                        <div className="col-2 drink-price  p-0 m-0">
                                            {item.price}.00LE</div>
                                    </li>
                                </ul> : ''
                        ))}
                    </div>
                </div>

            </div>
            {/* /////////////////////////////////////////// */}

        </div>


    )
}

export default Menu
