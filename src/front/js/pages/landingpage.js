import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import IconImage from "../../img/Icon.png";
import IconPlayDemo from "../../img/IconPlayDemo.png";
import QRBackground from "../../img/qr_image.png";
import { ComoFunciona } from "../component/ComoFunciona";
import { Ventajas } from "../component/Ventajas";
import { Afiliados } from "../component/Afiliados";
import { ContactForm } from "../component/contactForm";
import { Navbar } from "../component/navbar";

export const LandingPage = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <Navbar />
            <div className="d-flex flex-wrap col-12 p-0 m-0 text-white  background-landingpage">

                <div className="columna1 col-6 p-3 ">
                    <div className="fila1  mb-3 d-flex align-items-center">
                        <img
                            src="https://play-lh.googleusercontent.com/NciBqxLXBwgKfKDiVCJ9y_FrbEXVtHuIJyLaTNGiIw88S-MJ_iS1442Epi5gD_ghpDg=w240-h480-rw"
                            alt="logo"
                            className="logo-img" 
                            width={"150px"}
                        />
                        <div className="ml-3">
                            <span className="text-span">SCAN-ORDER-ENJOY-PAY</span>
                            <div className="main-title-landingpage">
                                <h1>Quick Pay QR</h1>
                            </div>
                        </div>
                    </div>

                    <div className="fila2">
                    <ul className="my-3">
                                    <li>
                                        <div className="icon">
                                            <img src={IconImage} alt="Icon" />
                                        </div>
                                        <div className="text-column">
                                            <h4>Sumérgete en una nueva era de comodidad.<br />
                                                Dile adiós a las esperas.</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src={IconImage} alt="Icon" />
                                        </div>
                                        <div className="text-column">
                                            <h4>Rompe con la rutina de esperar.<br />
                                                Pide y paga en segundos con tecnología QR.</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src={IconImage} alt="Icon" />
                                        </div>
                                        <div className="text-column">
                                            <h4>Tu tiempo es valioso y nosotros lo entendemos.<br />
                                                Descubre una experiencia sin igual, donde cada segundo cuenta.</h4>
                                        </div>
                                    </li>
                                </ul>
                    </div>

                    <div className="fila3">
                        <span className="demo-container">
                            <div className="icon-demo-column">
                                <a href="#">
                                    <img src={IconPlayDemo} alt="Icon" className="demo-icon" />
                                </a>
                            </div>
                            <div className="text-column hover-effect" style={{ letterSpacing: '3px' }}>
                                VER DEMO
                            </div>
                        </span>
                    </div>
                </div>

                <div className="columna2 col-6 p-3 ">
                    <div className="container">
                        <img src={QRBackground} alt="Icon" className="qr-img" />
                    </div>
                </div>
            </div>

            <ComoFunciona />
            <Ventajas />
            <Afiliados />
            <ContactForm />
        </>
    );
};



