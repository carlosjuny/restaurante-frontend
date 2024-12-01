import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 450px;
    /* overflow: hidden; */
    z-index: -1;
`;

const CloseButton = styled.button`
    position: relative;
    width: 30px;
    height: 30px;
    margin-left: 430px;
    top: -20px;
    background: #ffffff;
    border: none;
    font-size: 1.5rem;
    font-weight: 700;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    z-index: 2;

    &:hover {
        background-color: #333;
        color: #ffffff;
        transition: .5s ease;
    }
`;

const Modal = ({ children, onClose }) => {
    return (
        <ModalWrapper>
            <ModalContent>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                {children}
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;
