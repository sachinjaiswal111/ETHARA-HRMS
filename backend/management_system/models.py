from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

class Employee(models.Model):

    name = models.CharField(max_length=100)
    Employee_Id =models.CharField(unique=True)
    Department = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    address = models.TextField(blank=True,null=True)
    
    joining_date = models.DateField(default=timezone.now)
    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )
    def __str__(self):
        return self.name
    


class Attendance(models.Model):
    STATUS_CHOICES = (
        ('PRESENT', 'Present'),
        ('ABSENT', 'Absent'),
        ('LEAVE', 'Leave'),
        ('HALF_DAY', 'Half Day'),
    )

    employee = models.ForeignKey(
        Employee,
        on_delete=models.CASCADE,
        related_name='attendance_records'
    )

    date = models.DateField(
        default=timezone.now
    )

    status = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES,
        default='PRESENT'
    )

    check_in = models.TimeField(
        null=True,
        blank=True
    )

    check_out = models.TimeField(
        null=True,
        blank=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        unique_together = ('employee', 'date')
        ordering = ['-date']

    def __str__(self):
        return f"{self.employee.name} - {self.date} - {self.status}"