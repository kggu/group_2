import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useBackendAPI } from "../../utils/backendAPI";
import Spinner from "react-bootstrap/Spinner"
import Button from "react-bootstrap/Button"


const AdminPageUserList = () => {
    const { findUsersForAdmin, userQueryResponse } = useBackendAPI();


    const [loading, setLoading] = useState();
    const [users, setUsers] = useState();

    useEffect(() => {
        setLoading(true)
        findUsersForAdmin();
    },[])

    useEffect(() => {
        if (userQueryResponse) {
            setLoading(false)
            setUsers(userQueryResponse.data);
        }
    },[userQueryResponse])

    return <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
        </thead>
        {loading && ( <Spinner animation="border" role="status"> </Spinner> )}
        {users && users.map((option, index) => {
            return (<tr>
                <td>
                    {index}
                </td>
                <td>
                    {option.name}
                </td>
                <td>
                    <Button variant="danger">Delete user content</Button>
                </td>
            </tr>)
        })}
    </Table>
}
export default AdminPageUserList;