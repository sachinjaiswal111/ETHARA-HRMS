from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Attendance ,Employee
from .serializers import EmployeeSerializer,AttendanceSerializer,EmployeeCreateSerializer

@api_view(['GET'])
def get_employees(request):
    employee = Employee.objects.all()
    serializer = EmployeeSerializer(employee,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_employee_by_id(request, id):
    try:
        employee = Employee.objects.get(id=id)
    except Employee.DoesNotExist:
        return Response({"message": "Employee not found"}, status=404)

    serializer = EmployeeSerializer(employee)
    return Response(serializer.data)


@api_view(['POST'])
def create_employee(request):
    serializer = EmployeeCreateSerializer(data=request.data)

    if not serializer.is_valid():
        print(serializer.errors)
        return Response(
            {
                "success": False,
                "message": "Validation error",
                "errors": serializer.errors
            },
            
            status=status.HTTP_400_BAD_REQUEST
        )

    employee = serializer.save()

    return Response(
        {
            "success": True,
            "message": "Employee added successfully",
            "data": EmployeeSerializer(employee).data
        },
        status=status.HTTP_201_CREATED
    )



@api_view(["GET"])
def employee_count(request):
    count = Employee.objects.count()

    return Response(
        {
            "success": True,
            "message": "Employee count fetched successfully",
            "data": {
                "total_employees": count
            }
        },
        status=status.HTTP_200_OK
    )


@api_view(['DELETE'])
def delete_employee(request, id):
    try:
        employee = Employee.objects.get(id=id)
    except Employee.DoesNotExist:
        return Response(
            {
                "success": False,
                "message": "Employee not found"
            },
            status=status.HTTP_404_NOT_FOUND
        )

    employee.delete()

    return Response(
        {
            "success": True,
            "message": "Employee deleted successfully"
        },
        status=status.HTTP_200_OK
    )



@api_view(['GET'])
def get_attendance_by_date(request):
    date = request.GET.get('date')

    if not date:
        return Response(
            {"success": False, "message": "Date is required"},
            status=400
        )

    employees = Employee.objects.all()
    attendance = Attendance.objects.filter(date=date)

    attendance_map = {
        a.employee_id: a.status
        for a in attendance
    }

    data = []

    for emp in employees:
        data.append({
            "employee_id": emp.id,
            "name": emp.name,
            "Employee_Id": emp.Employee_Id,
            "Department": emp.Department,
            "status": attendance_map.get(emp.id, "PENDING")
        })

    return Response({
        "success": True,
        "date": date,
        "data": data
    })



@api_view(['POST'])
def bulk_attendance(request):
    date = request.data.get('date')
    records = request.data.get('records')

    if not date or not records:
        return Response(
            {"success": False, "message": "Invalid data"},
            status=400
        )

    for rec in records:
        employee_id = rec.get('employee_id')
        status_val = rec.get('status')

        if status_val == "PENDING":
            continue

        employee = Employee.objects.get(id=employee_id)

        Attendance.objects.update_or_create(
            employee=employee,
            date=date,
            defaults={"status": status_val}
        )

    return Response({
        "success": True,
        "message": "Attendance saved successfully"
    })
