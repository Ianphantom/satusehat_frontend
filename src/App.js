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
import Perizinan from "./pages/user/Perizinan";
import Profile from "./pages/user/Profile";
import DetailPerizinan from "./pages/user/DetailPerizinan";
import DetailRekamMedis from "./pages/user/DetailRekamMedis";

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
          <Route path='rekam-medis/:id' element={<DetailRekamMedis />} />
          <Route path='perizinan' element={<Perizinan />} />
          <Route path='perizinan/:id' element={<DetailPerizinan />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
