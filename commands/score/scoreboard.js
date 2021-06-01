const score = require('../../js/score_counter')
const { teams, lang } = require('../../config/config.json')
const text = require(`../../config/text_${lang}.json`).commands.score

module.exports = {
    name: 'scoreboard',
    description: "Sends the score",
    aliases: ['score', 'points', 's'],
    args: false,
    guildOnly: false,
    dmOnly: false,
    restricted: false,
    execute(message, args) {
        let out = text.score
        for (let i = 0; i < teams.length; i++) {
            const team_points = score.get_points(i)
            out += `\n${teams[i].name}: ${team_points}`

            if (team_points === 1) {
                out += " " + text.point
            } else {
                out += " " + text.points
            }
        }

        message.channel.send(out);
    },
};