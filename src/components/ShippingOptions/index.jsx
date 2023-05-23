import React from 'react'
import { Container } from './styles'
import { formatPrice } from '../../utils/formatPrice'

export const ShippingOptions = (shippingInfos) => {
    const deliveryInfo = shippingInfos.shippingInfos.delivery
    const pickUp = shippingInfos.shippingInfos.pickup

  return (
    <Container>
        { pickUp &&
            <div className='shipping-container-pickup'>
                <input type="radio" name="" id="" />
                <div className='shipping-container-pickup-infos'>
                    <p className='shipping-container-pickup-infos-type'>Retirada</p>
                    <p className='shipping-container-pickup-infos-rules'>Disponível em estoque</p>
                </div>
                <p className='shipping-container-pickup-value'>Grátis</p>
            </div>
        }

        <div className='shipping-container-delivery'>
            <input type="radio" name="" id="" />
            <div className='shipping-container-delivery-infos'>
                <p className='shipping-container-delivery-infos-type'>Entrega</p>
                <p className='shipping-container-delivery-infos-rules'>Receba até {deliveryInfo?.days} úteis</p>
            </div>
            <p className='shipping-container-delivery-value'>+{formatPrice(Number(deliveryInfo?.value))}</p>
        </div>
    </Container>
  )
}
