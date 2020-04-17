
import React, { useState, useEffect} from "react";
import { Container, Jumbotron } from "react-bootstrap";
import "../frontpage.css";
import "./AdminPage.css";
import { useBackendAPI } from "../../utils/backendAPI";
import { useAuth0 } from "../../react-auth0-spa";
import Spinner from "react-bootstrap/Spinner"
import Alert from "react-bootstrap/Alert"
import AdminActions from "./AdminActions"

const AdminPage = () => {
    const { findUsersForAdmin, userQueryResponse } = useBackendAPI();

    const { user } = useAuth0();

    const [loading, setLoading] = useState();
    const [hasAdminPermission, setHasAdminPermission] = useState();
    const [loginError, setLoginError] = useState();

    useEffect(() => {
        setLoading();
        setHasAdminPermission();
        setLoginError();
    },[user])

    useEffect(() => {
        setLoading(true)
        findUsersForAdmin();
    },[])

    useEffect(() => {
        if (userQueryResponse) {
            console.log(userQueryResponse)
            if (userQueryResponse.status == 200) {
                console.log("admin login success")
                setLoading(false)
                setHasAdminPermission(true);
            } else {
                console.log("admin login failure")
                setLoading(false)
                setLoginError(true);
            }
        }
    },[userQueryResponse])

    return <Container>
        <Jumbotron className="custombg-primary jumbotronStyle">

            {loading && ( <Spinner animation="border" role="status"> </Spinner> )}

            {loginError && ( <Alert variant="danger">
                <Alert.Heading>Your account does not have admin priviliges.</Alert.Heading>
                </Alert>
            )}

            {hasAdminPermission && (<AdminActions></AdminActions>)}
        </Jumbotron>
    </Container>
}

export default AdminPage