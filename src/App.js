import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash from "./Pages/Dash";
import SignIn from "./Pages/signIn";
import SignUp from "./Pages/signUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/dash" element={<Dash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
