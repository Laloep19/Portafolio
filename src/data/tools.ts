import Jira from '../assets/images/tools/jira.svg';
import Notion from '../assets/images/tools/notion.svg';
import Miro from '../assets/images/tools/miro.svg';
import Photoshop from '../assets/images/tools/photoshop.svg';
import Selenium from '../assets/images/tools/selenium.svg';

interface Tools {
    image: ImageMetadata;
	description: string;
}

export const tools: Tools[] =[
	{
		image: Miro,
		description: "Logo de Miro",
	},
	{
        image: Jira,
		description: "Logo de Jira",
	},
	{
        image: Notion,
		description: "Logo de Notion",
	},
	{
        image: Selenium,
		description: "Logo de Selenium IDE",
	},
	{
        image: Photoshop,
		description: "Logo de Photoshop",
	},
]