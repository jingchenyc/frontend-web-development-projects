import { useRef } from 'react';

function Modal() {
    const dialogRef = useRef();

    const openModal = () => dialogRef.current.showModal();
    const closeModal = () => dialogRef.current.close();

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <dialog ref={dialogRef}>
                <p>This is a modal window</p>
                <button onClick={closeModal}>Close</button>
            </dialog>
        </div>
    );
}

export default Modal;
