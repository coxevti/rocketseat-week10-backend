const { Router } = require('express');
const axios = require('axios');

const router = Router();

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

router.get('/devs', DevController.index);
router.post('/devs', DevController.store);

router.get('/search', SearchController.index);

module.exports = router;