from django.db import models

class SuperAdmin(models.Model):
    super_admin_id = models.AutoField(primary_key=True)  # matches your DB column
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    class Meta:
        db_table = 'SuperAdmin'  # match your exact PostgreSQL table name
