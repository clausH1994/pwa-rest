const chai = require ('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);



describe('/First Test Collection', () => {

    it('test default API welcome route...', (done) => {

        chai.request(server)
        .get('/api/welcome')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            const actualVal = res.body.message;
            expect(actualVal).to.be.equal('Welcome to the PWA_Rest_API');
        done();
        });
    });
    it('should POST a valid user', (done) => {

            let user = {
                name: "test name",
                email: "aa@aa.dk",
                weekHours: 22,
                role: "test?",
                password: "testpassword"
            }
            chai.request(server)
            .post('/api/users/register')
            .send(user)
            .end((err, res) => {
            
            
            res.should.have.status(200);
            chai.request(server)
            .post('/api/users/login')
            .send({
                "email": "aa@aa.dk",
                "password": "testpassword"
            })
            .end((err, res) => {
                // Asserts                        
                expect(res.status).to.be.equal(200);   
                expect(res.body.error).to.be.equal(null);                        
                let token = res.body.token;

                            chai.request(server)
                            .get('/api/users')
                            .set({ "auth-token": token })
                            .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('array');
                            res.body.length.should.be.eql(1);
                            done();
                            });
            
            });
        });
    });

    it('should test two values.....',() => {
        let expectedVal = 10;
        let actualVal = 10;

        expect(actualVal).to.be.equal(expectedVal)
    })
})