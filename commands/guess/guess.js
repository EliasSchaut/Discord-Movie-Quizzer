const { role_ids, guessing } = require('../../config/config.json')
const score = require('../../js/score_counter.js')

module.exports = {
    name: 'guess',
    description: "Guess a solution",
    aliases: ['tip', 'g'],
    args: true,
    usage: "[text]",
    args_min_length: 1,
    guildOnly: false,
    dmOnly: false,
    restricted: false,
    execute(message, args) {
        // TODO: THREAD and TYPO
        if (guessing.guessed) {
            return message.reply("The correct answer was already given")
        }

        if (args[0].toLowerCase() === guessing.solution.toLowerCase()) {
            guessing.guessed = true;
            const member = message.guild.members.cache.get(message.author.id);

            const role_mannheim = message.guild.roles.cache.get(role_ids.Mannheim)
            const role_karlsruhe = message.guild.roles.cache.get(role_ids.Karlsruhe)
            if (role_mannheim in member.roles.cache) {
                score.add_point("Mannheim")

            } else if (role_karlsruhe in member.roles.cache) {
                score.add_point("Karlsruhe")

            } else {
                guessing.guessed = false;
                return message.reply("Ups, you don't have a team")
            }
        }
    },
};