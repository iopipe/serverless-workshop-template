# 02 -- API Gateway and IOpipe

## Step 1 -- add your IOpipe token

Misplaced it? [you can look at step 00 to re-obtain it.](../00-setup-and-installation/README.md)

## Step 2 -- Deploy!

## Step 3 -- Let's dig into AWS API Gateway trigger

* Head to the AWS Dashboard and search for AWS Lambda
* Find the function you just deployed in the list, and click it
* On the left side, under designer, find API Gateway and click it
* In the dropdown, select "Create a new one" for API
* Fill out the fields
* Click the orange 'save' button in the upper right corner of the screen

References:

* https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-set-up-simple-proxy.html#api-gateway-simple-proxy-for-lambda-input-format
* [API Gateway events in AWS Lambda](https://docs.aws.amazon.com/apigateway/latest/developerguide/integrating-api-with-aws-services-lambda.html#api-as-lambda-proxy-expose-get-method-with-query-strings-to-call-lambda-function)
