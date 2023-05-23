import React from 'react'
import Modal from 'react-modal'
import { Container } from './styles';
import { useContextCheckout } from '../../hooks/useContext';
Modal.setAppElement('#root');

export const ModalGuarantee = () => {
    const { modalIsOpen, setModalIsOpen } = useContextCheckout()

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

  return (
    <Container>
        <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Exemplo de modal"
                style={{
                    content: {
                        border: 'none',
                        maxWidth: '1088px',
                        margin: '0 auto',
                        height: '624px',
                        padding: '48px 64px',
                        borderRadius: '8px',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05), 0px 12px 24px rgba(0, 0, 0, 0.16)'
                    },
                    overlay: {
                        background: 'rgba(000, 000, 000, 0.1)'
                    }
                }}
            >
                <div className='modal-container'>
                    <h3 className='modal-container-title'>Adicione Garantia Estendia</h3>
                    <p className='modal-container-description'>Selecione o prazo de proteção e mantenha o produto protegido por mais tempo.</p>
                </div>
            </Modal>

    </Container>
  )
}
