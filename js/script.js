// selectors
const studentInfoList = document.querySelector('.student-info-list');
const theFrontCard = document.querySelector('.thefront');
const card = document.querySelector('.thecard');
const skillsBox = document.querySelector('.skills-box');
let currentIndex = 0;
let clickState = 0;

function nextStudent(index) {
    return studentInfo[index];
}

function renderStudent(object) {

    studentInfoList.innerHTML = `
    <h4>Name</h4>
    <li>${object.firstName + ' ' + object.lastName}</li> <hr>
    <h4>Title</h4>
    <li>Junior Web Developer</li> <hr>
    <h4>Nationality</h4>
    <li>${object.nationality}</li><hr>
    <h4>Skills</h4>`;

   object.skills.forEach(element => {
        skillsBox.innerHTML += `<li class="skill-li">✔ ${element}</li>`;   
    });
    theFrontCard.innerHTML = `<img src="./assets/images/${object.src}" alt="${object.alt}">`;
}
renderStudent(nextStudent(currentIndex));

document.querySelector('.button-right').addEventListener('click', function (e) {
    currentIndex++;
    skillsBox.innerHTML = '';
    if (currentIndex > studentInfo.length -1) {
        currentIndex = 0;
    }
    renderStudent(nextStudent(currentIndex));
    return;
})

document.querySelector('.button-left').addEventListener('click', function (e) {
    currentIndex--;
    skillsBox.innerHTML = '';
    if (currentIndex < 0) {
        currentIndex = studentInfo.length -1;
    }
    renderStudent(nextStudent(currentIndex));
    return;
})

card.addEventListener('click', function(){
    if(clickState===0){
        card.style.transform= 'rotateY(-180deg)'
        card.style.transition= 'all 1.5s'
        clickState=1
    } else {
        card.style.transform= 'rotateY(0)'
        card.style.transition= 'all 1.5s'
        clickState=0
    }
 })
