const start = document.getElementById("start-button")
const video_c = document.getElementById("video-container")
const video_e = document.getElementById("video")
const video_sol = document.getElementById("video-solution")
const sol = "Solution: "
let first_time = true
let guessed = false
init_chooser()


// -------------------------------------
// EventListener
// -------------------------------------
start.addEventListener("click", async function () {
    if (first_time) {
        post_start()
        first_time = false

    } else {
        stop_guessed_timer()
    }

    guessed = false
    set_visuals_off()
    if(!set_next_video()) {
        end_quiz()
        return
    }

    await video_e.load()
    set_visuals_on()
    await video_e.play()
    start_guessed_timer()
})

video_e.addEventListener("ended", function () {
    if (!guessed) {
        post_fail()
        show_solution("")
        set_next_round_button()
        stop_guessed_timer()
    }
})
// -------------------------------------



// -------------------------------------
// Set-Visuals
// -------------------------------------
let set_next_video = function () {
    const next_video_path = get_next_video_path()
    if (next_video_path < 0) {
        if (next_video_path === -2) {
            alert("Quiz-Ended")
        } else {
            alert("Error getting Video Path!\nError-Code: " + next_video_path)
        }
        return 0
    }
    console.log("Next: " + next_video_path)
    video_e.setAttribute("src", next_video_path)
    return 1
}


let set_visuals_off = function () {
    start.setAttribute("disabled", "")
    start.children[0].setAttribute("class", "visually-hidden")
    start.children[1].setAttribute("class", "visible")
    start.children[2].setAttribute("class", "spinner-grow spinner-grow-sm visible")
    video_c.setAttribute("class", "visually-hidden")
}


let set_visuals_on = function () {
    start.children[0].innerHTML = "Round " + (videos.progress + 1)
    video_sol.innerHTML = sol + "???"
    start.children[0].setAttribute("class", "visible")
    start.children[1].setAttribute("class", "visually-hidden")
    start.children[2].setAttribute("class", "visually-hidden")
    video_c.setAttribute("class", "visible")
}

let show_solution = function (guessed_info) {
    video_sol.innerHTML = `${sol} ${videos.solutions[videos.progress]}${guessed_info}`
}

let set_next_round_button = function () {
    start.children[0].innerHTML = "Next Round?"
    start.removeAttribute("disabled")
}

let end_quiz = function () {
    video_e.pause()
    post_end()
    start.children[0].innerHTML = "Quiz Ended"
    start.children[0].setAttribute("class", "visible")
    start.children[1].setAttribute("class", "visually-hidden")
    start.children[2].setAttribute("class", "visually-hidden")
}
// -------------------------------------
