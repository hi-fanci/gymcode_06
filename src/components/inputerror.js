import React from "react";

const Inputerror = (props) => {
    const { res } = props;
    return (
        <>{res && res.message && <p className={res.css}>{res.message}</p>}</>
    );
};

export default Inputerror;
