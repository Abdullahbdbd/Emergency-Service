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

// copy modal section 

function copyBtnClick(btnID, numId){
    document.getElementById(btnID).addEventListener('click',
    function(){
        const hlNum = document.getElementById(numId).innerText;
        alert("The number has been copied: " + hlNum) ;
         navigator.clipboard.writeText(hlNum);
        return hlNum;   
    }
)
}
copyBtnClick('N-E-CopyBtn', 'N-E-HL-Num');
copyBtnClick('P-H-CopyBtn', 'P-H-HL-Num');
copyBtnClick('F-S-CopyBtn', 'F-S-HL-Num');
copyBtnClick('A-S-CopyBtn', 'A-S-HL-Num');
copyBtnClick('W-C-CopyBtn', 'W-C-HL-Num');
copyBtnClick('A-C-CopyBtn', 'A-C-HL-Num');


