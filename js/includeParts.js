async function getNavBarContent() {
    let response = await fetch('http://127.0.0.1:5500/turingnotes.github.io/nav-bar.html')
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