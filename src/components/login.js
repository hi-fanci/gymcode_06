import React from "react";
import Input from "./input";

const Login = () => {
    const [formData, setFormData] = React.useState({});
    const [formError, setFormError] = React.useState({});

    const handleInputChange = (e) => {
        let _state = { ...formData },
            _error = { ...formError };

        _state[e.name] = e.value;

        switch (e.name) {
            case "ten": {
                if (e.value.length < 5) {
                    _error[e.name] = "khong duoc nho hon 5";
                } else if (e.value.length > 20) {
                    _error[e.name] = "khong duoc dai hon 20";
                } else {
                    _error[e.name] = null;
                }

                break;
            }

            case "matkhau": {
                if (e.value.length < 8) {
                    _error[e.name] = "khong dc nho hon 5";
                } else {
                    _error[e.name] = null;
                }
                break;
            }

            case "taikhoan": {
                if (e.value.length < 8) {
                    _error[e.name] = "khong duoc nho hon 5";
                } else if (
                    !e.value.match(
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                    )
                ) {
                    _error[e.name] = "sai dinh dang";
                } else {
                    _error[e.name] = null;
                }
                break;
            }
        }
        setFormError(_error);
        setFormData(_state);
    };

    return (
        <div>
            <Input
                type="text"
                name="ten"
                value={formData.ten}
                error={formError.ten}
                reCallback={handleInputChange}
            />
            <Input
                type="password"
                name="matkhau"
                value={formData.matkhau}
                error={formError.matkhau}
                reCallback={handleInputChange}
            />
            <Input
                type="gmail"
                name="taikhoan"
                value={formData.taikhoan}
                error={formError.taikhoan}
                reCallback={handleInputChange}
            />
        </div>
    );
};

export default Login;
