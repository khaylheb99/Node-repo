// JavaScript source code
/*
const path = require('path');

console.log(path.sep);

const filePath = path.join('/Lead', 'Texts', 'sub.txt')

console.log(filePath);

const base = path.basename(filePath)
console.log(base);

//path.resolve returns an absolute path which might be 
// needed sometimes in our work

const abs_path = path.resolve(__dirname, 'Lead', 'Texts', 'sub.txt');

console.log(abs_path);


const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const txt = readFileSync('./Lead/sub_I.txt', 'utf8')

console.log(txt)

writeFileSync('./Lead/result.txt', `Your answer is ${txt}`, // if file is not present
{
  flag: 'a' //append
}
)

console.log('Done')

//This is the sync approach




const { readFile, writeFile } = require('fs')

console.log('Starting')
const txt = readFile('./Lead/sub_I.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return;
  } else {
    const ans = result 
    writeFile(
      './Lead/result_I',
      `Cmon ${txt}`, (err, result) => {
        if (err) {
          return;
        }
        console.log('Done with task')
      }
    )
  }
})

console.log('Starting next task')
//This is the async pattern
//Synchronous patterns dion't allow multiple users at the 
//same time as the codeblocks run orderly

*/

const http = require('http');

const server = http.createServer((req, res) => {
  //req means client request
  //res means the response given
  if (req.url === '/') {
    res.end('Welcome to PhinX');
    return;
  }
  else if (req.url === '/about') {
    res.end('PhinX Inc. is the brainchild of Oj Caleb. He brought the idea to life in 2023')
    return;
  }
  else{res.end(`
  <h1>Oops!</h1>
  <p>Page not found</p>
  <a href="/">homepage</a>
  `)
return}
})

server.listen(5000);

/*
Node package manager helps to reuse code in other projects, use other people's code and also share our own code.
npmjs.com
The reusable codes are called packages, dependencies or modules. There is no quality control here, so anybody can post anything here.
 */