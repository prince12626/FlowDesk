import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import CreateRoom from "./pages/CreateRoom";
import SendInvite from "./pages/SendInvite";
import Invites from "./pages/Invites";
import Success from "./pages/Success";
import Fail from "./pages/Fail";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="/create-room" element={<CreateRoom />} />
                <Route path="/send-invite" element={<SendInvite />} />
                <Route path="/invites" element={<Invites />} />
                <Route path="/success" element={<Success />} />
                <Route path="/fail" element={<Fail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
