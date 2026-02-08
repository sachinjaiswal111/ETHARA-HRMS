
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {Routes,Route} from 'react-router-dom'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import MarkAttendence from "./pages/MarkAttendence";

function App(){
   
  return(
    <>
     <div className="h-screen">
      <Routes>
       <Route path="/" element={<Layout> <Home /> </Layout>} />
       <Route path="/manage-employees" element={<Layout> <Employees/> </Layout>} />
       <Route path="/mark-attendece" element={<Layout> <MarkAttendence/> </Layout>} />

      </Routes>

     </div>
    </>
  )
}

export default App;