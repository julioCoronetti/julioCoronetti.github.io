import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
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
                    <div style={{ gridArea: "react" }}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <img
                                        className="w-[8rem]"
                                        src="/src/assets/technologies/react-logo.svg"
                                        alt="React Logo"
                                        title="React Logo"
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>React</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div style={{ gridArea: "tailwind" }}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <img
                                        src="/src/assets/technologies/tailwindcss-logo.svg"
                                        alt="Tailwindcss Logo"
                                        title="Tailwindcss Logo"
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Tailwindcss</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div style={{ gridArea: "typescript" }}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <img
                                        src="/src/assets/technologies/typescript-logo.svg"
                                        alt="TypeScript Logo"
                                        title="TypeScript Logo"
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>TypeScript</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>

                    <div style={{ gridArea: "next" }}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <img
                                        className="w-[8rem]"
                                        src="/src/assets/technologies/nextjs-logo.svg"
                                        alt="NextJs Logo"
                                        title="NextJs Logo"
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>NextJs</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </BadgeRack>

                <BadgeRack $layout="layout2">
                    <div style={{ gridArea: "spring" }}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <img
                                        className="w-[10rem]"
                                        src="/src/assets/technologies/spring-logo.svg"
                                        alt="Spring Logo"
                                        title="Spring Logo"
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Spring</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div style={{ gridArea: "mysql" }}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <img
                                        src="/src/assets/technologies/mysql-logo.svg"
                                        alt="MySQL Logo"
                                        title="MySQL Logo"
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>MySQL</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div style={{ gridArea: "java" }}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <img
                                        className="w-[6rem]"
                                        src="/src/assets/technologies/java-logo.svg" alt="Java Logo"
                                        title="Java Logo"
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Java</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div style={{ gridArea: "mongodb" }}>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <img
                                        className="w-[3rem]"
                                        src="/src/assets/technologies/mongodb-logo.svg"
                                        alt="MongoDB Logo"
                                        title="MongoDB Logo"
                                    />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>MongoDB</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
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