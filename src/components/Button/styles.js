import styled from "styled-components";

export const Container = styled.button`
    background-color: transparent;
    border: 0.0625rem solid ${({ theme }) => theme.FONTS.COLOR_BUTTON};
    color: ${({ theme }) => theme.FONTS.COLOR_BUTTON};
    border-radius: 0.5rem;

    display: flex;
    align-items: center;

    width: 100%;
    max-width: 13.5rem;
    height: 3rem;
    justify-content: center;
    gap: 1.25rem;

    :hover {
        background-color: ${({ theme }) => theme.FONTS.COLOR_BUTTON};
        filter: brightness(1);
        transition: all ease-in-out .3s;
        color: ${({ theme }) => theme.FONTS.TEXT_HEADER};
    }
`