import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import SideMenu from "./SideMenu";
import Nav from "./Nav";

function Layout() {

    const [leftWidth, setLeftWidth] = useState("22rem");


    const toggle = () => {
        setLeftWidth((prev) => (prev === "5rem" ? "22rem" : "5rem"));
    };

    return (
            <div className={`flex h-full`}>
                <SideMenu  style={{ width: leftWidth }} toggle={toggle}/>
                <div className={`flex-1 flex flex-col`}>
                    <Nav />
                    <Outlet />
                </div>
            </div>
    );
}

export default Layout;