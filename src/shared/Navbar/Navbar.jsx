import { Link } from "react-router-dom";
import { FaFileContract, FaHome, FaUserAlt } from 'react-icons/fa';
import { AiFillProject } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className="fixed bottom-10 w-full ">
            <nav className="flex gap-8 mx-auto items-center justify-around py-5 text-white bg-gray-700 transparent w-1/2 lg:w-1/4 rounded-xl ">
                <Link to='/'><FaHome/></Link>
                <Link to='/about'><FaUserAlt/></Link>
                <Link><AiFillProject/></Link>
                <Link><FaFileContract/></Link>
            </nav>
        </div>
    );
};

export default Navbar;