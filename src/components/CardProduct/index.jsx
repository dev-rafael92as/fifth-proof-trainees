import React from 'react'
import { Container } from './styles'
import { Button } from '../Button'

export const CardProduct = (infoProduct) => {
    const product = infoProduct.infoProduct
    console.log(product)
  return (
    <Container>
        <div className='cardProduct_container'>
            <div className='cardProduct_firstRow'>
                <div className='cardProduct_firstRow-container-infoProduct'>
                    <div className='cardProduct_firstRow'>
                        <p>Produto</p>
                        <div>
                            <img referrerPolicy="no-referrer" src={product.image} alt={product.name} />
                        </div>
                    </div>
                </div>
                <Button title="Adicionar Garantia Estendida" />
            </div>
            <div className='cardProduct_lastRow'>

            </div>
        </div>
    </Container>
  )
}
