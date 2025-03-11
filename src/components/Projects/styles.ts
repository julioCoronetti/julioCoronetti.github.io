import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    width: 70%;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 5rem;

    @media (max-width: 768px) {
        width: 90%;
        gap: 5rem;
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

    @media (max-width: 440px) {
        width: 22rem;
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
        justify-content: center;
        padding: 0;
    }
`;

export const ProjectExemple = styled.div`
    width: 18.75rem;
    height: 12.5rem;
    background: url('/src/assets/projects/todo-project.png') no-repeat center center;
    background-size: cover;
    border: 2px solid ${props => props.theme.color["blue-dark"]};
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);

    @media (max-width: 440px) {
        width: 17.5rem;
        height: 11.25rem;
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
    }
`;