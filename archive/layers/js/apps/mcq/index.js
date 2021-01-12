//  MCQ
window.addEventListener('DOMContentLoaded', () => {
  let osiToken=localStorage.getItem('OSI_PAGE_TOKEN');
  const echo=console.log;

  echo(`${osiToken} from mcq`)

  //initialised first
  const loop=(n=0,results={})=>{

    n<mcqs.length? getQuestion(n): showResults(results);

    let $answers=[...document.querySelectorAll('.answer')]
    $answers.forEach(el=>{
      el.addEventListener('click',(e)=>{
          if(checkAns(n,Number(e.target.dataset.idx))){
            results[n]=[true,e.target.dataset.answer]
            // loop(n++,results)
          }else{
            results[n]=[false,e.target.dataset.answer]

          }
          console.log(Object.entries(results))
          loop(n+1,results)
      })
    })
  }


// functions
  const mkeEl=el=> document.createElement(el);
//
  const center=el=>el.classList.add('flex','flex--center')

//
  const checkAns=(n,a)=>{
    return a===mcqs[n].correct?true:false;
  }

// REPEAT
const repeatBtn=document.getElementById('repeat-btn');
repeatBtn.onclick=()=>location.reload();


// NEXT
// const next=document.getElementById('next')

//
const showResults=(results)=>{

  const $results=document.getElementById('results');
  // 1 titles
  const $thead=mkeEl('div');
  $thead.classList.add('row', 'grid', 'grid3x1')
  const titles=["Quest Num","Question", "Answer Given"]
  titles.forEach(el=>{
    let $item=mkeEl('b');
    $item.textContent=el;
    $thead.appendChild($item)
  })
  $results.appendChild($thead);

  // 2 details
  const $tbody=mkeEl('div');
  $tbody.classList.add('flex', 'flex--column');
  const rowValues=Object.values(results);
  rowValues.forEach((el,idx)=>{
    let $row=mkeEl('div');
    // add color based on result
    el[0]===true?$row.classList.add('correct'):$row.classList.add('wrong');
    $row.classList.add('row', 'grid', 'grid3x1');

    let $questNum=mkeEl('div')
    $questNum.textContent=idx+1;
    let $question=mkeEl('div')
    $question.textContent=mcqs[idx].question;
    let $answer=mkeEl('div')
    $answer.textContent=el[1];
    center($questNum)
    // center($question)
    // center($answer)
    $row.appendChild($questNum);
    $row.appendChild($question);
    $row.appendChild($answer);
    $tbody.appendChild($row)
  })


  $results.appendChild($tbody);


  document.querySelector('.mcq-wrapper').classList.add('hidden');
  $results.classList.remove('hidden');
  document.querySelector('.nav-btns').classList.remove('hidden');
  echo('fin')
}

//

const getQuestion=(n=0)=>{
  const root=document.getElementById('mcq-container');
  root.innerHTML="";
  let $q=mkeEl('div');
  $q.textContent=mcqs[n].question;
  $q.classList.add('question');
  center($q)

  let $img=mkeEl('img');
  $img.href=mcqs[n].img;
  let $imgContainer=mkeEl('div');

  $imgContainer.classList.add("media");
  center($imgContainer)
  $imgContainer.appendChild($img)

  // let answers=mcqs[n].answers;

  let $answers=mkeEl('div');
  $answers.classList.add('answers','grid')
  let answers=mcqs[n].answers

// let shuffled = answers.sort(function(a, b){
//  return 0.5 - Math.random()  // <— sort needs a number and this makes it work
// });


  for(let i in answers){
    let $ans=mkeEl('div');
    $ans.classList.add('answer');
    center($ans);
    // $ans.addEventListener('click',(e)=>{
    //   checkAns(n,e.target.dataset.answer) //need to add res?
    // })
    $ans.dataset.answer=answers[i];
//     debugger
    $ans.dataset.idx=i
    $ans.textContent=answers[i];

    $answers.appendChild($ans);
  }
  root.appendChild($q)
  root.appendChild($img)
  root.appendChild($answers)
  // shuffle order!!!
  for (var i = $answers.children.length; i >= 0; i--) {
      $answers.appendChild($answers.children[Math.random() * i | 0]);
  }
}




loop();


})

















// alert('Any feedback is appreciated, i.e. responsiveness and modifications!')

// window.addEventListener('DOMContentLoaded', () => {
// $(document).ready(function(){



// //--------------------1 SETTINGS-----------------------------\\
//   var score;
//   var timeRemainingValue=document.getElementById('time-remaining-value');
//   var playing=false;
//   var correctAns;
//   var wrongAns;
//   var correctTotal;
//   var wrongTotal;

