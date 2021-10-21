const express = require('express')
const cors = require('cors')
const app = express();
const port = 5000;


app.use(cors())

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello hello from second server 2 ')
});


const users = [
    { id: 1, name: 'shabana', email: 'shabana@gmail.com', phone: '01777113232' },
    { id: 2, name: 'shabnur', email: 'shabnura@gmail.com', phone: '01777113232' },
    { id: 3, name: 'suchorita', email: 'suchorita@gmail.com', phone: '01777113232' },
    { id: 4, name: 'susmita', email: 'susmita@gmail.com', phone: '01777113232' },
    { id: 5, name: 'soniya', email: 'soniya@gmail.com', phone: '01777113232' },
]

app.get('/users', (req, res) => {
    const search = req.query.search
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
    res.send(users)
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})
app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummi yummi tok mango')
})

app.listen(port, () => {
    console.log('Listen to port', port)
})