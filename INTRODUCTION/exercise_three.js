// var id = "13"
// var available = "True"
// var count = "52"
// var name = "Ade"
// var author = "Bisi"

// const book = new Object()

// book.id = 13
// book.available = true
// book.count = 52
// book.name = "Ade"
// book.author = "Bisi"

// console.log(book)

const prompt = require("prompt-sync")():
const id = prompt ("Enter ID: ")
const available = prompt ("Enter available: ")
const count = prompt ("Enter Count: ")
const name = prompt ("Enter Name: ")
const author = prompt ("Enter Author: ")

const book = new Object()
book.newId = Number(id)
book.newAvailable = Boolean(available)
book.newCount = Number(count)
book.newName = String(name)
book.newAuthor = String(author)

console.log(book)