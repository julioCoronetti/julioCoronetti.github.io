import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    width: 70%;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 5rem;
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
`;

export const ContentWrapper = styled.div`
    width: 100%;
    height: 70%;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const ProjectExemple = styled.div`
    width: 60%;
    height: 100%;
    background-color: ${props => props.theme.color["blue-dark"]};
    border-radius: 10px;
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
        }
    }
`;