# Corporate Backend

Simple company backend application. You cannot view other pages without JWT Token In Auth code with JWT Token.

## Getting Started

It runs on port 400 in localhost. It gives 1 hour usage token.

#### How to install?

1. Install [MongoDB](https://www.mongodb.com/ "MongoDB")
2. Extract and install files
3. `npm i bcryptjs express express-unless jsonwebtoken mongoose mongoose-unique-validator`


Example login and registers
```

### Login/Register request in body side.

# Creating new user
# localhost:4000/users/register

{
    "username":"murat",
    "email":"World@gmail.com",
    "password":"murat123"
}

# Login same style.

```
Give the example for **Unauthorized**

When I specify that I want to add blog post from postman
```
# localhost:4000/articles/add
{
    "title":"Baslikasda",
    "content":"icerikadsa"
}

# localhost:4000/articles/remove
{
    "title":"Baslikasda",
    "content":"icerikadsa"
}

# localhost:4000/articles/put
{
    "title":"Baslikasda",
    "content":"icerikadsa"
}

## Error: Unauthorized

```

Otherwise, when I want to login while I am authorized, the responses I get will be as follows:

```

{
    "message": "Succes",
    "data": {
        "title": "Baslikasda",
        "content": "icerikadsa",
        "id": "630f6240e2895fedc78e8aa8"
    }
}

### ...

```
## Login


    {
        "message": "Succes",
        "data": {
            "username": "murat",
            "email": "World@gmail.com",
            "date": "2022-08-31T09:01:00.894Z",
            "id": "630f23aaa90cbc87750f25e3",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibXVyYXQiLCJpYXQiOjE2NjE5NTI1NTYsImV4cCI6MTY2MTk1NjE1Nn0.oe9ieId5lcixogp4n5IGNMMcZvZskBnGI6zWGuLAlu0"
        }
    }

## Register

Add additional notes about how to deploy this on a live system

    {
           "message": "Succes",
    		"data": {
        	"username": "murat",
        	"email": "World@gmaxl.com",
        	"date": "2022-08-31T13:26:56.676Z",
        	"id": "630f62ffe2895fedc78e8aac"
    	}


## Authors

Murat Türk
