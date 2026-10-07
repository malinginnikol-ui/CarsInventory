const express = require('express');
const app = express();
const port = 3000;
const cars = [
    {id: 1, maker: 'Toyota', model: 'Camry', year: '2023', color: 'Black', quantity: '15', dealer: 'Toyota of Glendale'},
    {id: 2, maker: 'Honda', model: 'Civic', year: '2024', color: 'Black', quantity: '20', dealer: 'Honda Downtown'},
    {id: 3, maker: 'Ford', model: 'F-150', year: '2023', color: 'white', quantity: '10', dealer: 'Ford of North Hollywood'},
    {id: 4, maker: 'Chevrolet', model: 'Tahoe', year: '2024', color: 'Red', quantity: '8', dealer: 'Chevy Malibu'},
    {id: 5, maker: 'Nissan', model: 'Rogue', year: '2023', color: 'Blue', quantity: '12', dealer: 'Nissan of Burbank'},
    {id: 6, maker: 'BMW', model: 'X5', year: '2024', color: 'Gray', quantity: '5', dealer: 'BMW of Encino'},
    {id: 7, maker: 'Mercedes-Benz', model: 'C-Class', year: '2023', color: 'Black', quantity: '7', dealer: 'MB of Bev Hills'},
    {id: 8, maker: 'Hyundai', model: 'Elantra', year: '2024', color: 'White', quantity: '18', dealer: 'Hyundai of A'},
    {id: 9, maker: 'Toyota', model: 'RAV4', year: '2024', color: 'Blue', quantity: '14', dealer: 'Toyota of Pasadena'},
    {id: 10, maker: 'Toyota', model: 'Corolla', year: '2024', color: 'White', quantity: '22', dealer: 'Toyota of Glendale'},
    {id: 11, maker: 'BMW', model: '3 Series', year: '2023', color: 'Black', quantity: '9', dealer: 'BMW of Beverly Hills'}
]

app.get('/developer', (req, res) =>{
    res.send('Nichole Estorco')
});


app.get('/cars', (req,res) => {
    res.status(201).json(cars)
});


app.get('/api/cars/:id', (req,res) => {
    const id = Number (req.params.id);
    const cars = cars.find(c => c.id === id);

    if(!cars){
        return res.status(404).json({message: 'cars not found'});
    };
    res.json(cars);
    
});


app.post('/cars', (req,res) => {
    const newCar = req.body;
    cars.push(newCar);
    res.status(201).json({message: 'successfully added'});
});


app.put('/api/cars/:id', (req, res) => {
    const id = Number (req.params.id);
    const index = data.cars.findIndex(c => c.id === id);

    if(index === -1){
        return res.status(404).json({message: 'car not found'});
    }
    data.cars[index] = {
        ...data.cars[index],
        ...req.body
    };
});


app.delete('/api/cars/:id', (req, res) => {
    const is = Number (req.params.id);
    const cars = cars.find(c => c.id === id);

    if(index === -1){
        return res.status(404).json({message: 'car not found'});
    }
    const deleted = data.cars.splice(index, 1);
    res.json(car);
})


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port,() => {
    console.log(`http://localhost:${port}`);
})