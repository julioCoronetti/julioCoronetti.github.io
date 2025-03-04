import styled from 'styled-components';

export const ContactContainer = styled.div`
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
    }
`;

export const LinksContactArea = styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    a {
        display: flex;
        width: 4rem;
        height: 4rem;
        border-radius: 10px;
        background-color: ${props => props.theme.color["blue-dark"]};
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    }
`;