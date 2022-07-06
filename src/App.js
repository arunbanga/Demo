import Form from "./Components/Form";
import Formed from "./Components/Form2";
import Forms from "./Components/Forms";
import Newform from "./Components/New from";
import Formiks from "./Components/Formik";
import Formhandling from "./Components/Formhandling";
import UseEffectApi from "./Components/UseEffect/useEffectApi";
import { Routes, Route } from "react-router-dom";
import Registraionfrom from "./Components/Registrationform";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route path="/formed" element={<Formed />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/newform" element={<Newform />} />
        <Route path="/formhandling" element={<Formhandling />} />
        <Route path="/useffectapi" element={<UseEffectApi />} />
        <Route path="/formik" element={<Formiks />} />
        <Route path="/register" element={<Registraionfrom />} />
      </Routes>
    </div>
  );
}

export default App;
