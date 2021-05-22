const get = document.getElementById("get")
const post = document.getElementById("post")
const href = window.location.href;

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

