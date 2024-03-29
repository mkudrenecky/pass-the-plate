# Generated by Django 4.0.10 on 2023-11-26 23:39

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_alter_productimages_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='best_before',
            field=models.DateTimeField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='product',
            name='valid',
            field=models.BooleanField(default=True),
        ),
    ]
