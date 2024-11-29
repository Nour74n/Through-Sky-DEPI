
const toggleButton = document.getElementById("toggleTheme");
const themeIcon = document.getElementById("themeIcon");


function toggleTheme() {
    const body = document.body;
    body.classList.toggle("night-mode"); 

    
    if (body.classList.contains("night-mode")) {
        themeIcon.src = "./crescent-moon.png"; 
        themeIcon.alt = "Night Mode"; 
    } else {
        themeIcon.src = "./sun.png"; 
        themeIcon.alt = "Day Mode"; 
    }
}
toggleButton.addEventListener("click", toggleTheme);




function search_article() {
    let input = document.getElementById("search").value.toLowerCase();
    let articles = document.getElementsByClassName('Articles'); 

    for (let i = 0; i < articles.length; i++) {
        let articleText = articles[i].innerText.toLowerCase(); 

        if (articleText.includes(input)) {
            articles[i].style.display = ""; 
        } else {
            articles[i].style.display = "none"; 
        }
    }
}

