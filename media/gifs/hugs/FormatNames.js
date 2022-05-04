const { readdirSync, renameSync } = require('fs');

let num = 1;

for (var file of readdirSync(".")) {
    if (file.endsWith(".gif")) {
        renameSync(file, `hug_${num}.gif`);
        num++;
    }
}