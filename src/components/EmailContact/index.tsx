import { Clipboard, ClipboardCheck } from "lucide-react";
import { useState } from "react";
import { EmailContactContainer } from "./styles";

export const EmailContact = () => {
    const [copied, setCopied] = useState(false);
    const textToCopy = "timeset13@outlook.com";

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Erro ao copiar: ", err);
        }
    };

    return (
        <EmailContactContainer>
            <div>
                {copied ? <ClipboardCheck size={40} /> : <Clipboard size={40} />}
            </div>

            <button onClick={copyToClipboard}>
                {textToCopy}
            </button>
        </EmailContactContainer>
    )
}