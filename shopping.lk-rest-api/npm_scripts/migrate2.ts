import { exec, spawn } from 'child_process';
import shell from 'shelljs';

console.log(process.argv);
console.log('--------------------');
console.log('7777777777111');

const scriptCommand = 'ts-node -r dotenv/config ./migrate.config.ts status'; // Replace with your command

/* 

ts-node npm_scripts/migrate.ts up     => npm run migrate up
ts-node npm_scripts/migrate.ts status => npm run migrate status
ts-node npm_scripts/migrate.ts down --all => npm run migrate down --all
ts-node npm_scripts/migrate.ts down --last => npm run migrate down --last



*/

//shell.exec('ts-node  gg status');
//shell.exec('ts-node -e gg status');
shell.exec('ts-node -r dotenv/config ./migrate.config.ts status');
//shell.exec('git status');
//npx ts-node -r dotenv/config ./migrate.config.ts status

process.exit(0);
