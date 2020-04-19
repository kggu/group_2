import React, {useState} from "react";
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Alert from "react-bootstrap/Alert"
import Spinner from "react-bootstrap/Spinner"

const UserDeletionButton = props => {
    const [showDeletionForm, setShowDeletionForm] = useState(false);
    const [deletionStart, setDeletionStart] = useState(false);
    const [deletionPending, setDeletionPending] = useState(false);
    const [deletionResolved, setDeletionResolved] = useState(false);

    const closeModal = () => {
        setShowDeletionForm(false);
    }

    const showModal = () => {
        setDeletionStart(true);
        setShowDeletionForm(true);
    }

    const startDeletionProcess = () => {
        setDeletionStart(false);
        console.log(props.user);
        setDeletionPending(true);
    }

    /*const onResolved = () => {
        setDeletionPending(false);
        setDeletionResolved(true);
    }*/
    

    return  (<>
        <Button variant="danger" onClick={showModal}>Delete user</Button>
        
        <Modal
        show={showDeletionForm}
        onHide={closeModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            <Modal.Header closeButton>
                <Modal.Title>Delete user content</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {deletionStart && (
                <>
                    <p>Delete all user content made by user {props.user.name}?</p>
                    <Alert variant="danger">
                        Warning! This cannot be undone!<br></br><br></br>
                    <Button variant="danger" onClick={startDeletionProcess}>Delete content</Button>
                    </Alert>
                </>)}

                {deletionPending && ( <Spinner animation="border" role="status"> </Spinner> )}

                {deletionResolved && (
                    <Alert variant="success">
                        All user content from user {props.user.name} successfully deleted.
                    </Alert>
                )}
                
            </Modal.Body>
        </Modal>
    </>)
}

export default UserDeletionButton;