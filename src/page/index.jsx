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
                        <div className='container_totals-values'>
                            <div className='container_totals-values-subtotal'>
                                <p>Subtotal</p>
                                <span>R$ 10.986,90</span>
                            </div>
                            <div className='container_totals-values-discount'>
                                <p>Desconto</p>
                                <span>-R$ 2.069,70</span>
                            </div>
                            <div className='container_totals-values-shipping'>
                                <p>Entrega</p>
                                <span>R$ 39,80</span>
                            </div>
                        </div>

                        <div className='container_totals-Totalvalues'>
                            <p>Total</p>
                            <span>R$ 8.876,50</span>

                            <p>em até <strong>10x</strong> de <strong>R$ 887,65</strong></p>
                        </div>

                        <button className='checkout_containerTotals-addToCart'>Ir para o Pagamento</button>
                </div>
            </div>
        </main>
    </Container>


  )
}
