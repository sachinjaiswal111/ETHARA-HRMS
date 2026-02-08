import React from 'react'
import { NavLink } from 'react-router-dom'
import toast from 'react-hot-toast'

function Sidebar() {
    return (
        <div className='w-[300px] bg-[#1c3a5f] h-[100vh] text-white'>
            <div className='w-full flex items-center gap-1 px-5 h-[60px] border-b-[1px] border-[#f0f3f8]'>

                <p className='font-semibold text-xl text-white'>ETHRA HRMS</p>
            </div>
            <div className='px-2 py-5 flex flex-col gap-4'>
                <p className='text-sm'>Navigation</p>
                <ul className='font-light w-full flex flex-col gap-2'>
                    <NavLink to='/' className={({isActive})=>isActive?"bg-[#224877]":""}>
                        <li className='flex gap-2 w-full p-1 hover:bg-[#224877] rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round">
                            <path d="M10.5 8.75V6.75C10.5 5.10626 10.5 4.28439 10.046 3.73121C9.96291 3.62995 9.87005 3.53709 9.76879 3.45398C9.21561 3 8.39374 3 6.75 3C5.10626 3 4.28439 3 3.73121 3.45398C3.62995 3.53709 3.53709 3.62995 3.45398 3.73121C3 4.28439 3 5.10626 3 6.75V8.75C3 10.3937 3 11.2156 3.45398 11.7688C3.53709 11.8701 3.62995 11.9629 3.73121 12.046C4.28439 12.5 5.10626 12.5 6.75 12.5C8.39374 12.5 9.21561 12.5 9.76879 12.046C9.87005 11.9629 9.96291 11.8701 10.046 11.7688C10.5 11.2156 10.5 10.3937 10.5 8.75Z" />
                            <path d="M7.75 15.5H5.75C5.05222 15.5 4.70333 15.5 4.41943 15.5861C3.78023 15.78 3.28002 16.2802 3.08612 16.9194C3 17.2033 3 17.5522 3 18.25C3 18.9478 3 19.2967 3.08612 19.5806C3.28002 20.2198 3.78023 20.72 4.41943 20.9139C4.70333 21 5.05222 21 5.75 21H7.75C8.44778 21 8.79667 21 9.08057 20.9139C9.71977 20.72 10.22 20.2198 10.4139 19.5806C10.5 19.2967 10.5 18.9478 10.5 18.25C10.5 17.5522 10.5 17.2033 10.4139 16.9194C10.22 16.2802 9.71977 15.78 9.08057 15.5861C8.79667 15.5 8.44778 15.5 7.75 15.5Z" />
                            <path d="M21 17.25V15.25C21 13.6063 21 12.7844 20.546 12.2312C20.4629 12.1299 20.3701 12.0371 20.2688 11.954C19.7156 11.5 18.8937 11.5 17.25 11.5C15.6063 11.5 14.7844 11.5 14.2312 11.954C14.1299 12.0371 14.0371 12.1299 13.954 12.2312C13.5 12.7844 13.5 13.6063 13.5 15.25V17.25C13.5 18.8937 13.5 19.7156 13.954 20.2688C14.0371 20.3701 14.1299 20.4629 14.2312 20.546C14.7844 21 15.6063 21 17.25 21C18.8937 21 19.7156 21 20.2688 20.546C20.3701 20.4629 20.4629 20.3701 20.546 20.2688C21 19.7156 21 18.8937 21 17.25Z" />
                            <path d="M18.25 3H16.25C15.5522 3 15.2033 3 14.9194 3.08612C14.2802 3.28002 13.78 3.78023 13.5861 4.41943C13.5 4.70333 13.5 5.05222 13.5 5.75C13.5 6.44778 13.5 6.79667 13.5861 7.08057C13.78 7.71977 14.2802 8.21998 14.9194 8.41388C15.2033 8.5 15.5522 8.5 16.25 8.5H18.25C18.9478 8.5 19.2967 8.5 19.5806 8.41388C20.2198 8.21998 20.72 7.71977 20.9139 7.08057C21 6.79667 21 6.44778 21 5.75C21 5.05222 21 4.70333 20.9139 4.41943C20.72 3.78023 20.2198 3.28002 19.5806 3.08612C19.2967 3 18.9478 3 18.25 3Z" />
                        </svg>
                        <span>Dashboard</span>
                    </li>
                    </NavLink>
                    <NavLink to ='/manage-employees' className={({isActive})=>isActive?"bg-[#224877]":""}>
                    <li className='flex gap-2 w-full p-1 hover:bg-[#224877] rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="ffffff" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M13 11C13 8.79086 11.2091 7 9 7C6.79086 7 5 8.79086 5 11C5 13.2091 6.79086 15 9 15C11.2091 15 13 13.2091 13 11Z" />
                            <path d="M11.0386 7.55773C11.0131 7.37547 11 7.18927 11 7C11 4.79086 12.7909 3 15 3C17.2091 3 19 4.79086 19 7C19 9.20914 17.2091 11 15 11C14.2554 11 13.5584 10.7966 12.9614 10.4423" />
                            <path d="M15 21C15 17.6863 12.3137 15 9 15C5.68629 15 3 17.6863 3 21" />
                            <path d="M21 17C21 13.6863 18.3137 11 15 11" />
                        </svg>
                        <span>Employees</span>
                    </li>
                    </NavLink>
                    <NavLink to ='/mark-attendece' className={({isActive})=>isActive?"bg-[#224877]":""}>
                        <li className='flex gap-2 w-full p-1 hover:bg-[#224877] rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar h-5 w-5"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                        <span>Mark Attendence</span>
                    </li>
                    </NavLink>
                    
                    <li className='flex gap-2 w-full p-1 hover:bg-[#224877] rounded' onClick={()=>{
                            toast.error("Feature is added yet (desgin According to Assement document)")
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list h-5 w-5"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
                        <span>Attedence Records</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
