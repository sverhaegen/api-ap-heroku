const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);
app.options('*', cors());

app.get('/', (req, res) => res.send('I modified this API two times.'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
