import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    width: 100%;
    .shipping-container-pickup {
        padding: 12px 24px;
        border-radius: 8px;
        border: 2px solid ${({ theme }) => theme.FONTS.SHIPPING_CARD};

        display: flex;
        align-items: center;
        width: 100%;
        max-width: 356px;

        input {
            margin-right: 16px;
        }

        .shipping-container-pickup-infos {
            width: 215px;

            .shipping-container-pickup-infos-type {
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                width: 100%;
            }

            .shipping-container-pickup-infos-rules {
                font-style: normal;
                font-weight: 500;
                font-size: 11px;
                line-height: 16px;
                color: ${({ theme }) => theme.FONTS.SHIPPING_INFOS};
                width: 100%;
            }
        }

        .shipping-container-pickup-value {
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            color: ${({ theme }) => theme.FONTS.SHIPPING_CARD};
        }
    }

    .shipping-container-delivery {
        padding: 12px 24px;
        border-radius: 8px;
        border: 2px solid ${({ theme }) => theme.FONTS.SHIPPING_CARD};

        display: flex;
        align-items: center;
        width: 100%;
        max-width: 356px;

        input {
            margin-right: 16px;
        }

        .shipping-container-delivery-infos {
            width: 215px;

            .shipping-container-delivery-infos-type {
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                line-height: 16px;
                width: 100%;
            }

            .shipping-container-delivery-infos-rules {
                font-style: normal;
                font-weight: 500;
                font-size: 11px;
                line-height: 16px;
                color: ${({ theme }) => theme.FONTS.SHIPPING_INFOS};
                width: 100%;
            }
        }

        .shipping-container-delivery-value {
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            color: ${({ theme }) => theme.FONTS.SHIPPING_CARD};
        }
    }
`