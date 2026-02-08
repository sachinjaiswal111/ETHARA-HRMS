
import React from 'react'
import { useAppContext } from '../Context/appContext';
import toast from 'react-hot-toast';


function EmployeeList({employees}) {

    const {axios,setEmployees}=useAppContext()
    

    const deleteEmployee = async (id) => {
  try {
    const res = await axios.delete(`employees/delete/${id}/`);
    toast.success(res.data.message);
    
    setEmployees(employees.filter(p => p.id !== id))
  } catch (err) {
    toast.error("Failed to delete employee");
    console.log(err);
  }
};
    
    
    return (
        <div className='w-full p-5  '>
            <table className=' w-full flex flex-col justify-center '>
                <tr className=' w-full flex justify-between bg-[#f7f9fb] p-2 rounded-t-xl'>
                    <th>Employee_Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>DepartMent</th>
                    <th>Actions</th>
                </tr>
                {
                    employees.map((emp) => (
                        <tr key={emp.Employee_id} className=' w-full flex justify-between p-5 border-[#f0f3f8] border-[3px] hover:bg-[#f7f9fb]'>
                            <td>{emp.Employee_Id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.phone}</td>
                            <td>{emp.Department}</td>
                            <td className='flex items-center gap-4'>
                               <button onClick={()=>{
                            toast.error("Feature is added yet (desgin According to Assement document)")
                        }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil h-4 w-4"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                               </button>
                                <button onClick={()=>deleteEmployee(emp.id)}>
                                    <svg className='text-red-500' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2 h-4 w-4"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </table>

        </div>
    )
}

export default EmployeeList
