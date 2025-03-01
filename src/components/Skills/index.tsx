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
                    <div style={{ gridArea: "react" }}>react</div>
                    <div style={{ gridArea: "tailwind" }}>tailwind</div>
                    <div style={{ gridArea: "typescript" }}>typescript</div>
                    <div style={{ gridArea: "next" }}>next</div>
                </BadgeRack>

                <BadgeRack $layout="layout2">
                    <div style={{ gridArea: "spring" }}>spring</div>
                    <div style={{ gridArea: "mysql" }}>mysql</div>
                    <div style={{ gridArea: "java" }}>java</div>
                    <div style={{ gridArea: "mongodb" }}>mongodb</div>
                </BadgeRack>

                <BadgeRack $layout="layout3">
                    <div style={{ gridArea: "threejs" }}>threejs</div>
                    <div style={{ gridArea: "oracle" }}>oracle</div>
                    <div style={{ gridArea: "git" }}>git</div>
                </BadgeRack>
            </BadgeRackContainer>
        </SkillsContainer>
    );
}