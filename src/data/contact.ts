import Github from '../assets/images/contact/github.svg';
import Gmail from '../assets/images/contact/gmail.svg';

interface Contact {
    image: ImageMetadata;
	description: string;
	text: string; 
	link: string;
}

export const contact: Contact[] =[
	{
		image: Github,
		description: "Logo de Github",
        text: "Github",
		link: "https://github.com/Laloep19"
	},
	{
		image: Gmail,
		description: "Logo de Gmail",
        text: "Correo",
		link: "mailto:eduardo.espinosa.perez.02@gmail.com"
	},

]