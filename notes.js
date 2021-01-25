const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

const getNotes=()=>{
    a="Your notes..."
    return a
}
const addNote=(title,body)=>{
  const notes = loadNotes()

  const duplicateNote =notes.find((note)=>note.title===title)
    
  if (!duplicateNote){

  notes.push({
    title:title,
    body:body
  })
  saveNotes(notes)
console.log(chalk.green.inverse('New Note Added!'))
}else{
  console.log(chalk.green.inverse('Note Title Taken!'))
}



}
const saveNotes=(notes)=>{
          const dataJSON=JSON.stringify(notes)
          fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes=()=>{
  try{
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
}catch(e){
  return[]
}

}
const removeNote=(title)=>{
    //console.log(title)
   const notes = loadNotes()
   const notesToKeep=notes.filter((note)=>note.title!==title)
    
   saveNotes(notesToKeep)
   if (notesToKeep.length<notes.length){
     console.log(chalk.green.inverse("Note removed!"))
    }
    else{
      console.log(chalk.red.inverse("Note not found!"))
    }
  }
  const listNote=()=>{
      const notes=loadNotes()
      console.log('Your notes are...')
      notes.forEach(note => {
        console.log(note.title)
      });
  }

const reaNote=(title)=>{
  const notes=loadNotes()
  const note = notes.find((note)=>note.title===title)
    if (note){
      console.log(note.title)
      console.log(note.body)
    } else{
      console.log('Note not found')
    } 
}
  debugger
    
module.exports = {
    addNote:addNote,
    getNotes:getNotes,
    removeNote:removeNote,
    listNote:listNote,
    reaNote:reaNote
  }