import React from 'react';
import style from './index.module.css';
import { Link } from 'react-router-dom';
import notfound from '../../assets/notfound.png'
import {IoBatteryFullSharp,IoBatteryHalfSharp,IoBatteryDeadSharp} from 'react-icons/io5'
import {VscStarEmpty, VscStarHalf, VscStarFull} from 'react-icons/vsc'

const Recipe = ({ id, title, score, healthScore, img, diets }) => {
    let scoreStar = [];
    let scoreHeart = [];
    let scoreStarTotal = [];
    let scoreHeartTotal = [];
    let totalStar = (10 - Math.floor(score / 10)) - (score % 10 > 0 ? 1 : 0);
    let totalHeart = (10 - Math.floor(healthScore / 10)) - ((healthScore % 10 > 0) ? 1 : 0);
    for (let i = 0; i < Math.floor(score / 10); i++) {
        scoreStar.push(i);
    };
    for (let i = 0; i < Math.floor(healthScore / 10); i++) {
        scoreHeart.push(i);
    };
    for (let i = 0; i < totalStar; i++) {
        scoreStarTotal.push(i);
    };
    for (let i = 0; i < totalHeart; i++) {
        scoreHeartTotal.push(i);
    };

    return (
        <Link className={style.link} to={`/food/recipe/${id}`}>
            <div className={style.recipe}>
                <h1 className={style.title}>{title}</h1>
                {img ? <img src={img} alt="not found" /> : <img src={notfound} alt="not found" />}
                <div className={style.score}>
                    <div className={style.star}>
                        {scoreStar.map(e => <VscStarFull />)}
                        {(score % 10 > 0) && < VscStarHalf/>}
                        {scoreStarTotal.map(e => < VscStarEmpty/>)}
                        <p className={style.starp}>Score: {score}</p>
                    </div>
                    <div className={style.heart} >
                        {scoreHeart.map(e => < IoBatteryFullSharp/>)}
                        {(healthScore % 10 > 0) && <IoBatteryHalfSharp />}
                        {scoreHeartTotal.map(e => <IoBatteryDeadSharp />)}
                        <p className={style.heartp}>Health Score: {healthScore}</p>
                    </div>
                    <li>Diet Types:
                        {diets && diets.map(d => <text> {d},</text>
                        )}
                    </li>
                </div>
            </div>
        </Link>
    );
};

export default Recipe;