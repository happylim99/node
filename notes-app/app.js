const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const log = console.log;
//const successMsg = chalk.green.bold.bgWhite('Success');
const inverseMsg = chalk.inverse('Success');
const command = process.argv[2];

//console.log(argv);
//log(successMsg);

//customer yargs version
yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    /*
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
    */
   //ES 6 syntax
   handler(argv) {
    notes.addNote(argv.title, argv.body);
}
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() { 
        notes.listNotes()
    }
})

//log(yargs.argv);
yargs.parse();

/*
if(command === 'add') {
    log('adding notes');
} else {
    log('not add');
}
*/