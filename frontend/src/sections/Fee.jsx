import React from "react";
import NoReccords from "../components/NoReccords";

const data = [];
const Fee = () => {
    return (
        <div>
            {data.length !== 0 ? <div>Data</div> : <NoReccords heading="Fee" />}
        </div>
    );
};

export default Fee;
