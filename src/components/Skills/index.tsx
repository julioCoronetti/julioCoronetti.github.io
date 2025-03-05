import { Badge } from "./Bagde";
import { BadgeRack, BadgeRackContainer, SkillsContainer, TitleSkills } from "./styles";

export const Skills = () => {
    return (
        <SkillsContainer>
            <TitleSkills>
                <h1>SKILLS</h1>
                <hr />
            </TitleSkills>
            <BadgeRackContainer>
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
                    <Badge
                        technology="threejs"
                        size="w-[3rem]"
                    />
                    <Badge
                        technology="google-cloud"
                        size="w-[6rem]"
                    />
                    <Badge
                        technology="Git"
                    />
                </BadgeRack>
            </BadgeRackContainer>
        </SkillsContainer>
    );
}