const authorBox = document.querySelector('.author')
const articleCards = document.querySelectorAll('.article-card')


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
    if (!authorBox) {
        return
    }
    // console.log(window.innerWidth)
    if (window.innerWidth < 1090) {
        if (!(authorBox.classList.contains('inline'))) {
            authorBox.classList.add('inline')
        }
    }
}

function adjustArticleCards() {
    if ((!articleCards) || (articleCards.length == 0)) {
        return
    }

    articleCards.forEach(function (card) {
        let cardHeading = card.querySelector('.heading')
        console.log(cardHeading)
        if (cardHeading.classList.contains('type-1')) {
            cardHeading.classList.remove('type-1')
        } else if (cardHeading.classList.contains('type-2')) {
            cardHeading.classList.remove('type-2')
        }

        cardHeading.classList.add('type-4')
    })
}

function makeAdjustments(e) {
    adjustAuthorBox(e)
}

window.addEventListener('resize', makeAdjustments)

includeHeader()
makeAdjustments()
adjustArticleCards()