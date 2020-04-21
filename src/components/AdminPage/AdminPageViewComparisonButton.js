import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Alert from "react-bootstrap/Alert"
import Spinner from "react-bootstrap/Spinner"
import ReviewHotSpotChangesForm from "../Reusable/ReviewHotSpotChangesForm"

const AdminPageViewComparisonButton = (props) => {

    const [showReviewForm, setShowReviewForm] = useState(false);

    const onApprove = () => {
        console.log("approved");
    }

    const onDeny = () => {
        console.log("denied");
    }

    const closeReviewForm = () => {
        setShowReviewForm(false);
    }

    return (
        <>
            <Button onClick={() => {setShowReviewForm(true)}}>Review Changes</Button>

            {showReviewForm && (<ReviewHotSpotChangesForm
                slug={props.change.hotSpot.slug}
                newData={props.change}
                show={showReviewForm}
                onConfirm={onApprove}
                onCancel={onDeny}
                confirmDescription="Approve changes"
                cancelDescription="Deny changes"
                onHide={closeReviewForm}
                >
        </ReviewHotSpotChangesForm>
      )}
        </>
    )
    
}

export default AdminPageViewComparisonButton;

