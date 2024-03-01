"use client";
import { TunisContext } from "@/context/context";
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
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS",
    previewLink: "www.envato.com",
    description:
      "L'entreprise Booki souhaite développer un site internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. J'ai été chargé d'intégrer l'interface du site avec du code HTML et CSS.",
  },
  {
    id: 2,
    title: "OhMyFood",
    type: "img",
    src: "",
    img: "assets/img/projects/project-2.webp",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS",
    previewLink: "https://sarrajee.github.io/P4_Ohmyfood/index.html",
    description:"OhMyFood est un site web mobile-first dédié à la présentation des menus proposés par les restaurants gastronomiques.Mon rôle en tant qu'intégratrice web était de transformer les maquettes fournies par l'équipe de conception en un site web fonctionnel et responsive.",
  },
  {
    id: 3,
    title: "Portfolio Architecte",
    type: "img",
    src: "",
    img: "assets/img/projects/project-3.webp",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
    description:
      "En tant qu'intégratrice web, j'ai travaillé sur le développement du site portfolio d'une architecte d'intérieur.Ma mission a consisté à concevoir la partie front-end du site. Grâce à mes compétences en JavaScript, j'ai réussi à récupérer les travaux de l'architecte depuis l'API et les ai intégrés dans une galerie dynamique.",
  },
  {
    id: 4,
    title: "Kasa",
    type: "img",
    src: "",
    img: "assets/img/projects/project-4.png",
    project: "Site Web",
    client: "Envato",
    langages:"HTML, CSS, Reactt",
    previewLink: "www.envato.com",
    description:
      "L'entreprise Booki souhaite développer un site internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. J'ai été chargé d'intégrer l'interface du site avec du code HTML, CSS et React.",
  },

  {
    id: 5,
    title: "Nina Carducci",
    type: "img",
    src: "",
    img: "assets/img/projects/project-5.webp",
    project: "Website",
    client: "Envato",
    langages: "HTML, CSS, Javascript",
    previewLink: "www.envato.com",
    description:
      "L'entreprise Booki souhaite développer un site internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. J'ai été chargé d'intégrer l'interface du site avec du code HTML et CSS.",
  },
  {
    id: 6,
    title: "ArgentBank Website",
    type: "img",
    src: "",
    img: "assets/img/projects/project-6.webp",
    project: "Website",
    client: "Envato",
    langages: "React,Redux,Sass,MongoDB",
    previewLink: "www.envato.com",
    description:
      "L'entreprise Booki souhaite développer un site internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. J'ai été chargé d'intégrer l'interface du site avec du code HTML et CSS.",
  },
];

const Portfolio = () => {
  const { popupToggle } = useContext(TunisContext);
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
