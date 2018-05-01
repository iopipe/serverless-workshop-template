'use strict'

const IOpipelib = require('@iopipe/iopipe')

let iopipe = IOpipelib({
  token: 'ACCESS_TOKEN'
})

module.exports.hello = iopipe((event, context, callback) => {
  let message = 'Hello, '
  if (event.queryStringParameters && event.queryStringParameters.name) {
    message += event.queryStringParameters.name + '!'
  } else {
    message += 'World!'
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message,
      input: event
    })
  }

  callback(null, response)
})
