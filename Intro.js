// Global variables
// __dirname : path to current directory
// __filename : file name
// require : function to use modules (Common JS)
// module : Info about current module
// process : Info about env where the program is being executed

// console.log(__filename);

// clear :  This clears the entire terminal

const hi = (name) => {
  console.log(`Hey ${name}`)
};

module.exports = hi;

//This helps create a path to the files
