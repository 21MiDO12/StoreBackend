# StoreBackend
## database scheme

- users table (id int , username varchar 50 , pass varchar 150)
- product table (id int , pName varchar 50 , cost float)

## environment variables

- port = 1234
- POSTGRES_HOST = 127.0.0.1
- POSTGRES_DB = store_database
- POSTGRES_DB_TEST = store_database_test
- POSTGRES_USER = postgres
- POSTGRES_PASSWORD = 123
- pepper = NoBody cares
- SALT_ROUNDS = 10
- Secret = test
- type = dev

## routes

- index (Get [token])
- createUser (POST [user , pass])
- update (PUT [id , name , token , cost (optional)])
- users (GET)
- show (GET [id , token])
- delete (DELETE [id , token])
- update (PUT [id, name , token , cost (optional)])
- login (POST [user , pass])
