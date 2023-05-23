import React from 'react'
import { Container } from './styles'
import { formatPrice } from '../../../utils/formatPrice'

export const CardGuarantee = ({warranty}) => {
    console.log(warranty)
  return (
    <Container>
        <div className='container_infosWarrany'>
            <input type="radio" name="" id="" />
            <p>Mais {warranty.months} meses</p>
            <span>de garantia</span>

            <p>Adicione mais {warranty.months} meses após o final da garantia de fábrica</p>
        </div>
        <div className='container_priceWarranty'>
            <p className='container_priceWarranty-value'>{formatPrice(Number(warranty.value))}</p>
            <p className='container_priceWarranty-installment'>em até <strong>10x</strong> de <strong>R$ 92,81</strong></p>
        </div>
    </Container>
  )
}
