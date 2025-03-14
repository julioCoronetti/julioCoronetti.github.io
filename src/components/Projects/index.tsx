import { ChevronLeft, ChevronRight } from "lucide-react"
import { Carousel, CarouselApi, CarouselContent } from "../ui/carousel"
import { ProjectsArea, ProjectsContainer, TitleProjects } from "./styles"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import { Project } from "./Project/Project"

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

                        <Project
                            titleProject={"ToDo"}
                            description={"A simple and efficient app to manage your daily tasks and boost your productivity."}
                            linkRepository={"https://github.com/julioCoronetti/ToDo-List"}
                            linkDemo={"https://juliocoronetti-todo-list.vercel.app/"}
                            imgSrc={"/src/assets/projects/todo-project.png"}
                        />

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