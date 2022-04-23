

import React from "react";
import Toast from "react-bootstrap/Toast";

const JobsAlert = () => {


    return (
        <Toast>
            <Toast.Header>
                <img
                    src="http://placekitten.com/50/50"
                    className="rounded mr-2"
                    alt=""
                />
                <strong className="mr-auto">Title</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Toast.Body>
        </Toast>
    );
}

export default JobsAlert