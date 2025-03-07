import styled from "styled-components";

export const AboutContainer = styled.main`
    padding-top: 5rem;
    width: 80%;
    margin: 0 auto;

    display: flex;
    justify-content: space-around;

    img {
        width: 20rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        img {
            width: 15rem;
        }
    }
`;

export const TextAboutContainer = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    span {
        color: ${props => props.theme.color["green-500"]};
        font-weight: bold;
    }

    span:nth-child(2) {
        background: linear-gradient(270deg, #FF0004 0%, #E0F 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const TitleAbout = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 1rem;

    font-size: 1.5rem;
    font-weight: bold;

    color: ${props => props.theme.color["green-500"]};

    hr {
        width: 60%;
        border: 1px solid ${props => props.theme.color["green-500"]};
    }
`;