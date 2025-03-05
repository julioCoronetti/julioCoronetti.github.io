import styled from "styled-components";

export const NavigationContainer = styled.nav`
    position: fixed;
    z-index: 1000;

    width: 100%;
    height: 7rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.color["blue-dark"]};
    transition: 0.3s;

    &.scrolling {
        height: 4rem;
        background-color: ${props => props.theme.color["blue-dark"]};
        box-shadow: 5px 5px 25px 0px rgba(0, 0, 0, 0.25);
    }

    .active  {
        border-bottom: 2px solid ${props => props.theme.color["green-500"]};
    }
`;

export const NavigationBarList = styled.ul`
    width: 80%;
    display: flex;
    justify-content: space-between;

    list-style: none;

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

    div {
        width: 40%;
        display: flex;
        justify-content: space-between;

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
    }
`;