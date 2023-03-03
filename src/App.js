import { Routes, Route } from "react-router-dom";

// import components
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/header/CompoundHeader";
import Footer from "./components/Footer";

// import Pages
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
