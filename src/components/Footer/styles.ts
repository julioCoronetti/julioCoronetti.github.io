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
    
    h2 {
        font-size: 2.2rem;
        font-weight: bold;
    }
`;

export const LinksNavigationFooter = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
`;

export const LinksFooterArea = styled.div`
    display: flex;
    gap: 1rem;

    a {
        display: flex;
        width: 4rem;
        height: 4rem;
        border-radius: 10px;
        background-color: ${props => props.theme.color["blue-dark"]};
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);

        color: ${props => props.theme.color["green-500"]};
    }
`;