import { useState } from "react";
import Progress from 'react-progressbar';

const Skills = () => {

    return (
        <div>
            <h1 className="text-3xl text-transparent  bg-clip-text bg-gradient-to-r from-violet-700 to-pink-500 text-center my-8">My Skills</h1>
            <div className="flex text-white flex-col lg:flex-row" >
            <div className="w-1/2 m-12">
                <h3 className="text-2xl text-center transparent lg:w-1/5 mx-auto p-2 rounded-lg my-8 bg-gradient-to-r from-purple-700 to-pink-500">Front-End</h3>
                <div>
                    <h3 className="font-bold mt-2">HTML</h3>
                    <div className="flex gap-4 items-center justify-center">
                    <div className="flex-item" >
                        80%
                    </div>
                    <div className="flex-item progressbar" style={{ flex: '1' }}>
                        <Progress className="bg-slate-200" color="#5C00A3" completed={80} />
                    </div>
                    </div>
                </div>
                
                <div>
                    <h3 className="font-bold mt-4">CSS</h3>
                    <div className="flex gap-4 items-center justify-center">
                    <div className="flex-item" >
                        90%
                    </div>
                    <div className="flex-item progressbar" style={{ flex: '1' }}>
                        <Progress className="bg-slate-200" color="#5C00A3" completed={90} />
                    </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold mt-4">JavaScript</h3>
                    <div className="flex gap-4 items-center justify-center">
                    <div className="flex-item" >
                        70%
                    </div>
                    <div className="flex-item progressbar" style={{ flex: '1' }}>
                        <Progress className="bg-slate-200" color="#5C00A3" completed={70} />
                    </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold mt-4">React JS</h3>
                    <div className="flex gap-4 items-center justify-center">
                    <div className="flex-item" >
                        70%
                    </div>
                    <div className="flex-item progressbar" style={{ flex: '1' }}>
                        <Progress className="bg-slate-200" color="#5C00A3" completed={70} />
                    </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold mt-4">Firebase</h3>
                    <div className="flex gap-4 items-center justify-center">
                    <div className="flex-item" >
                        80%
                    </div>
                    <div className="flex-item progressbar" style={{ flex: '1' }}>
                        <Progress className="bg-slate-200" color="#5C00A3" completed={70} />
                    </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold mt-4">Tailwind CSS</h3>
                    <div className="flex gap-4 items-center justify-center">
                    <div className="flex-item" >
                        90%
                    </div>
                    <div className="flex-item progressbar" style={{ flex: '1' }}>
                        <Progress className="bg-slate-200" color="#5C00A3" completed={90} />
                    </div>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold mt-4">Bootstrap</h3>
                    <div className="flex gap-4 items-center justify-center">
                    <div className="flex-item" >
                        75%
                    </div>
                    <div className="flex-item progressbar" style={{ flex: '1' }}>
                        <Progress className="bg-slate-200" color="#5C00A3" completed={75} />
                    </div>
                    </div>
                </div>

            </div>
            <div className="w-1/2 m-12">
                <h3 className="text-2xl text-center transparent lg:w-1/5 mx-auto p-2 rounded-lg my-8 bg-gradient-to-r from-purple-700 to-pink-500">Back-End</h3>
                <div>
                    <div>
                        <h3 className="font-bold mt-4">Node JS</h3>
                        <div className="flex gap-4 items-center justify-center">
                        <div className="flex-item" >
                            65%
                        </div>
                        <div className="flex-item progressbar" style={{ flex: '1' }}>
                            <Progress className="bg-slate-200" color="#5C00A3" completed={65} />
                        </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold mt-4">Express JS</h3>
                        <div className="flex gap-4 items-center justify-center">
                        <div className="flex-item" >
                            70%
                        </div>
                        <div className="flex-item progressbar" style={{ flex: '1' }}>
                            <Progress className="bg-slate-200" color="#5C00A3" completed={70} />
                        </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold mt-4">MongoDB</h3>
                        <div className="flex gap-4 items-center justify-center">
                        <div className="flex-item" >
                            75%
                        </div>
                        <div className="flex-item progressbar" style={{ flex: '1' }}>
                            <Progress className="bg-slate-200" color="#5C00A3" completed={75} />
                        </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold mt-4">MySQL</h3>
                        <div className="flex gap-4 items-center justify-center">
                        <div className="flex-item" >
                            60%
                        </div>
                        <div className="flex-item progressbar" style={{ flex: '1' }}>
                            <Progress className="bg-slate-200" color="#5C00A3" completed={60} />
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>
    );
};

export default Skills;