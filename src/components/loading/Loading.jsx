import React from 'react';
import './Loader.scss'

const Loading = () => {
    return (
        <div className='loader'>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Loading;
