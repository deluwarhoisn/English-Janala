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

if(words.length == 0){
    wordContainer.innerHTML = `
    <div class="text-center col-span-full space-y-5">
    <img class="mx-auto" src="./assets/alert-error.png"/>
    <p class="font-bold text-[13.38px] text-[#79716B] font-bangla">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
    <h2 class="font-bold text-[34.31px] text-[#292524] font-bangla">নেক্সট Lesson এ যান</h2>
  </div>
    `;
    return
}

words.forEach(word =>{
    const card=document.createElement('div');
    card.innerHTML=`
      <div class="bg-white rounded-xl shadow-sm text-center py-20 px-10 space-y-3">
        <h2 class="font-bold text-[32px]">${word.word}</h2>
        <p class="text-[20px]">Meaning /Pronounciation</p>
        <div class="font-bangla text-[32px] font-semibold text-[#18181B]">"${word.meaning} / ${word.pronunciation}"</div>
        <div class="flex justify-between items-center">
            <button class="bg-[#E9F4FF10] hover:bg-[#E9F4FF] btn"><i class="fa-solid fa-info"></i></button>
            <button class="bg-[#E9F4FF10] hover:bg-[#E9F4FF] btn"><i class="fa-solid fa-volume-high"></i></button>
        </div>
    </div>
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