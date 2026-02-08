import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();


axios.defaults.withCredentials=false;
axios.defaults.baseURL= import.meta.env.VITE_BACKEND_URL

export const AppContextProvider = ({ children }) => {



    const navigate =useNavigate();
    const [employees,setEmployees] = useState([])
    const [countEmployees, setCountEmployess]=useState({
        present:0,
        absent:0
    })
    

    const fetchEmployee = async()=>{
        try{
            const {data} = await axios.get('/employees');
            setEmployees(data);
        }catch(e){
            console.log(e);
        }
    }


    useEffect(()=>{
        fetchEmployee()

    },[])
    


    
    const value = {
        navigate,employees,setEmployees,axios,countEmployees,setCountEmployess
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

// 3. Create a Custom Hook for easy access
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
};