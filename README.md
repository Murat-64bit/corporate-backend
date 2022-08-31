# Corporate Backend

Simple company backend application. You cannot view other pages without JWT Token In Auth code with JWT Token.

## Getting Started

It runs on port 400 in localhost. It gives 1 hour usage token.

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

## Error: Unauthorized

```

```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
