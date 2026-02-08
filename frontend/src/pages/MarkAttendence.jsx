import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useAppContext } from '../Context/appContext';
import AttendenceCard from '../components/AttendenceCard';

function MarkAttendence() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [presentCount, setPresentCount] = useState(0);
    const [absentCount, setAbsentCount] = useState(0);
    const [leaveCount, setLeaveCount] = useState(0);


    const { axios,setCountEmployess } = useAppContext();
    const [attendance, setAttendance] = useState([]);



    const saveAttendance = async () => {
        const dateStr = selectedDate.toISOString().split("T")[0];

        await axios.post('/attendance/bulk/', {
            date: dateStr,
            records: attendance
        });

        alert("Attendance saved");
    };
    console.log("Attendance data:", attendance);

    useEffect(() => {
        const dateStr = selectedDate.toISOString().split("T")[0];

        axios
            .get(`/attendance/?date=${dateStr}`)
            .then(res => setAttendance(res.data.data))
            .catch(err => console.log(err));

        let present = 0;
        let absent = 0;
        let leave = 0;

        attendance.forEach(emp => {
            if (emp.status === "PRESENT") present++;
            else if (emp.status === "ABSENT") absent++;
            else if (emp.status === "LEAVE") leave++;
        });

        setPresentCount(present);
        setAbsentCount(absent);
        setLeaveCount(leave);
        setCountEmployess({present:presentCount,absent:absentCount})
    }, [selectedDate]);


    return (
        <div className='p-10 '>
            <div className='py-1 flex flex-col gap-1'>
                <p className='text-4xl font-bold text-[#1c3a5f]'>Mark Attendance</p>
                <p className='text-[14px] text-[#1c3a5f]'>Record daily attendance for all employees</p>
            </div>
            <div className='mt-10 flex gap-8 '>
                <div className=' max-w-[300px] border-[1.5px] border-[#acadad] rounded-xl p-5  flex flex-col gap-5'>
                    <p>Select Date</p>
                    <div className='flex flex-col gap-3'>
                        <DatePicker
                            showIcon
                            toggleCalendarOnIconClick
                            selected={selectedDate}
                            onChange={setSelectedDate}
                            maxDate={new Date()}
                            className='flex gap-2 border border-[#acadad] rounded  '
                        />

                        <div className='bg-[#f0fdf4] flex justify-between p-3 rounded '>
                            <div className='flex gap-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check h-4 w-4 text-green-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
                                <p>Present</p>
                            </div>
                            <p>{presentCount}</p>

                        </div>
                        <div className='bg-[#fef2f2] flex justify-between p-3 rounded '>
                            <div className='flex gap-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-x h-4 w-4 text-red-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="17" x2="22" y1="8" y2="13"></line><line x1="22" x2="17" y1="8" y2="13"></line></svg>
                                <p>Absent</p>
                            </div>
                            <p>{absentCount}</p>

                        </div>
                        <div className='bg-[#f5f5d0] flex justify-between p-3 rounded '>
                            <div className='flex gap-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-x h-4 w-4 text-red-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="17" x2="22" y1="8" y2="13"></line><line x1="22" x2="17" y1="8" y2="13"></line></svg>
                                <p>Leave</p>
                            </div>
                            <p>{leaveCount}</p>

                        </div>
                    </div>
                </div>



                {/* dRight div */}
                <div className='w-full border-[2px] border-[#acadad] rounded p-5 max-h-[500px] '>
                    <div className='flex justify-between w-full'>
                        <div>
                            <div className='flex  items-center gap-2'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-5 w-5 text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                </span>
                                <p className='text-2xl font font-semibold'>Employee Attendance</p>
                            </div>
                            <p className='font-light '>Toggle each employee's attendance status for February 8, 2026</p>
                        </div>
                        <div>
                            <button className='flex items-center bg-[#1c3a5f] text-white p-2 gap-2 rounded' onClick={saveAttendance}>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-save mr-2 h-4 w-4"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg>
                                </span>
                                <p>save Attendence</p>
                            </button>

                        </div>
                    </div>
                    <div className='flex flex-col gap-3 mt-5 max-h-[400px] overflow-y-auto'>
                        {attendance.length === 0 ? (
                            <p className="text-center text-gray-400">No attendance data</p>
                        ) : (
                            attendance.map(emp => (
                                <AttendenceCard
                                    key={emp.employee_id}
                                    emp={emp}
                                    onChangeStatus={(status) => {
                                        setAttendance(prev =>
                                            prev.map(e =>
                                                e.employee_id === emp.employee_id
                                                    ? { ...e, status }
                                                    : e
                                            )
                                        );
                                    }}
                                />
                            ))
                        )}
                    </div>



                </div>


            </div>
        </div>
    );
}

export default MarkAttendence;
