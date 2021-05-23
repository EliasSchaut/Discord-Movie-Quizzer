const score = {
    "Karlsruhe": 0,
    "Mannheim": 0
}

function add_point(team_name) {
    score[team_name]++;
}

function reset() {
    score.Karlsruhe = 0
    score.Mannheim = 0
}

module.exports = { score, add_point, reset }


