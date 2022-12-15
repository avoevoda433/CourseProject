from django.contrib import admin
from django.urls import path, re_path
from app import views

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/departments/$', views.departments_list),
    re_path(r'^api/departments/(?P<pk>[0-9]+)$', views.department_detail),
    re_path(r'^api/specialities/$', views.specialities_list),
    re_path(r'^api/specialities/(?P<pk>[0-9]+)$', views.speciality_detail),
    re_path(r'^api/employees/$', views.employees_list),
    re_path(r'^api/employees/(?P<pk>[0-9]+)$', views.employee_detail),
    re_path(r'^api/work_shifts/$', views.work_shifts_list),
    re_path(r'^api/work_shifts/(?P<pk>[0-9]+)$', views.work_shifts_detail),
    re_path(r'^api/employee_shifts/$', views.employee_shifts_list),
    re_path(r'^api/employee_shifts/(?P<pk>[0-9]+)$', views.employee_shifts_detail),
    re_path(r'^api/tracking/$', views.tracking_list),
    re_path(r'^api/tracking/(?P<pk>[0-9]+)$', views.tracking_detail),
]