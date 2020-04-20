import React, {useState} from "react";
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import "./AdminActions.css";
import AdminPageUserList from "./AdminPageUserList";

import Button from "react-bootstrap/Button"
import ReviewHotSpotChangesForm from "../Reusable/ReviewHotSpotChangesForm";

const AdminActions = () => {
    const [key, setKey] = useState('View suggestions')

    const [show, setShow] = useState(false);

    return <Tabs
            id="Admin actions"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="custom-tabs">
                <Tab eventKey="View suggestions" title="View suggestions" tabClassName="bg-darkblue">
                    <Button onClick={() => {setShow(true)}}></Button>
                    {show && <ReviewHotSpotChangesForm slug={"kaupunginkirjasto"} show={show} onHide={() => {setShow(false)}}></ReviewHotSpotChangesForm>}
                    
                </Tab>
                <Tab eventKey="Manage users" title="Manage Users" tabClassName="bg-darkblue">
                    <AdminPageUserList></AdminPageUserList>
                </Tab>
            </Tabs>
}

export default AdminActions