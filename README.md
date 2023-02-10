# StoreBackend

## How to setup and connect to the database

- create database in postgres.
- create ".env" file.
- install the requirement modules (express , jasmine , db-migrate , pg , bcrypt , jsonwebtoken , dotenv).
- run the migrations.
- create new user and password.
- the backend port 1234.
- use the login user to get login token.
- use the login token in token query in every CRUD api.

## list of api examples

- http://localhost:1234/users (get Request) to list all users with passwords as json file
- http://localhost:1234/createUser?user=testuser&pass=1234 (post Request) to create new user (username "testuser" - password "1234")
- http://localhost:1234/login?user=testuser&pass=1234 (post Request) to login using the testuser after you run the previous api
- http://localhost:1234/index?token="eyJhbGciOiJIUzI1NiJ9.dGVzdHVzZXI.iBONS--BaDy0ic01MxBEBz4NNesXSkcI7eiOwwFo9Qo" (get Request) this only works if your token secret = test
- http://localhost:1234/show?id=0&token="eyJhbGciOiJIUzI1NiJ9.dGVzdHVzZXI.iBONS--BaDy0ic01MxBEBz4NNesXSkcI7eiOwwFo9Qo" (get Request) this only works if your token secret = test and used to show the required id (0 in this case).
http://localhost:1234/insert?name=testproduct&token="eyJhbGciOiJIUzI1NiJ9.dGVzdHVzZXI.iBONS--BaDy0ic01MxBEBz4NNesXSkcI7eiOwwFo9Qo" (get Request) this only works if your token secret = test and used to add test product with null cost
- http://localhost:1234/insert?name=testproduct&cost=100&token="eyJhbGciOiJIUzI1NiJ9.dGVzdHVzZXI.iBONS--BaDy0ic01MxBEBz4NNesXSkcI7eiOwwFo9Qo" (post Request) this only works if your token secret = test and used to add test product with 100 cost
- http://localhost:1234/update?id=0&name=testproduct&token="eyJhbGciOiJIUzI1NiJ9.dGVzdHVzZXI.iBONS--BaDy0ic01MxBEBz4NNesXSkcI7eiOwwFo9Qo" (put Request) this only works if your token secret = test and used to update 0 product with testproduct as name and null cost
- http://localhost:1234/delete?id=0&token="eyJhbGciOiJIUzI1NiJ9.dGVzdHVzZXI.iBONS--BaDy0ic01MxBEBz4NNesXSkcI7eiOwwFo9Qo" (get Request) this only works if your token secret = test and used to delete product number 0
