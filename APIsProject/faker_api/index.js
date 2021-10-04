const express = require("express");
const app = express();
const faker = require("faker");
const port = 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createUser = () => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

const createCompany = () => {
  return {
    companyName: faker.company.companyName(),
    department: faker.commerce.department(),
    address: {
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zip: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
};

app.get("/api/users/new", (request, response) => {
  const newUser = createUser();
  console.log("new user:");
  console.log(newUser);
  response.json(newUser);
});

app.get("/api/companies/new", (request, response) => {
  let newCompany = createCompany();

  console.log("new company:");
  console.log(newCompany);
  newCompany.department = faker.commerce.department();
  console.log("updated company department:");
  console.log(newCompany);

  response.json(newCompany);
});

app.get("/api/user/company", (request, response) => {
  console.log("new user:");
  console.log(createUser());

  console.log("new company:");
  console.log(createCompany());
  response.json({ user: createUser(), company: createCompany() });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
