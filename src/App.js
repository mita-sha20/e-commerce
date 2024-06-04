import Navbar from "./components/layout/Navbar.js";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout.js";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/product" element={<Shop/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Route>
  )
);

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
