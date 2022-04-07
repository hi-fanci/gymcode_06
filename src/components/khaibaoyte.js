import { Formik } from "formik";
import React from "react";
import Inputerror from "./inputerror";

const KhaiBaoYTe = () => {
    return (
        <div>
            <h1>Khai bao y te!</h1>
            <Formik
                initialValues={{
                    name: "",
                    cmnd: "",
                    namsinh: "",
                    gioitinh: "",
                    quoctich: "",
                    thanhpho: "",
                    quan: "",
                    huyen: "",
                    sdt: "",
                    email: "",
                }}
                validate={(values) => {
                    const errors = {};
                    // name
                    if (!values.name) {
                        errors.name = {
                            message: "Required",
                            css: "error",
                        };
                    } else if (values.name.length < 5) {
                        errors.name = {
                            message: "Too short",
                            css: "error",
                        };
                    }

                    // cmnd
                    if (!values.cmnd) {
                        errors.cmnd = {
                            message: "Required",
                            css: "error",
                        };
                    } else if (!Number(values.cmnd)) {
                        errors.cmnd = {
                            message: "Not a number",
                            css: "error",
                        };
                    } else if (
                        values.cmnd.length < 9 ||
                        values.cmnd.length > 12
                    ) {
                        errors.cmnd = {
                            message: "Wrong format",
                            css: "error",
                        };
                    }

                    // namsinh
                    if (!values.namsinh) {
                        errors.namsinh = {
                            message: "Required",
                            css: "error",
                        };
                    } else if (!Number(values.namsinh)) {
                        errors.namsinh = {
                            message: "Not a Number",
                            css: "error",
                        };
                    }

                    // giotinh
                    if (!values.gioitinh) {
                        errors.gioitinh = {
                            message: "Required",
                            css: "error",
                        };
                    }

                    // sdt
                    if (!values.sdt) {
                        errors.sdt = {
                            message: "Required",
                            css: "error",
                        };
                    } else if (!Number(values.sdt)) {
                        errors.sdt = {
                            message: "Not a Number",
                            css: "error",
                        };
                    } else if (
                        values.sdt.length < 9 ||
                        values.sdt.length > 12
                    ) {
                        errors.sdt = {
                            message: "Wrong format",
                            css: "error",
                        };
                    }

                    //mail
                    if (!values.email) {
                        errors.email = {
                            message: "Required",
                            css: "error",
                        };
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                        )
                    ) {
                        errors.email = {
                            message: "Invalid email address",
                            css: "error",
                        };
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert("OK");
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="">Ten</label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <Inputerror res={errors.name} />

                        <label htmlFor="">Cmnd</label>
                        <input
                            type="text"
                            name="cmnd"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.cmnd}
                        />
                        <Inputerror res={errors.cmnd} />

                        <label htmlFor="">Nam sinh</label>
                        <input
                            type="text"
                            name="namsinh"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.namsinh}
                        />
                        <Inputerror res={errors.namsinh} />

                        <p>Gioi tinh</p>

                        <label>Nam</label>
                        <input
                            type="radio"
                            name="gioitinh"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value="Nam"
                        />

                        <label>Nu</label>
                        <input
                            type="radio"
                            name="gioitinh"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value="Nu"
                        />

                        <label>GT3</label>
                        <input
                            type="radio"
                            name="gioitinh"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value="GT3"
                        />
                        <Inputerror res={errors.gioitinh} />

                        <label htmlFor="">Quoc tich</label>
                        <select
                            name="quoctich"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value={"vietnam"} defaultValue={true}>
                                Viet Nam
                            </option>
                            <option value={"thailand"}>Thailand</option>
                            <option value={"Singapore"}>Singapore</option>
                            <option value={"Laos"}>Laos</option>
                        </select>

                        <label htmlFor="">Thanh Pho</label>
                        <select
                            name="thanhpho"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value={"hcm"} defaultValue={true}>
                                Ho Chi Minh
                            </option>
                            <option value={"hn"}>Ha Noi</option>
                            <option value={"vungtau"}>Vung Tau</option>
                            <option value={"longan"}>Long An</option>
                        </select>

                        <label htmlFor="">Quan/huyen</label>
                        <select
                            name="quan"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value={"q1"} defaultValue={true}>
                                Quan 1
                            </option>
                            <option value={"q2"}>Quan 2</option>
                            <option value={"q3"}>Quan 3</option>
                            <option value={"q4"}>Quan 4</option>
                        </select>

                        <label htmlFor="">Phuong</label>
                        <select
                            name="phuong"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option value={"p25"} defaultValue={true}>
                                Phuong 25
                            </option>
                            <option value={"p26"}>Phuong 26</option>
                            <option value={"p27"}>Phuong 27</option>
                            <option value={"p28"}>Phuong 28</option>
                        </select>

                        <label htmlFor="">Sdt</label>
                        <input
                            type="text"
                            name="sdt"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.sdt}
                        />
                        <Inputerror res={errors.sdt} />

                        <label htmlFor="">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <Inputerror res={errors.email} />

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default KhaiBaoYTe;
