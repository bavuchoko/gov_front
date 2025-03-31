import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faPlus, faCaretLeft, faCaretDown} from "@fortawesome/free-solid-svg-icons";

function Task({data, onClick}) {

    const [showIcons, setShowIcons] = useState(false);
    const [openSubTask, setOpenSubTask] = useState(false);

    const handleAddTask = () => {
        setShowIcons(!showIcons);
    };
    const handleSubTask = () => {
        setOpenSubTask(!openSubTask);
    };

    return (

        <div className={` h-[230px]  task flex no-drag` } onClick={()=>onClick(data)}>
            <div className={`bg-white flex-1 shadow `}>
                <p className={`text-md  h-[40px] text-center p-4 border-b`}>{data.title}</p>
                <p className={`p-4 h-[120px] `}>{data.description}</p>
                <div className={`relative z-10`}>
                    <div className={`flex px-4 text-sm line-height-20`}>
                        <p className={`w-1/2`}> 등록자 : {data.createdBy?.name}</p>
                        <p className={`w-1/2  h-[20px] `}>등록일 : {data.createDate}</p>
                    </div>
                    <div className={`flex px-4 text-sm line-height-20`}>
                        <p className={`w-1/2`}> 수정자 : {data.updatedBy?.name}</p>
                     <p className={`w-1/2 h-[20px] `}>수정일 : {data.updateDate}</p>
                    </div>

                    <div
                        className={`border radius-b bg-white absolute w-full top-[70px] overflow-hidden transition-all duration-150 ease-in-out shadow ${
                            openSubTask ? "max-h-[200px]" : "max-h-1"
                        }`}
                        style={{
                            boxShadow: "inset 3px 3px 6px rgba(0, 0, 0, 0.08), inset -3px -3px 6px rgba(119, 113, 133, 0.05)",
                        }}
                    >
                        {data.procedures?.map(subTask => (
                            <p className={`m-[1rem]`}>{subTask.taskName}</p>
                        ))}
                       <div className={`w-full h-[15px] bg-blue-300 border radius-b`}></div>
                    </div>
                </div>

                <div className={`flex px-4 text-sm line-height-30 mt-auto`}>
                    <p className={` h-[30px]`}>업무진행</p>
                    {data.procedures &&
                        <FontAwesomeIcon icon={openSubTask ? faCaretDown: faCaretLeft} onClick={handleSubTask} className={`pt-3 text-[13px] ml-auto`}/>
                    }
                </div>


            </div>

            <div className={`w-[3rem] text-center relative`}>
                {data.after &&
                    <FontAwesomeIcon icon={faArrowRight} className={`absolute top-[calc(50%)] right-[8px] text-[11px]  text-white rounded-full bg-blue-700 p-2`} />
                }
                {data.isMovable && (
                    <>
                        <FontAwesomeIcon
                            icon={faPlus}
                            className="absolute top-[calc(50%)] right-[8px] text-[11px] text-[var(--innerline)] rounded-full bg-[var(--outline)] p-2"
                            onClick={handleAddTask}
                        />
                        {showIcons && [...Array(3)].map((_, index) => (
                            <div
                                key={index}
                                className="absolute w-10 h-10 bg-[var(--buble)] border shadow-2xl rounded-full"
                                style={{
                                    top: `calc(50% + ${(index - 1) * 35 - 3}px)`,
                                    right: `-${17 + (index % 2) * 12}px`,
                                }}
                            />
                        ))}
                    </>
                )}


            </div>


        </div>

    );
}

export default Task;