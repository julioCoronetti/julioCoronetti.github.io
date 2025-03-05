import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    height: 50vh;

    background-color: ${props => props.theme.color["green-500"]};
    color: ${props => props.theme.color["blue-dark"]};
    font-weight: bold;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    p {
        display: flex;
        align-items: center;
        font-size: 1rem;
        gap: 0.5rem;
    }
`;

export const FooterContent = styled.div`
    width: 80%;

    display: flex;
    justify-content: space-between;
`;

export const FooterText = styled.div`
    width: 20%;
    user-select: none;
    
    h2 {
        font-size: 2.2rem;
        font-weight: bold;
    }
`;

export const LinksNavigationFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;

    a {
        border-bottom: 2px solid transparent;
        cursor: pointer;

        transition: 0.3s;

        &:hover {
            border-bottom: 2px solid ${props => props.theme.color["blue-dark"]};
        }
    }
`;

export const LinksFooterArea = styled.div`
    display: flex;
    gap: 1rem;

    a {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 4rem;
        height: 4rem;
        border-radius: 10px;
        background-color: ${props => props.theme.color["blue-dark"]};
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);

        transition: 0.3s;

        &:hover {
            background-color: ${props => props.theme.color["blue-light"]};
            transform: translate(-0.1rem, -0.1rem);
        }

        img {
            width: 3rem;
            height: 3rem;
        }
    }
`;