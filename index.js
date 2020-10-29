const express = require('express');

const app = express();
app.use(express.json({ extended: false}));

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 3000;

app.listen(PORT, () => console.log('Server runnning'));
