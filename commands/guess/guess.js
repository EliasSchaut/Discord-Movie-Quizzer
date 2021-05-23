const { role_ids } = require('../../config/config.json')
const guessing = require('../../js/guessing.json')
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
        // TODO: THREAD_LOCK

        // Fail Cases
        if (!guessing.started) {
            return message.reply(":x: Game haven't started jet!")
        }
        if (guessing.ended) {
            return message.reply(":x: Game has ended!")
        }
        if (guessing.guessed) {
            return message.reply(":x: The correct answer was already given!")
        }
        if (guessing.fail) {
            return message.reply(":x: The correct answer was already shown. This round every team failed!")
        }

        // check answer
        const to_check = args.join(" ").toLowerCase()
        if (hammingDistance(to_check, guessing.solution.toLowerCase()) <= 2) {
            guessing.guessed = true;
            const member = message.guild.members.cache.get(message.author.id)

            if (member.roles.cache.has(role_ids.Mannheim)) {
                score.add_point("Mannheim")
                return message.reply(":white_check_mark: Yes, you guessed it and gave Mannheim a point!!!")

            } else if (member.roles.cache.has(role_ids.Karlsruhe)) {
                score.add_point("Karlsruhe")
                return message.reply(":white_check_mark: Yes, you guessed it and gave Karlsruhe a point!!!")

            } else {
                guessing.guessed = false;
                return message.reply(":x: Ups, you don't have a team!")
            }

        } else {
            message.reply(":x: Unfortunately wrong!")
        }


        // Helper
        function hammingDistance(str1, str2) {
            let dist = 0;
            str1 = str1.toLowerCase();
            str2 = str2.toLowerCase();
            for (let i = 0, j = Math.max(str1.length, str2.length); i < j; i++) {
                if (!str1[i] || !str2[i] || str1[i] !== str2[i]) {
                    dist++;
                }
            }
            return dist;
        }
    },
};