const Serie = require('../models/serie');

const index = (request, response) => {
  Serie.find({}, (error, docs) => {
    response.render('series/index', { series: docs });
  });
}

const store = (request, response) => {
  const serie = new Serie({
    name: 'friends',
    status: 'watched'
  });
  serie.save(() => console.log('saved'));
  response.render('series/nova');
}

module.exports = {
  index,
  store
}
