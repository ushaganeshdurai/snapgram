import ReactDOM  from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter> {/*Browser router is going to control our routing*/}
    <App />
    </BrowserRouter>
    
)