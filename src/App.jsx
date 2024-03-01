import RootLayOut from "./components/roots/RootLayOut";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Work from "./pages/works/Work";
import Contact from "./pages/contact/Contact";
import Privacy from "./pages/privacy/Privacy";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/work" element={<Work/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/privacy" element={<Privacy/>}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
