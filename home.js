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

//challenge part

//copy count
const copyCountBtns = document.getElementsByClassName('copy-count-btn');
for(const copyCountBtn of copyCountBtns){
copyCountBtn.addEventListener('click',
    function(){
        const copyCount =parseInt(document.getElementById('copy-count').innerText);
        const newCopyCount = copyCount + 1;
        document.getElementById('copy-count').innerText = newCopyCount;
    }
)   
}