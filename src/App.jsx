import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Service from "./components/Service";

const App = () => {
  return (
    <Router> 
      <main className="text-sm text-neutral-300 antialiased ">
        <Navbar />
        <Routes>
          <Route path= '/' element={<Homepage/>} /> 
          <Route path='/service' element={<Service />} />
        </Routes>
        <Footer/>
      </main>
    </Router>
  );
}

export default App;
