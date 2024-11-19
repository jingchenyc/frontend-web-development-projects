function Header({ setCurrentPage }) {
    return (
        <header className="header">
            <nav>
                <button onClick={() => setCurrentPage('text')}>Text Page</button>
                <button onClick={() => setCurrentPage('cards')}>Cards Page</button>
                <button onClick={() => setCurrentPage('panels')}>Panels Page</button>
            </nav>
        </header>
    );
}

export default Header;
