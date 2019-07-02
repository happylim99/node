const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your Notes....';
}
/*
const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        console.log(note)
        return note.title === title
    })
    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green(`Note with title : ${title} added`))
    } else {
        console.log('Note title taken')
    }
}
*/

const addNote = (title, body) => {
    const notes = loadNotes();
    //keep looking when first match found
    const duplicateNotes = notes.filter((note) => note.title === title)
    //find method return the first match it finds
    const duplicateNote = notes.find((note) => note.title === title)

    //if(duplicateNotes.length === 0) {
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green(`Note with title : ${title} added`))
    } else {
        console.log('Note title taken')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}
/*
const removeNote = function (title) {
    const notes = loadNotes()
    const result = notes.filter(function (note) {
        return note.title !== title
    })
    //const result = notes.filter(note => note.title !== title)
    saveNotes(result)
    if(notes.length > result.length) {
        console.log(chalk.green.inverse('Note Removed'))
    } else {
        console.log(chalk.red.inverse('No Note Found'))
    }
}
*/

const removeNote = (title) => {
    const notes = loadNotes()
    const result = notes.filter((note) => note.title !== title)

    //const result = notes.filter(note => note.title !== title)
    saveNotes(result)
    if(notes.length > result.length) {
        console.log(chalk.green.inverse('Note Removed'))
    } else {
        console.log(chalk.red.inverse('No Note Found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.bold.inverse('Your notes'))
    notes.forEach((note) => console.log(note.title))
    
}

const readNote = (title) => {
    const notes = loadNotes()
    const theNote = notes.find((note) => note.title === title)
    if(theNote) {
        console.log(chalk.green(theNote.title))
        console.log(theNote.body)
    } else {
        console.log(chalk.red('Note not found!'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}