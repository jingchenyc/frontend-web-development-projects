import { useState } from 'react';
import './App.css';
import Reorder from './Reorder';

function App() {
    const [count, setCount] = useState(0);

    // Function to handle reordering (sets count to 5)
    const handleReorder = () => setCount(5);

    return (
        <div className="app">
            <p>Inventory Count: {count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <button onClick={() => setCount(prev => Math.max(prev - 1, 0))} disabled={!count}>-</button>
            {count === 0 && <Reorder onReorder={handleReorder} />}
        </div>
    );
}

export default App;
