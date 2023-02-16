const assert = require('chai').assert;
const fetch = import('node-fetch');

describe('GET /invitados', () => {
  it('Tuh muertoh', (done) => {
    fetch('http://localhost:3000/invitados')
      .then(response => response.json())
      .then(data => {
        assert.isArray(data);
        done();
      })
      .catch(err => done(err));
  });
});
