from django.urls import path

from . import views

urlpatterns =[
    path('employees/',views.get_employees),
    path("employees/<int:id>/",views.get_employee_by_id),
    path('employees/create/',views.create_employee),
    path("employees/count/", views.employee_count),

    path('employees/delete/<int:id>/', views.delete_employee),
path('attendance/', views.get_attendance_by_date),
    path('attendance/bulk/', views.bulk_attendance),


]