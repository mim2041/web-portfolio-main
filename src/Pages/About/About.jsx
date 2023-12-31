

const About = () => {
    return (
        <div className='text-center text-white m-8 lg:m-24' style={{ position: 'relative'}}>
            
            <div className=' flex flex-col justify-center'>
                <div>
                <h1 className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500"
            style={{ linearGradient: "to right, #51087E, #B24BF3" }}>About Me</h1>
                <p className='text-center lg:w-3/4 mx-auto my-8'>Hello I am <span>Mim Khatun</span>. I am a student of B.Sc in Information Technology <span>(IT)</span>, Jahangirnagar University. I am a Full Stack Developer. I am a <span>Quick Learner</span>. Passionate and driven developer with a relentless pursuit of excellence in crafting elegant and efficient code solutions. Strong problem-solving skills, hard working capabilities enable me to identify and resolve complex technical challenges efficiently.</p>
                </div>
                <div className='flex gap-10 flex-col lg:flex-row mx-auto'>
                    <div className='border p-8 rounded-lg'>
                        <h1 className='text-3xl font-bold text-pink-800'>2 years+</h1>
                        <p>Practicing Programming</p>
                    </div>
                    <div className='border p-8 rounded-lg'>
                        <h1 className='text-3xl font-bold text-pink-800'>30+</h1>
                        <p>Completed Projects</p>
                    </div>
                    <div className='border p-8 rounded-lg'>
                        <h1 className='text-3xl font-bold text-pink-800'>100+</h1>
                        <p>Problem Solved</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;