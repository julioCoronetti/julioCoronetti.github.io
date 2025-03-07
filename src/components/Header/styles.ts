import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 70%;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;

    a { 
        border: 2px solid ${props => props.theme.color["green-500"]};
        padding: 1rem 1.5rem;
        border-radius: 5px;
        color: ${props => props.theme.color["green-500"]};
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;

        transition: 0.5s;

        &:hover {
            background: ${props => props.theme.color["green-500"]};
            color: ${props => props.theme.color["blue-dark"]};
        }

    }

    @media (max-width: 480px) {
        a {
            padding: 0.5rem 1rem;
        }
    }
`;

export const TextContainer = styled.div`
    font-size: 1.3rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    

    h1 {
        font-size: 3rem;
        font-weight: bold;
    }

    h1:nth-child(2) {
        background: linear-gradient(90deg, #BACEE4 0%, #67727E 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: none;
    }

    span {
        color: ${props => props.theme.color["green-500"]};
        text-decoration: underline;
    }

    p {
        color: ${props => props.theme.color["gray-600"]};
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.5rem;

            span {
                font-size: 2.5rem;
            }
        }

        h1:nth-child(3) {
            display: flex;
            flex-direction: column;
        }

        p {
            font-size: 1.5rem;
        }

        span {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 1.5rem;

            span {
                font-size: 1.3rem;
            }
        }
        
        p {
            font-size: 1rem;
        }

        span {
            font-size: 1rem;
        }
    }
`;