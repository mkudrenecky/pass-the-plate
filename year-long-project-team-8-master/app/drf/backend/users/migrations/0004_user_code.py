# Generated by Django 4.0.10 on 2024-01-14 03:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_user_firstname_user_lastname_user_phone'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='code',
            field=models.CharField(blank=True, max_length=6, null=True),
        ),
    ]
