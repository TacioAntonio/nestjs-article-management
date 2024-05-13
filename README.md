# [Nest.js API] Article Management

![Image](images/nestjs.png)
> An API developed for the purpose of managing articles

# Angular application
Application repository that runs the Nest.js API:
- [[Angular] article-management](https://github.com/TacioAntonio/angular-article-management)

## Endpoints
- `{PROTOCOL}://{URL}:{PORT}/api`
### Articles
- GET - /articles
- GET - /article?id="ARTICLE_ID"
- POST - /article
- PUT - /article?id="ARTICLE_ID"
- DELETE - /article?id="ARTICLE_ID"

### Users
- POST - /sign-in
- POST - /create-user

## Installation
```sh
$ git clone https://github.com/TacioAntonio/nestjs-article-management
$ cd nestjs-article-management
$ npm i
```

## Running locally
```sh
$ npm start
```

## Running on docker
```sh
$ docker-compose up
```

## Contribution
Please read [CONTRIBUTING.md](https://github.com/TacioAntonio/nestjs-article-management/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/TacioAntonio/nestjs-article-management/tags).

## Authors
| ![Tácio Antônio](https://avatars2.githubusercontent.com/u/44682965?s=150&=4)
| -
| [Tácio Antônio](https://github.com/TacioAntonio/)

See also the list of [contributors](https://github.com/TacioAntonio/nestjs-article-management/graphs/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/TacioAntonio/nestjs-article-management/blob/master/LICENSE.md) file for details.
