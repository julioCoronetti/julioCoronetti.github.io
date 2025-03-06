import styled from "styled-components";

export const NavigationContainer = styled.nav`
    position: fixed;
    z-index: 1000;
    background-color: ${props => props.theme.color["blue-dark"]};
    transition: 0.3s;

    width: 100%;
    height: 7rem;

    display: flex;
    justify-content: space-around;
    align-items: center;

    a:nth-child(1) {
        z-index: 10000;
    }

    a {
        text-decoration: none;
        font-weight: bold;
        color: ${props => props.theme.color["green-500"]};
        border-bottom: 2px solid transparent;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            border-bottom: 2px solid ${props => props.theme.color["green-500"]};
        }
    } 

    &.scrolling {
        height: 4rem;
        background-color: ${props => props.theme.color["blue-dark"]};
        box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.25);
    }
`;

export const NavigationBarList = styled.ul`
    width: 40%;
    display: flex;
    justify-content: space-between;
    list-style: none;

    li:last-child a {
        background-color: ${props => props.theme.color["green-500"]};
        color: ${props => props.theme.color["blue-dark"]};
        padding: 0.3rem 0.8rem;
        border-radius: 5px;
        border-bottom: none;
        transition: 0.3s;

        &:hover {
            background-color: ${props => props.theme.color["green-100"]};
        }
    }

    @media (max-width: 768px) {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 7rem;
        left: 0;
        width: 100%;
        background-color: ${props => props.theme.color["blue-dark"]};
        padding: 1rem 0;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        padding-top: 5rem;

        &.open {
            left: 0;
            top: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: space-around;
            align-items: center;

            background-color: ${props => props.theme.color["blue-light"]};
        }
    }
`;

export const MenuButton = styled.div`
    display: none;
    cursor: pointer;
    z-index: 9999;

    color: ${props => props.theme.color["green-500"]};

    &:hover {
        transform: scale(1.2);
    }

    @media (max-width: 768px) {
        display: block;
    }
`;