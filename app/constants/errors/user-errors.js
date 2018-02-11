'use strict';

const UserErrors = {};

UserErrors.CREATE_WRONG_DATA = {
  errorCode: 1001,
  statusCode: 400,
  developerMessage: 'Create user wrong data'
};

UserErrors.GET_USERS_LIST_WRONG_DATA = {
  errorCode: 1002,
  statusCode: 400,
  developerMessage: 'Get users list wrong data'
};

UserErrors.GET_USER_WRONG_DATA = {
  errorCode: 1003,
  statusCode: 400,
  developerMessage: 'Get user wrong data'
};

UserErrors.NOT_FOUND = {
  errorCode: 1004,
  statusCode: 404,
  developerMessage: 'User does not exist'
};

UserErrors.CONFLICT = {
  errorCode: 1005,
  statusCode: 409,
  developerMessage: 'User with this email is already exists'
};

UserErrors.GET_USER_USER_NOT_FOUND = {
	errorCode: 1006,
	statusCode: 400,
	developerMessage: 'User with specified id doesn\'t exist'
};

UserErrors.GET_USERS_LIST_ERROR = 
{
	errorCode: 1007,
	statusCode: 500,
	developerMessage: 'There was a problem while fetching users list'
}

UserErrors.NOT_IMPLEMENTED = {
  errorCode: 1999,
  statusCode: 501,
  developerMessage: 'Feature is not implemented'
};

module.exports = UserErrors;
