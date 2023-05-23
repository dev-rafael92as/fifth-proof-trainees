import React from 'react'
import { Container } from './styles'
import { RiArrowDownSLine } from 'react-icons/ri'
import { GoInfo, GoBell } from 'react-icons/go'
import perfilImage from '../../assets/perfilmage.png'

export const Header = () => {
  return (
    <Container>
        <main className='header-container'>
            <div className='header-InfoAcess'>
                <div className='header-InfoAcess_LogoImage'>

                </div>
                <span className='header-InfoAcess_logoName'>
                    Trainee Store
                </span>
                <RiArrowDownSLine />
            </div>

            <div className='header-InfoLogin'>
                <div className='header-InfoLogin_wrapperInfo'>
                    <GoInfo />
                </div>
                <div className='header-InfoLogin_wrapperBell'>
                    <GoBell />
                </div>
                <div className='header-InfoLogin_wrapperImagePerfil'>
                    <img src={perfilImage} alt="Foto de Perfil do usuário" />
                </div>
                <span className='header-InfoLogin_Name'>Gustavo Silva</span>
            </div>
        </main>
    </Container>
  )
}
