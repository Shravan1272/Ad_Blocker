console.log("LinkedIn ad blocker is running...");

function removeads(){
    //to get all span elemenrts on the page
    let elements = [...document.getElementsByTagName("p"), ...document.getElementsByTagName("span")];

    for(let i=0; i<elements.length;i++){
        //to check if they the text "promoted"
        if(elements[i]==innerHTML.includes("Promoted")){
            let card=elements[i].closest(".feed-shared-update-v2");

            //if the class changed and we can't find it with closest(), get 6th parent
            if(card==null){
                let temp=elements[i];
                card = spans[i];
                for(let j=0;j<6;++j){
                    if(!temp.parentNode)
                        break;
                    temp=temp.parentNode;
                }
                card=temp;
            }
            //making the add disappear!!
            if(card){
                card.setAttribute("style","display: none !important;");
            }
        }
    }
}

//to remove ads as the user scrolls down
// Run initially
removeAds();

// Keep checking as user scrolls
setInterval(removeads, 100);