import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Shared/Navbar/Navbar";
import UseAuth from "./Hooks/UseAuth/UseAuth";
import Footer from "./Shared/Footer/Footer";

function App() {
  const { user, loading } = UseAuth();
  if (!loading) return <h2>Loading.......</h2>;
  console.log(user, loading);
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-293px)] py-3 w-[95%] md:w-[85%] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
