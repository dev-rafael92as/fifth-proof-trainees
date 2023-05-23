import styled from "styled-components";

export const Container = styled.div`
    max-width: 780px;
    width: 100%;
    height: 366px;
    
    .cardProduct_container {
        padding: 12px 24px 24px;
        width: 100%;
        border-radius: 8px;
        background: ${({ theme }) => theme.FONTS.TEXT_HEADER};

        .cardProduct_firstRow {
            width: 100%;
            .cardProduct_firstRow-container-infoProduct {
                display: flex;
                gap: 24px;

                .cardProduct_firstRow_product {
                    width: 100%;
                    p {
                        font-style: normal;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 16px;
                        color: ${({ theme }) => theme.FONTS.TEXT_CARD_TITLE};
                    }

                    .cardProduct_firstRow_product-wrapper {
                        display: flex;
                        margin-top: 36px;

                        img {
                            width: 40px;
                            height: 40px;
                            border-radius: 4px;
                        }

                        .cardProduct_firstRow_product-wrapper-infos {
                            margin-left: 16px;

                            h4 {
                                font-style: normal;
                                font-weight: 500;
                                font-size: 14px;
                                line-height: 20px;
                                width: 392px;
                            }

                            p {
                                font-style: normal;
                                font-weight: 500;
                                font-size: 12px;
                                line-height: 16px;
                                color: ${({ theme }) => theme.FONTS.TEXT_CARD_TITLE};
                                span {
                                    color: ${({ theme }) => theme.FONTS.COLOR_BUTTON};
                                }
                            }
                        }
                    }
                }

                .cardProduct_firstRow_price {
                    width: 100%;
                    max-width: 85px;
                    text-align: center;
                    p {
                        font-style: normal;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 16px;
                        color: ${({ theme }) => theme.FONTS.TEXT_CARD_TITLE};
                    }

                    .cardProduct_firstRow_price-wrapper {
                        margin-top: 36px;
                        text-align: center;

                        .cardProduct_firstRow_price-wrapper-listPrice {
                            font-style: normal;
                            font-weight: 500;
                            font-size: 12px;
                            line-height: 16px;
                        }

                        .cardProduct_firstRow_price-wrapper-price {
                            font-style: normal;
                            font-weight: 600;
                            font-size: 14px;
                            line-height: 20px;
                            color: ${({ theme }) => theme.FONTS.TEXT_COLOR};
                        }

                        .cardProduct_firstRow_price-wrapper-priceTag {
                            width: 48px;
                            height: 20px;
                            border-radius: 500px;
                            background-color: ${({ theme }) => theme.FONTS.DISCOUNT_TAG};
                            color: ${({ theme }) => theme.FONTS.TEXT_HEADER};
                            margin: 0 auto;

                            font-style: normal;
                            font-weight: 700;
                            font-size: 12px;
                            line-height: 16px;

                            text-align: center;
                            letter-spacing: -0.01em;
                        }
                    }
                }

                .cardProduct_firstRow_quantity {
                    width: 100%;
                    max-width: 137px;
                    p {
                        font-style: normal;
                        font-weight: 400;
                        font-size: 12px;
                        line-height: 16px;
                        color: ${({ theme }) => theme.FONTS.TEXT_CARD_TITLE};
                    }

                    .cardProduct_firstRow_quantity-wrapper {
                        margin-top: 38px;

                        display: flex;
                        align-items: center;

                        .cardProduct_firstRow_quantity-wrapper-dropdown {
                            max-width: 96px;
                            width: 100%;
                            margin-right: 26px;
                        }
                    }
                }
            }

            .cardProduct_firstRow-guarantee {
                display: flex;
                align-items: center;
                width: 100%;
                justify-content: space-between;

                a {
                    font-style: normal;
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 16px;
                    color: ${({ theme }) => theme.FONTS.COLOR_BUTTON};
                }
            }
        }

        .cardProduct_lastRow {
            display: flex;
        }
    }
`