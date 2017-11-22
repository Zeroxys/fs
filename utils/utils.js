const fs = require('fs')

const fetchNotes = () => {
  try{
    let notesStr = fs.readFileSync('notes-data.json')
    return JSON.parse(notesStr)
  }catch(err){
    return []
    console.log('make a new file')
  }
}

const saveNotes = notes => fs.writeFileSync('notes-data.json', JSON.stringify(notes))

module.exports = {
  saveNotes,
  fetchNotes
}