import React, { useState, useEffect } from "react";
import "./frontpage.css";
import "./footer.css";
import { Toast } from "react-bootstrap";
import img from "../map.png";

import qs from "qs"

const Frontpage = props => {
    const [showErrorMessage, setShowErrorMessage ] = useState(false)
    const [errorMessage, setErrorMessage ] = useState("Testi")

    useEffect(() => {
        const parsedError = qs.parse(props.location.search, {ignoreQueryPrefix: true},).error_description
        if (parsedError != undefined) {
            setShowErrorMessage(true)
            setErrorMessage(parsedError)
        }
      }, []);

    return (
        <div className="container-fluid px-0 containerStyling">
            <div className="jumbotron jumbotronLuokka text-secondary">
                <h1>
                    HotSpotted
                </h1>
                <p>
                    By students, for students.
                </p>
                <div className = "img">
                    <img src = {img} width = "950" height = "500"/>
                </div>
                <p>
                    Some info how to use this
                </p>
            </div>
            <footer className="footerLuokka text-secondary">
                <p className = "mb-0">Frontend: Riina, Miikka, Samuli & Sami</p>
                <p className = "mb-0">Backend: Mike, Kim, Wesley & Shane</p>
            </footer>
            <Toast
                show={showErrorMessage}
                onClose={() => {setShowErrorMessage(false)}}
                style ={{
                    position:'absolute',
                    top:70,
                    right:10
                }}>
                <Toast.Header className = "errorMessageStyling">
                    <strong className="mr-auto">Error message</strong>
                </Toast.Header>
                <Toast.Body className = "errorMessageStyling text-secondary">{errorMessage}</Toast.Body>
            </Toast>
        </div>
    );

};
export default Frontpage;