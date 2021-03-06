const discord = require("discord.js");
const { Command } = require('discord.js-commando');

module.exports = class rufus extends Command {
    constructor(client) {
        super(client, {
            name: 'octtohex',
            group: 'dsd',
            memberName: 'octtohex',
            description: 'Convert octal to hexadecimal',
            guildOnly: true,
            args: [{
                key: 'octal',
                prompt: 'Input the octal to convert',
                type: 'integer',
            }]
        });
    }

    async run(message, { octal }) {
        var zap = octal;
        var yam = "" + zap;
        var xek = "";
        var uv = "";
        var k = 0;
        for (var j = 0; j < yam.length; j++) {
            if (yam.charAt(j) == ".") {
                k = j;
            }
        }
        if (k == 0) {
            for (var i = 0; i < yam.length; i++) {
                var a = yam.charAt(i);
                let b;
                if (a == "0") b = "000";
                if (a == "1") b = "001";
                if (a == "2") b = "010";
                if (a == "3") b = "011";
                if (a == "4") b = "100";
                if (a == "5") b = "101";
                if (a == "6") b = "110";
                if (a == "7") b = "111";
                xek += b;
            }
            if (xek.length % 4 != 0) {
                while (true) {
                    xek = "0" + xek;
                    if (xek.length % 4 == 0) break;
                }
            }
            var hexa = parseInt(xek, 2).toString(16).toUpperCase();
            message.channel.send(hexa);
        }
        else {
            for (var i = 0; i < k; i++) {
                var a = yam.charAt(i);
                let b;
                if (a == "0") b = "000";
                if (a == "1") b = "001";
                if (a == "2") b = "010";
                if (a == "3") b = "011";
                if (a == "4") b = "100";
                if (a == "5") b = "101";
                if (a == "6") b = "110";
                if (a == "7") b = "111";
                xek += b;
            }

            if (xek.length % 4 != 0) {
                while (true) {
                    xek = "0" + xek;
                    if (xek.length % 4 == 0) break;
                }
            }
            var hexa = parseInt(xek, 2).toString(16).toUpperCase();

            for (var j = k + 1; j < yam.length; j++) {
                var c = yam.charAt(j);
                let d;
                if (c == "0") d = "000";
                if (c == "1") d = "001";
                if (c == "2") d = "010";
                if (c == "3") d = "011";
                if (c == "4") d = "100";
                if (c == "5") d = "101";
                if (c == "6") d = "110";
                if (c == "7") d = "111";
                uv += d;
            }
            if (uv.length % 4 != 0) {
                while (true) {
                    uv = uv + "0";
                    if (uv.length % 4 == 0) break;
                }
            }
            var hex = parseInt(uv, 2).toString(16).toUpperCase();
            message.channel.send(hexa + "." + hex);
        }
    }
};