import React from 'react';
import imgLoader from '../../assets/img/colorfulLoader.gif';


const FullPageLoader = () => {
    return (
        <div className="glass loader">
            <img src={imgLoader} alt="Loading" className="loader-image"/>
        </div>
    )
}

export default FullPageLoader;
