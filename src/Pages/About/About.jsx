
const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../../../public/Cover letter.pdf';
    link.download = 'resume.pdf';
    link.click();
}

const About = () => {
    return (
        <div className='text-center text-white m-8 lg:m-24' style={{ position: 'relative'}}>
            
            <div className=' flex flex-col justify-center'>
                <div>
                <h1 className='text-3xl'>About Me</h1>
                <p className='text-center lg:w-1/2 mx-auto my-8'>Hello I am <span>Mim Khatun</span>. I am a student of B.Sc in Information Technology <span>(IT)</span>, Jahangirnagar University. I am a Full Stack Developer. I am a <span>Quick Learner</span>. Passionate and driven developer with a relentless pursuit of excellence in crafting elegant and efficient code solutions. Strong problem-solving skills, hard working capabilities enable me to identify and resolve complex technical challenges efficiently.</p>
                </div>
                <div className='flex gap-10  mx-auto'>
                    <div className='border p-8 rounded-lg'>
                        <h1 className='text-3xl font-bold text-pink-800'>30+</h1>
                        <p>Completed Projects</p>
                    </div>
                    <div className='border p-8 rounded-lg'>
                        <h1 className='text-3xl font-bold text-pink-800'>100+</h1>
                        <p>Problem Solved</p>
                    </div>
                </div>
                <button onClick={handleDownload} className='flex items-center justify-center gap-2 text-2xl text-white bg-gradient-to-r from-purple-900 to-purple-400 py-2 px-4 rounded-lg lg:w-1/3 mx-auto my-8'>Download Resume</button>
            </div>
        </div>
    );
};

export default About;