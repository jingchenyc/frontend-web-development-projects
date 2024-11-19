import { useRef, useState } from 'react';
import Button from './Button';

function PanelsPage() {
    const dialogRef = useRef();
    const [modalContent, setModalContent] = useState(''); // State for modal content
    const [message, setMessage] = useState('');

    const openModal = (content) => {
        setModalContent(content); // Update state instead of manipulating DOM
        dialogRef.current.showModal();
    };

    const closeModal = () => {
        dialogRef.current.close();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Form submitted successfully!');
    };

    return (
        <div className="panels-page">
            <h1>Panels Page</h1>
            <div className="panels">
                <div className="panel">
                    <h2>Panel 1</h2>
                    <p>Content for Panel 1</p>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Placeholder for Panel 1"
                        className="panel-image"
                    />
                    <Button
                        type="button"
                        visual="button"
                        onClick={() => openModal('This is more info about Panel 1')}
                    >
                        Learn More
                    </Button>
                </div>
                <div className="panel">
                    <h2>Panel 2</h2>
                    <p>Content for Panel 2</p>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Placeholder for Panel 2"
                        className="panel-image"
                    />
                    <Button
                        type="button"
                        visual="button"
                        onClick={() => openModal('This is more info about Panel 2')}
                    >
                        Learn More
                    </Button>
                </div>
            </div>

            {/* Modal Component */}
            <dialog ref={dialogRef} className="modal">
                {/* Use state to control modal content */}
                <p className="modal-content">{modalContent}</p>
                <form onSubmit={handleSubmit}>
                    <Button type="submit" visual="link">
                        Submit
                    </Button>
                </form>
                <Button type="button" visual="link" onClick={closeModal}>
                    Close
                </Button>
            </dialog>

            {/* Display Message */}
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default PanelsPage;
