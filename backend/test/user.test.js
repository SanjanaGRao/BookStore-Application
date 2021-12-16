/**
 * @file            : user.test.js
 * @author          : Sanjana Rao
 * @version         : 1.0
 * @since           : 07-12-2021
 */
var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");
let should = chai.should();
chai.use(chaiHttp);
const expect = chai.expect

/**
 * @description Various test cases to test the CRUD operations on user
 */
describe("CRUD OPERATIONS ON USER", function () {

    const users = [
        {
            "firstName": "Chris",
            "lastName": "Evans",
            "password": "Captain@avengers3000",
            "email": "captain@gmail.com",
            "phoneNumber":9902194739

        }, {
            "firstName": "Hrishikesh",
            "lastName": "P",
            "password": "Hrishikesh3*",
            "email": "hrishikesh@gmail.com",
            "phoneNumber":7338221810

        }
    ]
    it("Should pass when the users are added to the database", async () => {

        for (u in users) {
            let res = await chai.request(server).post('/users').send(users[u]);
            res.should.have.status(200);
            console.log("Response Body:", res.body);
            }     
    });

    it("Should pass when all the users are fetched from the database", async () => {
        let res = await chai.request(server).get("/users")
        res.should.have.status(200);
        console.log(res.body);
        expect(res.body).to.have.a.lengthOf(4);
    });

    it("Should pass when a particular user is fetched from database", (done) => {
        chai.request(server).get("/users/61b02d53fdda039433400058").end((err, result) => {
            result.should.have.status(200);
            console.log("Fetched Particlar user using /GET/Users/:UserID ::::", result.body)
            done();
        })
    });

    it("Should pass when a particular user is updated", (done) => {
        var updatedUser = {
            "firstName": "Sandhyaaa",
            "lastName": "Rao",
            "password": "Sandhya17#",
            "email": "sanjanaaaaa310@gmail.com",
            "phoneNumber":9902194739
        }
        chai.request(server).put("/users/61b02d53fdda039433400058").send(updatedUser).end((err, result) => {
            result.should.have.status(200);
            console.log("Updated Particlar User using /GET/UserS/:USERID ::::", result.body);
            done();
        })
    });

    it("Should pass when a particular user is deleted", (done) => {
        chai.request(server).delete("/users/61b02d54fdda03943340005c").end((err, result) => {
            result.should.have.status(200);
            console.log("Deleted Particlar user ", result.body);
            done();
        })
    });
});