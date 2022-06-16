
const connect = require('./configs/db');
const app = require('./index');

app.listen(5000, async function() {
    try {
        await connect();
    } catch (error) {
        console.log(error);
    }
    console.log("listening to port 5000");
});

