import styles from './nav.module.css';
import Link from 'next/link';

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/companies'>Companies</Link></li>
                <li><Link href='/bookclub'>Book Club</Link></li>
                <li><Link href='/contact'>Join Us</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;