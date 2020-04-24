var count=0;
var score=0;
var lastanswer;
var EasySet = [
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What does CPU stand for?',
      correct_answer: 'Central Processing Unit',
      incorrect_answers: ['Central Process Unit', 'Computer Personal Unit'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correct_answer: 'Final',
      incorrect_answers: ['Static', 'Private'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'The logo for Snapchat is a Bell.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'Pointers were not used in the original C programming language; they were added later on in C++.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What is the most preferred image format used for logos in the Wikimedia database?',
      correct_answer: '.svg',
      incorrect_answers: ['.png', '.jpeg'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'In web design, what does CSS stand for?',
      correct_answer: 'Cascading Style Sheet',
      incorrect_answers: ['Counter Strike: Source', 'Corrective Style Sheet'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'What is the code name for the mobile operating system Android 7.0?',
      correct_answer: 'Nougat',
      incorrect_answers: ['Ice Cream Sandwich', 'Jelly Bean'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'On Twitter, what is the character limit for a Tweet?',
      correct_answer: '140',
      incorrect_answers: ['120', '160'],
    },
    {
      category: 'Science: Computers',
      type: 'boolean',
      difficulty: 'easy',
      question: 'Linux was first created as an alternative to Windows XP.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which programming language shares its name with an island in Indonesia?',
      correct_answer: 'Java',
      incorrect_answers: ['Python', 'C'],
    },
    {
      type:'End Page'
    }
  ]
//constants
const H1=document.querySelector('#h1Id');
console.log(H1.innerText)
const easy=document.querySelector('#easy-btn')
console.log(easy.value)
const medium=document.querySelector('#medium-btn')
console.log(medium.value)
const hard=document.querySelector('#hard-btn')
// const start=document.querySelector('#starting-btn')
console.log(hard.value)
window.onload = function () {
  



}

function displayQuestions(set){
  // console.log(EasySet[0].question)
  // start.remove();
  // easy.style.display='block'
  // medium.style.display='block'
  // hard.style.display='block'

  H1.innerText=EasySet[0].question
  let n= Math.floor(Math.random()*3)+1
  switch(n){
    case 1:
          easy.value=EasySet[0].correct_answer
          medium.value=EasySet[0].incorrect_answers[0]
          hard.value=EasySet[0].incorrect_answers[1]
          break;
    case 2:
      easy.value=EasySet[0].incorrect_answers[0]
      medium.value=EasySet[0].correct_answer
      hard.value=EasySet[0].incorrect_answers[1]
      break;
    case 3:
      easy.value=EasySet[0].incorrect_answers[1]
      medium.value=EasySet[0].correct_answer
      hard.value=EasySet[0].incorrect_answers[0]
      break;


  // count++
  }

}
// function isEmpty(obj) {
//   for(var key in EasySet) {
//       if(EasySet.hasOwnProperty(key))
//           return false;
//   }
//   return true;
// }
function createQuestions(value,id){
  // event=window.event;
  // console.log(event)
  // console.log(value)

   if(count===0){
       
        
        count++
        
        switch(id){
          case 'easy-btn':
          displayQuestions(EasySet)
          break;
          case 'medium-btn':
          alert('not available yet')
          break;
          case 'hard-btn':
          alert('not available yet')
          break;
          default:
          alert("error")
    }
  // }else if(count===10){
  //   lastanswer=value;
  //   if (lastanswer==EasySet[10].correct_answer){
  //     score++
      
    // console.log(lastanswer)
  }
  else{
  // console.log(count)
  count++
  // console.log('count is more than 0')

  
  if(EasySet[count-1].type==='multiple'){
    medium.style.display='block'

   
    let n= Math.floor(Math.random()*3)+1
    switch(n){
      case 1:
        H1.innerText=EasySet[count-1].question
        easy.value=EasySet[count-1].correct_answer
        medium.value=EasySet[count-1].incorrect_answers[0]
        hard.value=EasySet[count-1].incorrect_answers[1]
            break;
      case 2:
        H1.innerText=EasySet[count-1].question
        easy.value=EasySet[count-1].incorrect_answers[0]
        medium.value=EasySet[count-1].correct_answer
        hard.value=EasySet[count-1].incorrect_answers[1]
        break;
      case 3:
        H1.innerText=EasySet[count-1].question
        easy.value=EasySet[count-1].incorrect_answers[1]
        medium.value=EasySet[count-1].correct_answer
        hard.value=EasySet[count-1].incorrect_answers[0]
        break;
  
  
    // count++
    }
    
    console.log(value + EasySet[count-2].correct_answer )
    if (value===EasySet[count-2].correct_answer){
      score++
      console.log(count)
    }
    
  }
  else if(EasySet[count-1].type==='boolean'){
    H1.innerText=EasySet[count-1].question
    medium.style.display='none'
    easy.value=EasySet[count-1].correct_answer
    hard.value=EasySet[count-1].incorrect_answers[0]
    if (value==EasySet[count-2].correct_answer){
      score++
      console.log(count)
      
    }


  
  

}


else if(EasySet[count-1].type==='End Page'){
  H1.innerText='your score is ' + score
  medium.style.display='none'
  easy.style.display='none'
  hard.style.display='none'
}


  
}
 
}
 

