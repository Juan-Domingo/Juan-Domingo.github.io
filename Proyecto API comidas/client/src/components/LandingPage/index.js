import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.css'

const LandingPage = () => {
    return (
        <div className={style.page}>
            <div className={style.landing}>
                <h4 > HELL'S KITCHEN </h4>
                <br />
                <p >
                    Bienvenido a tu cocina
                    ¿Que menu quieres preparar hoy?
                </p>
            </div >
            <Link to='/food/home' >
                <a className={style.btn} href="/">
                    <div>
                        <span></span>
                    </div>
                    <p>START</p>
                </a>
            </Link>
        </div>
    );
};

export default LandingPage;