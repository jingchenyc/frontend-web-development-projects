import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import TextPage from './TextPage';
import CardsPage from './CardsPage';
import PanelsPage from './PanelsPage';

function App() {
    const [currentPage, setCurrentPage] = useState('text');

    const renderPage = () => {
        switch (currentPage) {
            case 'text':
                return <TextPage />;
            case 'cards':
                return <CardsPage setCurrentPage={setCurrentPage} />;
            case 'panels':
                return <PanelsPage />;
            default:
                return <TextPage />;
        }
    };

    return (
        <div className="app">
            <Header setCurrentPage={setCurrentPage} />
            <main>{renderPage()}</main>
            <Footer />
        </div>
    );
}

export default App;
