import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import { App } from "./App";
import { ApiContextProvider, AuthContextProvider } from "./contexts";
ReactDOM.render(
    <BrowserRouter>
        <AuthContextProvider>
            <ApiContextProvider baseURL="https://jsonplaceholder.typicode.com/">
                <App />
            </ApiContextProvider>
        </AuthContextProvider>
    </BrowserRouter>,
document.getElementById("root"));
