import React, {useState} from 'react';
import {faArrowRight, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Main(props) {
    const [showIcons, setShowIcons] = useState(false);

    const handleAddTask = () => {
        setShowIcons(!showIcons);
    };

    return (
        <>
            <div className={`w-full h-[8rem] bg-white fixed top-[4rem] border-b`}>
                <div className={`bg-[var(--backgound)] w-full h-[3rem] px-[2rem] pt-[0.5rem] border-b `}>
                    <sapn className={`bg-white inline-block line-height-2-5r h-[2.5rem] px-5 border-l-t-r `}>요청관리 현황</sapn>
                </div>

            </div>
            <div className={`w-full flex-1 bg-[var(--backgound)] border-t flex pt-[8rem] pr-[3rem]`}>
                <div className={`flex-1 grid grid-cols-4 gap-1 p-5 task-container`}>

                    <div className={` h-[20rem]  task flex`}>
                        <div className={`bg-white flex-1 shadow`}></div>
                        <div className={`w-[3rem] text-center relative`}>
                            <FontAwesomeIcon icon={faArrowRight} className={`absolute top-[calc(50%)] right-[8px] text-[11px]  text-white rounded-full bg-gray-600 p-2`}
                            />
                        </div>
                    </div>

                    <div className={` h-[20rem]  task flex`}>
                        <div className={`bg-white flex-1 shadow`}></div>
                        <div className={`w-[3rem] text-center relative`}>
                            <FontAwesomeIcon icon={faArrowRight} className={`absolute top-[calc(50%)] right-[8px] text-[11px]  text-white rounded-full bg-gray-600 p-2`} />
                        </div>
                    </div>

                    <div className={` h-[20rem]  task flex`}>
                        <div className={`bg-white flex-1 shadow`}></div>
                        <div className={`w-[3rem] text-center relative`}>
                            <FontAwesomeIcon icon={faPlus} className={`absolute top-[calc(50%)] right-[8px] text-[11px] text-[var(--innerline)] rounded-full bg-[var(--outline)] p-2`}
                                             onClick={handleAddTask}/>
                            {showIcons &&
                                [...Array(3)].map((_, index) => (
                                    <div
                                        key={index}
                                        className="absolute w-10 h-10 bg-[var(--buble)] border shadow-2xl rounded-full"
                                        style={{
                                            top: `calc(50% + ${((index - 1) * 35 - 3)}px)`,
                                            right: `-${17 + (index)%2 * 12}px`,
                                            transform: showIcons ? 'translateY(0)' : 'translateY(20px)',
                                            transition: 'top 0.3s ease-in-out, right 0.3s ease-in-out',
                                        }}
                                    />
                                ))}

                        </div>
                    </div>

                </div>
                <div className={`bg-white ml-auto w-[30rem] mr-[-3rem]`}>a</div>
            </div>
        </>
    );
}

export default Main;