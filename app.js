const opt = require('./opts')

const yargs = require('yargs')
.command('add', 'Add a new note', {
  body: {
    describe : 'body of note',
    demand: true,
    alias: 'b'
  }
})
.help()
.argv
const notes = require('./notes/notes')
const cmd = yargs._[0]

if(cmd === 'add') {
  notes.addNote(yargs.title, yargs.body)
} else if(cmd === 'get') {
  let note = notes.getNote(yargs.title)
  console.log(note ? 'note found :' + JSON.stringify(note) : 'note not found is ' + JSON.stringify(note))
}else if (cmd === 'list') {
  notes.listAll()
} else if (cmd === 'remove') {
  notes.removeNote(yargs.title)
}else{
  console.log('command not found')
}
