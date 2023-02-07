import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetails from "./pages/MovieDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      {/* <Switch>
        
      </Switch> */}

      <Routes>
        <Route index element={<AboutUs />} />
        <Route path='work' element={<OurWork />} />
        <Route path='/work/:id' element={<MovieDetails />} />
        <Route path='contact' element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
