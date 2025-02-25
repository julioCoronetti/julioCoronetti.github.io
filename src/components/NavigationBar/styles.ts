import styled from "styled-components";

export const NavigationContainer = styled.nav`
    position: fixed;
    z-index: 1000;

    width: 100%;
    height: 7rem;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavigationBarList = styled.ul`
    width: 80%;
    display: flex;
    justify-content: space-between;

    list-style: none;

    a {
        text-decoration: none;
        font-weight: bold;
        color: ${props => props.theme["green-500"]};
    } 

    div {
        width: 40%;
        display: flex;
        justify-content: space-between;

        li:last-child a {
            background-color: ${props => props.theme["green-500"]};
            color: ${props => props.theme["blue-dark"]};
            padding: 0.3rem 0.8rem;
            border-radius: 5px;
        }
    }
`;