//   //------------------------2 QUESTIONS AND ANSWERS-------------------------------\\
//   var QnA=[
//   {
//     question:" _____is an intentional reference to another literary work or piece of art that the reader should understand in order to make connections",
//     answer:"Allusion"},
//   {
//     question:"_____ is a pictorial or physical representation of an abstract concept.",
//     answer:"Symbol"},
//   {
//     question:" _____is a figure of speech that is used to make a comparison between two things that aren't alike but do have something in common.",
//     answer:"Metaphore"},
//   {
//     question:"_____ is a writer’s vivid description that help readers visualize.",
//     answer:"Imagery"},
//   {
//     question:" _____ is an exaggerated statement or claim not meant to be taken literally.",
//     answer:"Hyperbole"},
//   {
//     question:"_____ is a narrative form in which a story, character or theme represent archetypal humanistic trait (i.e. hope, vanity, or commitment",
//     answer:"Allegory"},
//   {
//     question:"_____the fact of two things being seen or placed close together with contrasting effect. ",
//     answer:"Juxtaposition"},
//   {
//     question:"Vidal is a Solomon when it comes to making decisions like this.” (Solomon the wisest man ever) is an example of a:",
//     answer:"Allusion"},
//   {
//     question:"The statue of liberty is a _____for truth and justie",
//     answer:"Symbol"},
//   {
//     question:"Tessa is a shining star is an Example of a",
//     answer:"Metaphore"},
//   {
//     question:"The night was black as ever, but bright stars lit up the sky in beautiful and varied constellations which were sprinkled across the astronomical landscape. Is an example of : ",
//     answer:"Imagrey"},
//   {
//     question:" my mom is going to kill me when she finds out I ate all the cookies again! Is an example of",
//     answer:"Hyperbole"},
//   {
//     question:"The Lion, the Witch, and the Wardrobe by is a religious_____with Aslan as Christ, and Edmund as Judas.",
//     answer:"Allegory"},
//   {
//     question:"War is peace is an example of",
//     answer:"Oxymoron"},
//   {
//     question:"Beauty and ugliness. are examples of",
//     answer:"Juxtaposition"},
//   {
//     question:"In Threads, shell-shocked nuclear survivors walk past poster of happy, smiling babies is an example of ",
//     answer:"Juxtaposition"},
//   {
//     question:"Always be sincere, even when you don’t mean it. is an example of ",
//     answer:"Oxymoron"},
//   {
//     question:"An ambulance driver speeds to the scene of a road accident. The victim isn't badly hurt until the ambulance driver whips around a corner and runs over the victim's legs, not realizing she'd crawled to the center of the road. Is an example of ",
//     answer:"Irony"}
//   ];//change to the above when ready!!

//   // ------------------------3 INNIT EVENT TRIGGER----------------------\\
//   document.getElementById('start-reset-btn').addEventListener('click',init);
//   function init(){
//     if(playing===true){
//       location.reload();
//     }
//     else{
//       correctTotal=0;
//       wrongTotal=0;
//       playing=true;
// //      $('#start-reset-btn').html('Stop');

//       score=0;

//       generateQA();
//       startCountdown();
//       show("time-remaining");
//       //and hide certain elements
//     }
//   }

//   //---------------------4 START AND STOP COUNTDOWN --------------------------\\
//   function startCountdown(){
//     timeRemaining=90;
//     $("#game-over").hide();
//     action=setInterval(function(){
//       timeRemaining-=1;
//       timeRemainingValue.innerHTML=Math.floor(timeRemaining/60)+":"+timeRemaining%60;
//       if(timeRemaining===0){
//         stopCountdown();
//         // show(results); //need to set up a few divs correct=background=green, wrong background=red;
//       }
//     },1000);
//   }

//   function stopCountdown(){
//     playing=false;
//     clearInterval(action);
//     hide("time-remaining");
//     var totalScore=function(a,b){
//       return a+b;
//     }
//     document.getElementById("totalScore").innerHTML=correctTotal+" out of "+totalScore(correctTotal,wrongTotal);
//     show("game-over");
//   }


//   //-------------------------5 CHECK ANSWERS EVENT----------------------------\\
//   for(i=1;i<5;i++){
//     document.getElementById('box'+i).addEventListener('click', function(){
//       if(playing===true){ //forgot this again!!
//         if(this.innerHTML==correctAns){
//           // score++; //maybe allCorrect.length+"out of"+allCorrect.length+allWrong.length when timer ends.
//           hide("wrong");
//           show("correct");
//           setTimeout(function(){
//             hide("correct"); //needs a setTimeout
//           },1000);
//           correctTotal++;
//           document.getElementById("allCorrect").innerHTML+=correctAns+"<br>";

//           //show(correct) //setTimeout(function(){},1000)
//         //  console.log(allCorrect);
//           generateQA();
//         }
//         else{
//           document.getElementById("correction").innerHTML=correctAns;
//           hide("correct");
//           show("wrong");
//           setTimeout(function(){
//             hide("wrong"); //needs a setTimeout
//           },1000);
//           wrongTotal++;
//           document.getElementById("allWrong").innerHTML+=wrongAns+"<br>";
//           generateQA();
//         }
//       }

//     });

//   }


//   // ---------------------------6 GENERATE QUESTIONS -----------------------\\ +tested and working
//   function generateQA(){
//     var ansArr=[];
//     var questionIndex=randFunc(QnA.length,0);
//     var randQuestion=QnA[questionIndex].question;
//         // console.log(randQuestion);

//     $('#question').html(randQuestion);
//     correctAns=QnA[questionIndex].answer;
//     ansArr.push(correctAns);
// //    console.log(ansArr);
//         var correctPos=randFunc(4,1);

//     $('#box'+correctPos).html(correctAns);
//     for(var i=1;i<5;i++){
//       if(i!=correctPos){
//         do{
//           wrongAns=QnA[randFunc(QnA.length,0)].answer;
//         }
//         while(ansArr.indexOf(wrongAns)>-1);
//         ansArr.push(wrongAns);
//         $('#box'+i).html(wrongAns);
//       }
//     }
//   }


//   //---------------------------- 7RANDOM FUNC ------------------------\\ + tested note: inc=increment
//   function randFunc(max,inc){
//     return Math.floor(inc+Math.random()*max);
//   }


//   //-----------------------8 HIDE/SHOW----------------------------------\\
//   function hide(Id){
//     document.getElementById(Id).style.display="none";
//   }
//   function show(Id){
//     document.getElementById(Id).style.display="flex";
//   }
// })
// });