import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { Container } from './styles';
import { useContextCheckout } from '../../hooks/useContext';
import { useQuery } from '@apollo/client';
import { EXTENDED_WARRANTY } from '../../graphql/extendedWarranty';
import { CardGuarantee } from './CardGuarantee';
import { CardFreeGuarantee } from './CardFreeGuarantee';
Modal.setAppElement('#root');

export const ModalGuarantee = () => {
    const { modalIsOpen, setModalIsOpen, setDataGuarantee, dataGuarantee } = useContextCheckout()

    const [ hasGuarantee, setHasGuarantee] = useState(false)

    const { loading, error, data } = useQuery(EXTENDED_WARRANTY);
    
      useEffect(() => {
        if (!hasGuarantee) {
          if (loading) return;
          if (error) {
            alert("Erro :/");
            return;
          }
          setDataGuarantee(data);
          setHasGuarantee(!hasGuarantee);
        }
      }, [loading, error, data, hasGuarantee]);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    const warrantys = dataGuarantee?.extendedWarranty?.methods

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
            <div className='modal-container-wrapperCards'>
                <CardFreeGuarantee />
                {warrantys?.map((warranty, index) => (
                    <CardGuarantee warranty={warranty} key={index}/>
                ))}
            </div>
        </Modal>

    </Container>
  )
}
