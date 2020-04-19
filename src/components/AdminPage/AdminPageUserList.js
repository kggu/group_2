import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useBackendAPI } from "../../utils/backendAPI";
import Spinner from "react-bootstrap/Spinner"
import UserDeletionButton from "./UserDeletionButton"


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
                <th>Nickname</th>
                <th>Action</th>
            </tr>
        </thead>
        {loading && ( <Spinner animation="border" role="status"> </Spinner> )}
        {users && users.map((user, index) => {
            return (<tr>
                <td>
                    {index + 1}
                </td>
                <td>
                    {user.name}
                </td>
                <td>
                    {user.nickname}
                </td>
                <td>
                    <UserDeletionButton user={user}></UserDeletionButton>
                </td>
            </tr>)
        })}
    </Table>
}
export default AdminPageUserList;