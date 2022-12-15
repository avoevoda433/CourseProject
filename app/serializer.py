from rest_framework import serializers
from .models import *


class DepartmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = '__all__'


class SpecialitiesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialities
        fields = '__all__'


class EmployeesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = '__all__'


class WorkShiftsSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkingShifts
        fields = '__all__'


class EmployeesShiftsSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmployeesShifts
        fields = '__all__'


class WorkTimeTrackingSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkTimeTracking
        fields = '__all__'
