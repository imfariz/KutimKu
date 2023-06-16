const RegisterUser = require('../../Domains/users/entities/RegisterUser');

class AddUserUserCase {
  execute(useCasePayload) {
    const registerUser = new RegisterUser(useCasePayload);
    registerUser._verifyPayload(useCasePayload);
    return useCasePayload;
  }
}

module.exports = AddUserUserCase;
