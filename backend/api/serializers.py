from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Contact


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ["id", "name", "phone", "address", "email", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}
