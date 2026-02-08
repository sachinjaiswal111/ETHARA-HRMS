import DropDownButton from './DropDownButton';

function AttendenceCard({ emp, onChangeStatus }) {
  if (!emp) return null;

  const getStyle = (status) => {
    switch (status) {
      case "PRESENT":
        return "bg-[#f0fdf4] border-[#a9f272]  ";
      case "ABSENT":
        return "bg-[#fef2f2] border-[#db9e9e]";
      case "LEAVE":
        return "bg-[#f5f5d0] border-[#f2f294]";
      default:
        return "bg-[#ecedeb] border-[#ecedeb]";
    }
  };

  return (
    <div
      className={`flex justify-between items-center p-3 rounded border-2 ${getStyle(emp.status)}`}
    >
      <div>
        <p>{emp.name}</p>
        <div className='font-light'>
          <span>{emp.Employee_Id}</span>
          <span> . {emp.Department}</span>
        </div>
      </div>

      <DropDownButton
        value={emp.status}
        onChange={onChangeStatus}
      />
    </div>
  );
}

export default AttendenceCard;
