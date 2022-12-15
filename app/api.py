from .models import Departments, Specialities
from rest_framework import viewsets, permissions
from .serializer import DepartmentsSerializer, SpecialitiesSerializer


class DepartmentsViewSet(viewsets.ModelViewSet):
    queryset = Departments.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = DepartmentsSerializer


class SpecialitiesViewSet(viewsets.ModelViewSet):
    queryset = Specialities.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SpecialitiesSerializer
