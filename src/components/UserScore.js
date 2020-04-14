import React from "react";
import { Button } from "react-bootstrap";
import { useBackendAPI } from "../utils/backendAPI";

const UserScore = () => {
    const { findMyScore } = useBackendAPI();

    return <Button onClick={findMyScore}></Button>
};

export default UserScore;