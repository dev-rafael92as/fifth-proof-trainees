import React from 'react'
import { Container } from './styles'
import { Button } from '../Button'
import { DropdownQuantity } from '../DropdownQuantity'
import { BsTrash } from 'react-icons/bs'
import { formatPrice } from '../../utils/formatPrice'
import { ShippingOptions } from '../ShippingOptions'
import { ModalGuarantee } from '../ModalGuarantee'
import { useContextCheckout } from '../../hooks/useContext'

export const CardProduct = (infoProduct) => {
    const { setModalIsOpen, modalIsOpen } = useContextCheckout()
    const product = infoProduct.infoProduct
    console.log(product)
  return (
    <Container>
        <div className='cardProduct_container'>
            <div className='cardProduct_firstRow'>
                <div className='cardProduct_firstRow-container-infoProduct'>
                    <div className='cardProduct_firstRow_product'>
                        <p>Produto</p>
                        <div className='cardProduct_firstRow_product-wrapper'>
                            <img referrerPolicy="no-referrer" src={product.image} alt={product.name} />
                            <div className='cardProduct_firstRow_product-wrapper-infos'>
                                <h4 className='cardProduct_firstRow_product-wrapper-infos-name'>{product.name}</h4>
                                <p>Disponível em <span className='cardProduct_firstRow_product-wrapper-infos-available'>CD São Paulo</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='cardProduct_firstRow_price'>
                        <p>Valor unitário</p>
                        <div className='cardProduct_firstRow_price-wrapper'>
                            <p className='cardProduct_firstRow_price-wrapper-listPrice'>{formatPrice(product?.listPrice)}</p>
                            <p className='cardProduct_firstRow_price-wrapper-price'>{formatPrice(product?.price)}</p>
                            <div className='cardProduct_firstRow_price-wrapper-priceTag'>-30%</div>
                        </div>
                    </div>
                    <div className='cardProduct_firstRow_quantity'>
                        <p>Quantidade</p>
                        <div className='cardProduct_firstRow_quantity-wrapper'>
                            <div className='cardProduct_firstRow_quantity-wrapper-dropdown'>
                                <DropdownQuantity />
                            </div>
                            <BsTrash />
                        </div>
                    </div>
                </div>
                <div className='cardProduct_firstRow-guarantee'>
                    <Button title="Adicionar Garantia Estendida" onClick={() => setModalIsOpen(!modalIsOpen)} />
                    <a href="#"> Ver mais opções</a>
                </div>
            </div>
            <div className='cardProduct_lastRow'>
                <div className='cardProduct_lastRow-shippingContaier'>
                    <p className='cardProduct_lastRow-shippingContaier-title'>Forma de Entrega</p>
                    <ShippingOptions shippingInfos={product.shipping}/>
                </div>
                <div className='cardProduct_lastRow-totalsContainer'>
                    <p>Total</p>
                    <p className='cardProduct_lastRow-totalsContainer-value'>{formatPrice(product.price)}</p>
                </div>
            </div>
        </div>

        <ModalGuarantee />
    </Container>
  )
}
