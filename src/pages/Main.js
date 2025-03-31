import React, {useState} from 'react';
import {faArrowRight, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Task from "../component/TaskComponent/Task";
import Detail from "../component/TaskComponent/Detail";

function Main() {
    const [showIcons, setShowIcons] = useState(false);
    const [detail, setDetail] = useState({});

    const [data, setData] = useState({
        id: 1,
        title: "Task 1",
        description:"현재 작업에 대한 상세설명",
        createDate:"2025-01-02",
        createdBy : {name:'등록자'},
        procedures:[
            {taskName:'접수'},
            {taskName:'분류'},
            {taskName:'검토'},
            {taskName:'처리'},
        ],
        before: {
            id: 2,
            title: "Before Task",
            description:"이전 작업의에 대한 상세 설병",
            after: {id: 1},
            before: {
                id: 7,
                title: "Before of before Task",
                description:"이전 작업의 이전 작업에 대한 상세 설명",
                after: {id: 1}
            }
        }
        ,
        after: {
            id: 3,
            title: "after Task",
            before: {
                id: 1,
                title: "Before Task",
                after: {id: 1}
            },
            after: {
                id: 4,
                title: "after of after Task",
                isMovable: true,
            },
        }
    });

    const handleAddTask = () => {
        setShowIcons(!showIcons);
    };

    const getDetail = (detail) => {
        setDetail(detail)
    }

    const renderTasks = (taskData, visited = new Set()) => {
        if (!taskData || visited.has(taskData.id)) return null;

        // 현재 노드를 방문한 것으로 표시
        visited.add(taskData.id);

        return (
            <React.Fragment key={taskData.id}>
                {taskData.before && renderTasks(taskData.before, visited)}
                <Task data={taskData} onClick={getDetail} />
                {taskData.after && renderTasks(taskData.after, visited)}
            </React.Fragment>
        );
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

                    {renderTasks(data)}

                </div>
                <div className={`bg-white ml-auto w-[30rem] mr-[-3rem]`}>
                    <Detail detail={detail} />
                </div>
            </div>
        </>
    );
}

export default Main;