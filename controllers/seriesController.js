const labels = [
  { id: 'to-watch', name: 'Para Assistir' },
  { id: 'watching', name: 'Assistindo' },
  { id: 'watched', name: 'Assistido' }
];

const index = async ({ Serie }, request, response) => {
  const docs = await Serie.find()
  response.render('series/index', { series: docs, labels });
}

const storeProcess = async ({ Serie }, request, response) => {
  const serie = new Serie(request.body);
  try {
    await serie.save();
    response.redirect('/series');
  } catch (error) {
    response.render('series/nova', { errors: Object.keys(error.errors) });
  }
}

const storeForm = (request, response) => {
  response.render('series/nova', { errors: '' });
}

const editProcess = async ({ Serie }, request, response) => {
  const serie = await Serie.findOne({ _id: request.params.id });
  serie.name = request.body.name;
  serie.status = request.body.status;
  try {
    await serie.save();
    response.redirect('/series');
  } catch(error) {
    response.render('series/editar', { serie, labels, errors: Object.keys(error.errors) });
  }

}

const editForm = async ({ Serie }, request, response) => {
  const serie = await Serie.findOne({ _id: request.params.id });
  response.render('series/editar', { serie, labels, errors: '' });
}

const excluir = async ({Serie}, request, response) => {
  await Serie.deleteOne({ _id: request.params.id });
  response.redirect('/series');
}

const info = async ({ Serie }, request, response) => {
  const serie = await Serie.findOne({ _id: request.params.id });
  response.render('series/info', { serie });
}

const addComments = async ({ Serie }, request, response) => {
  await Serie.updateOne({
    _id: request.params.id
  }, {
    $push: { comments: request.body.comentario }
  })
  response.redirect('/series/info/'+request.params.id);
}

module.exports = {
  index,
  storeProcess,
  storeForm,
  editProcess,
  editForm,
  excluir,
  info,
  addComments
}
