import Next from '../assets/images/technologies/nextjs.svg';
import Astro from '../assets/images/technologies/astrojs.svg';
import React from '../assets/images/technologies/reactjs.svg';
import Nest from '../assets/images/technologies/nestjs.svg';

interface Technologies {
    image: ImageMetadata;
	description: string;
}

export const technologies: Technologies[] =[
	{
		image: React,
		description: "Logo de ReactJS",
	},
	{
		image: Next,
		description: "Logo de NextJS",
	},
	{
        image: Astro,
		description: "Logo de AstroJS",
	},
	{
        image: Nest,
		description: "Logo de NestJS",
	},
]