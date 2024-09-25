// all donation card functionality
function getInputValueById(id){
    return document.getElementById(id).value;
}

function setTextValueById(id){
    return document.getElementById(id).innerText;
}

function donationValueMinus(id){
    return document.getElementById(id).innerText;
}

function enterBlogPage(id){
    const blogBtn = document.getElementById(id)
        .addEventListener('click', function(){
            window.location.href = './blog.html';
    })
}