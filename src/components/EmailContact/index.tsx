import { Clipboard, ClipboardCheck } from "lucide-react";
import { useState } from "react";
import { EmailContactContainer } from "./styles";
import { motion } from "framer-motion";

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

    const MotionEmailContactContainer = motion(EmailContactContainer);

    return (
        <MotionEmailContactContainer
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div>
                {copied ? <ClipboardCheck size={40} /> : <Clipboard size={40} />}
            </div>

            <button onClick={copyToClipboard}>
                {textToCopy}
            </button>
        </MotionEmailContactContainer>
    )
}