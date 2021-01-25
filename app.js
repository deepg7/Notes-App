const notes = require('./notes.js')
const yargs = require('yargs')



//creating commands 
yargs.command({
    command:'add',
    describe:'Add a note',
    builder:{
        title:{
        describe:'Note Title',
        demandOption: true,
        type: 'string'
        },
        body:{
            describe:'Note Body',
            demandOption: true, 
            type:'string'

        }
    },
    handler(argv){
       notes.addNote(argv.title,argv.body)

    }
})
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
            }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
            }
    },
    handler(argv){
        notes.reaNote(argv.title)
       }
})
yargs.command({
    command:'list',
    describe:'list a note',
    handler(argv){
        notes.listNote()
    }
})
yargs.parse()
