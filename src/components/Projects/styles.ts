import styled from 'styled-components';

interface ProjectExempleProps {
    imgSrc: string;
}

export const ProjectsContainer = styled.div`
    overflow: hidden;

    width: 70%;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 5rem;

    @media (max-width: 768px) {
        width: 100%;
        gap: 5rem;
    }

    @media (max-width: 640px) {
        height: 125vh
    }
`;

export const TitleProjects = styled.div`
    width: 50%;

    display: flex;
    align-items: center;
    gap: 1rem;

    font-size: 1.5rem;
    font-weight: bold;

    color: ${props => props.theme.color["green-500"]};

    hr {
        width: 100%;
        border: 1px solid ${props => props.theme.color["green-500"]};
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const ProjectsArea = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProjectContent = styled.div`
    width: 40rem;
    height: 18rem;
    background-color: ${props => props.theme.color["green-500"]};

    display: flex;
    align-items: center;

    border-radius: 10px;

    @media (max-width: 768px) {
        width: 22rem;
        height: 27rem;
    }

    @media (max-width: 640px) {
        width: 15rem;
        height: 25rem;
    }
`;

export const ContentWrapper = styled.div`
    width: 100%;
    height: 70%;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
        height: 100%;
        flex-direction: column;
        justify-content: space-around;
        padding: 0;
    }

    @media (max-width: 640px) {
        justify-content: space-around;
        height: fit-content;
    }

`;

export const ProjectExemple = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "imgSrc"
}) <ProjectExempleProps>`
    width: 18.75rem;
    height: 12.5rem;
    background: url(${(props) => props.imgSrc}) no-repeat center center;
    background-size: cover;
    border: 2px solid ${(props) => props.theme.color["blue-dark"]};
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  
    @media (max-width: 640px) {
      width: 13rem;
      height: 8rem;
    }
  `;

export const ProjectText = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 1rem 0;

    color: ${props => props.theme.color["blue-dark"]};

    h3 {
        font-size: 1.5rem;
        font-weight: bold;
    }

    p {
        font-size: 0.875rem;
    }

    div:nth-child(2) {
        display: flex;
        gap: 1rem;

        a {
            background-color: ${props => props.theme.color["blue-dark"]};
            color: ${props => props.theme.color["green-500"]};
            padding: 0.5rem 1rem;
            border-radius: 10px;
            box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);

            transition: 0.3s;

            &:hover {
                background-color: ${props => props.theme.color["blue-light"]};
                transform: translate(-0.1rem, -0.1rem);
            }
        }
    }

    @media (max-width: 768px) {
        width: 90%;
        height: 40%;
        gap: 1rem;

        h3 {
            font-size: 1.2rem;
        }

        p {
            font-size: 0.875rem;
        }
    }
`;