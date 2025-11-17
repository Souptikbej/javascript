const { error } = require('console');
const fs = require('fs');
// fs.writeFile("Hello.txt", "My name is Souptik bej", function (err) {
//     if (err) console.log(err)
//     else console.log("File Create Successfully.....")
// })

// fs.appendFile("Hello.txt", "I am a Good Coder", function (err) {
//     if (err) console.log(err)
//     else console.log("Append Successfully.....")
// })

// fs.rename("Hello.txt", "Hey.txt", function (err) {
//     if (err) console.log(err)
//     else console.log("Rename Succesfully......")
// })

// fs.copyFile("Hey.txt", "./copy/Hello.txt", function (err) {
//     if (err) console.log(err)
//     else console.log("Copy done......")
// })

// fs.unlink("Hey.txt", function (err) {
//     if (err) console.log(err)
//     else console.log("Removed......")
// })

// fs.rm("./copy", { recursive: true }, function (err) {
//     if (err) console.log(err)
//     else console.log("Removed......")
// })

// 1️⃣ Create a folder → create file inside → write data
// fs.mkdir("Hellobro", function (err) {
//     if (err) console.log(err.message)
//     else console.log("Folder Created ...")
//     fs.writeFile("./Hellobro/lol.txt", "Le lo pudinaaaaaaaaaaa", function (err) {
//         if (err) console.log(err.message)
//         else console.log("File created ....... And write done .....")
//     })
// })

// 2️⃣ Read file → append new data → read again
// fs.readFile("./Hellobro/lol.txt", "utf8", (err, data) => {
//     if (err) console.log(err.message)
//     else console.log(`Before append ${data}.....`)
//     fs.appendFile("./Hellobro/lol.txt", " jhukega nahi to dhukega kaiseeee.", (err) => {
//         if (err) console.log(err.message)
//         else console.log("Appended...")
//         fs.readFile("./Hellobro/lol.txt", "utf8", (err, data) => {
//             if (err) console.log(err.message)
//             else console.log(`After append ${data}.....`)
//         })
//     })
// })


// 3️⃣ Rename file
// fs.rename("./Hellobro/lol.txt", "./Hellobro/Hey.txt", function (err) {
//     if (err) console.log(err)
//     else console.log("Rename Succesfully......")
// })


// 4️⃣ Delete file + folder
// fs.unlink("./Hellobro/Hey.txt", function (err) {
//     if (err) console.log(err)
//     else console.log("File Removed......")
//     fs.rm("./Hellobro", { recursive: true }, function (err) {
//         if (err) console.log(err)
//         else console.log("Folder Removed......")
//     })
// })

// ✅ 7. Check File Exists
// if (fs.existsSync("Heyi.txt")) console.log("Yes , File exists .... ");
// else console.log("No , File not exists .... ")


// ✅ 8. Read Folder (list files)
// fs.readdir("./", (err, files) => {
//     console.log(files);
// });

// 5️⃣ Build a small file-based notes app
if (fs.existsSync("./notes"))
    console.log("Folder Already exits ....")

else {
    fs.mkdir("./notes", (err) => {
        if (err) console.log(err.message);
        else console.log("Folder Created... Folder name : notes");
    });
}

function addNote(title, content) {
    fs.writeFile(`./notes/${title}.txt`, `${content}`, (err) => {
        if (err) console.log(err.message)
        else console.log(`File created , File name : ${title}.txt , Content is : ${content}`);
    })
}

function readNote(title) {
    fs.readFile(`./notes/${title}.txt`, "utf8", (err, data) => {
        if (err) console.log(err.message)
        else console.log(`File Content is : ${data}`)
    })
}

function listNotes() {
    fs.readdir("./notes", (err, files) => {
        if (err) console.log(err.message);
        else console.log(files)
    })
}

function deleteNote(title) {
    fs.unlink(`./notes/${title}.txt`, (err) => {
        if (err) console.log(err.message)
        else console.log(`${title}.txt was deleted sucessfully....`)
    })
}
addNote("todo", "Buy milk today");
// readNote("todo");
// listNotes();
// deleteNote("todo");
