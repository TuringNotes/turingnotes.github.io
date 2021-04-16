const ENV = "dev"


async function getNavBarContent() {
    let url
    if (ENV == "dev") {
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

includeHeader()