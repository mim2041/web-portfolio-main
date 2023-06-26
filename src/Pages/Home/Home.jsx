import bg1 from '../../assets/images/bg1.jpg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profile from '../../assets/images/profile.png'

const Home = () => {
    const [text] = useTypewriter({
        words: [' Front-End Developer', ' Back-End Developer', ' Full Stack Developer'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80
    });

    return (
        <div style={{backgroundImage: `url(${bg1})`, fontFamily: "'Lobster', cursive"}} className='bg-cover bg-center mt-0 flex'>
            <div className='w-1/2'>
                <img src={profile} alt="" />
            </div>
            <div className='m-10 flex flex-col justify-center gap-4'>
                <h2 className='text-3xl text-white'>Hello, This is</h2>
                <h1 className='text-4xl text-white font-bold'>Mim Khatun</h1>
                <h3 className='text-5xl font-bold text-blue-300'>I am a
                    <span>{text}</span>
                    <span ><Cursor/></span>
                </h3>
                
            </div>
        </div>
    );
};

export default Home;