import {BrowserRouter as Router, Routes,Route ,Link} from "react-router-dom";
import EmpList from "./EmpList";
import EmpForm from "./EmpForm";

function App(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<EmpList/>} />
                    <Route path="/form" element={<EmpForm/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;