# Testkube Ephemeral Environment

This example shows how to perform testing using Testkube in ephemeral envrionments. Everytime a new PR is raised, a new kind cluster will spin up, install Testkube, deploy and execute a test workflow, fetch the results and destroy the cluster. 

## Setup

For this example, we'll test a simple nginx application for a valid response. In order to do this in an ephemeral environment, below are the steps that we'll perform:

1. Create a [new environment on Testkube Pro](https://docs.testkube.io/testkube-pro/articles/environment-management/#creating-a-new-environment) and note down the tokens for org_id, env_id and access_token.
2. Create environment variables for the repository in GitHub and save these tokens.
3. Create a `nginx-deployment.yaml` file that has the definition for the nginx application that we want to deploy.
4. Create a `curl-test.json` file that has the code to test our nginx application.
5. Add a GitHub workflow to the repository and update the workflow in `main.yaml`

## How It Works

On every new PR that is raised in the repo, the workflow will execute performing the following steps in order:

1. Spin up a new cluster using [GitHub's Kind action](https://github.com/marketplace/actions/kind-cluster).
2. Deploy our nginx application.
3. Setup Testkube on this cluster using Helm.
4. Configure the Testkube Agent using the tokens.
5. Wait for the Testkube API Server to be up and running.
6. Execute the test on the cluster, fetch and display the results.
7. Destroy the cluster.
