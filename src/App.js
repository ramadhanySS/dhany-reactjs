// import Index from './Materi';
// import FormRegistrasi from './Materi/form/formRegistrasi/formRegistrasi';
// import Form from './Materi/form';

// import RegistrationForm from "./Materi/form/formRegistrasi/formRegistrasi";
// import Article from "./Materi/lifecycle-components";
// import Hook from "./Materi/materi-hook";
// import Routing from "./Materi/rooting";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Tugas Routing</h1>
      {/* <RegistrationForm/> */}
      {/* <Article/> */}
      {/* <Routing /> */}
      {/* <FormRegistrasi/> */}
      <nav>
        <Link to="/home ">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/news">News</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
