// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type IProject = {
  image1: string
  image2: string
  link: string
  title: string
  usage: string
  icon: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProject[]>
) {
  res.status(200).json([
    { 
        "image1": "/images/whatsapp.gif",
        "image2": "/images/whatsapp.gif",
        "link": "https://github.com/MateusArenas/whatsapp-ui",
        "title": "Whatsapp Clone UI",
        "usage": "React Native",
        "icon": "fab fa-react"
    },
    { 
        "image1": "/images/peekandpush.gif",
        "image2": "/images/sharedelement.gif",
        "link": "https://github.com/MateusArenas/whatsapp-ui",
        "title": "Shared & Options",
        "usage": "React Native",
        "icon": "fab fa-react"
    },
    { 
        "image1": "/images/top.gif",
        "image2": "/images/bottom.gif",
        "link": "https://github.com/MateusArenas/portfolio",
        "title": "Portfólio Builder",
        "usage": "Node JS",
        "icon": "fab fa-node"
    },
    { 
        "image1": "/images/insta-delivery.gif",
        "image2": "/images/insta-delivery.gif",
        "link": "https://github.com/MateusArenas/insta-delivery",
        "title": "Insta Delivery",
        "usage": "Next JS",
        "icon": "fab fa-node"
    }
  ])
}
