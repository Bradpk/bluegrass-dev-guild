import styles from './nav.module.css';
import Link from 'next/link';

function Nav() {
    return (
        <nav className='bg-black text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <ul className='flex justify-between w-full'> 
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        <li><Link href='/companies'>Companies</Link></li>
                        <li><Link href='/bookclub'>Book Club</Link></li>
                        <li><Link href='/contact'>Join Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;