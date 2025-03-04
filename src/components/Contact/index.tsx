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
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                </LinksContactArea>
            </ContactArea>
        </ContactContainer>
    );
};