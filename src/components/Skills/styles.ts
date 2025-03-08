import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

interface BadgeRackProps {
    $layout: keyof typeof defaultTheme.layouts;
}

interface BadgeRackContainerProps {
    $stack?: string;
}

export const SkillsContainer = styled.div`
    width: 90%;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 5rem;

    @media (max-width: 768px) {
        height: 200%;
    }
`;

export const TitleSkills = styled.div`
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

export const BadgeRackContainer = styled.div<BadgeRackContainerProps>`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: ${({ $stack }) => ($stack === "Front-End" ? "center" : "space-around")};
    gap: ${({ $stack }) => ($stack === "Front-End" ? "5px" : "0")};
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        margin-top: 2rem;
        gap: 2rem
    }
`;

export const BadgeRack = styled.div<BadgeRackProps>`
    display: grid;
    grid-template-columns: ${props => props.theme.widthLayout[props.$layout]};
    grid-template-rows: ${props => props.theme.heightLayout[props.$layout]};

    grid-template-areas: ${props => props.theme.layouts[props.$layout]};
    gap: 5px;
        
    div {
        background-color: ${props => props.theme.color["green-500"]};
        border-radius: 5px;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
        
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

