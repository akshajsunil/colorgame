var colors =[];
var lim=9;
var sq=document.querySelectorAll(".square");
var colordisplay=document.querySelector("#colordisplay");
var r=[];
var g=[];
var b=[];
for(var i=0;i<sq.length;i++)
{
	r[i]=rgb();
	b[i]=rgb();
	g[i]=rgb();
colors[i]="rgb("+r[i]+", "+g[i]+", "+b[i]+")";
}
var picked=pickcolor();
var intx=colors.indexOf(picked);
var picked2=percen();
var message=document.querySelector("#message");
var resetbtn=document.querySelector("#reset");
var easybtn=document.querySelector("#easy");
var hardbtn=document.querySelector("#hard");
var superhardbtn=document.querySelector("#superhard");
easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	superhard.classList.remove("selected");
	lim=3;
	
	sq[3].style.backgroundColor = "rgb(55, 50, 55)";
	sq[4].style.backgroundColor = "rgb(55, 50, 55)";
	sq[5].style.backgroundColor = "rgb(55, 50, 55)";
	sq[6].style.backgroundColor = "rgb(55, 50, 55)";
	sq[7].style.backgroundColor = "rgb(55, 50, 55)";
	sq[8].style.backgroundColor = "rgb(55, 50, 55)";
for(var i=0;i<sq.length;i++)
{
	r[i]=rgb();
	b[i]=rgb();
	g[i]=rgb();
colors[i]="rgb("+r[i]+", "+g[i]+", "+b[i]+")";
}
picked=pickcolor();
intx=colors.indexOf(picked);
display();
resetbtn.textContent="New Color";
h1.style.backgroundColor = "steelblue"
	picked=pickcolor();
	picked2=percen();
	resetbtn.textContent="New Color";
	colordisplay.textContent=picked2;





} );
hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	superhardbtn.classList.remove("selected");
	lim=6;
for(var i=0;i<sq.length;i++)
{
	r[i]=rgb();
	b[i]=rgb();
	g[i]=rgb();
colors[i]="rgb("+r[i]+", "+g[i]+", "+b[i]+")";
}
picked=pickcolor();
display();
resetbtn.textContent="New Color";
h1.style.backgroundColor = "steelblue"
	picked=pickcolor();
	intx=colors.indexOf(picked);
	picked2=percen();
	resetbtn.textContent="New Color";
		sq[6].style.backgroundColor = "rgb(55, 50, 55)";
	sq[7].style.backgroundColor = "rgb(55, 50, 55)";
	sq[8].style.backgroundColor = "rgb(55, 50, 55)";
	colordisplay.textContent=picked2;



} );
superhardbtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.remove("selected");
	superhardbtn.classList.add("selected");
	lim=9;
	for(var i=0;i<sq.length;i++)
{
	r[i]=rgb();
	b[i]=rgb();
	g[i]=rgb();
colors[i]="rgb("+r[i]+", "+g[i]+", "+b[i]+")";
}
picked=pickcolor();
display();
resetbtn.textContent="New Color";
h1.style.backgroundColor = "steelblue"
	picked=pickcolor();
	intx=colors.indexOf(picked);
	picked2=percen();
	resetbtn.textContent="New Color";
	colordisplay.textContent=picked2;


} );

var h1=document.querySelector("h1");
display();
resetbtn.addEventListener("click", function (){
	
	for(var i=0;i<sq.length;i++)
{
	r[i]=rgb();
	b[i]=rgb();
	g[i]=rgb();
colors[i]="rgb("+r[i]+", "+g[i]+", "+b[i]+")";
}
picked=pickcolor();
intx=colors.indexOf(picked);
picked2=percen();
display();
resetbtn.textContent="New Color";
h1.style.backgroundColor = "steelblue";
message.textContent=" ";
colordisplay.textContent=picked2;
});



colordisplay.textContent=picked2;



function display(){
	for(var i=0;i<lim;i++)
{
	 
	sq[i].style.backgroundColor = colors[i];
	sq[i].addEventListener("click", function (){

		if(this.style.backgroundColor!==picked)
		{
			this.style.backgroundColor = "rgb(55, 50, 55)";
			message.textContent=" TRY AGAIN";
			message.classList.remove("message2");
			message.classList.add("message1");
			
			

		}
		else{
			for(var i=0;i<lim;i++)
			{
				sq[i].style.backgroundColor = picked;
			}
			message.textContent=" CORRECT";
			message.classList.remove("message1");
			message.classList.add("message2");
			h1.style.backgroundColor = picked;
			resetbtn.textContent="Play Again";


		}

	});


}
}
function pickcolor(){
	return colors[Math.floor(Math.random()*lim)];
}
function rgb()
{
	return Math.floor(Math.random()*256);
}
function percen(){
	return "RED: "+Math.floor(r[intx]/256*100)+"% + GREEN: "+Math.floor(g[intx]/256*100)+"% + BLUE: "+Math.floor(b[intx]/256*100)+"% = ?";

}