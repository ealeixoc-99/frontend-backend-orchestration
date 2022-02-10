# frontend-backend-orchestration
## Author
- Florian Marques
- Enzo Aleixo-Carvalho

## How to use the project
- Launch Docker on your machine
- Launch NGROK on the port 8080 (jenkins) --> `ngrok http 8080` and change your github webhook with the new address (don't avoid to put /github-webhook/ at the end of the https address and desactive the SSH)
- Go on Jenkins and build the pipeline
- Go on "http://localhost:3000"
- To run the tests on local, go into the frontend directory and use this command : `npm test -- --bail --ci`
- If you push something on the dev branch, jenkins will automatically build the app on a pipeline, run the tests and if the tests passed, it will merge the dev branch into the release branch.
