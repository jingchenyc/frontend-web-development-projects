import Button from './Button';

function CardsPage({ setCurrentPage }) {
    const cards = [
        { id: 1, title: 'Card 1', content: 'This is card 1 content.', link: 'text' },
        { id: 2, title: 'Card 2', content: 'This is card 2 content.', link: 'text' },
        { id: 3, title: 'Card 3', content: 'This is card 3 content.', link: 'text'  },
    ];

    return (
        <div className="cards-page">
            <h1>Cards Page</h1>
            <div className="cards-container">
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <h3>{card.title}</h3>
                        <p>{card.content}</p>
                        {card.link && (
                            <Button
                                type="button"
                                visual="link"
                                onClick={() => setCurrentPage(card.link)}
                            >
                                Go to {card.link} Page
                            </Button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardsPage;
