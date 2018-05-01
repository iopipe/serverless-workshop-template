# 01 -- Your First Lambda

## Step 1 -- Let's take a look at the code!

Check out the `code` directory, and we'll walk through the files:

* `serverless.yml`
* `package.json`
* `handler.js`

This code was generated using the serverless framework:

```
serverless create --template aws-nodejs
```

## Step 2 -- Let's Deploy!

`serverless deploy` in the directory. If you have issues, check that you followed all of the setup steps in [part 00](../00-setup-and-installation/README.md)

## Step 3 -- Let's invoke our serverless function

`serverless invoke -f helloOne --data "{\"name\":\"World\"}"`

## Step 4 -- Let's work with event data

You can reference the [serverless framework docs](https://serverless.com/framework/docs/providers/aws/cli-reference/invoke/) and we'll walk through using context in an AWS Lambda function and passing data into our function.

## Step 5 -- Invoke with events!

`serverless invoke -f helloEvents --data "{\"name\":\"World\"}"`

References:

* [API Gateway events in AWS Lambda](https://docs.aws.amazon.com/apigateway/latest/developerguide/integrating-api-with-aws-services-lambda.html#api-as-lambda-proxy-expose-get-method-with-query-strings-to-call-lambda-function)
