import { Badge } from "./Bagde";
import { BadgeRack, BadgeRackContainer, SkillsContainer, TitleSkills } from "./styles";

interface SkillsProps {
    stack: string;
}

export const Skills = ({ stack }: SkillsProps) => {
    return (
        <SkillsContainer>
            <TitleSkills>
                <h1>SKILLS</h1>
                <hr />
            </TitleSkills>
            <BadgeRackContainer $stack={stack}>
                {stack === "Front-End" ? (
                    <>
                        <BadgeRack $layout="layout4">
                            <Badge technology="TypeScript" size="w-[10rem]" />
                            <Badge technology="Tailwindcss" />
                            <Badge technology="Git" />
                            <Badge technology="styled-components" size="w-[10rem]" />

                        </BadgeRack>

                        <BadgeRack $layout="layout5">
                            <Badge technology="React" size="w-[10rem]" />
                            <Badge technology="Shadcn" size="w-[10rem]" />
                            <Badge technology="Figma" size="w-[3rem]" />
                            <Badge technology="react-router" size="w-[3rem]" />
                            <Badge technology="google-cloud" size="w-[3rem]" />
                        </BadgeRack>
                    </>
                ) : (
                    <>
                        <BadgeRack $layout="layout1">
                            <Badge technology="React" size="w-[8rem]" />
                            <Badge technology="Tailwindcss" />
                            <Badge technology="TypeScript" />
                            <Badge technology="NextJs" size="w-[8rem]" />
                        </BadgeRack>

                        <BadgeRack $layout="layout2">
                            <Badge technology="Spring" size="w-[10rem]" />
                            <Badge technology="MySQL" />
                            <Badge technology="Java" size="w-[6rem]" />
                            <Badge technology="MongoDB" size="w-[3rem]" />
                        </BadgeRack>

                        <BadgeRack $layout="layout3">
                            <Badge technology="ThreeJs" size="w-[3rem]" />
                            <Badge technology="google-cloud" size="w-[10rem]" />
                            <Badge technology="Git" />
                        </BadgeRack>
                    </>
                )}
            </BadgeRackContainer>
        </SkillsContainer>
    );
}