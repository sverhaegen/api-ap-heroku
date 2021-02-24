const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: 'https://heuristic-curie-65d4b0.netlify.app'
    })
);
app.options('*', cors());

app.get('/', (req, res) => res.send('I modified this API two times.'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
