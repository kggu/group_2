
import React, { useState, useEffect} from "react";
import { Container, Jumbotron } from "react-bootstrap";
import "../frontpage.css";
import "./AdminPage.css";
import { useBackendAPI } from "../../utils/backendAPI";

const AdminPage = () => {
    const { findUsersForAdmin, userQueryResponse } = useBackendAPI();

    useEffect(() => {
        findUsersForAdmin();
    },[])

    useEffect(() => {
        if (userQueryResponse) {
            console.log(userQueryResponse)
            if (userQueryResponse.status == 200) {
                // works
            } else {
                // unauthorized
            }
        }
    },[userQueryResponse])

    return <Container>
        <Jumbotron className="custombg-primary jumbotronStyle">

        </Jumbotron>
    </Container>
}

export default AdminPage