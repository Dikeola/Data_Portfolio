const fs = require('fs');

const env = JSON.stringify(process.env, null, 2);

fs.writeFileSync('env.json', env);