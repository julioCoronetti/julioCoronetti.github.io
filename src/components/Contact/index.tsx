import { ContactArea, ContactContainer, LinksContactArea, TextContactArea, TitleContact } from "./styles";

export const Contact = () => {
    return (
        <ContactContainer>
            <TitleContact>
                <h1>CONTACT</h1>
                <hr />
            </TitleContact>

            <ContactArea>
                <TextContactArea>
                    <h3>Do you have a new idea?</h3>
                    <p>Contact me and let's develop your idea!</p>
                    <a href="">SEND ME A EMAIL</a>
                </TextContactArea>

                <LinksContactArea>
                    <a href="https://github.com/julioCoronetti" target="_blank"></a>
                    <a href="https://www.linkedin.com/in/julio-coronetti/" target="_blank"></a>
                    <a href="https://www.credly.com/users/julio-coronetti" target="_blank"></a>
                </LinksContactArea>
            </ContactArea>
        </ContactContainer>
    );
};