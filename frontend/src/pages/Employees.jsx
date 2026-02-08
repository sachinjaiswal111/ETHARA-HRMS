import React, { useEffect, useState } from 'react'
import NoEmployee from '../components/NoEmployee'
import EmployeeList from '../components/EmployeeList'
import { useAppContext } from '../Context/appContext';
import CreateEmployee from '../components/CreateEmployee';

function Employees() {

    const { search, setSearch } = useState("");
    const { employees } = useAppContext();
    const [openFrom, setOpenFrom] = useState(false);

    const { filtEmployees, setFiltEmployees } = useState([...employees]);

    console.log(employees)

    // useEffect(()=>{
    //     if(search===""){
    //         setFiltEmployees(employees)
    //     }else{
    //       const emp =  employees.filter((e)=>{
    //             e.name.includes(search);
    //         })
    //         setFiltEmployees(emp);
    //     }
    // },[,search])
    const searchAction = (searchTerm) => {
        
        if (!searchTerm || searchTerm.trim() === "") {
            // If search is empty, reset to all employees
            setFiltEmployees(employees);
        } else {
            const filtered = employees.filter((employee) =>
                
                employee?.name?.toLowerCase().includes(searchTerm.toLowerCase())
            );
           
            setFiltEmployees(filtered);
        }
    };
    console.log(filtEmployees);
    return (
        <>

        {
         openFrom ? <CreateEmployee setOpenForm={setOpenFrom}/>:
         <div className='p-10 w-full'>
            <div className='w-full flex items-center justify-between'>
                <div className='flex flex-col gap-1'>
                    <p className='text-3xl font-bold'>Employees</p>
                    <p className='text-[16px] text-[#1c3a5f]'>Manage your employee records</p>
                </div>
                <div>
                    <button className='flex items-center bg-[#1c3a5f] text-white p-2 gap-2 rounded' onClick={()=>setOpenFrom(true)}>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus mr-2 h-4 w-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                        </span>
                        <p>Add Emoplyee</p>
                    </button>
                </div>
            </div>
            <div className='mt-10 p-5 border-3 border-[#f0f3f8]  shadow rounded'>
                <div className='flex items-center justify-between'>
                    <div className='flex  items-center gap-2'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-5 w-5 text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </span>
                        <p className='text-2xl font font-semibold'>Employee Directory</p>
                    </div>
                    {/* <div className="flex items-center border pl-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-md overflow-hidden max-w-md w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 30 30" fill="#6B7280">
                            <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
                        </svg>
                        <input type="text" placeholder="Search for products" className="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm" onChange={(e) => searchAction(e.target.value)} />
                    </div> */}
                </div>
                {/* <NoEmployee/> */}
                <EmployeeList employees={employees} />
            </div>

        </div>
        }
        </>
    )
}

export default Employees
