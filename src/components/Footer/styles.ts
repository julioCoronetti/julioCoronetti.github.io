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

    @media (max-width: 768px) {
        height: 60vh;

        p {
            font-size: 0.75rem;
        }
    }

    @media (max-width: 500px) {
        height: 70vh;

        p {
            font-size: 0.5rem;
        }
    }
`;

export const FooterContent = styled.div`
    width: 80%;

    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        p {
            font-size: 1rem;
        }
        flex-wrap: wrap;
        gap: 2rem;
    }

    @media (max-width: 500px) {
        p {
            font-size: 0.75rem;
        }
        gap: 1rem;
    }
`;

export const FooterText = styled.div`
    width: 20%;
    user-select: none;
    
    h2 {
        font-size: 2.1rem;
        font-weight: bold;
    }

    @media (max-width: 768px) {
        p {
            width: 200%;
        }
    }

    @media (max-width: 500px) {
        h2 {
            font-size: 1.5rem;
        }

        p {
            width: 300%;
        }
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

    @media (max-width: 500px) {
        gap: 1rem;

        a {
            font-size: 0.75rem;
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