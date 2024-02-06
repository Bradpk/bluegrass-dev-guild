import styles from './bookclub.module.css';
import Nav from '../components/nav';

function BookClub() {
    return (
        <>
         <Nav />

        <p>Meetups are to learn things by practice<br></br>
book club is to learn things by studying</p>
<p>Our purpose is to find books the group will enjoy and read, and learn something. We want books that help us learn and grow as technology leaders.</p>
<p>Below is our list of read and unread books. If you would like to take part, join our slack channel.</p>
        </>
    );
}

export default BookClub;