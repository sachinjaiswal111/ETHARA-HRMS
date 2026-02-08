from rest_framework import serializers
from .models import Employee,Attendance


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

class AttendanceSerializer(serializers.ModelSerializer):
     employee = EmployeeSerializer(read_only=True)

     class Meta:
         model = Attendance
         fields = '__all__'


class EmployeeCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'

    def validate_email(self, value):
        if Employee.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already exists")
            print("Email already exists 1")
        return value

   
    def validate_employee_id(self, value):
        if Employee.objects.filter(Employee_Id=value).exists():
            raise serializers.ValidationError("Employee ID already exists")
            
        return value

  
    def validate_phone(self, value):
        value = value.strip()   

        if len(value) != 10:
            raise serializers.ValidationError(
                "Phone number must be exactly 10 digits"
            )

        return value
