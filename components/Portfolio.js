"use client";
import { PortfolioContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    id: 1,
    title: "Booki",
    type: "img",
    src: "",
    img: "assets/img/projects/project-1.webp",
    slides: ["assets/img/projects/project-1.webp","assets/img/projects/booki/booki1-min.webp","assets/img/projects/booki/booki3.webp","assets/img/projects/booki/booki4.webp"],
    project: "Website",
    client: "Agence de voyage Booki",
    img2:"/assets/img/technologyIcons/html-min.webp",
    img3:"/assets/img/technologyIcons/css-3-min.webp",
    previewLink: "https://sarrajee.github.io/P3_Booki/",
    description:
      "L'entreprise Booki souhaite développer un site internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. J'ai été chargé d'intégrer l'interface du site avec du code HTML et CSS.",
  },
  {
    id: 2,
    title: "OhMyFood",
    type: "img",
    src: "",
    img: "assets/img/projects/ohMyFood/project-2.webp",
    slides: ["assets/img/projects/ohMyFood/project-2.webp","assets/img/projects/ohMyFood/fooddesktop.webp","assets/img/projects/ohMyFood/foodmobile.webp",],
    project: "Website",
    client: "Restaurant",
    img2:"/assets/img/technologyIcons/html-min.webp",
    img3:"/assets/img/technologyIcons/sass-min.webp",
    previewLink: "https://sarrajee.github.io/P4_Ohmyfood/index.html",
    description:"OhMyFood est un site web mobile-first dédié à la présentation des menus proposés par les restaurants gastronomiques.Mon rôle en tant qu'intégratrice web était de transformer les maquettes fournies par l'équipe de conception en un site web fonctionnel et responsive.",
  },
  {
    id: 3,
    title: "Portfolio Architecte",
    type: "img",
    src: "",
    img: "assets/img/projects/project-3.webp",
    slides: ["assets/img/projects/project-3.webp"],
    project: "Website",
    client: "Sophie Bluel",
    img2:"/assets/img/technologyIcons/html-min.webp",
    img3:"/assets/img/technologyIcons/css-3-min.webp",
    img4:"/assets/img/technologyIcons/js-min.webp",
    previewLink: "https://github.com/SarraJEE/P6_Portfolio_architecte_sophie_bluel",
    description:
      "En tant qu'intégratrice web, j'ai travaillé sur le développement du site portfolio d'une architecte d'intérieur.Ma mission a consisté à concevoir la partie front-end du site. Grâce à mes compétences en JavaScript, j'ai réussi à récupérer les travaux de l'architecte depuis l'API et les ai intégrés dans une galerie dynamique.",
  },
  {
    id: 4,
    title: "Menu Maker By Qwenta",
    type: "local_video",
    src: "/assets/img/projects/solutionTechnique.mp4",
    img: "/assets/img/projects/project-12.webp",
    slides: ["/assets/img/projects/project-5.webp"],
    project: "Website",
    client: "Qwenta",
    img2:"/assets/img/technologyIcons/Notion-min.webp",
    img3:"/assets/img/technologyIcons/swagger.webp",
    previewLink: "",
    description:
      "Notre client Qwenta souhaite faire développer un 'Menu Maker', site permettant aux restaurateurs d'afficher et de mettre en page leurs menus facilement. J'ai été chargé de préparer et planifier le projet.",
  },
  {
    id: 5,
    title: "Kasa",
    type: "img",
    src: "",
    img: "assets/img/projects/kasa/project-4.png",
    slides: ["assets/img/projects/kasa/kasaDesktop.png","assets/img/projects/kasa/kasaMobile.png","assets/img/projects/kasa/kasaAbout.png","assets/img/projects/kasa/project-4.png"],
    project: "Site Web",
    client: "Agence de location immobilière Kasa",
    img2:"/assets/img/technologyIcons/html-min.webp",
    img3:"/assets/img/technologyIcons/sass-min.webp",
    img4:"/assets/img/technologyIcons/react-min.webp",
    previewLink: "https://glowing-lebkuchen-cb4f6c.netlify.app",
    description:
      "Je suis recruté par Kasa, leader de la location d'appartements entre particuliers, en tant que freelance pour développer sa nouvelle platforme web. Le site a été codé il y a plus de 10 ans en ASP.NET et j'ai été chargé de recoder le site en React.",
  },

  {
    id: 6,
    title: "Nina Carducci",
    type: "local_video",
    src: "assets/img/projects/rapportOptimisation.mp4",
    img: "assets/img/projects/project-5.webp",
    slides: ["assets/img/projects/project-5.webp"],
    project: "Website",
    client: "Nina Carducci",
    img2:"/assets/img/technologyIcons/html-min.webp",
    img3:"/assets/img/technologyIcons/css-3-min.webp",
    img4:"/assets/img/technologyIcons/js-min.webp",
    previewLink: "https://sarrajee.github.io/P9_ninacarducci/",
    description:
      "Nina Carducci possède un portfolio comprenant beaucoup d'images. Son site n'est pas bien optimisé et quelques bugs sont présents. Après audit, je lui propose d'optimiser les images, le code et sa structure de son site et de corriger les bugs.",
  },
  {
    id: 7,
    title: "ArgentBank Website",
    type: "img",
    src: "",
    img: "assets/img/projects/project-6.webp",
    slides: ["assets/img/projects/project-6.webp"],
    project: "Website",
    client: "Agence Bancaire",
    img2:"/assets/img/technologyIcons/react-min.webp",
    img3:"/assets/img/technologyIcons/sass-min.webp",
    img4:"/assets/img/technologyIcons/redux-min.webp",
    img5:"/assets/img/technologyIcons/swagger.webp",
    previewLink:"https://github.com/SarraJEE/Projet11_ArgentBank",
    description:
      "Argent Bank est une nouvelle banque en ligne qui souhaite offrir à ses utilisateurs un tableau de bord convivial. Dans le but d'atteindre cet objectif, j'ai développé une application web complète, réactive et adaptée à tous les appareils en utilisant des technologies telles que React Redux",
  },
];

const Portfolio = () => {
  const { popupToggle } = useContext(PortfolioContext);
  return (
    <SectionContainer id="portfolio">
      <div className="w-full pb-60">
        {/* Section Title Starts */}
        <SectionTitle
         // bigTitle={"works"}
          colorTitle={"portfolio"}
          normalTitle={"my"}
        />
        {/* Section Title Ends */}
        {/* Portfolio Items Starts */}
        <div className="-mt-15 pb-60 xs:pb-20 portfolio">
          <div
            id="grid-gallery"
            className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto"
          >
            {/* Portfolio Grid Starts */}
            <div className="grid-wrap mx-auto mb-25">
              <ul className="gridlist">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0"
                    onClick={() => popupToggle(item)}
                  >
                    <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                      <img
                        className="block relative w-full rounded-5 transition duration-300"
                        src={item.img}
                        alt=""
                      />
                      <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                        <span className="uppercase text-fs-18 text-white">
                          {item.title}
                        </span>
                      </div>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
            {/* Portfolio Grid Ends */}
          </div>
        </div>
        {/* Portfolio Items Ends */}
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
