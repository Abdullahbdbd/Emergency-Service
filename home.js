// heart button
const hearts = document.getElementsByClassName('heart');
for(const heart of hearts){
heart.addEventListener('click',
    function(){
        const heartCount =parseInt(document.getElementById('heart-count').innerText);
        const newHeartCount = heartCount + 1;
        document.getElementById('heart-count').innerText = newHeartCount;
    }
)   
}