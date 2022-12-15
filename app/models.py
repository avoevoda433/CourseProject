from django.db import models

class Departments(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        db_table = 'app'

    def __str__(self):
        return self.name


class Specialities(models.Model):
    name = models.CharField(max_length=100)
    hourly_rate = models.DecimalField(max_digits=7, decimal_places=2)
    max_qualification_level = models.IntegerField()
    max_ql_percent = models.DecimalField(max_digits=3, decimal_places=2)
    year_experience_percent = models.DecimalField(max_digits=3, decimal_places=2)
    premium_percent = models.DecimalField(max_digits=3, decimal_places=2)
    department = models.ForeignKey(Departments, on_delete=models.CASCADE)

    class Meta:
        db_table = 'specialities'

    def __str__(self):
        return self.name


class Employees(models.Model):
    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    patronymic = models.CharField(max_length=30)
    phone = models.CharField(max_length=13)
    residential_address = models.CharField(max_length=100)
    registration_address = models.CharField(max_length=100)
    personal_account = models.CharField(max_length=28)
    premium = models.BooleanField(default=True)
    speciality = models.ForeignKey(Specialities, on_delete=models.CASCADE)

    class Meta:
        db_table = 'employees'
        verbose_name = 'employee'
        verbose_name_plural = 'employees'

    def __str__(self):
        return f'{self.surname} {self.name} {self.patronymic}'


class WorkingShifts(models.Model):
    number = models.PositiveIntegerField()
    hours_count = models.PositiveIntegerField()

    class Meta:
        db_table = 'working_shifts'
        verbose_name = 'working_shift'
        verbose_name_plural = 'working_shifts'

    def __str__(self):
        return self.number


class EmployeesShifts(models.Model):
    employee = models.ForeignKey(Employees, on_delete=models.CASCADE)
    working_shift = models.ForeignKey(WorkingShifts, on_delete=models.CASCADE)

    class Meta:
        db_table = 'employees_shifts'
        verbose_name = 'employee_shift'
        verbose_name_plural = 'employees_shifts'


class WorkTimeTracking(models.Model):
    employee_info = models.ForeignKey(EmployeesShifts, on_delete=models.CASCADE)
    hours = models.PositiveIntegerField()
    date = models.DateField(auto_now_add=True)

    class Meta:
        db_table = 'work_time_tracking'
        verbose_name = 'work_time_tracking'
        verbose_name_plural = 'work_time_tracking'


class Taxes(models.Model):
    name = models.CharField(max_length=100)
    percent = models.DecimalField(max_digits=3, decimal_places=2)

    class Meta:
        db_table = 'taxes'
        verbose_name = 'tax'
        verbose_name_plural = 'taxes'

    def __str__(self):
        return self.name
