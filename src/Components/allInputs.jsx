import React from "react";
import style from "./FormStyle.module.css";

const AllInputs = (props) => {
    const {onChange, errorMsg, type, ...inputProps} = props;
    return (
        <>
            <input className={style.inputStyle} onChange={onChange} type={type} {...inputProps} />
            <span>{errorMsg}</span>
        </>
    );
}

export default AllInputs