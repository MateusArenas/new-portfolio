import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import { FaFacebook, FaTwitch, FaInstagram, FaBriefcase, FaPalette, FaSearchLocation, FaPhone, FaVoicemail, FaLocationArrow, FaEnvelope, FaGithub, FaLink, FaExternalLinkAlt, FaReact, FaJsSquare, FaPython, FaPhp, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Di, { DiPhp, DiJavascript1, DiPython } from 'react-icons/di';
import SyntaxHighlighter from "react-syntax-highlighter";

import api from '../services/api'
import axios from 'axios'
import { useForm } from "react-hook-form";

import { IProject } from './api/projects'
import { FormEvent } from 'react'
import React from 'react'

import { content } from "../content";

const ArtigoE2E: NextPage = ({ }) => {


  return (
    <div className="container-fluid bg-dark px-0">
      <Head>
        <meta property="og:image" content="/images/pic.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="460" />
        <meta property="og:image:height" content="460" />

        <title>{content.title}</title>
        <meta name="description" content={content.about.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Link passHref href={`https://api.whatsapp.com/send?phone=${content.whatsapp}`}>
        <a className='position-fixed bottom-0 end-0 m-4 text-white bg-success rounded-circle p-2 border border-secondary' style={{ zIndex: 2 }} rel="noreferrer" aria-label="Link Direto para o contato no Whatsapp" id="wppLink" target="_blank" >
          <FaWhatsapp className='p-1' size={24 * 1.8} />
        </a>
      </Link>

      <div className="container-fluid p-0 bg-white" >

        <div className="d-flex flex-column align-items-center justify-content-center position-relative p-4" style={{ backgroundColor: "#25d366" }}>
          <Image alt='image-profile' src="/images/bg-e2e.png" className="img-fluid" width={640 / 1.5} height={360 / 1.5} />

          <h4 className="fw-bold position-absolute text-white" style={{ bottom: 32, alignSelf: 'center' }}>
            Proteja os seus dados agora!
          </h4>
        </div>

        <br />

        <SyntaxHighlighter language="javascript" >
          {`
            function helloWorld() {
              console.log("Hello, world!");
            }
          `}
        </SyntaxHighlighter>

        <div className="container" >
          <div className="container p-4 p-md-5">

            <h1 className="mb-5 fw-bold pe-4" >
              Entenda a importância
              de criptografia ponta a ponta
            </h1>

            <p>
              Você já parou para pensar se seus dados confidenciais são realmente
              seguro? A criptografia ponta a ponta pode ser uma forma eficaz de proteger dados confidenciais
              como informações bancárias, senhas e outros dados confidenciais. RSA é
              um dos algoritmos mais utilizados para implementar esta técnica de segurança, que utiliza
              chaves públicas e privadas para codificar e decodificar informações.
            </p>

            <p>
              Um exemplo de aplicativo que usa criptografia ponta a ponta é o WhatsApp. Desde
              2016, o aplicativo usou criptografia ponta a ponta para todas as mensagens,
              chamadas de voz e vídeo, garantindo que apenas o remetente e o destinatário possam acessar
              o conteúdo das conversas.
            </p>

            <p>
              Isso significa que mesmo que alguém intercepte os dados confidenciais enviados durante o trânsito,
              será indecifrável sem a chave privada do destinatário. Isto fornece um
              alto nível de privacidade e segurança para os dados trafegados.
            </p>

            <p>
              Um exemplo de empresa brasileira que utiliza criptografia ponta a ponta é o Nubank,
              uma fintech que oferece serviços financeiros por meio de um aplicativo móvel. A empresa
              usa criptografia ponta a ponta para garantir a segurança e a privacidade de informações confidenciais
              dados do cliente, como informações bancárias e transações financeiras.
            </p>

            <p>
              Outro exemplo é o Serasa Experian, que oferece fraudes e roubo de identidade
              serviços de proteção. A empresa usa criptografia ponta a ponta para proteger os clientes
              informações pessoais e impedir o acesso não autorizado a informações confidenciais
              dados. Além disso, o Banco Central do Brasil exige que o financiamento brasileiro
              instituições a usar criptografia para proteger as informações dos clientes e garantir a
              segurança das transações financeiras.
            </p>

            <p>
              A criptografia ponta a ponta com RSA usa chaves públicas e privadas para proteger os dados
              enviado de uma pessoa para outra. Quando alguém envia uma mensagem, é
              criptografado usando a chave pública do destinatário, para que somente essa pessoa possa decodificar
              e leia a mensagem. Em seguida, a resposta é criptografada usando o nome público do remetente
              chave, para que apenas o remetente possa descriptografar a resposta. Isso ajuda a manter
              informações seguras e privadas durante a comunicação.
            </p>

            <p>
              Para utilizá-lo é necessário gerar um par de chaves pública e privada, mas é
              importante lembrar que a segurança da criptografia depende da proteção adequada
              de chaves privadas e a correta implementação de algoritmos de criptografia. Isso é
              essencial para manter as chaves privadas secretas e garantir a correta implementação dos algoritmos
              para proteger adequadamente dados sensíveis.
            </p>

            <p>
              Em resumo, a criptografia ponta a ponta com RSA pode trazer vantagens
              como proteger a privacidade e a integridade de dados confidenciais, evitando
              espionagem e interceptação de dados e confidencialidade de informações importantes. Isto
              é essencial para manter as chaves privadas secretas e implementar corretamente a criptografia
              algoritmos para garantir uma proteção eficaz dos dados.
            </p>
          </div>
        </div>
      </div>


      <footer className="bd-footer bg-dark text-white pt-4 pt-md-5 mt-5 bg-light">
        <div className="container py-4 pt-md-5 px-4 px-md-3">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <a className="d-inline-flex align-items-center mb-2 text-white text-decoration-none" aria-label="Bootstrap">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="d-block me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg> */}
                <span className="fs-5">{content.title}</span>
              </a>
            </div>
            <div className="col-6 col-lg-3 offset-lg-1 mb-3">
              <h5 className="mb-4">Menu</h5>
              <ul className="list-unstyled">
                {content.sections.map(item => (
                  <li key={item.id} className="mb-2"><Link passHref href={`#${item.id}`}><a className="text-decoration-none text-white">{item.name}</a></Link></li>
                ))}
              </ul>
            </div>
            <div className="col-6 col-lg-3 mb-3">
              <h5 className="mb-4">{content.qualifications.title}</h5>
              <ul className="list-unstyled">
                {content.qualifications.items.map(item => (
                  <li key={item.title} className="mb-2"><Link passHref href="#courses"><a className="text-decoration-none text-white">{item.title}</a></Link></li>
                ))}
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <ul className="list-unstyled row">
                <li className="mb-2 pe-2 col-4">
                  <Link passHref href={content.instagram}>
                    <a className='text-white'>
                      <FaInstagram size={24 * 1.8} />
                    </a>
                  </Link>
                </li>
                <li className="mb-2 pe-2 col-4">
                  <Link passHref href={content.linkedin}>
                    <a className='text-white'>
                      <FaLinkedin size={24 * 1.8} />
                    </a>
                  </Link>
                </li>
                <li className="mb-2 pe-2 col-4">
                  <Link passHref href={content.github}>
                    <a className='text-white'>
                      <FaGithub size={24 * 1.8} />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-2 opacity-50" />
          <div className="row mt-5 mb-5 mb-lg-0">

            <div className="col-12 col-md-6">
              <p> Copyright © {new Date().getFullYear()} {content.copyright}</p>
            </div>

            {/* <div className="col-12 col-md-6 text-center text-md-end">
              <div className="btn-group col-auto">
                  <a className="nav-link me-2">Terms of Use</a>
                  <a className="nav-link me-2">Privacy Policy</a>
              </div>
            </div> */}

          </div>
        </div>
      </footer>
    </div>
  )
}

export default ArtigoE2E;
