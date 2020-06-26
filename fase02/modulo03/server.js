const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res) {
    const about = {
        avatar_url: "https://avatars1.githubusercontent.com/u/52216557?s=460&u=00d17b65abd10337ee97fe5f2964231972052bb3&v=4",
        name: "Rafaela Cunha",
        role: "Desenvolvedora FrontEnd - Instrutora de Informática - Analista de Sistemas",
        description: 'Loren Ipsum dolor marco tutis puff alive in home office puff and mirai <a href="">aleafar</a>',
        links: [
            { name: "Github", url: "https://github.com/rafaelacnh" },
            { name: "Twitter", url: "https://github.com/rafaelacnh" },
            { name: "Linkedin", url: "https://github.com/rafaelacnh" }
        ]
    }
    return res.render("about", { about })
})

server.get("/portfolio", function (req, res) {

    return res.render("portfolio", { items: videos })
})

server.get("/video", function (req, res) {

    const id = req.query.id

    const video = videos.find(function (video) {
       return video.id == id
         
    })

    if (!video) {
        return res.send("Video not found!")
    }

    return res.render("video", { item: video })
})

server.listen(5000, function () {
    console.log("server is running")
})