import Main from "./component/Main";
import Sidenav from "./component/Sidenav";
import Project from "./component/Projects/Project";
import Skills from "./component/Skills/Skills";
import Contact from "./component/Contact/Contact";
import Loader from "./component/Loader"; // Ubah path sesuai kebutuhan
import { React, useState, useEffect } from "react";
import Footer from "./component/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi waktu pemuatan halaman
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Contoh: Loader akan muncul selama 2 detik sebelum konten tampil
  }, []);
  return <div>{loading ? <Loader /> : <MainContent />}</div>;
}

const MainContent = () => {
  return (
    <div>
      <Sidenav />
      <Main />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
