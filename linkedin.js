console.log("LinkedIn ad blocker is running...");

function removeads(){
    //to get all span elemenrts on the page
    let elements = [
        ...document.getElementsByTagName("p"),
        ...document.getElementsByTagName("span")
    ];
    for(let i=0; i<elements.length;i++){
        let el = elements[i];
        //to check if they the text "promoted"
        if(el.innerText && el.innerText.includes("Promoted")){
            let card=el.closest(".feed-shared-update-v2");

            //if the class changed and we can't find it with closest(), get 6th parent
            if(card==null){
                let temp=elements[i];
                for(let j=0;j<6;++j){
                    if(!temp.parentNode)
                        break;
                    temp=temp.parentNode;
                }
                card=temp;
            }
            //making the add disappear!!
            console.log("Found and removed ad: ", el.innerText);

            if(card){
                card.setAttribute("style","display: none !important;");
            }
        }
    }
}

//to remove ads as the user scrolls down
// Run initially
removeads();

// Keep checking as user scrolls
setInterval(removeads, 2000);