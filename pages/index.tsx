import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import { FaFacebook, FaTwitch, FaInstagram, FaBriefcase, FaPalette, FaSearchLocation, FaPhone, FaVoicemail, FaLocationArrow, FaEnvelope, FaGithub, FaLink, FaExternalLinkAlt, FaReact, FaJsSquare, FaPython, FaPhp, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Di, { DiPhp, DiJavascript1, DiPython } from 'react-icons/di';


import api from '../services/api'
import axios from 'axios'
import { useForm } from "react-hook-form";

import { IProject } from './api/projects'
import { FormEvent } from 'react'
import React from 'react'

import { content } from "../content";

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // const { data } = await api.get('/projects');
  // const { data } = await axios.get('https://api.github.com/users/mateusarenas');
  // const { data: repos } = await axios.get('https://api.github.com/users/mateusarenas/repos');
  // let { data: pinneds } = await axios.get(`https://gh-pinned-repos.egoist.dev/?username=${content.username}`);

  // if (pinneds?.length) {
  //   pinneds = content.projects.pinneds;
  // }

  // console.log({ pinneds });

  return { props: { pinneds: [] } }
}

const Home: NextPage<{ data?: IProject[], pinneds: any[] }> = ({ pinneds }) => {

  const [showMoreProjects, setShowMoreProjects] = React.useState(true);
  const [showMoreQualifications, setShowMoreQualifications] = React.useState(true);


  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<{ email: string, subject: string, message: string }>();

  async function onSubmit(data: { email: string, subject: string, message: string }) {
    window.open(`mailto:${data.email}?subject=${data.subject}&body=${data.message}`);
  }

  function phoneToMask(v: string): string {
    v = v.replace(/\D/g, "");             //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
  }

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

      <div className="container-fluid bg-dark pt-0 pt-lg-5 pb-5">
        <div className="row align-items-center px-md-5">
          <div className="col-12 col-md-6 order-1 order-sm-2">
            <div className="row justify-content-end px-4">
              <Image alt='image-profile' src="/images/pic.png" className="img-fluid" width={569} height={555} />
            </div>
          </div>
          <div className="col-12 col-md-6 order-2 order-sm-1">
            <div className="row justify-content-start">
              <div className="card border-0 bg-transparent text-white">
                <Link passHref href={"#contact"}>
                  <a className="card-header bg-transparent border-0 text-decoration-none app-text-primary">
                    {content.about.calltoactions.contact}
                  </a>
                </Link>
                <div className="card-body">
                  <h1 className="card-title">{content.about.title}</h1>
                  <p className="card-text">{content.about.description}</p>
                  <Link href={`#${content.projects.id}`}>
                    <a className="btn btn-primary app-bg-primary border-0 me-2">{content.about.calltoactions.projects}</a>
                  </Link>
                  <Link href={`#${content.qualifications.id}`}>
                    <a className="btn btn-outline-secondary">{content.about.calltoactions.qualifications}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id={content.projects.id} className="container-fluid bg-white">
        <div className="container pb-5">

          <div className="row py-5 align-items-center">
            <div className="col-12 col-md-12 text-center">
              <p className="app-text-primary fw-bold">{content.projects.info}</p>
              <h2 className="text-dark">{content.projects.title}</h2>
            </div>

          </div>

          <div className="row g-2 g-lg-4 py-4">
            {/* {repos?.slice(0, 4)?.map(item => ( */}
            {content.projects.pinneds?.slice(0, showMoreProjects ? content.projects.pinneds?.length ?? 0 : 4)?.map(item => (
              <Link key={item?.repo} passHref shallow href={item?.website || item?.link}>
                <a target="_blank" rel="noopener noreferrer" className="col-12 col-md-6 col-lg-3 p-2 text-decoration-none">
                  <div className="card overflow-hidden bg-light text-dark w-100 h-100">
                    {/* <div className='d-flex align-items-center justify-content-center bg-secondary rounded-end w-100 h-100 position-relative overflow-hidden' style={{ aspectRatio: "16/16" }}> */}
                    {/* <p className='text-white'>{item?._id}</p> */}
                    {/* <Image alt='product-img' src="/images/default-product.webp" objectFit="cover" layout="fill" width={1080} height={720} /> */}
                    {/* </div> */}
                    <div className="row g-0 h-100 w-100" style={{ aspectRatio: "16/14" }}>
                      <div className="col-6 position-relative">
                        <Image src={item?.image1}
                          alt={''}

                          // onError={function (e) {
                          //   console.log({ e });
                          //   // e.target.src = `https://raw.githubusercontent.com/${item?.full_name}/main/show.gif`;
                          //   // this?.src='https://php-page-auth.vercel.app/images/banner.png';
                          // }}
                          className="card-img rounded-0" objectFit="cover" layout="fill" width={1080} height={720}
                        />
                      </div>
                      <div className="col-6 position-relative">
                        <Image src={item?.image2}
                          alt={''}
                          className="card-img rounded-0" objectFit="cover" layout="fill" width={1080} height={720} />
                      </div>
                    </div>

                    <div className="card-body d-flex flex-column justify-content-end p-3 py-4">
                      <div className="d-flex flex-row justify-content-between align-items-center mb-3">
                        <div>
                          <span style={{ backgroundColor: item?.languageColor }} className="badge rounded-pill border text-white p-2">{item?.language || item?.topics?.join(", ")}</span>
                        </div>
                        <div className="d-flex flex-row justify-content-between align-items-center">
                          <Link legacyBehavior href={item.link} className="text-dark me-3" target="_blank">
                            <FaGithub size={20} />
                          </Link>
                          <Link legacyBehavior href={item.website} className="text-dark" target="_blank">
                            <FaExternalLinkAlt size={20} />
                          </Link>
                        </div>
                      </div>
                      <h5 className="card-title">{item?.repo}</h5>
                      <p className="text-muted">{item?.description}</p>
                    </div>
                  </div>
                </a>
              </Link>
            ))}

          </div>

          <div className="row mt-4">
            <div className="col-12 text-center">
              <button disabled={content.qualifications.items.length <= 3} onClick={() => setShowMoreProjects(show => !show)} type="button" className="btn btn-outline-dark">
                {(showMoreProjects && content.qualifications.items.length > 3) ? content.projects.btnmore.active : content.projects.btnmore.default}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id={content.qualifications.id} className="container-fluid py-5 px-0 px-lg-5 bg-dark text-white py-4">
        <div className="text-center mt-4 mb-4 app-text-primary">{content.qualifications.info}</div>
        <h2 className="text-center">{content.qualifications.title}</h2>

        <div className="row g-2 g-lg-4 m-0 mt-5">
          {content.qualifications.items.slice(0, showMoreQualifications ? content.qualifications.items.length : 3).map(item => (
            <div key={item?.title} className="col-12 col-md-4">
              <div className="card h-100 bg-dark p-4">
                <div className="card-body">
                  <div className="d-flex flex-row align-items-center">
                    <span className="app-icon position-relative rounded-circle" style={{ backgroundColor: item?.background, color: item?.color }}>
                      <span className='position-absolute'>
                        {item.icon}
                      </span>
                    </span>
                    <div className='p-4'>
                      <h3 className="card-title mb-0">
                        {item?.title}
                      </h3>
                      <small className='text-muted'>{item.info}</small>
                    </div>
                  </div>
                  <p className="card-text">{item?.description}</p>
                  {/* <small className="card-text">React Native/NextJS</small> */}
                  {/* <Link href={"#"}><a className="text-decoration-none app-text-primary p-0">Learn More</a></Link> */}
                </div>
              </div>
            </div>
          ))}
          {/* 

            <div className="col-12 col-md-3">
              <div className="card bg-dark p-4">
                <div className="card-body">
                <div className="d-flex flex-row align-items-center">
                    <span className="app-icon-btn rounded-circle">
                      <FaBriefcase />
                    </span>
                    <h3 className="card-title p-4">
                      Design
                    </h3>
                  </div>
                  <p className="card-text">Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                  <Link href={"#"}><a className="text-decoration-none app-text-primary p-0">Learn More</a></Link>
                </div>
              </div>
            </div> */}


        </div>
        <div className="text-center py-4 mt-5">
          {/* <p>Want more service? <Link href={"#"}><a className="text-decoration-none app-text-primary p-0">Explore Now</a></Link></p> */}
          <button disabled={content.qualifications.items.length <= 3} onClick={() => setShowMoreQualifications(show => !show)} className="btn app-text-primary app-border-primary text-decoration-none app-text-primary">
            {(showMoreQualifications && content.qualifications.items.length > 3) ? content.qualifications.btnmore.active : content.qualifications.btnmore.default}
          </button>
        </div>
      </div>

      {/* 
      <div className="container my-5">
        <div className="row py-4 align-items-center">
          <div className="col-12 col-md-6">
            <Image alt='pro' src={'/images/pic-about.png'} width={529} height={521} />
          </div>
          <div className="col-12 col-md-6">
            <div className="card border-0 bg-transparent">
              <div className="card-header bg-transparent border-0 app-text-primary">
                Mateus Arenas
              </div>
              <div className="card-body">
                <h1 className="card-title">Professional <br/> Web Designer</h1>
                <h5>Provides a full service range</h5>
                <p className="card-text">Ability to put themselves in the merchants shoes. It is meant to partner on the long run, and work as an extension of the merchants team.</p>
                <Link href={"#"}>
                  <a className="btn app-text-primary app-border-primary">About me</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      <div id={content.contact.id} className="bg-white my-5">
        <div className="container py-5">
          <div className="row py-5 align-items-start">

            <div className="col-12 col-md-6 p-3 p-md-5 order-md-2 order-sm-1">
              <div className="card border-0 text-dark bg-transparent">
                <div className="card-header bg-transparent border-0 app-text-primary">
                  {content.contact.info}
                </div>
                <div className="card-body mb-4">
                  <h1 className="card-title">{content.contact.title}</h1>
                  <p className="card-text">{content.contact.description}</p>
                </div>
                <ul className="list-group list-group-flush border-0 mb-5">
                  <li className="list-group-item bg-transparent border-0 mb-3">
                    <Link passHref href={`tel:${content.contact.phone}`}>
                      <a className="text-decoration-none text-dark">
                        <span className="app-icon-btn rounded-circle me-3">
                          <FaPhone />
                        </span>
                        {phoneToMask(content.contact.phone)}
                      </a>
                    </Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 mb-3">
                    <Link passHref href={`mailto:${content.contact.email}`}>
                      <a className="text-decoration-none text-dark">
                        <span className="app-icon-btn rounded-circle me-3">
                          <FaEnvelope />
                        </span>
                        {content.contact.email}
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 p-3 p-md-5 order-md-1 order-sm-2">
              <form onSubmit={handleSubmit(onSubmit)} className="row g-3 border bg-light p-4 py-5 rounded">

                <div className="col-12">
                  <h3>{content.contact.form.title}</h3>
                </div>

                <div className="col-12 form-floating mb-3">
                  <input id="floatingInput" type="email" className="form-control" placeholder="name@example.com" {...register("email", { required: true })} />
                  <label className="ps-3" htmlFor="floatingInput">{content.contact.form.inputs.email.label}</label>
                  {errors.email && <span>É precisso adicionar um email</span>}
                </div>

                <div className="col-12 form-floating">
                  <select className="form-select" id="floatingSelectGrid" {...register("subject", { required: true })}>
                    {content.contact.form.inputs.subject.values.map((value, index) => (
                      <option key={value} selected={!index} value={value} >{value}</option>
                    ))}
                  </select>
                  <label className="ps-3" htmlFor="floatingSelectGrid">{content.contact.form.inputs.subject.label}</label>
                </div>

                <div className="col-12 form-floating">
                  <textarea id="floatingTextarea2" className="form-control" placeholder="Leave a comment here" style={{ height: 100 }} {...register("message", { required: true })} />
                  <label className="ps-3" htmlFor="floatingTextarea2">{content.contact.form.inputs.message.label}</label>
                  {errors.message && <span>É precisso adicionar uma mensagem</span>}
                </div>

                <div className="col-12">
                  <button type="submit" className="btn app-bg-primary text-white float-end mt-4">{content.contact.form.inputs.submit.label}</button>
                </div>

              </form>
            </div>

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

export default Home
