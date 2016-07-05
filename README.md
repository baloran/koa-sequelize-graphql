# KoaJS - GraphQL - Sequelize

Developed for a test for [Wino](https://wino.fr).

## Stack

- [x] NodeJS
- [x] KoaJS
- [x] Sequelize
- [x] GraphQL

## Requirement

- [ ] NodeJS
- [ ] Posgresql

## Install

```
npm i

cp config.sample.json config.json
```

Edit the ```config.json``` with your configuration of the personal postgresql.

```
sequelize db:migrate
sequelize db:seed:all
```

You can start the server

```
node app.js
```

Visit [https://localhost:3000/graphql](https://localhost:3000) for graphql test.

## Contributing

Pull Request are welcome 🍷❤️