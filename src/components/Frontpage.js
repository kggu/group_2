import React from "react";
import "./frontpage.css";
import "./footer.css";

const Frontpage = () => {
    return (
        <div className="container-fluid">
            <div className="jumbotron jumbotronLuokka text-secondary">
                <h1>
                    HotSpotted
                </h1>
                <p>
                    By students, for students.
                </p>
            </div>
            <footer className="footerLuokka text-secondary">
                <p>Frontend: Riina, Miikka, Samuli & Sami</p>
                <p>Backend: Mike, Kim, Wesley & Shane</p>
            </footer>
        </div>
    );

};
export default Frontpage;