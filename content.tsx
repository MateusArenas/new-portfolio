import { DiPhp, DiJavascript1, DiPython } from 'react-icons/di';

export const content = {
  "title": "Mateus Arenas Gioio",
  "username": "MateusArenas",
  "email": "MateusArenas97@gmail.com",
  "whatsapp": "5511949123337",
  "github": "https://github.com/MateusArenas",
  "linkedin": "https://www.linkedin.com/in/mateus-arenas-11965518a/",
  "instagram": "https://www.instagram.com/arenas_mat/",
  "copyright": "Copyright © 2022 Mateus Arenas Gioio. All Rights Reserved.",
  "about": { 
    "title": "Um pouco sobre min",
    "description": "Sou um Desenvolvedor de Sistemas Web e Mobile, tendo como foco principal a linguagem Javascript/ Typescript e o Freamework React Native. Faço construções de APIs utilizando Node Js e MongoDB. Atualmente trabalho com Freelancer e estou em fase de conclusão de estudos em Analise e Desenvolvedor de Sistemas.",
    "calltoactions": { "projects": "Projetos", "qualifications": "Qualificações", "contact": "Entrar em contato" },
   },
  "qualifications": {
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
  }
}