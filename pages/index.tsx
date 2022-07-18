import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import Thumbnail from '../components/Thumbnail'
import styles from '../styles/Home.module.css'
import { FaFacebook, FaTwitch, FaInstagram } from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className="col-12 bg-dark py-5">
          <div className="container">
            <div className="row align-items-center gx-5">
              <div className="col-12 col-md-6">
                <div className="card bg-dark text-white">
                  <div className="card-header">
                    Mateus Arenas
                  </div>
                  <div className="card-body">
                    <h1 className="card-title">The Simple, Clean Designer</h1>
                    <p className="card-text">Agency provides a full service range including technical skills, design, business understanding.</p>
                    <a href="#" className="btn btn-primary">See My Work</a>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
               
                {/* <img src="/images/pic.png" className="img-fluid" alt="..." /> */}

                <Image src="/images/pic.png" className="img-fluid" width={569} height={555} />
              </div>
        </div>
        </div>
      </div>

      <div className="col-12 py-5">
        <div className="container">
            <div className="text-center mb-4">Service</div>
            <h2 className="text-center">How I Can Help You With</h2>

            <div className="row mt-5">

              <div className="col-12 col-md-6">
                <div className="card p-4">
                  <div className="card-body">
                    <h3 className="card-title">Design</h3>
                    <p className="card-text">Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="card p-4">
                  <div className="card-body">
                    <h3 className="card-title">Design</h3>
                    <p className="card-text">Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>


            </div>
            <div className="row text-center align-items-center py-4">
              <p className=''>Want more service? <span>Explore Now</span></p>
            </div>
        </div>
      </div>


      <footer className="bd-footer pt-4 pt-md-5 mt-5 bg-light">
        <div className="container py-4 pt-md-5 px-4 px-md-3">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <a className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Bootstrap">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="d-block me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg> */}
                <span className="fs-5">Personal</span>
              </a>
            </div>
            <div className="col-6 col-lg-3 offset-lg-1 mb-3">
              <h5 className="mb-4">Menu</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#">About</a></li>
                <li className="mb-2"><a href="#">Services</a></li>
                <li className="mb-2"><a href="#">Blog</a></li>
                <li className="mb-2"><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-3 mb-3">
              <h5 className="mb-4">Service</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#">Design</a></li>
                <li className="mb-2"><a href="#">Devlopment</a></li>
                <li className="mb-2"><a href="#">Marketing</a></li>
                <li className="mb-2"><a href="#">See More</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <ul className="list-unstyled row">
                <li className="mb-2 col-4">
                  <a href="#">
                    <FaFacebook size={24*2} />
                  </a>
                </li>
                <li className="mb-2 col-4">
                  <a href="#">
                    <FaTwitch size={24*2} />
                  </a>
                </li>
                <li className="mb-2 col-4">
                  <a href="#">
                    <FaInstagram size={24*2} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="border-2 opacity-50"/>
          <div className="row mt-5">
            
            <div className="col ">
              <p>Copyright © 2022 Laaqiq. All Rights Reserved.</p>
            </div>

            <div className="col-auto">
                <a href="#" className="stretched-link me-5">Terms of Use</a>
                <a href="#" className="stretched-link me-5">Privacy Policy</a>
            </div>

          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
