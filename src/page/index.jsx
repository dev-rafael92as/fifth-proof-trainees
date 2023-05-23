import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Container } from './styles'
import { Button } from '../components/Button'
import { useQuery } from '@apollo/client'
import { ORDERFORM } from '../graphql/checkoutProducts'
import { useContextCheckout } from '../hooks/useContext'
import { CardProduct } from '../components/CardProduct'

export const CheckoutPage = () => {
    const { products, setProducts} = useContextCheckout()
    const [ hasProducts, setHasProducts] = useState(false)

    const { loading, error, data } = useQuery(ORDERFORM, {
        variables: {
          input: {
            orderFormId: 'c7eb7303-c53f-417d-8d51-cce67e5959e1'
          },
        },
      });
    
      useEffect(() => {
        if (!hasProducts) {
          if (loading) return;
          if (error) {
            alert("Erro :/");
            return;
          }
          setProducts(data);
          setHasProducts(!hasProducts);
        }
      }, [loading, error, data, hasProducts, setProducts]);
   
    const orderItens = products?.orderForm?.items
    
  return (
    <Container>
        <Header />

        <main className='checkout_container'>
            <div className='checkout_container-main'>
                <div className='checkout_container-title'>
                    <h1 className='checkout_title'>Resumo do pedido</h1>
                    <Button title="Continuar comprando"/>
                </div>
            </div>

            <div className='checkout_containerInfos'>
                <div className='checkout_containerCards'>
                    {orderItens && orderItens.map((item, index) => (
                        <CardProduct infoProduct={item} key={index}/>
                    ))}
                </div>
                <div className='checkout_containerTotals'>
                        Totais
                </div>
            </div>
        </main>
    </Container>


  )
}
