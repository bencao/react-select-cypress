describe('Weird behavior when testing React Select', function() {
  it('fails on Electron 53 and Canary 61, but passes on Chrome 59', function() {
    cy
      .visit('http://jedwatson.github.io/react-select/')
      .get('div.Select-control:first')
        .click()
      .get('.Select-option:contains(Victoria)')
        .click();
  });
});
