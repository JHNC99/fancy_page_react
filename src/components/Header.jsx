import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__logo">Sequence Page</div>

                <ul className="header__nav__list">
                    <li className="header__nav__list__item">Home</li>
                    <li className="header__nav__list__item">About</li>
                    <li className="header__nav__list__item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header