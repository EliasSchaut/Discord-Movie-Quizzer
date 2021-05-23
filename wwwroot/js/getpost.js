const get = document.getElementById("get")
const post = document.getElementById("post")
const video = document.getElementById("video")
const href = window.location.href;


// -------------------------------------
// GET
// -------------------------------------

// GET Button
get.addEventListener("click", function() {
    const http = new XMLHttpRequest()
    http.open("GET", href + "GET/")
    http.onreadystatechange = function () {
        if (http.readyState === 4) {
            alert(http.responseText)
        }
    }
    http.send()
})

// GET guessed-user
function get_guessed_user() {
    const http = new XMLHttpRequest()
    http.open("GET", href + "GET/guessed-user")
    http.onreadystatechange = function () {
        if (http.readyState === 4) {
            console.log(http.responseText)
            if (http.responseText !== "") {
                guessed = true
                show_solution(http.responseText)
                set_next_round_button()
                stop_guessed_timer()
            }
        }
    }
    http.send()
}
// -------------------------------------



// -------------------------------------
// POST
// -------------------------------------

// POST-Button
post.addEventListener("click", function() {
    const http = new XMLHttpRequest()
    http.open("POST", href + "POST/")
    http.onreadystatechange = function () {
        if (http.readyState === 4) {
            alert(http.responseText)
        }
    }
    http.send()
})

// POST solution
function post_solution(solution) {
    const http = new XMLHttpRequest()
    http.open("POST", href + "POST/solution", true)
    http.setRequestHeader('Content-Type', 'application/json')
    http.send(JSON.stringify({solution: solution}))
}


// POST fail
function post_fail() {
    const http = new XMLHttpRequest()
    http.open("POST", href + "POST/fail", true)
    http.send()
}


// POST start
function post_start() {
    const http = new XMLHttpRequest()
    http.open("POST", href + "POST/start", true)
    http.send()
}

// POST end
function post_end() {
    const http = new XMLHttpRequest()
    http.open("POST", href + "POST/end", true)
    http.send()
}

// POST reset
function post_reset() {
    const http = new XMLHttpRequest()
    http.open("POST", href + "POST/reset", true)
    http.send()
}
// -------------------------------------



// -------------------------------------
// HELPER
// -------------------------------------
let timerID

function start_guessed_timer() {
    stop_guessed_timer()

    timerID = setInterval(function () {
        get_guessed_user()

    }, 1000)
}

function stop_guessed_timer() {
    try {
        clearInterval(timerID)
    } catch (e) {
        console.log("LOL, :P")
    }

}

// -------------------------------------
