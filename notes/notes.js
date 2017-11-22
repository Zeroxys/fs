const utils = require('./utils/utils')

const addNote = (title, body) => {
  const notes = utils.fetchNotes()
  let note = {
    title,
    body
  }
  let save = notes.filter( el => el.title === note.title)
  if(save.length === 0) {
    notes.push(note)
    utils.saveNotes(notes)
    console.log('---FILE SAVE IT---')
    console.log('-title : ' + note.title)
    console.log('-body : ' + note.body)
  }else{
    console.log('file title repeat')
  }
}

const removeNote = (title) =>  {
  let notes = utils.fetchNotes()
  let newNotes = notes.filter( note =>  note.title !== title)
  utils.saveNotes(newNotes)
}

const getNote = (title) => {
  let notes = utils.fetchNotes()
  let now = notes.filter( (el) => el.title === title)
  return now[0]
}

const listAll = () => {
  let list = utils.fetchNotes()
  console.log('--LIST--')
  list.map(el => console.log('posts : ' + el.title))
}

module.exports = {
  addNote,
  removeNote,
  getNote,
  listAll
}