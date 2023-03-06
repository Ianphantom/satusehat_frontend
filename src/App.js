import { Routes, Route } from "react-router-dom";

// import components
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/header/CompoundHeader";
import Footer from "./components/Footer";

// import Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

// import user page
import SkeletonUser from "./pages/user/SkeletonUser";
import Dashboard from "./pages/user/Dashboard";
import RekamMedis from "./pages/user/RekamMedis";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user' element={<SkeletonUser />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='rekam-medis' element={<RekamMedis />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
