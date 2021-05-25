const { teams } = require('../config/config.json')

let score = []

function add_point(team_index) {
    score[team_index]++;
}

function get_points(team_index) {
    return score[team_index]
}

function reset() {
    score = new Array(teams.length).fill(0);
}

module.exports = {  add_point, get_points, reset }


