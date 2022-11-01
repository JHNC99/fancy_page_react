import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__logo">Sequence Page</div>

                <ul className="header__nav__list">
                    <li className="header__nav__list__item"><a href="#">Home</a></li>
                    <li className="header__nav__list__item"><a href="#">About</a></li>
                    <li className="header__nav__list__item"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header