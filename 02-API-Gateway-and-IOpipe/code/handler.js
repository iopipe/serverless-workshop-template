'use strict'

const IOpipelib = require('@iopipe/iopipe')

iopipe = IOpipelib({
  token: ACCESS_TOKEN
})

module.exports.hello = iopipe((event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
  }

  callback(null, response)
})
