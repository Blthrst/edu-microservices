## Course: microservices.

Rename `.env.example` to `.env` and set up your secrets.

Run your postgresql and rabbitmq server via: 
 - `sudo systemctl start rabbitmq-server`
 - `sudo systemctl start postgresql`

Then follow these steps:
 1) `cd ~/edu-microservices`
 2) `cd ./auth && yarn install && yarn run start`
 3) Split your terminal and paste `cd ./app && yarn install && yarn run start`

 **Docker compose is not available now**