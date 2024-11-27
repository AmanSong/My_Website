import React from 'react';
import './ImageModal.css';

const ImageModal = ({ show, onClose, image}) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <img src={image} alt="Display" className="modal-image" />
            </div>
        </div>
    );
};

export default ImageModal;
