# TuringNotes Blog

## Instructions to create an article
- Create a directory with the name of the article.
- Make sure the name of the directory doesn't include spaces or any special character except '-'.
- Eg:
    -  If the article is "Introduction to Rough Sets", name the directory something like "intro-to-rough-sets".

```bash
    mkdir intro-to-rough-sets
    cd intro-to-rough-sets
```
- Create an index.html file in the current article's directory.
```bash
    touch index.html
```
- You may copy the contents template.html file to speed up the process.

### Structure of the Article
```yml
    Article
        Metadata
            Heading
                Caption
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

### CSS Class Names
```yml
    Article  : (.article)
    Metadata  : (.metadata)
    Heading  : (.heading [type(1-5)])
    Caption  : (.caption)
    Author  : (.author)
    Picture  : (.pic)
    Name  : (.name)
    Social-Media-links  : (.links)
    Github  : (.github > a)
    Linkedin  : (.linkedin > a)
    Contents  : (.contents)
    Section  : (.section)
    Image  : (.image > img)
    Text  : (p)
```