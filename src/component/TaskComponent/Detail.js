import React from 'react';

function Detail({detail}) {
    console.log(detail);
    return (
        <div className={``}>
            <p className={`p-4 text-[15px] border-b`}>{detail.title}</p>
            <p className={`px-4 py-2 text-[12px] border-b`}>{detail.description}</p>
            <div className={`px-4 py-2 border-b`}>
                <div className={`flex text-sm line-height-20`}>
                    <p className={`w-1/2`}> 등록자 : {detail.createdBy?.name}</p>
                    <p className={`w-1/2  h-[20px] `}>등록일 : {detail.createDate}</p>
                </div>
                <div className={`flex text-sm line-height-20`}>
                    <p className={`w-1/2`}> 수정자 : {detail.updatedBy?.name}</p>
                    <p className={`w-1/2 h-[20px] `}>수정일 : {detail.updateDate}</p>
                </div>
            </div>
            <p className={`p-4 border-b`}>업무 내역</p>
            {detail.procedures?.map(subTask => (
                <div className={`p-4`}>
                    <p>{subTask.taskName}</p>
                </div>
            ))}

        </div>
    );
}

export default Detail;