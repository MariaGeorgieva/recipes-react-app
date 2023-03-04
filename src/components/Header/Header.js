// import logo from '../logo.svg';
// import eggs from '../svg/eggs.svg'

import BoottomNav from './BottomNav';
import TopNav from './TopNav'
import styles from './Header.module.css'

export default function Header() {

    return (
        <header className={styles["header-wrapper"]}>
            <TopNav />
            <BoottomNav />
        </header>
    );
}