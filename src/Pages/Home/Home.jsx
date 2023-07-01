import { useEffect } from 'react';
import bg1 from '../../assets/images/bg1.jpg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profile from '../../assets/images/profile.png';
import ParticlesJS from '../../components/Particles';
// import Particles from 'react-tsparticles';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Home = () => {
  const [text] = useTypewriter({
    words: [' Front-End Developer', ' Back-End Developer', ' Full Stack Developer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  });

  useEffect(() => {
    
    const particlesContainer = document.getElementById('particles-container');
    if (particlesContainer) {
      particlesContainer.style.pointerEvents = 'none';
    }
  }, []);

  return (
    <div style={{ position: 'relative'}}>
      <div className='bg-cover bg-center mt-0 flex flex-col lg:flex-row items-center'>
      <div className='particles-container' id='particles-container' style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
      <div className='w-1/2'>
        <img src={profile} alt='' />
      </div>
      <div style={{fontFamily: "'Lobster', cursive",  zIndex: 1  }} className='m-10 flex flex-col justify-center gap-4'>
        <h2 className='text-3xl text-white'>Hello, This is</h2>
        <h1 className='text-4xl text-white font-bold ' style={{linearGradient: "to right, #51087E, #B24BF3",  }}>Mim Khatun</h1>
        <div>
        <h3 className='text-3xl font-bold text-blue-300'>
          <span>{text}</span>
          <span>
            <Cursor />
          </span>
        </h3>
        </div>
        <p className='text-white lg:w-1/2'>Passionate for exploring new things. Addicted for coding and building outstanding websites. From building scalable web applications to designing intuitive user interfaces, I am adept at transforming complex ideas into practical solutions.</p>
        <Link to="/about"><button className='flex items-center justify-center gap-2 text-2xl text-white bg-gradient-to-r from-purple-900 to-purple-400 py-2 px-4 rounded-lg lg:w-1/3'>More about me? <AiOutlineArrowRight/></button></Link>
      </div>
    </div>
    </div>
  );
};

export default Home;
