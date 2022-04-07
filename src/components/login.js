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
            case "name": {
                if (e.value.length < 5) {
                    _error[e.name] = "khong duoc nho hon 5";
                } else if (e.value.length > 20) {
                    _error[e.name] = "khong duoc dai hon 20";
                } else {
                    _error[e.name] = null;
                }

                break;
            }

            case "password": {
                if (e.value.length < 8) {
                    _error[e.name] = "khong dc nho hon 5";
                } else {
                    _error[e.name] = null;
                }
                break;
            }

            case "mail": {
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
            <p>username</p>
            <Input
                type="text"
                name="name"
                value={formData.name}
                error={formError.name}
                reCallback={handleInputChange}
            />

            <p>password</p>
            <Input
                type="password"
                name="password"
                value={formData.password}
                error={formError.password}
                reCallback={handleInputChange}
            />

            <p>gmail</p>
            <Input
                type="mail"
                name="mail"
                value={formData.mail}
                error={formError.mail}
                reCallback={handleInputChange}
            />
        </div>
    );
};

export default Login;
