import React from 'react'
import { Container } from './styles'
import { CardFreeGuarantee } from '../CardFreeGuarantee'
import { CardGuarantee } from '../CardGuarantee'

export const ContentModal = ({extendedWarranty}) => {
    console.log(extendedWarranty)
  return (
    <Container>
        <div className='modal-container'>
            <h3 className='modal-container-title'>Adicione Garantia Estendia</h3>
            <p className='modal-container-description'>Selecione o prazo de proteção e mantenha o produto protegido por mais tempo.</p>
        </div>
        <div className='modal-container-wrapperCards'>
            <CardFreeGuarantee />
            {extendedWarranty?.map((warranty, index) => (
                <CardGuarantee warranty={warranty} key={index}/>
            ))}
        </div>
    </Container>
  )
}
