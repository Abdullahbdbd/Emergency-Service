// const { createElement } = require("react");

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


// call section 
const historyData = [];
function callBtnClick(btnID, titalId, nameId, numId){
    document.getElementById(btnID).addEventListener('click',
    function(){
        const serviceTital = document.getElementById(titalId).innerText;
        const serviceName = document.getElementById(nameId).innerText;
        const callNum = document.getElementById(numId).innerText;
        const coinCount = parseInt(document.getElementById('coin-count').innerText);

        const data = {
            tital: serviceTital,
            name: serviceName,
            time: new Date().toLocaleTimeString()
        }

        if(coinCount < 20){
            alert('❌ ' + "You don't have enough coins. You need at least 20 Coins to make the call.")
        }
        
        else{
            alert('📞 '+"Calling " + serviceName + ' ' + callNum) ;
            const newCoinCount = coinCount - 20;
            document.getElementById('coin-count').innerText = newCoinCount;

            historyData.push(data);

            const historyDataSection = document.getElementById('history-data-section');
            historyDataSection.innerText = '';

            for(const data of historyData){
              const div = document.createElement("div");
              div.innerHTML = `
              <div
             
               class="flex justify-between items-center mt-5 bg-[#fafafa] p-2 rounded-lg"
             >
               <!-- history text  -->
               <div>
                 <h2 class="text-sm font-semibold max-w-[150px]">${data.tital}</h2>
                 <p class="text-xs text-[#5c5c5c]">${data.name}</p>
               </div>
               <!-- history time  -->
               <div>
                 <p class="text-xs text-[#111111]">${data.time}</p>
               </div>
             </div>
              `;

              historyDataSection.appendChild(div);
            }
            
            // return callNum, serviceName; 
        }
    }
)
}

callBtnClick('N-E-CallBtn', 'N-E-STital', 'N-E-Sn', 'N-E-HL-Num')
callBtnClick('P-H-CallBtn', 'P-H-STital', 'P-H-Sn', 'P-H-HL-Num')
callBtnClick('F-S-CallBtn', 'F-S-STital', 'F-S-Sn', 'F-S-HL-Num')
callBtnClick('A-S-CallBtn', 'A-S-STital', 'A-S-Sn', 'A-S-HL-Num')
callBtnClick('W-C-CallBtn', 'W-C-STital', 'W-C-Sn', 'W-C-HL-Num')
callBtnClick('A-C-CallBtn', 'A-C-STital', 'A-C-Sn', 'A-C-HL-Num')


//clear section
document.getElementById('clear-btn').addEventListener('click',
    function(){
        const historyDataSection = document.getElementById('history-data-section');
        historyDataSection.innerHTML = '';
    }
)


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


