import '../styles/header.css'

function Header() {
    return (
        <header className="row block center sticky">
            <div>
                <a href="#/">
                    <h1>Fit Gym</h1>
                </a>
            </div>
            <div>
                <a href="#/cours">COURS</a>
                <a href="#/coachs">COACHS</a>
                <a href="#/temoiganges">TEMOIGNAGES</a>
                <a href="#/blog">BLOG</a>
                <a href="#/contact">CONTACT</a>
            </div>
        </header>
    )
}






export default Header