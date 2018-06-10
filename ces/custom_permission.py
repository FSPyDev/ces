from rest_framework import permissions


class IsEmailVerified(permissions.BasePermission):
    """
    Global permission check for User Email Verified or not.
    """

    def has_permission(self, request, view):
        return request.user and request.user.is_email_verified and request.user.is_active
