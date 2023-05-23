import styled from "styled-components";

export const Container = styled.div `
    height: 64px;
    background-color: ${({ theme }) => theme.FONTS.BACKGROUND_HEADER};
    color: ${({ theme }) => theme.FONTS.TEXT_HEADER};

    .header-container {
        max-width: 1388px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        svg {
            color: ${({ theme }) => theme.FONTS.PRIMARY_LIGHT};
            cursor: pointer;
        }

        .header-InfoAcess {
            display: flex;
            justify-content: space-between;
            height: 64px;
            align-items: center;
            max-width: 195px;

            .header-InfoAcess_LogoImage {
                height: 32px;
                width: 32px;
                background: ${({ theme }) => theme.FONTS.BACKGROUND_LOGO};
                border-radius: 100%;
                cursor: pointer;
                margin-right: 16px;
            }

            .header-InfoAcess_logoName {
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                width: 124px;
                margin-right: 13px;
                cursor: pointer;
            }

        }

        .header-InfoLogin {
            display: flex;
            align-items: center;
            max-width: 235px;
            justify-content: space-between;
            width: 100%;
        
            img {
                cursor: pointer;
            }
        }
    }
`