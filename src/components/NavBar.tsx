import { FaSearch } from 'react-icons/fa';

const NavBar = () => {
    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <h1 className='font-bold flex-col text-2xl sm:text-xl flex flex-wrap sm:flex-row'>
                    <span>Sahand</span>
                    <span>Estate</span>
                </h1>
                <form action="" className='bg-slate-100 p-3 rounded-lg flex items-center'>
                    <input type="text" placeholder='Search...' className='border-none rounded-md pl-4 bg-transparent lg:w-[350px]' />
                    <FaSearch className='text-slate-500' />
                </form>
                <ul className='flex gap-4'>
                    <li className='hidden sm:inline text-slate-500 hover:underline cursor-pointer'>
                        <a href='/'>
                            Home
                        </a>
                    </li>
                    <li className='hidden sm:inline text-slate-500 hover:underline cursor-pointer'>
                        <a href='/about'>
                            About
                        </a>
                    </li>
                    <li className='hidden sm:inline text-slate-500 hover:underline cursor-pointer'>
                        <a href='/sign-in' >
                            Sign In
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default NavBar;