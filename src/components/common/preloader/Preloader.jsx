import React from "react";
import preloadImg from '../../../assets/images/loader.gif'
let Preloader = (props) => {
    return <div>
        <img src={preloadImg} alt=""/>
    </div>
}
export default Preloader