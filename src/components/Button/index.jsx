import React from 'react'
import { Container } from './styles'

export const Button = ({icon: Icon, title, ...rest}) => {
  return (
    <Container {...rest}>
        {Icon && <Icon size={14} />}
        {title}
    </Container>
  )
}