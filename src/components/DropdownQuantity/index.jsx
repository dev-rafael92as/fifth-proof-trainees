import React, { useState } from 'react'
import { Container } from './styles'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

export const DropdownQuantity = () => {
    const [ selectedCategory, setSelectedCategory ] = useState(1)
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const hadleSelectCategory = (value) => {
    setSelectedCategory(value)
    setIsOpen(!isOpen)
  }

  return (
    <Container>
        <div>
            <button onClick={toggleDropdown}>{selectedCategory} {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown /> }</button>
            {isOpen && (
                <ul>
                    <li onClick={(e) => hadleSelectCategory(e.target.innerHTML)}>1</li>
                    <li onClick={(e) => hadleSelectCategory(e.target.innerHTML)}>2</li>
                    <li onClick={(e) => hadleSelectCategory(e.target.innerHTML)}>3</li>
                </ul>
            )}
        </div>
    </Container>
  )
}
