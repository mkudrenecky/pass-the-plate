# Generated by Django 4.0.10 on 2023-11-07 19:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='categories',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
