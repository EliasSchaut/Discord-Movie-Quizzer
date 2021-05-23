const { role_ids, guessing } = require('../../config/config.json')
const score = require('../../js/score_counter.js')

module.exports = {
    name: 'guess',
    description: "Guess a solution",
    aliases: ['tip', 'g'],
    args: true,
    usage: "[text]",
    args_min_length: 1,
    guildOnly: true,
    dmOnly: false,
    restricted: false,
    execute(message, args) {
        // TODO: THREAD and TYPO
        if (guessing.solution === "") {
            return message.reply("Game haven't started jet!")
        }

        if (guessing.guessed) {
            return message.reply("The correct answer was already given!")
        }

        if (args[0].toLowerCase() === guessing.solution.toLowerCase()) {
            guessing.guessed = true;
            const member = message.guild.members.cache.get(message.author.id)

            if (member.roles.cache.has(role_ids.Mannheim)) {
                score.add_point("Mannheim")
                return message.reply("Yes, you guessed it and gave Mannheim a point!!!")

            } else if (member.roles.cache.has(role_ids.Karlsruhe)) {
                score.add_point("Karlsruhe")
                return message.reply("Yes, you guessed it and gave Karlsruhe a point!!!")

            } else {
                guessing.guessed = false;
                return message.reply("Ups, you don't have a team!")
            }

        } else {
            message.reply("Unfortunately wrong!")
        }
    },
};