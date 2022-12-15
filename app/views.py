from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import *
from .serializer import *


@api_view(['GET', 'POST'])
def departments_list(request):

    data = Departments.objects.all()
    if request.method == 'GET':
        serializer = DepartmentsSerializer(data, context={'request': request}, many=True)
        return Response({'data': serializer.data})

    elif request.method == 'POST':
        serializer = DepartmentsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def department_detail(request, pk):

    try:
        department = Departments.objects.get(pk=pk)
    except Departments.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = DepartmentsSerializer(department, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DepartmentsSerializer(department, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        department.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def specialities_list(request):

    data = Specialities.objects.all()
    if request.method == 'GET':
        serializer = SpecialitiesSerializer(data, context={'request': request}, many=True)
        return Response({'data': serializer.data})

    elif request.method == 'POST':
        serializer = SpecialitiesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def speciality_detail(request, pk):

    try:
        speciality = Specialities.objects.get(pk=pk)
    except Departments.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SpecialitiesSerializer(speciality, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = SpecialitiesSerializer(speciality, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        speciality.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def employees_list(request):

    data = Employees.objects.all()
    if request.method == 'GET':
        serializer = EmployeesSerializer(data, context={'request': request}, many=True)
        return Response({'data': serializer.data})

    elif request.method == 'POST':
        serializer = EmployeesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def employee_detail(request, pk):

    try:
        employee = Employees.objects.get(pk=pk)
    except Departments.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = EmployeesSerializer(employee, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = EmployeesSerializer(employee, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        employee.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def work_shifts_list(request):

    data = WorkingShifts.objects.all()
    if request.method == 'GET':
        serializer = WorkShiftsSerializer(data, context={'request': request}, many=True)
        return Response({'data': serializer.data})

    elif request.method == 'POST':
        serializer = WorkShiftsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def work_shifts_detail(request, pk):

    try:
        work_shift = WorkingShifts.objects.get(pk=pk)
    except Departments.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = WorkShiftsSerializer(work_shift, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = WorkShiftsSerializer(work_shift, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        work_shift.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def employee_shifts_list(request):

    data = EmployeesShifts.objects.all()
    if request.method == 'GET':
        serializer = EmployeesShiftsSerializer(data, context={'request': request}, many=True)
        return Response({'data': serializer.data})

    elif request.method == 'POST':
        serializer = EmployeesShiftsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def employee_shifts_detail(request, pk):

    try:
        work_shift = EmployeesShifts.objects.get(pk=pk)
    except Departments.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = EmployeesShiftsSerializer(work_shift, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = EmployeesShiftsSerializer(work_shift, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        work_shift.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
def tracking_list(request):

    data = WorkTimeTracking.objects.all()
    if request.method == 'GET':
        serializer = WorkTimeTrackingSerializer(data, context={'request': request}, many=True)
        return Response({'data': serializer.data})

    elif request.method == 'POST':
        serializer = WorkTimeTrackingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def tracking_detail(request, pk):

    try:
        track_record = WorkTimeTracking.objects.get(pk=pk)
    except Departments.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = WorkTimeTrackingSerializer(track_record, context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = WorkTimeTrackingSerializer(track_record, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        track_record.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
