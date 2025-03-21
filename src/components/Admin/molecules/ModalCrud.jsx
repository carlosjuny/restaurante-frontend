import styled from "styled-components";
import PropsTypes from 'prop-types'

const CrudStyle = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 6;
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    position: relative;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    animation: fadeIn 0.3s ease-in-out;
    z-index: 7;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
`;

const ModalCrud = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <CrudStyle>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </CrudStyle>
  );
};

ModalCrud.propTypes = {
  isOpen: PropsTypes.bool.isRequired,
  onClose: PropsTypes.func,
  title: PropsTypes.string,
  children: PropsTypes.node.isRequired,
}

export default ModalCrud;
