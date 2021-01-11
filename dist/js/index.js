const config = require('./config.json')

const member_count = document.getElementById("member_count")
member_count.innerHTML = config.member_count

const ban_count = document.getElementById("ban_count")
ban_count.innerHTML = config["ban_count"]
