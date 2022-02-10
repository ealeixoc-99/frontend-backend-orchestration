# frontend-backend-orchestration
## Author
- Florian Marques
- Enzo Aleixo-Carvalho

## How to use the project
- Launch Docker on your machine
- Go on Jenkins and build the pipeline or you can push something on the git and the build will be launched automatically
- Go on "http://localhost:3000"

ngrok http 3000 --> should be on the frontend
On github, to add a webhok : Add the https link folowed by /github-webhook/ and desactive the SSH

To run the tests on local, go into the frontend directory and use this command : `npm test -- --bail --ci`

