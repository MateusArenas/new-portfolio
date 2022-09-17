import { DiPhp, DiJavascript1, DiPython } from 'react-icons/di';

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
    "title": "Um pouco sobre min",
    "description": "Sou um Desenvolvedor de Sistemas Web e Mobile, tendo como foco principal a linguagem Javascript/ Typescript e o Freamework React Native. Faço construções de APIs utilizando Node Js e MongoDB. Atualmente trabalho com Freelancer e estou em fase de conclusão de estudos em Analise e Desenvolvedor de Sistemas.",
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
        "info": "Language", 
        "icon": <DiJavascript1 size={32} />,
        "description": "Typescript, node, Express, Adonis, Mongoose, Sequelize, Socket IO, React, React Native, Next",
        "background": "#efd81d",
        "color": "black"
      },
      { 
        "title": "PHP", 
        "info": "Language", 
        "icon": <DiPhp size={42} />,
        "description": "PDO, Phpmyadmin, Xammp, Laravel, Slim Framework",
        "background": "#4b568b",
        "color": "black"
      },
      { 
        "title": "Python", 
        "info": "Language", 
        "icon": <DiPython size={32} />,
        "description": "Django, Flask, Mongoengine, Pymongo, JWT, Bcrypt",
        "background": "#006a9a",
        "color": "#ecc825"
      }
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