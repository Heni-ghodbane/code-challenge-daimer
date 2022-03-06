# Code Challenge


Build a simple CRUD frontend for the given Center Matrix feature.

### Create:
Create a new Center Matrix entry and send it to the Server

### Read:
Create a list of entries (Preferable would be Filterable List)

### Update:
Update existing Entry and save it into database

### Delete:
Delete a entry from the list (Preferable with a modal confirmation)

### Preparing:
You need Docker Compose and Node>=16 installed on your local machine

> You are free to choose the design and behavior of the UI and you can choose whichever technologies you like to create this ui.

Hints

Recommended time frame: 5 hours

Stick to your strength - whether you are more frontend or backend orientated, there is really no right or wrong. 
Speed is more important than perfectionism, but quality is more important than quantity!



## Start the given environment
Fork the Repository and after pull your Fork
run first  `npm install` to install the dependecies

### Configure Database

Please create the `.env.local` see picture under root


```
DATABASE_USER=root
DATABASE_PASSWORD=root_password
DATABASE_PORT=5435
DATABASE_DB_NAME=tss
PORT=3400
```

#### Run Database
is needed before you serve the backend

`docker-compose up -d`

#### Run Backend

`npm run nx -- serve dev-server`
- [healtcheck](http://localhost:3400/api)
- [center-matrix](http://localhost:3400/api/center-matrix)
- [overview APi](http://localhost:3400/api-reference/)

> to write data int the table execute the `Get` endpoint without params [http://localhost:3400/api/center-matrix](http://localhost:3400/api/center-matrix)


### Run frontend

`npm run nx -- serve developer-app`


