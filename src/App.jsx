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
import SubGallery from "./pages/subGallery/SubGallery";
import { Suspense, useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(
    document.documentElement.clientWidth
  );

  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(document.documentElement.clientWidth);
    };
  }, [windowWidth]);

  return (
    <Suspense fallback=''>
      <div
        className={cl(classes.app, {
          [classes.home_app]: location.pathname === "/",
        })}
      >
        <Header children={<Nav />} windowWidth={windowWidth} />
        <section
          className={cl(classes.content, {
            [classes.home_content]: location.pathname === "/",
            [classes.contacts_content]: location.pathname === "/contacts",
            [classes.exhibitions_content]: location.pathname === "/exhibitions",
          })}
        >
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route
              path='/resume'
              element={<Resume windowWidth={windowWidth} />}
            ></Route>
            <Route path='/gallery' element={<Gallery />}></Route>
            <Route path='/exhibitions' element={<Exhibitions />}></Route>
            <Route path='/contacts' element={<Contacts />}></Route>
            <Route
              path='/subgallery/:id'
              element={
                <SubGallery
                  windowWidth={windowWidth}
                  setOpen={setOpen}
                  open={open}
                />
              }
            ></Route>
          </Routes>
        </section>
        {open ? <></> : <Footer />}
      </div>
    </Suspense>
  );
}

export default App;
