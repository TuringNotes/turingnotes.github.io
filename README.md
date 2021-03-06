# TuringNotes Blog

## Instructions to create an article
- Create a directory, inside the topic directory, with the name of the article.
- Make sure the name of the directory doesn't include spaces or any special character except '-'.
- Eg:
    -  If the article is "Introduction to Rough Sets", name the directory something like "intro-to-rough-sets".

```bash
    cd rough-computing
    mkdir intro-to-rough-sets
    cd intro-to-rough-sets
```
- Create an index.html file in the current article's directory.
```bash
    touch index.html
```
- You may copy the contents template.html file to speed up the process.

### Styles and Scripts Provider
```html
    <link rel="stylesheet" href="https://raw.githack.com/TuringNotes/turingnotes.github.io/main/styles/style.min.css">
    <script src="https://raw.githack.com/TuringNotes/turingnotes.github.io/main/js/scripts.js" defer></script>
```

### Structure of the Article
```yml
    Article
        Metadata
            Heading
                Caption
            Tags
                Tag
            Author
                Picture
                Name
                Social-Media-links
                    Github
                    Linkedin
        Contents
            Section
                Heading
                    Caption
                Image
                Text
                Text
                Image

                Heading
                    Caption
                ...
            Section
                Heading
                    Caption
                Image
                Text
                Text
                Image

                Heading
                    Caption
                Image
                ...
```

### CSS Selectors
```yml
    Article  : .article
    Metadata  : .metadata
    Heading  : .heading[.type(1-5)]
    Caption  : .caption
    Tags: .tags
    Tag: a.tag
    Author  : .author
    Picture  : .pic
    Name  : .name
    Social-Media-links  : .links
    Github  : .github > a
    Linkedin  : .linkedin > a
    Contents  : .contents
    Section  : .section
    Image  : .image > img
    Text  : p
    ul: ul[.depth(1-10)]
    ol: ol[.depth(1-10)]
```
