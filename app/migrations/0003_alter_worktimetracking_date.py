# Generated by Django 4.1.4 on 2022-12-15 17:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_worktimetracking_hours'),
    ]

    operations = [
        migrations.AlterField(
            model_name='worktimetracking',
            name='date',
            field=models.DateField(auto_now_add=True),
        ),
    ]
