import React from 'react'

function NoEmployee() {
    return (
        <div className='flex flex-col p-10 mt-5 items-center justify-center gap-1'>
            <div>
                <svg className='size-[80px] text-[#68778d]' xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-5 w-5 text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <p>No employees found</p>
            <p className='font-light'>Try adjusting your search terms.</p>
        </div>
    )
}

export default NoEmployee
