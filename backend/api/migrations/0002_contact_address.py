# Generated by Django 4.2.11 on 2024-04-07 08:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='address',
            field=models.TextField(default='', max_length=200),
            preserve_default=False,
        ),
    ]
