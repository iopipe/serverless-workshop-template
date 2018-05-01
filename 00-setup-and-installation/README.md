# 00 -- Installation and Setup

## Step 1 -- Install Node.JS/npm

Go to [nodejs.org](https://nodejs.org) to install for your platform.

## Install Serverless Framework

Follow installation instructions [here](https://serverless.com/framework/docs/getting-started/), and instructions for setting up AWS Lambda (here)[https://serverless.com/framework/docs/providers/aws/guide/quick-start/]

**Note:** If you're using a work AWS account, perhaps consider using a separate account, even spinning up a temporary one, for following along with this workshop

## Sign up for IOpipe and get your access token

Sign up [here](https://dashboard.iopipe.com), then click 'Install' on the left menu. Copy your access token into an easily accessible place, or just keep that tab open.

# 01 -- Let's talk about serverless

## What Serverless is:

* A further abstraction of PaaS/IaaS
* Allows you to write code and run it in the cloud without configuring an entire environment
* A very popular new cloud architecture
* A way to further remove the need/responsibility for maintaining your own infrastructure
* Another tool to add to your application development toolbox

## What Serverless isn't:

* An architecture consisting of 0 servers
* A be-all, end-all, fix-all strategy
* A perfect, painless way to deploy and build applications

Serverless, just like any architecture, has upsides and downsides, and is great at some things and not great at others. **The point of this workshop is to teach you not just the "how"s of getting started with serverless architectue, but the "why"s**

## How Serverless Works

* Choose a runtime environment from your serverless provider (today we're using Node.JS 6.10 from AWS Lambda)
* Write a function that will be called, passing context and a callback to be used when the function is ready to send a response
* Deploy that function to your serverless provider
* For some providers, you'll need to add triggers to call the function (We will be adding an API Gateway trigger to our Lambda function)
* Call the function
* Optional (kinda): Look into/add development and monitoring tools (We'll be looking at IOpipe)
