import styles from './nav.module.css';
import Link from 'next/link';
import Image from 'next/image'

function Nav() {
    return (
        <nav className='bg-black text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-18'>
                    <ul className='flex justify-between w-full'>
                        <li><Link href='/'>  <Image
                            src='/bdg.png'
                            width={100}
                            height={100}
                            alt="Bluegrass Developers Guild Logo"
                        /></Link></li>
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