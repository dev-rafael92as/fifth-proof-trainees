import styled from "styled-components";

export const Container = styled.div`
    .checkout_container-main {
        background-color: ${({ theme }) => theme.FONTS.TEXT_HEADER};

        .checkout_container-title {
            max-width: 1144px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            height: 96px;
            
        }
    }

    .checkout_containerInfos {
        max-width: 1144px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        .checkout_containerCards {
            margin-top: 16px;
            width: 100%;
        }
    }
`