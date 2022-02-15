window.addEventListener('DOMContentLoaded', function () {

    let friends = [
        "daniel",
        "jon",
        "devan",
        "catherine",
        "david"
    ];


    let button = document.createElement('button')
    let div = document.createElement('div')
    let text = document.createTextNode('Sing!')
    let h1 = document.createElement('h1')
    let h1text = document.createTextNode('My Singing Friends')

    h1.className = 'h1'
    document.body.appendChild(div)
    div.appendChild(h1)
    h1.appendChild(h1text)
    button.appendChild(text)
    div.appendChild(button)

    let word = "lines ";

    button.addEventListener("click", function () {
        for (let i = 0; i < friends.length; i++) {
            console.log(friends[i].toUpperCase() + ":");
    
            let h3 = document.createElement('h3')
            let friendName = document.createTextNode(friends[i])
            h3.className = 'friend'
            h3.appendChild(friendName)
            document.body.appendChild(h3)

            for (let j = 99; j > 0; j--) {
                if (j == 2) {
                    console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, 1 line of code in the file");
                    let song = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, 1 line of code in the file")
                    let singing = document.createElement('p')
                    singing.appendChild(song)
                    h3.appendChild(singing)
    
                } else if (j == 1) {
                    console.log(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
                    song = document.createTextNode(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file")
                    singing = document.createElement('p')
                    singing.appendChild(song)
                    h3.appendChild(singing)
    
                } else {
                    console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
                    song = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file")    
                    singing = document.createElement('p')
                    singing.appendChild(song)
                    h3.appendChild(singing)
            }
            }

        }
    })
})