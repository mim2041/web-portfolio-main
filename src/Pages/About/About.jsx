import profile from '../../assets/images/profile.png'


const About = () => {
    return (
        <div className='flex text-white' style={{ position: 'relative'}}>
            <div className='w-1/2'>
                <img src={profile} alt="" />
            </div>
            <div className='w-1/2 flex flex-col justify-center'>
                <div>
                <h1 className='text-3xl'>About Me</h1>
                <p className='w-3/4'>Hello I am <span>Mim Khatun</span>. I am a student of B.Sc in Information Technology <span>(IT)</span>, Jahangirnagar University. I am a Full Stack Developer. I am a <span>Quick Learner</span>. Passionate and driven developer with a relentless pursuit of excellence in crafting elegant and efficient code solutions. Strong problem-solving skills, hard working capabilities enable me to identify and resolve complex technical challenges efficiently.</p>
                </div>
                <div className='flex justify-between'>
                    <div className='border p-8'>
                        <h1 className='text-3xl font-bold'>30+</h1>
                        <p>Completed Projects</p>
                    </div>
                    <div className='border p-8'>
                        <h1 className='text-3xl font-bold'>100+</h1>
                        <p>Problem Solved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;