const AddUserUserCase = require('../../../../Applications/use_case/AddUserUseCase');

const getUsers = (req, res) => {
  res.json(
    {
      message: 'Ini data user',
    },
  );
};

const registerUser = (req, res) => {
  const addUserUseCase = new AddUserUserCase();
  addUserUseCase.execute(req.body);
  res.json(
    {
      message: 'kirim data user',
      data: req.body,
    },
  );
};

module.exports = {
  getUsers,
  registerUser,
};
