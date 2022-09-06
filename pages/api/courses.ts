// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type IData = {
  image: string
  title: string
  about: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData[]>
) {
  res.status(200).json([
    { 
      "image": "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
      "title": "Curso completo de APIs com Nodejs, Express + MongoDB, SQL ( Udemy )",
      "about": "Duração: 6 Horas 2022"
    },
    { 
        "image": "https://img-c.udemycdn.com/course/240x135/1076168_b0b9_2.jpg",
        "title": "Curso React + Redux",
        "about": "Duração: 54 Horas 2022"
    },
    { 
        "image": "https://img-c.udemycdn.com/course/240x135/1805784_0fa0.jpg",
        "title": "React Native: Desenvolva APPs Nativas para Android e iOS ( Udemy )",
        "about": "Duração: 44 Horas 2022"
    },
    { 
        "image": "https://img-c.udemycdn.com/course/240x135/906276_325e.jpg",
        "title": "Curso Livre de HTML5 e CSS3 ( Senac Santo André )",
        "about": "Duração: 40 Horas 2018"
    },
    { 
        "image": "https://img-c.udemycdn.com/course/240x135/896886_2822_3.jpg",
        "title": "Javascript – Curso COMPLETO com 6 Projetos REAIS ( Udemy )",
        "about": "Duração: 38.5 Horas 2020"
    },
    { 
        "image": "https://img-c.udemycdn.com/course/240x135/674764_f980_6.jpg",
        "title": "Curso Completo do Desenvolvedor Web ( Udemy )",
        "about": "Duração: 13 Horas 2022"
    },
    { 
        "image": "https://img-c.udemycdn.com/course/240x135/1616938_8f0b_2.jpg",
        "title": "Curso Web Design Completo: HTML5, CSS3 e JS + 5 Projetos ( Udemy )",
        "about": "Duração: 54 Horas 2022"
    },
    { 
        "image": "https://img-b.udemycdn.com/course/240x135/981414_f00f.jpg",
        "title": "Curso Livre de Algoritmo ( Curso em Vídeo )",
        "about": "Duração: 40 Horas 2018"
    },
    { 
        "image": "https://img-c.udemycdn.com/course/240x135/969388_5a2a_3.jpg",
        "title": "Curso Completo de PHP 7 ( Udemy )",
        "about": "Duração: 33,5 Horas 2020 "
    }
  ])
}
