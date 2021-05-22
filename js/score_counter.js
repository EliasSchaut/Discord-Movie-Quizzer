
const score = {
    "Karlsruhe": 0,
    "Mannheim": 0
}

function add_point(team_name) {
    score[team_name]++;
}

module.exports = { score, add_point }


