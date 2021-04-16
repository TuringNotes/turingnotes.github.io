const authorBox = document.querySelector('.author')


function detectENV() {
    let protocol = window.location.href.split(":")[0]
    // console.log(protocol)
    if (protocol == "http") {
        return "dev"
    }
    return ""
}

async function getNavBarContent() {
    let url, ENV
    ENV = detectENV()
    // console.log({ ENV })
    if (ENV === "dev") {
        url = 'http://127.0.0.1:5500/turingnotes.github.io/nav-bar.html';
    } else {
        url = 'https://turingnotes.github.io/nav-bar.html';
    }
    let response = await fetch(url)
    let content = await response.text()
    // console.log(content)

    return content
}

async function includeHeader() {
    let navBarContent = await getNavBarContent()
    let navBarDiv = document.createElement('div')
    let docBody = document.querySelector('body')
    navBarDiv.classList.add('navbar')
    navBarDiv.innerHTML = navBarContent
    docBody.prepend(navBarDiv)
}

function adjustAuthorBox(e) {
    console.log(window.innerWidth)
    if (window.innerWidth < 1090) {
        if (!(authorBox.classList.contains('inline'))) {
            authorBox.classList.add('inline')
        }
    }
}

window.addEventListener('resize', adjustAuthorBox)

includeHeader()
adjustAuthorBox()