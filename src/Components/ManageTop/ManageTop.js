import React,{useState} from 'react';
import './ManageTop.css';
import Button from '@material-ui/core/Button';

const ManageTop = () => {
    const [showBanner,setBanner] = useState({show:false});
    const [showProduct,setProduct] = useState({show:!showBanner});
    let handleShow=()=>{
        // setBanner(!showProduct);
        // setProduct(showBanner);
        console.log(showBanner,showProduct);
    }
    
    return (
        
        <div className="managebannertop">
            <div className="managebannerdiv1" onClick={handleShow}>Manage Banners <div className="line"></div></div>
            <div className="managebannerdiv2" onClick={handleShow}>Manage Products <div className="line"></div></div>
            <div className="managebannerdiv3">
                <Button variant="contained" color="primary" className="btn" disableElevation>
                    Add New
                </Button></div>
        </div>
    )
}

export default ManageTop;