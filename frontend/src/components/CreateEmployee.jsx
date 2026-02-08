import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAppContext } from '../Context/appContext'

function CreateEmployee({setOpenForm}) {
    const { axios,employees,setEmployees } = useAppContext()
    const [fromData, setFromData] = useState({
        name: "",
        Employee_Id: "",
        Department: "",
        phone: "",
        email: "",
        address: "",
        joining_date: new Date().toLocaleDateString('en-CA', {
            timeZone: 'Asia/Kolkata'
        })
    })

   const handleClick = async () => {

  if (
    !fromData.name ||
    !fromData.Employee_Id ||
    !fromData.Department ||
    !fromData.phone ||
    !fromData.email
  ) {
    toast.error("All fields are mandatory");
    return;
  }

  try {
    const response = await axios.post(
      'employees/create/',
      fromData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    console.log(response.data);
    toast.success("Employee added successfully");
    setOpenForm(false);
    setEmployees(...employees,response.data)

  } catch (e) {
    console.error(e.response?.data || e.message);
    toast.error("Failed to create employee");
  }
};



    return (
        <form class="max-w-4xl mx-auto mt-15">
            <div class="grid sm:grid-cols-2 gap-6">
                <div>
                    <label class="mb-2 text-sm text-slate-900 font-medium block">Employee_Id</label>
                    <div class="relative flex items-center">
                        <input type="text" placeholder="First Name"
                            class="px-4 py-3 pr-8 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border border-gray-200 outline-[#007bff] rounded-md transition-all" onChange={(e) => setFromData({ ...fromData, Employee_Id: e.target.value })} />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4"
                            viewBox="0 0 24 24">
                            <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                            <path
                                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                data-original="#000000"></path>
                        </svg>
                    </div>
                </div>

                <div>
                    <label class="mb-2 text-sm text-slate-900 font-medium block">Employee Name</label>
                    <div class="relative flex items-center">
                        <input type="text" placeholder="Last Name"
                            class="px-4 py-3 pr-8 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border border-gray-200 outline-[#007bff] rounded-md transition-all" onChange={(e) => setFromData({ ...fromData, name: e.target.value })} />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4"
                            viewBox="0 0 24 24">
                            <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                            <path
                                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                data-original="#000000"></path>
                        </svg>
                    </div>
                </div>

                <div>
                    <label class="mb-2 text-sm text-slate-900 font-medium block">Employee Email</label>
                    <div class="relative flex items-center">
                        <input type="email" placeholder="Email"
                            class="px-4 py-3 pr-8 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border border-gray-200 outline-[#007bff] rounded-md transition-all" onChange={(e) => setFromData({ ...fromData, email: e.target.value })} />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4"
                            viewBox="0 0 682.667 682.667">
                            <defs>
                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                </clipPath>
                            </defs>
                            <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                <path fill="none" stroke-miterlimit="10" stroke-width="40"
                                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                    data-original="#000000"></path>
                                <path
                                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                    data-original="#000000"></path>
                            </g>
                        </svg>
                    </div>
                </div>

                <div>
                    <label class="mb-2 text-sm text-slate-900 font-medium block">Employee Phone</label>
                    <div class="relative flex items-center">
                        <input type="text" placeholder="Enter phoneNo"
                            class="px-4 py-3 pr-8 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border border-gray-200 outline-[#007bff] rounded-md transition-all" onChange={(e) => setFromData({ ...fromData, phone: e.target.value })} />

                    </div>
                </div>
                <div>
                    <label class="mb-2 text-sm text-slate-900 font-medium block">Department</label>
                    <div class="relative flex items-center">
                        <input type="text" placeholder="Department"
                            class="px-4 py-3 pr-8 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border border-gray-200 outline-[#007bff] rounded-md transition-all" onChange={(e) => setFromData({ ...fromData, Department: e.target.value })} />

                    </div>
                </div>
                <div>
                    <label class="mb-2 text-sm text-slate-900 font-medium block">Address</label>
                    <div class="relative flex items-center">
                        <input type="text" placeholder="Address"
                            class="px-4 py-3 pr-8 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border border-gray-200 outline-[#007bff] rounded-md transition-all" onChange={(e) => setFromData({ ...fromData, address: e.target.value })} />

                    </div>
                </div>
            </div>

            <button type="button"
                class="mt-12 px-5 py-2.5 text-[15px] font-medium w-full max-w-[130px] mx-auto block bg-[#007bff] hover:bg-[#006bff] text-white rounded-md transition-all cursor-pointer" onClick={handleClick}>Submit</button>
        </form>
    )
}

export default CreateEmployee
