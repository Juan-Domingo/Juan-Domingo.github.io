import React from 'react';
import style from './index.module.css';
import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = () => {
    return (
        <div className={style.loading}>
            <PacmanLoader size={50} color="green"/>
        </div>
    );
};

export default Loading;