import Main from "../assets/images/restaurant/main.webp";
import Order from "../assets/images/restaurant/dishes.webp";
import Reservations from "../assets/images/restaurant/reservations.webp";
import NewForm from "../assets/images/rickandmorty/newform.webp";
import RandM from "../assets/images/rickandmorty/cards.webp";
import UpdateForm from "../assets/images/rickandmorty/updateform.webp";
import Ix from "../assets/images/invoicexpert/login.webp";
import Singup from "../assets/images/invoicexpert/signup.webp";
import Dashboard from "../assets/images/invoicexpert/dashboard.webp";

interface detail {
  image: ImageMetadata;
  description: string;
  text: string;
}

interface Project {
  version: string;
  title: string;
  description: string;
  introduction: string;
  image: ImageMetadata;
  details: detail[];
}

export const projects: Project[] = [
  {
    version: "blue",
    title: "Restaurante",
    description: "Interfaz de menu para restaurante",
    introduction:
      "Prototipo de programa para reservar, pedir y ver reservaciones de un restaurante",
    image: Main,
    details: [
      {
        image: Main,
        description: "Menú principal del restaurante",
        text: "Menú principal",
      },
      {
        image: Order,
        description: "Selección de platos y cantidad de ellos deseada",
        text: "Selección de platos y cantidad de ellos deseada",
      },
      {
        image: Reservations,
        description: "Menú para guardar una reservaciones",
        text: "Menú para guardar una reservaciones",
      },
    ],
  },
  {
    version: "violet",
    title: "Rick & Morty",
    description: "Tarjetas de personajes de Rick y Morty",
    introduction:
      "Visualización y manejo de base de datos basada en la API Rick & Morty",
    image: RandM,
    details: [
      {
        image: NewForm,
        description: "Formulario para agregar nuevos personajes a la base de datos",
        text: "Formulario que permite agregar un nuevo personaje en la base de datos",
      },
      {
        image: RandM,
        description: "Tarjetas de personajes existentes en la base de datos",
        text: "Tarjetas que muestra los personajes existentes",
      },
      {
        image: UpdateForm,
        description: "Formulario que permite obtener, cambiar o borrar un personaje específico a base de su ID",
        text: "Formulario que permite obtener, cambiar o borrar un personaje específico",
      },
    ],
  },
  {
    version: "orange",
    title: "InvioceXpert",
    description: "Maquetado de aplicación",
    introduction:
      "Maquetación de un dashboard para la creación de una aplicación de facturación",
    image: Ix,
    details: [
      {
        image: Ix,
        description: "Pantalla de inicio de sesión",
        text: "Pantalla de inicio de sesión",
      },
      {
        image: Singup,
        description: "Pantalla de registro de usuario/cuenta",
        text: "Pantalla de registro de usuario/cuenta",
      },
      {
        image: Dashboard,
        description: "Tablero de control",
        text: "Tablero de control",
      },
    ],
  },
];
