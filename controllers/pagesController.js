const index = (request, response) => response.render('index');

const about = (request, response) => response.render('sobre');

module.exports = {
  index,
  about
}
