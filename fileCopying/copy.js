let fs = require('fs')
let file = 'video.mp4'

/**
* Copy file with normal method
*/
fs.readFile(file, (err, data) => {
    if (err) throw err

    fs.writeFile('copy-nrml.mp4', data, (err) => {
        if (err) throw err
        console.log('File copy successful with Normal method')
    })
})

/**
* Copy file with stream method
*/
fs.stat(file, (err, stat) => {
    let total = stat.size
    let progress = 0
    let read = fs.createReadStream(file)
    let write = fs.createWriteStream('copy-strm.mp4')

    read.on('data', (chunk) => {
        progress += chunk.length
        console.log("Readin status: " + Math.round(100 * progress / total) + "%")
    })

    read.pipe(write)

    write.on('finish', () => {
        console.log('File copy successful with Stream method')
    })
})
