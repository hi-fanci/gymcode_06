import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./components/user";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/users" element={<User />} />
                </Routes>
            </Router>
        </Provider>
    );
}
export default App;
