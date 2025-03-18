import styled from 'styled-components';

export const ContactContainer = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    padding-top: 5rem;
`;

export const TitleContact = styled.div`
    width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    font-size: 1.5rem;
    font-weight: bold;

    color: ${props => props.theme.color["green-500"]};

    hr {
        width: 60%;
        border: 1px solid ${props => props.theme.color["green-500"]};
    }
`;

export const ContactArea = styled.div`
    width: 60%;
    height: 65%;

    background-color: ${props => props.theme.color["green-500"]};
    border-radius: 10px;

    padding: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px) {
        align-items: center;
        justify-content: space-around;
        padding: 1.5rem;
        width: 70%;
        height: 50%;
    }

    @media (max-width: 500px) {
        width: 90%;
        height: 50vh;
    }
`;

export const TextContactArea = styled.div`
    color: ${props => props.theme.color["blue-dark"]};
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    h3 {
        font-size: 2rem;
        font-weight: bold;
    }

    a {
        background-color: ${props => props.theme.color["blue-dark"]};
        color: ${props => props.theme.color["green-500"]};
        padding: 1rem 1.5rem;
        border-radius: 10px;
        font-weight: bold;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
        cursor: pointer;

        transition: 0.3s;

        &:hover {
            background-color: ${props => props.theme.color["blue-light"]};
            transform: translate(-0.1rem, -0.1rem);
        }
    }

    @media (max-width: 768px) {
        font-size: 0.8rem;
        align-items: center;

        h3 {
            font-size: 1.3rem;
        }

        a {
            font-size: 1.3rem;
            padding: 0.5rem 1rem;
        }
    }

    @media (max-width: 500px) {
        font-size: 1rem;

        h3 {
            font-size: 1.3rem;
        }

        

        a {
            padding: 0.5rem 1rem;
            font-size: 1rem;
        }
    }
`;

export const LinksContactArea = styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-end;
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

        img {
            width: 3rem;
            height: 3rem;
        }

        transition: 0.3s;

        &:hover {
            background-color: ${props => props.theme.color["blue-light"]};
            transform: translate(-0.1rem, -0.1rem);
        }
    }

    @media (max-width: 768px) {
        justify-content: center;
        a {
            width: 4rem;
            height: 4rem;

            img {
                width: 3rem;
                height: 3rem;
            }
        }
    } 

    @media (max-width: 500px) {
        a {
            width: 3rem;
            height: 3rem;

            img {
                width: 2rem;
                height: 2rem;
            }
        }
    }
`;