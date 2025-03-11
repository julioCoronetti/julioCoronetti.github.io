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
                                    <ProjectExemple />
                                    <ProjectText>
                                        <div>
                                            <h3>ToDo</h3>
                                            <p>A simple and efficient app to manage your daily tasks and boost your productivity.</p>
                                        </div>
                                        <div>
                                            <a href="https://github.com/julioCoronetti/ToDo-List" target="_blank">Repository</a>
                                            <a href="https://juliocoronetti-todo-list.vercel.app/" target="_blank">Demo</a>
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