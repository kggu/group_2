import React from "react";
import "./frontpage.css";
import "./footer.css";

const Frontpage = () => {
    return (
        <div className="container-fluid px-0">
            <div className="jumbotron jumbotronLuokka text-secondary">
                <h1>
                    HotSpotted
                </h1>
                <p className = "mb-0">
                    By students, for students.
                </p>
            </div>
            <footer className="footerLuokka text-secondary">
                <p className = "mb-0">Frontend: Riina, Miikka, Samuli & Sami</p>
                <p className = "mb-0">Backend: Mike, Kim, Wesley & Shane</p>
            </footer>
        </div>
    );

};
export default Frontpage;