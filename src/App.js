import './App.css';
import Header from "./components/Header/Header";

import {Route} from "react-router-dom";
import Step1 from "./components/Steps/Step1";
import Step2 from "./components/Steps/Step2";
import Step3 from "./components/Steps/Step3";
import Step4 from "./components/Steps/Step4";

function App() {
    return (
        <div className="App">
            <div className="card">
                <Header/>
                <Route exact path='/' component={Step1}/>
                <Route exact path='/step2' component={Step2}/>
                <Route exact path='/step3' component={Step3}/>
                <Route exact path='/step4' component={Step4}/>
            </div>
        </div>
    );
}

export default App;
