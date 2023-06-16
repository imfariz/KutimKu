const populationsHandler = require('./handler');

const populationsRoutes = (router) => {
  router.get('/', populationsHandler.getPopulations);
  router.get('/:id', populationsHandler.getPopulationById);
  router.post('/', populationsHandler.postPopulations);
  router.put('/', populationsHandler.putPopulations);
  router.delete('/', populationsHandler.deletePopulations);
  return router;
};

module.exports = populationsRoutes;
