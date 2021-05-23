const videos = {
    "initiated" : false,
    "progress": -1,
    "num_of_files": -1,
    "sources": [
        "res/video/0_easter.mp4",
        "res/video/1_easter2.mp4"
    ],
    "solutions": []
}

function init() {
    for (const source of videos.sources) {
        videos.solutions.push(source.split("_")[1].split(".")[0])
    }
    videos.num_of_files = videos.sources.length
    videos.progress = -1 // TODO: GET
    videos.initiated = true

    console.log(videos)
}

function get_next_video_path() {
    if (videos.initiated === false) return -3;

    videos.progress++;
    if (videos.progress >= videos.num_of_files) {
        return -2
    }

    return get_video_path()
}

function get_solution() {
    if (videos.progress < 0) return -1;
    else if (videos.progress >= videos.num_of_files) return -2;

    return videos.solutions[videos.progress]
}

let get_video_path = function () {
    if (videos.progress < 0) return -1;

    return videos.sources[videos.progress]
}
