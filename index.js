const str = "Laura Pausini conquers Latin Grammy Week. Those of November 15th and 16th were two historic nights of extraordinary emotions for Laura Pausini, awarded Latin Recording Academy Person of the Year 2023. She is the first non-Spanish speaking artist, the first Italian and third woman in history to obtain this important recognition of the Latin recording academy.In her honor, an exclusive academy show with the participation of over 50 international artists for 'la italiana màs latina del mundo' Laura was also the protagonist of a memorable performance during the 24th edition of the Latin Grammy Awards.ausini, visibly moved, gave those present an extraordinary performance, and at the end of this historic evening, after the award was handed over by the president of the Latin Recording Academy Manuel Amud, she thanked the Latin people for this great recognition. Laura Pausini: “What an honor, after Gloria Estefan and Shakira” «You can't imagine what a great honor it is for me to be the third woman to be recognized as Person of the Year, after the great Gloria Estefan and Shakira. In these 30 years I have had a very privileged life, and not only because I had the pleasure of singing in Spanish, but above all because I felt truly adopted by you Latinos, like a daughter, a sister, like one of the family. This is the feeling I experience, even though I know I don't have the same blood, I am part of a family that has raised me since I was a teenager and gave me the chance to become the most Latin Italian in the world!' «I love being able to say, I feel Latin in my way of being, thinking and feeling. And it is touching to receive this award, because it is as if today we confirmed to the world that my 'adoption' is official, legal! Our hands will not let go, our souls and hearts will remain united, and this is a promise.'“I thank my parents and my daughter Paola” «I want to thank the Academy and President Manuel Amud and my wonderful colleagues for the extraordinary performances. For the duets, the voices, the arrangements, thank you all so much. I never thought I would receive all this. I thank my parents, my daughter Paola, all the people who work with me and my record company, the whole Warner Music family around the world. Thanks to everyone who is here and thanks also to those who could not be here physically. Thank you all for giving me this night, I want to be yours forever!'.";

const myArray = str.split(" ");
const genres = ["pop","rock","blues","jazz","metal"];

const albums = [];

let img="";
let title="";
let artist="";
let genre="";
let time="";
let favourite=false;

for(let i=0; i<20; i++){
 title="";
 artist="";
 img="img_"+ (Math.round(Math.random() * 2)+1);
 for(let j=0; j<3; j++){
  title += myArray[Math.round(Math.random() * myArray.length)]+" ";
 }
 for(let j=0; j<2; j++){
  artist += myArray[Math.round(Math.random() * myArray.length)]+" ";
 }
 genre = genres[Math.floor(Math.random() * genres.length)];
 time = 30+(Math.round(Math.random() * 30))+ " min"
 favourite = Math.round(Math.random() *1)===0 ? false : true;
 albums.push({
  img: img,
  title: title,
  artist: artist,
  genre: genre,
  time: time,
  favourite: favourite
 }); 
}

//col-xl-2
const list = document.querySelector("#list");
const fav_list = document.querySelector("#fav__list");
const h1_list = document.querySelector("#list h1");
const h1_fav_list = document.querySelector("#fav__list h1");
h1_list.innerText += ` (${albums.length})`;
let fav_cont=0;

for(let i=0; i<myArray.length; i++){
 const html = `
<div class="card mt-1 col-5 col-md-3 col-xl-2">
  <img src='./${albums[i].img}.jpg' class="card-img-top mt-2" alt="album image" />
  <div class="card-body">
    <h5 class="card-title">${albums[i].title}</h5>
    </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${albums[i].artist}</li>
    <li class="list-group-item">${albums[i].genre}</li>
    <li class="list-group-item">${albums[i].time}</li>
  </ul>
  </div>
`;
 list.innerHTML += html;
 if(albums[i].favourite){
  fav_list.innerHTML += html;
  fav_cont++;
 }
}

h1_fav_list.innerText += ` (${fav_cont})`;
