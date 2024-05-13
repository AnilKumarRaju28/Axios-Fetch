const axios = require('axios');

async function main(){
    const response = await axios.get("https://sum-server.100xdevs.com/todos");
    // const json = await response.json();
    // here axios automatically converts into json format, so no need of respone.json();
    console.log(response.data.todos.length);
}
main();