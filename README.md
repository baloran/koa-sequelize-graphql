# KoaJS - GraphQL - Sequelize

> Developed for a test for [Wino](https://wino.fr) 🇫🇷 🍷. Is a work in progress. It's test so, some bullshit can be here.

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

## Documentation

### Mutation

Mutation provide a way to change the dataset behind GraphQL. In definitive is a CRUD.

##### addWine

```graphql

mutation {
  addWine(wine: {
    name: "Blondus Ricardus"
    price: 12.3
  }) {
    name
    id
    status
  }
}

```

> need to introduce the mutation relation

##### deleteWine

```graphql

mutation {
 deleteWine(id: 19){
    name
    status
  }
}

```

##### updateWine

```graphql

mutation {
  updateWine(wine: {
    id: 23,
    name: "Blondus Ricardus"
    price: 9.5
  }) {
    id
    name
    price
  }
}

```

## Contributing

Pull Request are welcome 🍷❤️