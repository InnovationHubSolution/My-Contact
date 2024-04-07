from django.urls import path
from . import views

urlpatterns = [
    path("contacts/", views.ContactListCreate.as_view(), name="contact-list"),
    path("contacts/delete/<int:pk>/", views.ContactDelete.as_view(), name="delete-contact"),
]
