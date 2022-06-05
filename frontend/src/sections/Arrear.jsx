import React from "react";
import NoReccords from "../components/NoReccords";

const data = [];
const Arrear = () => {
    return (
        <div>
            {data.length !== 0 ? (
                <div>Data</div>
            ) : (
                <NoReccords heading="Arrear" />
            )}
        </div>
    );
};

export default Arrear;
