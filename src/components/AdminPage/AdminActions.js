import React, {useState, useEffect} from "react";
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import "./AdminActions.css";
import AdminPageUserList from "./AdminPageUserList";

import Button from "react-bootstrap/Button"
import ReviewHotSpotChangesForm from "../Reusable/ReviewHotSpotChangesForm";
import { useBackendAPI } from "../../utils/backendAPI";


const AdminActions = () => {
    const [key, setKey] = useState('View suggestions')

    const [show, setShow] = useState(false);
    const { selectedHotspot, getHotspotWithSlug } = useBackendAPI();

    useEffect(() => {
        getHotspotWithSlug("kaupunginkirjasto");
    }, []);

    useEffect(() => {
        console.log(selectedHotspot);
    },[selectedHotspot])

    const tester = () => {
        console.log("Approved changes");
        setShow(false);
    }


    return <Tabs
            id="Admin actions"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="custom-tabs">
                <Tab eventKey="View suggestions" title="View suggestions" tabClassName="bg-darkblue">
                    {selectedHotspot && <Button onClick={() => {setShow(true)}}></Button>}

                    {show && (
                        <ReviewHotSpotChangesForm
                        newData={selectedHotspot}
                        show={show}
                        onAction={tester}
                        actionDescription="Approve changes"
                        onHide={() => {setShow(false)}}
                        >
                        </ReviewHotSpotChangesForm>
                    )}
                    
                </Tab>
                <Tab eventKey="Manage users" title="Manage Users" tabClassName="bg-darkblue">
                    <AdminPageUserList></AdminPageUserList>
                </Tab>
            </Tabs>
}

export default AdminActions