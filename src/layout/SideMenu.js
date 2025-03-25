import React, {useState} from 'react';
import Alarm from '../resources/icon/alarm.png';
import Magnifier from '../resources/icon/magnifier.png';
import Shield from '../resources/icon/shield.png';
import Pen from '../resources/icon/pen.png';
import Reply from '../resources/icon/reply.png';
import Fork from '../resources/icon/fork.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";


function SideMenu({style, toggle}) {

    const menu=[
        {nme:'장애예방',icon:'home'}
        ,{nme:'장애대응',icon:'home'}
        ,{nme:'사후관리',icon:'home'}
    ]

    
    return (
        <div className={`w-full menu overflow-y-auto no-select`} style={style} >
            {/*유저정보*/}
            <div className={`menu-item nav-user`}>
                <div className={`hover-background flex`}>
                    <div className={`user-name-port`}>리자</div>
                    <div className={`user-id`}>super</div>
                    <FontAwesomeIcon icon={faChevronDown} className={`font-thin text-[8px] inline-block float-right pt-[10px]`} />
                </div>
                <div className={`hover-background ml-auto`}>
                    <img src={Alarm} className={`user-alarm`} />
                </div>
            </div>

            {/*메뉴검색*/}
            <div className={`menu-item menu-search relative`}>
               <input type={'text'} className={`menu-search-input `} placeholder={'Search...'} onChange={(e)=>{}} />
               <img  src={Magnifier}  className={`absolute top-[18px] left-[22px] w-[14px]`}alt="Alarm"  />
            </div>
            <div className={`menu-item-deeper bg-[var(--selected)] `}>
                {/*<img src={Clock} className={`w-[15px] inline-block mr-3 mb-0.5`} />*/}
                <img src={Pen} className={`w-[15px] inline-block mr-3 mb-0.5 bg-white rounded-full`} />
                <p className={`inline-block`}>자산 운영관리</p>
            </div>

            <div className={`horizontal-border my-3`}></div>

            <div className={`px-[0.5rem]`}>
                <div className={`hover-background fit-content`}>
                    <div className={`rounded-full bg-pink-500 text-white w-[17px] h-[17px] text-center inline-block`}>A</div>
                    <p className={`inline-block line-height-26 ml-3`}>정보시스템 운영</p>
                    <FontAwesomeIcon icon={faChevronDown} className={`font-thin text-[8px] ml-3`} />
                </div>
            </div>
            <div className={`menu-item-deeper hover:bg-[var(--hover-gray)]`}>
                <img src={Shield} className={`w-[15px] inline-block mr-3 mb-0.5 bg-white rounded-full`} />
                예방관리
            </div>
            <div className={`menu-item-deeper bg-[var(--hover-gray)]`}>
                <ul className={`ml-[2.5rem]`}>
                    <li>요청관리</li>
                    <li>구성관리</li>
                    <li>변경관리</li>
                    <li>이벤트 관리</li>
                    <li>서비스 수준 관리</li>
                </ul>
            </div>
            <div className={`menu-item-deeper hover:bg-[var(--hover-gray)]`}>
                <img src={Reply} className={`w-[15px] inline-block mr-3 mb-0.5 bg-white rounded-full`} />
                대응관리
            </div>
            <div className={`menu-item-deeper hover:bg-[var(--hover-gray)]`}>
                <img src={Fork} className={`w-[15px] inline-block mr-3 mb-0.5 bg-white rounded-full`} />
                사후관리
            </div>

        </div>
    );
}

export default SideMenu;