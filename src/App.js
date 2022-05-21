import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Home from './Pages/Home/Home/Home';
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import Blogs from "./Pages/Blogs/Blogs";
import About from "./Pages/About/About";
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from "./Pages/Shared/Footer/Footer";
import AddItem from "./Pages/AddItem/AddItem";
import InventoryUpdate from "./Pages/InventoryUpdate/InventoryUpdate";
import MyItems from "./Pages/MyItems/MyItems";
import SignIn from './Pages/Login/SignIn/SignIn';
import SignUp from "./Pages/Login/SignUp/SignUp";
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/additem" element={<AddItem></AddItem>}></Route>
        <Route path="/myitems" element={<MyItems></MyItems>}></Route>
        <Route path="/manageinventories" element={<ManageInventories></ManageInventories>}></Route>
        <Route path="/product/:id" element={<RequireAuth><InventoryUpdate></InventoryUpdate></RequireAuth>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>

        

        <Route path="/*" element={<NotFound></NotFound>}></Route>

        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
