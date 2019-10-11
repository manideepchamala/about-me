QUnit.module('Main', {})

QUnit.test( "Test area of trapezium", function( assert ) {
    assert.equal(testcalculations(1, 1, 1), 1, "calculating the area of trapezoid gives the value 1 with the given inputs")
    assert.equal(testcalculations(2, 2, 2.5), 5, "calculating the area of trapezoid gives the value 5 with the given inputs")
    assert.equal(testcalculations(2, 1, 2), 3, "calculating the area of trapezoid gives the value 3 with the given inputs")
    assert.equal(testcalculations(1, 4, 3), 7.5, "calculating the area of trapezoid gives the value 7.5 with the given inputs")
    assert.equal(testcalculations(-1, 4, 2), 5, "calculating the area of trapezoid gives the value 5 with the given inputs")
})
window.addEventListener('load', () => {
    const appURL = '../salestax.html' 
    const openingTag = '<main class="container mt-5 flex-fill">'
    const closingTag = '</main>' // go grab it!
    fetch(appURL, { method: 'GET' })
      .then(response => {
        return response.text() // returns promise
      })
      .then(txt => {                
        const start = txt.indexOf(openingTag)
        const end = txt.indexOf(closingTag) + closingTag.length
        const html = txt.substring(start, end) // we only want part of the page
        const qunitFixtureBody = document.querySelector('#qunit-fixture')
        qunitFixtureBody.innerHTML = html // put the page into the DOM - the second div associated with this page
        console.info(qunitFixtureBody) // print it out so we can see it (it doesn't get inserted into the page)
        QUnit.start() // start the actual testing - it finds and runs both the tests, defined in QUnit.test()
      })
      .catch(error => {
        console.error('error:', error);
        QUnit.start()
      })
  })

  