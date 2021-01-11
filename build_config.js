'use strict';
const fs = require('fs');
const Discord = require('discord.js');

const token = process.env.DISCORD_TOKEN
var config = {};
const client = new Discord.Client();
client.on('ready', () => {
    client.guilds.fetch("278589367641964544")
        .then(guild => {
            config["member_count"] = guild.memberCount;
            guild.fetchBans()
                .then(bans => {
                    console.log();
                    client.destroy()
                    config["ban_count"] = bans.size;
                    const json = JSON.stringify(config);
                    fs.writeFile('dist/js/config.json', json, err => {
                        if (err) {
                            console.log('Error writing file', err)
                        } else {
                            console.log('Successfully wrote file')
                        }
                    })
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(err => {
            console.log(err);
        })
});
client.login(token);
