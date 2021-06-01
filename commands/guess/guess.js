const { teams, lang } = require('../../config/config.json')
const text = require(`../../config/text_${lang}.json`).commands.guess
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
        // Fail Cases
        if (!guessing.started) {
            return message.reply(text.not_started)
        }
        if (guessing.ended) {
            return message.reply(text.ended)
        }
        if (guessing.guessed) {
            return message.reply(text.guessed)
        }
        if (guessing.fail) {
            return message.reply(text.fail)
        }

        // check answer
        const to_check = args.join(" ").toLowerCase()
        if (hammingDistance(to_check, guessing.solution.toLowerCase()) <= 2) {
            guessing.guessed = true
            guessing.guessed_user = message.author.username
            const member = message.guild.members.cache.get(message.author.id)

            // search team of member
            for (let i = 0; i < teams.length; i++) {
                if (member.roles.cache.has(teams[i].id)) {
                    score.add_point(i)
                    guessing.guessed_team = teams[i].name
                    return message.reply(`${text.correct_1} ${teams[i].name} ${text.correct_2}`)
                }
            }

            // else (member has no team)
            guessing.guessed = false;
            return message.reply(text.no_team)


        } else {
            message.reply(text.wrong)
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