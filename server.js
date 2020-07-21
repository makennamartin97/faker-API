const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const faker = require('faker');

app.use(cors());
app.use(express.json());


class Company {
    constructor() {
        this._compid = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            street : faker.address.streetName(),
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country(),
        }

    }
}
class User {
    constructor() {
        this._userid = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }
    

};
console.log(new User());
console.log(new Company());


app.get("/api/users/new", (req, res) =>{
    res.json(new User());

})
app.get("/api/companies/new", (req, res)=> {
    res.json(new Company());
})
app.get("/api/user/company", (req, res)=> {
    res.json( { user: new User(), company: new Company() } );
    
    

})

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`));