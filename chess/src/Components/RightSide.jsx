import React from "react";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import ResetButton from './ResetButton';
import PreviousButton from "./PreviousButton";

import '../styles/right-side.css';

export default function RightSide({clickButton, computerGame}) {

    return (
        <div className="right-side">
            <ResetButton computerGame={computerGame} />
            <div className="prev-next">
                <PreviousButton icon={faArrowLeft} classDiv="prev-button" clickButton={clickButton}/>
                <PreviousButton icon={faArrowRight} classDiv="next-button" clickButton={clickButton}/>
            </div>
        </div>
    );
};
