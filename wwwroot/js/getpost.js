const get = document.getElementById("get")
const post = document.getElementById("post")
const video = document.getElementById("video")
const href = window.location.href;


// -------------------------------------
// GET
// -------------------------------------

// GET-Button
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

// POST progress
function post_progress(solution) {
    const http = new XMLHttpRequest()
    http.open("POST", href + "POST/progress", true)
    http.setRequestHeader('Content-Type', 'application/json')
    http.send(JSON.stringify({solution: solution}))
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

// -------------------------------------
