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
    Promise.all([getCharacter(1), getCharacter(2), getCharacter(3), getCharacter(4), getCharacter(5), getCharacter(6), getCharacter(7), getCharacter(8)])
      .then(data => {
        console.log(data)
        res.json(data);
      })
      .catch(e => {
        res.status(500).send(e, "error finding characters" );
      })
  })
}
