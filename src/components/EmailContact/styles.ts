import styled from "styled-components";

export const EmailContactContainer = styled.div`
    overflow: hidden;
    margin: 8rem auto;

    display: flex;
    justify-content: center;
    gap: 0.5rem;

    color: ${props => props.theme.color["blue-dark"]};

    div {
        width: 5rem;
        height: 5rem;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 10px 0 0 10px;

        background-color: ${props => props.theme.color["green-500"]};
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
    }

    button {
        width: 18rem;
        height: 5rem;
        border-radius: 0 10px 10px 0;

        background-color: ${props => props.theme.color["green-500"]};
        font-size: 1.2rem;
        font-weight: bold;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

        cursor: pointer;
        transition: 0.5s;

        &:hover {
            transform: translate(0.3rem, 0.3rem);
        }

        &:active {
            background-color: ${props => props.theme.color["green-100"]};
            transform: translate(0.1rem, 0.1rem);
        }
    }
`;