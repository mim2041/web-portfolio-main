import { useEffect } from 'react';
import bg1 from '../../assets/images/bg1.jpg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profile from '../../assets/images/profile.png';
import ParticlesJS from '../../components/Particles';
// import Particles from 'react-tsparticles';

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
    <div style={{ position: 'relative', fontFamily: "'Lobster', cursive" }} className='bg-cover bg-center mt-0 flex'>
      <div className='particles-container' id='particles-container' style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
      <div className='w-1/2'>
        <img src={profile} alt='' />
      </div>
      <div className='m-10 flex flex-col justify-center gap-4' style={{ zIndex: 1 }}>
        <h2 className='text-3xl text-white'>Hello, This is</h2>
        <h1 className='text-4xl text-white font-bold'>Mim Khatun</h1>
        <h3 className='text-3xl font-bold text-blue-300'>
          I am a
          <span>{text}</span>
          <span>
            <Cursor />
          </span>
        </h3>
        <button className='text-2xl text-white bg-gradient-to-r'>Want to know more about me?</button>
      </div>
    </div>
  );
};

export default Home;
