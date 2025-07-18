import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselApi, CarouselContent } from "../ui/carousel";
import { ProjectsArea, ProjectsContainer, TitleProjects } from "./styles";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Project } from "./Project/Project";

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
					<Button onClick={() => api?.scrollTo(current - 1)} variant="ghost">
						<ChevronLeft className="size-[3rem]" />
					</Button>
					<CarouselContent>
						<Project
							titleProject={"Interclasse Gamer"}
							description={
								"A website where students can register and participate in a gaming tournament."
							}
							linkRepository={
								"https://github.com/finadoBitorneira/InterclasseGamer"
							}
							linkDemo={"https://finadobitorneira.github.io/InterclasseGamer/"}
							imgSrc={"/assets/projects/interclasseGamer-project.png"}
						/>

						<Project
							titleProject={"Pixel Grid"}
							description={
								"A simple tool for creating and editing pixel grids. Ideal for pixel art, prototyping, or grid-based layouts."
							}
							linkRepository={"https://github.com/julioCoronetti/Pixel-Grid"}
							linkDemo={"https://juliocoronetti-pixel-grid.vercel.app/"}
							imgSrc={"/assets/projects/pixelGrid-project.png"}
						/>

						<Project
							titleProject={"Codele"}
							description={
								"Guess the correct word in 6 tries. After each guess, the letters show how close you are to the solution."
							}
							linkRepository={"https://github.com/julioCoronetti/Codele"}
							linkDemo={"https://juliocoronetti-codele.vercel.app/"}
							imgSrc={"/assets/projects/codele-project.png"}
						/>

						<Project
							titleProject={"Ambient Sound"}
							description={
								"A web app to mix various ambient sounds for a personalized and relaxing experience."
							}
							linkRepository={"https://github.com/julioCoronetti/AmbientSound"}
							linkDemo={"https://juliocoronetti-ambient-sound.vercel.app/"}
							imgSrc={"/assets/projects/ambientSound-project.png"}
						/>

						<Project
							titleProject={"ToDo"}
							description={
								"A simple and efficient app to manage your daily tasks and boost your productivity."
							}
							linkRepository={"https://github.com/julioCoronetti/ToDo-List"}
							linkDemo={"https://juliocoronetti-todo-list.vercel.app/"}
							imgSrc={"/assets/projects/todo-project.png"}
						/>

						<Project
							titleProject={"Pokedex"}
							description={
								"A modern Pokédex app to explore and learn about Pokémon!"
							}
							linkRepository={"https://github.com/julioCoronetti/Pokedex"}
							linkDemo={"https://juliocoronetti-pokedex.vercel.app/"}
							imgSrc={"/assets/projects/pokedex-project.png"}
						/>
					</CarouselContent>

					<Button onClick={() => api?.scrollTo(current + 1)} variant="ghost">
						<ChevronRight className="size-[3rem]" />
					</Button>
				</Carousel>
			</ProjectsArea>
		</ProjectsContainer>
	);
};
