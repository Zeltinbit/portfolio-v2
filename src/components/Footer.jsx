function Footer() {

    const year = new Date().getFullYear();

    return (

        <footer className="footer">

            <p>

                © {year} Tinbite Daniel. All Rights Reserved.

            </p>

            <p>

                Built with React ❤️

            </p>

        </footer>

    );

}

export default Footer;