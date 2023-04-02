import { Link } from 'react-router-dom';
import heroImg from '../../assets/ana-azevedo.jpg';
import { ButtonPrimary } from '../Buttons/Buttons';
import styles from './Header.module.css';

export default function Hero() {

    return (

        <div className={styles["header-hero"]}>
            <img src={heroImg} className={styles["hero-img"]} alt="hero" />
            <section className={styles["container-content"]}>
                <h4 className={styles["hero-subs"]}>You are what you eat, so eat dessert</h4>
                <h2 className={styles["hero-title"]}>The secret ingredient is — and will always be — love</h2>
               <Link to={'/recipes'}><ButtonPrimary value={'All Recipes'} /></Link> 
            </section>

        </div>
    )
}