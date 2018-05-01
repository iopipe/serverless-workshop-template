'use strict'

const IOpipelib = require('@iopipe/iopipe')

iopipe = IOpipelib({
  token: ACCESS_TOKEN
})

module.exports.hello = iopipe((event, context, callback) => {
  // query string params == event.queryParams.paramName
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello, ' + event.queryParams.name + '!',
      input: event
    })
  }

  callback(null, response)
})
