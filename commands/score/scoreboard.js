const score = require('../../js/score_counter')
const { teams } = require('../../config/config.json')

module.exports = {
    name: 'scoreboard',
    description: "Sends the score",
    aliases: ['score', 'points', 's'],
    args: false,
    guildOnly: false,
    dmOnly: false,
    restricted: false,
    execute(message, args) {
        let out = `**Score:**`
        for (let i = 0; i < teams.length; i++) {
            out += `\n${teams[i].name}: ${score.get_points(i)} points`
        }

        message.channel.send(out);
    },
};