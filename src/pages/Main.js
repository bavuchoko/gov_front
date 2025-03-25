import React from 'react';

function Main(props) {
    return (
        <>
            <div className={`w-full h-[14rem] bg-white`}></div>
            <div className={`w-full h-[calc(100%-14rem)]  `}>
                <div className={`w-full bg-gray-300`}>w</div>
            </div>
        </>
    );
}

export default Main;