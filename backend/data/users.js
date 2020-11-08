import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@test.test',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'johndoe@test.test',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Jane DOe',
        email: 'janedoe@test.test',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default users