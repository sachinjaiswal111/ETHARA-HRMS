import React from 'react'
import { useAppContext } from '../Context/appContext'
import toast from 'react-hot-toast';


function Home() {

    const {employees,navigate,countEmployees} =useAppContext();
    return (
        <div className='p-10'>
            <div className='py-1 flex flex-col gap-1'>
                <p className='text-4xl font-bold text-[#1c3a5f]'>Dashboard</p>
                <p className='text-[14px] text-[#1c3a5f]'>Welcome back! Here's an overview of your HR metrics.</p>
            </div>
            <div className='flex gap-10 mt-10'>
                <div className='py-5  border-[#f0f3f8]  shadow'>
                    <div className='flex gap-22 p-2'>
                        <div className='flex flex-col gap-7'>
                            <p className='font-semibold text-[#68778d]'>Total Employees</p>
                            <div>
                                <p className='text-3xl font-bold text-[#1c3a5f]'>{employees.length}</p>
                                <p className='text-sm text-[#68778d]'>Acitvate Employee in system</p>
                            </div>

                        </div>
                        <div className=' p-1 bg-[#e9ecef] h-10 w-10 flex justify-center items-center rounded-xl'>
                            <span className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-5 w-5 text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='py-5 border-[#f0f3f8]  shadow'>
                    <div className='flex gap-22 p-2'>
                        <div className='flex flex-col gap-7'>
                            <p className='font-semibold text-[#68778d]'>Present Today</p>
                            <div>
                                <p className='text-3xl font-bold text-[#1c3a5f]'>{countEmployees.present===0?"Attendance Pending":countEmployees.absent}</p>
                                <p className='text-sm text-[#68778d]'>Acitvate Employee in system</p>
                            </div>

                        </div>
                        <div className=' p-1 bg-[#dcfce7] h-10 w-10 flex justify-center items-center rounded-xl'>
                            <span className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check h-5 w-5 text-green-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='py-5 border-[#f0f3f8]  shadow'>
                    <div className='flex gap-22 p-2'>
                        <div className='flex flex-col gap-7'>
                            <p className='font-semibold text-[#68778d]'>Absent Today</p>
                            <div>
                                <p className='text-3xl font-bold text-[#1c3a5f]'>{countEmployees.present===0?"Attendance Pending":countEmployees.absent}</p>
                                <p className='text-sm text-[#68778d]'>Acitvate Employee in system</p>
                            </div>

                        </div>
                        <div className=' p-1 bg-[#fee2e2] h-10 w-10 flex justify-center items-center rounded-xl'>
                            <span className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-x h-5 w-5 text-red-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="17" x2="22" y1="8" y2="13"></line><line x1="22" x2="17" y1="8" y2="13"></line></svg>
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            <div className='mt-10 flex w-full gap-10 '>
                <div className='w-full flex flex-col p-5 border-[3px] border-[#f0f3f8]  shadow  gap-8 min-h-[240px]'>
                    <div>
                        <div className='flex items-center  gap-2'>
                            <span className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-5 w-5 text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </span>
                            <p className='text-2xl font-semibold'>Employee Management</p>
                        </div>
                        <p className='font-light'>Add, edit, or remove employees from the system</p>
                    </div>
                    <div>
                        <button className='bg-[#1c3a5f] w-full text-white flex items-center justify-center p-2 rounded' onClick={()=>navigate('/manage-employees')}>
                        <p>Manage Employees</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </span>
                    </button>
                    </div>
                </div>
                <div className='w-full flex flex-col p-5 border-[3px] border-[#f0f3f8]  shadow  gap-8 min-h-[240px]'>
                    <div>
                        <div className='flex items-center  gap-2'>
                            <span className=''>
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar h-5 w-5 text-primary"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                            </span>
                            <p className='text-2xl font-semibold'>Attendance Tracking</p>
                        </div>
                        <p className='font-light'>Mark and view daily attendance records</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <button className='bg-[#1c3a5f] w-full text-white flex items-center justify-center p-2 rounded'
                        onClick={()=>navigate('/mark-attendece')}>
                        <p>Mark Attendence</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </span>
                    </button>
                        <button className=' w-full border-2 border-[#acadad] flex items-center justify-center p-2 rounded' onClick={()=>{
                            toast.error("Feature is added yet (desgin According to Assement document)")
                        }}>
                        <p>View Records</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </span>
                    </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
