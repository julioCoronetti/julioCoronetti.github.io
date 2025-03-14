import { CarouselItem } from "@/components/ui/carousel"
import { ContentWrapper, ProjectContent, ProjectExemple, ProjectText } from "../styles"

interface ProjectProps {
    titleProject: string
    description: string
    linkRepository: string
    linkDemo: string
    imgSrc: string
}

export const Project = ({ titleProject, description, linkRepository, linkDemo, imgSrc }: ProjectProps) => {
    return (
            <CarouselItem className="flex items-center justify-center">
                <ProjectContent>
                    <ContentWrapper>
                        <ProjectExemple imgSrc={imgSrc} />
                        <ProjectText>
                            <div>
                                <h3>{titleProject}</h3>
                                <p>{description}</p>
                            </div>
                            <div>
                                <a href={linkRepository} target="_blank">Repository</a>
                                <a href={linkDemo} target="_blank">Demo</a>
                            </div>
                        </ProjectText>
                    </ContentWrapper>
                </ProjectContent>
            </CarouselItem>
    )
}