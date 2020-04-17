import React, {useState} from "react";
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"

const AdminActions = () => {
    const [key, setKey] = useState('View suggestions')

    return <Tabs
            id="Admin actions"
            activeKey={key}
            onSelect={(k) => setKey(k)}>
                <Tab eventKey="View suggestions" title="View suggestions">
                    <p>In progress.</p>
                </Tab>
                <Tab eventKey="Manage users" title="Manage Users">
                    <p>Users</p>
                </Tab>
            </Tabs>
}

export default AdminActions