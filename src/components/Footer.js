import logo from '../logo.svg';

export default function Footer() {

    return (
        <footer>
            <img src={logo} className="footer-logo" alt="Recipes app logo" />
            <div className="copyright hestia-center">React Recipe App © 2023. &copy;All Right reserved! 
            {/* TODO rigth way */}
            <a href="mailto:m.georgieva17@icloud.com">Desing @mlove</a> </div>


        </footer>
    );
}
