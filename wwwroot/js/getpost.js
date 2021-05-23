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

// GET next-video
function get_next_video() {
    const http = new XMLHttpRequest()
    http.open("GET", href + "GET/next-video")
    http.onreadystatechange = function () {
        if (http.readyState === 4) {
            http.responseText
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
// -------------------------------------



// -------------------------------------
// HELPER
// -------------------------------------

// -------------------------------------
