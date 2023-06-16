const usersHandler = require('./handler');

const usersRoutes = (router) => {
  router.get('/', usersHandler.getUsers);
  router.post('/', usersHandler.registerUser);
  return router;
};

module.exports = usersRoutes;
