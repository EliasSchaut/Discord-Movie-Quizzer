const { score } = require('../../js/score_counter')

module.exports = {
    name: 'scoreboard',
    description: "Sends the score",
    aliases: ['score', 'points'],
    args: false,
    guildOnly: false,
    dmOnly: false,
    restricted: false,
    execute(message, args) {
        const out = `**Score:**\nKarlsruhe: ${score.Karlsruhe} points\nMannheim: ${score.Mannheim} points`
        message.channel.send(out);
    },
};