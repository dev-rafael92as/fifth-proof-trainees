import React from 'react'
import { Header } from '../components/Header'
import { Container } from './styles'
import { Button } from '../components/Button'

export const CheckoutPage = () => {
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

            
        </main>
    </Container>


  )
}
