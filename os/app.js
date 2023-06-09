const os = require('os');

const type = os.type();
const home = os.homedir();
const uptime = os.uptime();
const user = os.userInfo();

console.log(user);