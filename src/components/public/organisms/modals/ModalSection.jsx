import { useState } from 'react';
import Modal from '../../../public/molecules/Modal';
import ModalForm from './LoginModal';

const ModalWithForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <div>
      <button onClick={openModal}>Abrir Modal</button>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ModalForm onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Correo:</label>
            <input type="email" id="email" name="email" required />
          </ModalForm>
        </Modal>
      )}
    </div>
  );
};

export default ModalWithForm;
