const get = document.getElementById("get")
const post = document.getElementById("post")
const href = window.location.href;

// GET-Button
get.addEventListener("click", function() {
    const http = new XMLHttpRequest()
    http.open("GET", href + "get/")
    http.onreadystatechange = function () {
        if (http.readyState === 4) {
            alert(http.responseText)
        }
    }
    http.send()
})

// POST-Button
post.addEventListener("click", function() {
    const http = new XMLHttpRequest()
    http.open("POST", href + "post/")
    http.onreadystatechange = function () {
        if (http.readyState === 4) {
            alert(http.responseText)
        }
    }
    http.send()
})

// Receive Progress
async function get_progress() {
    const http = new XMLHttpRequest()
    http.open("GET", href + "get/progress")
    http.onreadystatechange = function () {
        if (http.readyState === 4) {
            return http.responseText
        }
    }
}



