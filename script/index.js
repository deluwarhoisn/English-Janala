const loadLessons = ()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data));
};
const loadLevelWord =(id)=>{
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then(res=> res.json())
    .then(data=> displayLevelWords(data.data))
}

const displayLevelWords = (words)=> {
const wordContainer = document.getElementById('word-container')
wordContainer.innerHTML = "";
words.forEach(word =>{
    const card=document.createElement('div');
    card.innerHTML=`
    <p>cat</p>
    `;
    wordContainer.append(card);
})
}

const displayLesson = (lessons)=>{
// 1. get the container & empty
const levelContainer = document.getElementById('level-container');
levelContainer.innerHTML = "";
// 2. get into ever lessons
for(let lesson of lessons){
//    3. create Element
const btnDiv = document.createElement('div');
btnDiv.innerHTML=`
 <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"> <i class="fa-solid fa-book-open-reader"></i> Lesson - ${lesson.level_no}</button>
`;
//      4. append intro container
levelContainer.append(btnDiv)
}
//   

};
loadLessons();