from validate_email import validate_email

from ces import error_conf
from user_auth import utils
from user_auth.models import User


def check_for_login_input_error(data):
    """
    Error Handling For Login API
    """

    if not data.get('email'):
        return error_conf.EMAIL_NOT_PROVIDED

    if not data.get('password'):
        return error_conf.PASSWORD_NOT_PROVIDED

    if data.get('email'):
        email_valid = validate_email(data.get('email'))
        if not email_valid:
            return error_conf.INVALID_EMAIL

    if len(User.objects.filter(email=data.get('email'))) == 0:
        return error_conf.USER_DOES_NOT_EXIST

    if User.objects.filter(email=data.get('email')):
        user = User.objects.filter(email=data.get('email'))[0]

        if not user.is_email_verified:
            return error_conf.EMAIL_NOT_VERIFIED
        elif not user.is_active:
            return error_conf.USER_IS_INACTIVE
    return False


def check_existed_user(email):
    user = User.objects.filter(email=email)
    if user:
        return error_conf.USER_ALREADY_EXISTS
    return False


def check_for_registration_input_error(data):
    """
    Error Handling For Registration API
    """

    if not data.get('email'):
        return error_conf.EMAIL_NOT_PROVIDED

    elif not data.get('password'):
        return error_conf.PASSWORD_NOT_PROVIDED

    elif not data.get('confirm_password'):
        return error_conf.CONFIRM_PASSWORD_NOT_PROVIDED

    if data.get('email'):
        email_valid = validate_email(data.get('email'))
        if not email_valid:
            return error_conf.INVALID_EMAIL

    if data.get('password'):
        if len(data.get('password')) < 8:
            return error_conf.INSUFFICIENT_PASSWORD_LENGTH

    if (data.get('password') != data.get('confirm_password')):
        return error_conf.PASSWORDS_DOES_NOT_MATCH

    existed_user = check_existed_user(data.get('email'))
    if existed_user != False:
        return existed_user

    return False


def check_for_update_password_input_error(data):
    """
    Error Handling For Update Password API
    """

    if not data.get('email'):
        return error_conf.EMAIL_NOT_PROVIDED

    elif not data.get('password'):
        return error_conf.PASSWORD_NOT_PROVIDED

    elif not data.get('confirm_password'):
        return error_conf.CONFIRM_PASSWORD_NOT_PROVIDED

    user = User.objects.filter(email=data.get('email'))
    if user:
        user = user[0]
        if not user.check_password(data.get('password')):
            return error_conf.INVALID_PASSWORD

    if data.get('new_password'):
        if len(data.get('new_password')) < 8:
            return error_conf.INSUFFICIENT_PASSWORD_LENGTH

    if (data.get('new_password') != data.get('confirm_password')):
        return error_conf.PASSWORDS_DOES_NOT_MATCH

    return False
