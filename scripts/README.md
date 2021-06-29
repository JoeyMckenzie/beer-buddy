### Scripts

This directory contains files called by the Postgres docker container during initialization. 
The `01-init.sh` file is a the default bootstrapping file Postgres will run (see `docker-compose.yml` Postgres section). 
The contents of this directory are mapped as a volume within the container that Postgres will then run to seed our database
users, accounts, and database itself if none exists. 

Be sure to set the appropiate environment variables in the `.env` file located at the repository root.