import React, { useEffect } from 'react';
import './ManageProductBottom.css';
import Product1 from '../../assets/ProductPic1.png';
import coin from '../../assets/Coin.svg';
import Img2 from '../../assets/pencil.svg';
import Img3 from '../../assets/trash.svg';
import axios from 'axios';
// import { ApiCall } from '../ApiCall';

const ManageProductsBottom = () => {
    useEffect(()=>{
    const res = axios.get('https://internship-slick-api.herokuapp.com/api/products/categories')
    console.log(res);
        },[])
    return (
        <div className="manageproductsbtm">
            <div className="div div13">
                <img src={Product1} />

                <p> Casual</p>

            </div>
            <div className="div div23">
                Overcome Basic Sweatshirt
            </div>
            <div className="manage-product-coin">
                <div className="coindiv"><img src={coin} /></div>
                <div className="price"><p>Keemat</p></div>
            </div>
            <div className="manage-product-btns">
                <div className="add-div"><img src={Img2} /></div>
                <div className="space"></div>
                <div className="delete-div"><img src={Img3} /></div>
            </div>
        </div>
    )
}

export default ManageProductsBottom;