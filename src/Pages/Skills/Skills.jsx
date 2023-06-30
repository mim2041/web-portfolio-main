import { useState } from "react";
import Progress from 'react-progressbar';

const Skills = () => {

    return (
        <div className="flex">
            <div className="w-1/2 m-12">
                <h3>Front-End</h3>
                <div>
                    <h3>HTML5</h3>
                <div className="progressbar">
                    <span>80%</span>
                    <Progress className="bg-slate-200" color="red" completed={75} />
                </div>
                    
                </div>
            </div>
            <div className="w-1/2 m-12">
                <h3 className="">Back-End</h3>
            </div>
        </div>
    );
};

export default Skills;