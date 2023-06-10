import { Route, Routes, useLocation } from "react-router-dom";
import classes from "./App.module.scss";
import Home from "./pages/home/Home";
import Contacts from "./pages/contacts/Contacts";
import Nav from "./components/navigation/Nav";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import cl from "classnames";
import Resume from "./pages/resume/Resume";
import Gallery from "./pages/gallery/Gallery";
import Exhibitions from "./pages/exhibitions/Exhibitions";

function App() {
  const location = useLocation();

  return (
    <div
      className={cl(classes.app, {
        [classes.home_app]: location.pathname === "/",
      })}
    >
      <Header children={<Nav />} />
      <section
        className={cl(classes.content, {
          [classes.home_content]: location.pathname === "/",
        })}
      >
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/exhibitions' element={<Exhibitions />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
