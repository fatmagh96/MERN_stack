const express = require("express");
const app = express();

const PORT = 8000;

const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createCompany = () => {
    const newFake = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return newFake;
};

const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid()
    };
    return newFake;
};

const newFakeCompany = createCompany();
console.log(newFakeCompany);

// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
    res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.send(createCompany());
});

app.get("/api/user/company", (req, res) => {
    res.send({user:createUser(),company:createCompany()});
});


const server = app.listen(PORT, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);