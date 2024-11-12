import './Reorder.css';

function Reorder({ onReorder }) {
    return (
        <button className="reorder-button" onClick={onReorder}>
            Reorder
        </button>
    );
}

export default Reorder;
