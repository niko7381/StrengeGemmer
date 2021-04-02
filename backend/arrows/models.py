from django.db import models

# Create your models here.


class ArrowModel(models.Model):
    arrow_name = models.CharField(null=True, blank=True, max_length=100)
    arrow_length = models.CharField(null=True, blank=True, max_length=100)
    arrow_amount = models.IntegerField(null=True, blank=True)
    wrap = models.BooleanField(default=False)
    wrap_color = models.CharField(null=True, blank=True, max_length=100)
    vanes_type = models.CharField(null=True, blank=True, max_length=100)
    vanes_length = models.CharField(null=True, blank=True, max_length=100)
    vanes_color = models.CharField(null=True, blank=True, max_length=100)
    point_type = models.CharField(null=True, blank=True, max_length=100)
    point_weight = models.IntegerField(null=True, blank=True)
    insert_type = models.CharField(null=True, blank=True, max_length=100)
    nock_type = models.CharField(null=True, blank=True, max_length=100)
    nock_color = models.CharField(null=True, blank=True, max_length=100)
    nock_insert_type = models.CharField(null=True, blank=True, max_length=100)

    def __str__(self):
        return self.arrow_name
