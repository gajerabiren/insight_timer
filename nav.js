const searchIcon = document.getElementById('nav-search-button');
const helloDiv = document.getElementById('click-searchbar-field');
const tag1 = document.getElementById('tag');


document.addEventListener('click',function(){
    
    searchIcon.style.visibility = "hidden";
    tag1.style.visibility ="hidden";
    helloDiv.style.visibility = "visible";
});
 