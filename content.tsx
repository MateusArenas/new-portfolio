import { DiPhp, DiJavascript1, DiPython, DiHtml5, DiCssTricks, DiCss3, DiDart } from 'react-icons/di';
import { TbCSharp } from 'react-icons/tb';
import { SiDart } from 'react-icons/si';

export const content = {
  "title": "Mateus Arenas Gioio",
  "username": "MateusArenas",
  "email": "MateusArenas97@gmail.com",
  "whatsapp": "11949123337",
  "phoneNumer": "11949123337",
  "phoneNumerMask": "(11) 94912-3337",
  "github": "https://github.com/MateusArenas",
  "linkedin": "https://www.linkedin.com/in/mateus-arenas-11965518a/",
  "instagram": "https://www.instagram.com/arenas_mat/",
  "copyright": "Copyright © 2022 Mateus Arenas Gioio. All Rights Reserved.",
  "sections": [
    { id: "about", name: "Sobre" }, 
    { id: "projects", name: "Projetos" }, 
    { id: "qualifications", name: "Qualificações" }, 
    { id: "contact", name: "Contato" }
  ],
  "about": { 
    "id": "",
    "title": "Um pouco sobre mim",
    "description": "Olá, sou um desenvolvedor de sistemas web e mobile, com habilidades em PHP, React e React Native. Atuo no mercado há algum tempo e tenho grande experiência em desenvolvimento de aplicações móveis com React Native, bem como em desenvolvimento web com PHP e React.\n Tenho grande paixão por criar soluções criativas e eficazes para meus clientes, sempre buscando estar atualizado com as mais recentes tecnologias e tendências do mercado. Meu objetivo é fornecer o melhor resultado possível, ajudando meus clientes a alcançar seus objetivos de negócios\n Estou sempre disposto a enfrentar novos desafios e assumir projetos cada vez mais complexos, aprimorando minhas habilidades e experiência ao longo do caminho. Se você está procurando um desenvolvedor web ou mobile altamente qualificado, entre em contato comigo para discutirmos seus projetos e como posso ajudar a transformar suas ideias em realidade.",
    "calltoactions": { "projects": "Projetos", "qualifications": "Qualificações", "contact": "Entrar em contato" },
  },
  "projects": {
    "id": "projects",
    "title": "Projetos",
    "info": "Portfólio",
    "btnmore": { "default": "Veja Mais", "active": "Esconder" },
  },
  "qualifications": {
    "id": "qualifications",
    "title": "Qualificações",
    "info": "Habilidades",
    "btnmore": { "default": "Veja Mais", "active": "Esconder" },
    "items": [
      { 
        "title": "Javascript", 
        "info": "Program Language", 
        "icon": <DiJavascript1 size={32} />,
        "description": "Typescript, node, Express, Adonis, Mongoose, Sequelize, Socket IO, React, React Native, Next",
        "background": "#efd81d",
        "color": "black"
      },
      { 
        "title": "PHP", 
        "info": "Program Language", 
        "icon": <DiPhp size={42} />,
        "description": "PDO, Phpmyadmin, Xammp, Laravel, Slim Framework",
        "background": "#4b568b",
        "color": "black"
      },
      { 
        "title": "Python", 
        "info": "Program Language", 
        "icon": <DiPython size={32} />,
        "description": "Django, Flask, Mongoengine, Pymongo, JWT, Bcrypt",
        "background": "#006a9a",
        "color": "#ecc825"
      },
      { 
        "title": "C#", 
        "info": "Program Language", 
        "icon": <TbCSharp size={32} />,
        "description": "Criações de jogos com Unity, conhecimento de logica e .NET.",
        "background": "#934b8f",
        "color": "white"
      },
      { 
        "title": "Dart", 
        "info": "Program Language", 
        "icon": <SiDart size={26} />,
        "description": "Criações de sites e apps com flutter e conhecimento de logica.",
        "background": "#2aaee9",
        "color": "#025493"
      },
      { 
        "title": "HTML", 
        "info": "Markup Language", 
        "icon": <DiHtml5 size={32} />,
        "description": "Tags semânticas, ultilizção de SEO e boas práticas com alto desempenho e escrita.",
        "background": "#e56027",
        "color": "white"
      },
      { 
        "title": "CSS", 
        "info": "Style Language", 
        "icon": <DiCss3 size={32} />,
        "description": "Criações de sites reponsivos ultilizando Bootstrap com conhecimento em flex-box e grid.",
        "background": "#27a0d4",
        "color": "white"
      },
    ]
  },
  "contact": {
    "id": "contact", 
    "title": "Contato", 
    "info": "Me Contacte", 
    "description": "Entre em contato para fins de contratação ou confecção de um projeto.",
    "phone": "11949123337",
    "email": "mateusarenas97@gmail.com",
    "form": {
      "title": "Envie uma mensagem",
      "inputs": { 
        "email": { label: "Email" },
        "subject": { label: "selecione um assunto", values: [
          'Confecção de um projeto',
          'Contratação como front-end',
          'Contratação como back-end',
          'Contratação como full-stack',
        ] },
        "message": { label: "Mensagem" },
        "submit": { label: "Enviar agora" }
      }  
    }
  },
}