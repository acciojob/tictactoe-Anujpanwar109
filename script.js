//your JS code here. If required.
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let startGame=document.querySelector("#submit");
let form=document.querySelector("form");
let container=document.querySelector("#game-container");
let heading=document.querySelector(".message")


startGame.addEventListener("click",()=>{
	event.preventDefault();

	form.style.display="none"
	container.style.display="block"
	heading.innerText=`X your chance`
})





let turn=true;
const winPatterns=[
	[0,1,2],
	[0,3,6],
	[0,4,8],
	[1,4,7],
	[2,5,8],
	[2,4,6],
	[3,4,5],
	[6,7,8]
]


boxes.forEach((box)=>{
	box.addEventListener("click",()=>{
		if(turn){
			box.innerText="X";
			turn=false;
			
		}else{
			box.innerText="O";
			turn=true;
			
		}
		box.disabled=true;

		gameLogic();
		
	});
});

let gameLogic=()=>{
	for(let t of winPatterns){
		let a=boxes[t[0]].innerText;
		let b=boxes[t[1]].innerText;
		let c=boxes[t[2]].innerText;

		if(a!="" && b!="" && c!=""){
			if(a==b && b==c){
				boxes[t[0]].style.background="purple"
				boxes[t[1]].style.background="purple"
				boxes[t[2]].style.background="purple"
				winner(a);
				
			}
		}
	}
	
};

let winner=(a)=>{
	heading.innerText=`${a},congratulations you won!`
	disable();
};

let disable=()=>{
	for(let box of boxes){
		box.disabled=true;
	}
};

reset.addEventListener("click",()=>{
	
	for(let box of boxes){
		box.disabled=false;
		box.innerText="";
		box.style.background="pink";
		form.style.display="block";
		container.style.display="none"
	}
})


