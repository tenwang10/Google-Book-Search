import React from "react";
import {appendScript} from '../../utils/appendScript'

function Header() {
    appendScript("https://desaign.app/clients/cli/javascript/gradient-czP5vBAsHbnK8R2zvetc/k9r9kd49CVdz89uGt9X4.js");
    return (
        <div className="jumbotron text-center gradientBody rounded-0 mt-5">
            <div className="container text-light">
                <h1>Google Book Search</h1>
                <h5>Search for and Save Books of Interest</h5>
            </div>
        </div>
    );
}

export default Header;