import React from "react";

//style
import './Background.scss';

//myfile
import backVideo from '../img/backVideo.mp4';



function Background() {
    return (
        <video autoPlay muted loop>
            <source
                src={backVideo} type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
    );
}

export { Background };