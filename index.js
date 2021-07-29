const sliderItems =[
    {
        id:1,
        img:"./image/inception.jpg",
        name:'inception',
        p:'Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with Emma Thomas'
    },
    {
        id:2,
        img:"./image/jhon-wick.jpg",
        name:'jhon wick',
        p:'The story focuses on John Wick (Reeves) searching for the men who broke into his home, stole his vintage car and killed his puppy'
    },
    {
        id:3,
        img:"./image/Maze-Runner.jpg",
        name:'maze runner',
        p:'The Maze Runner is a 2014 American dystopian science fiction film directed by Wes Ball'
    },
    {
        id:4,
        img:"./image/Pirates.jpg",
        name:'pirates of the carbbean',
        p:'Pirates of the Caribbean is a series of fantasy swashbuckler films produced by Jerry Bruckheimer'
    }
]


const prevBtn = document.querySelector('.fa-chevron-left');
const nextBtn = document.querySelector('.fa-chevron-right');
const movieImg = document.getElementById('movie-image');
const movieHeading = document.getElementById('movie-heading');
const movieDisc = document.getElementById('movie-disc');


let currentslide = 0;

// window.addEventListener('DOMContentLoaded',function(){
//     let item = sliderItems[currentslide];
//     movieImg.src = item.img;
//     movieHeading.textContent = item.name;
//     movieDisc.textContent = item.p;
// });


function movie(){
    let item = sliderItems[currentslide];
    movieImg.src = item.img;
    movieHeading.textContent = item.name;
    movieDisc.textContent = item.p;
}
nextBtn.addEventListener('click', function(){
    movie()
    currentslide++
    if(currentslide > sliderItems.length-1){
        currentslide=0
    }  
})
prevBtn.addEventListener('click', function(){
    movie()
    currentslide--
    if(currentslide <0 ){
        currentslide = sliderItems.length-1
    }
})

