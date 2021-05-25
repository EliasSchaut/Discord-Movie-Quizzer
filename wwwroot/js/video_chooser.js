const path = "res/video/"
const videos = {
    "initiated" : false,
    "progress": -1,
    "num_of_files": -1,
    "sources": [
        "00_easter.mp4",
        "01_easter2.mp4"
    ],
    "solutions": []
}

function init_chooser() {
    for (const source of videos.sources) {
        videos.solutions.push(source.split("_")[1].split(".")[0])
    }
    videos.num_of_files = videos.sources.length
    videos.initiated = true
}

function get_next_video_path() {
    if (videos.initiated === false) return -3;

    videos.progress++
    if (videos.progress >= videos.num_of_files) return -2
    if (videos.progress < 0) return -1;
    post_solution(get_sol())

    return get_video_path()
}

let get_video_path = function () {
    return videos.sources[videos.progress]
}

let get_sol = function () {
    return videos.solutions[videos.progress]
}
