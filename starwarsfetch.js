const fetch = require('node-fetch');

const getCharacter = (i) =>
  fetch('http://swapi.co/api/people/' + i)
    .then(blob => blob.json())
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(e => {
      console.log(e)
      return e;
    })



module.exports = (app) => {
  app.get('/api/starwars', (req, res) => {
    Promise.all([getCharacter(1), getCharacter(2)])
      .then(data => {
        console.log(data)
        res.json(data);
      })
      .catch(e => {
        res.status(500).send(e, "error finding characters" );
      })
  })
}
