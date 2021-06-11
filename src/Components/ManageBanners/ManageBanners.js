import React from 'react';
import './ManageBanners.css';
import ManageTop from '../ManageTop/ManageTop';
import ManageBottom from '../ManageBottom/ManageBottom';
import ManageProduct from '../ManageProducts/ManageProduct';
const ManageBanners = () => {
    return (
        <div className="managebannerclass">
            <div >
                <ManageTop />
            </div>
            <div className="managebannerbtm">
                <ManageBottom /> 
                <ManageProduct/> 
            </div>
        </div>
    )
}

export default ManageBanners;