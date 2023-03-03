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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
