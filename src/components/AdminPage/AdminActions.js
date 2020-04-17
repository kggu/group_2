import React, {useState} from "react";
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import "./AdminActions.css";
import AdminPageUserList from "./AdminPageUserList";

const AdminActions = () => {
    const [key, setKey] = useState('View suggestions')

    return <Tabs
            id="Admin actions"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="custom-tabs">
                <Tab eventKey="View suggestions" title="View suggestions" tabClassName="bg-darkblue">
                    <p>In progress.</p>
                </Tab>
                <Tab eventKey="Manage users" title="Manage Users" tabClassName="bg-darkblue">
                    <AdminPageUserList></AdminPageUserList>
                </Tab>
            </Tabs>
}

export default AdminActions