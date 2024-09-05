const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 5000;

app.use(express.json());

// Generate dummy records
const generateRecords = (num) => {
    return Array.from({ length: num }, (_, i) => ({
        id: (i + 1).toString(),
        name: faker.name.findName(),
        offense: faker.random.word(),
        details: faker.lorem.paragraph(),
    }));
};

let records = generateRecords(100); // Generate 100 dummy records

// Get all records
app.get('/api/records', (req, res) => {
    res.json(records);
});

// Get record by ID
app.get('/api/records/:id', (req, res) => {
    const id = req.params.id;
    const record = records.find(r => r.id === id);
    if (record) {
        res.json(record);
    } else {
        res.status(404).json({ message: 'Record not found' });
    }
});

// Add new record
app.post('/api/records', (req, res) => {
    const newRecord = { id: (records.length + 1).toString(), ...req.body };
    records.push(newRecord);
    res.status(201).json(newRecord);
});

// Update record by ID
app.put('/api/records/:id', (req, res) => {
    const id = req.params.id;
    const index = records.findIndex(r => r.id === id);
    if (index !== -1) {
        records[index] = { id, ...req.body };
        res.json(records[index]);
    } else {
        res.status(404).json({ message: 'Record not found' });
    }
});

// Delete record by ID
app.delete('/api/records/:id', (req, res) => {
    const id = req.params.id;
    records = records.filter(r => r.id !== id);
    res.status(204).end();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
