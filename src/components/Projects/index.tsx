import { ChevronLeft, ChevronRight } from "lucide-react"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel"
import { ContentWrapper, ProjectContent, ProjectExemple, ProjectsArea, ProjectsContainer, ProjectText, TitleProjects } from "./styles"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"

export const Projects = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap());

        api.on("scroll", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <ProjectsContainer>
            <TitleProjects>
                <hr />
                <h2>PROJECTS</h2>
                <hr />
            </TitleProjects>

            <ProjectsArea>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full flex items-center justify-between"
                    setApi={setApi}
                >
                    <Button
                        onClick={() => api?.scrollTo(current - 1)}
                        variant="ghost"
                    >
                        <ChevronLeft className="size-[3rem]" />
                    </Button>
                    <CarouselContent>

                        <CarouselItem className="flex items-center justify-center">
                            <ProjectContent>
                                <ContentWrapper>
                                    <ProjectExemple>

                                    </ProjectExemple>
                                    <ProjectText>
                                        <div>
                                            <h3>Project</h3>
                                            <p>Description of the project highlighting the technologies and objectives of the projects.</p>
                                        </div>
                                        <div>
                                            <a href="" target="_blank">Repository</a>
                                            <a href="" target="_blank">Demo</a>
                                        </div>
                                    </ProjectText>
                                </ContentWrapper>
                            </ProjectContent>
                        </CarouselItem>

                    </CarouselContent>

                    <Button
                        onClick={() => api?.scrollTo(current + 1)}
                        variant="ghost"
                    >
                        <ChevronRight className="size-[3rem]" />
                    </Button>
                </Carousel>
            </ProjectsArea>
        </ProjectsContainer>
    )
}