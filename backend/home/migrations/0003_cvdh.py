# Generated by Django 2.2.28 on 2023-08-04 06:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_sffgg'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cvdh',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('urytr', models.BigIntegerField()),
            ],
        ),
    ]
