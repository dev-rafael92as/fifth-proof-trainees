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

        .checkout_containerTotals {
            background: ${({ theme }) => theme.FONTS.TEXT_HEADER};
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);
            border-radius: 8px;
            width: 100%;
            max-width: 322px;
            margin-top: 16px;
            padding: 24px;
            height: 316px;

            .container_totals-values {
                display: flex;
                flex-direction: column;
                gap: 12px;
                padding-bottom: 24px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);

                .container_totals-values-subtotal {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    p {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 24px;
                        opacity: .6;
                    }

                    span {
                        font-style: normal;
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 24px;
                        color: ${({ theme }) => theme.FONTS.TEXT_TOTALS};
                    }
                }

                .container_totals-values-discount {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    p {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 24px;
                        opacity: .6;
                    }

                    span {
                        font-style: normal;
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 24px;
                        color: ${({ theme }) => theme.FONTS.DISCOUNT_TAG};
                    }
                }

                .container_totals-values-shipping {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    p {
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 24px;
                        opacity: .6;
                    }

                    span {
                        font-style: normal;
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 24px;
                        color: ${({ theme }) => theme.FONTS.TEXT_TOTALS};
                    }
                }
            }

            .container_totals-Totalvalues {
                margin-top: 24px;
                text-align: end;
                
                div {
                    display: flex;
                    justify-content: space-between;
                }

                > p {
                    margin-top: 8px;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 16px;

                    letter-spacing: -0.005em;
                }
            }

            .checkout_containerTotals-addToCart {
                border-radius: 5px;
                color: ${({ theme }) => theme.FONTS.TEXT_HEADER};
                background-color: ${({ theme }) => theme.FONTS.COLOR_BUTTON};
                height: 48px;
                width: 100%;
                max-width: 203px;
                border: none;
                margin: 24px auto 0;
            }
        }
    }

    
`