bname=navigator.appName;
bversion=parseInt(navigator.appVersion)

if ((bname=="Netscape" && bversion>=4) || (bname=="Microsoft Internet Explorer" && bversion>=4))
window.onload=start
else
stop();

window.onunload=stop
if (bname=="Netscape"){
brows=true
dt=2
}
else{
brows=false
dt=20
}
var z=0;
var msg=0;
var rgb=0;
var link=false;
var status=true;
var updwn=false;

var value=0;
var h=window.innerHeight;
var w=window.innerWidth;

var timer1;
var timer2;
var timer3;
var convert = new Array()
var hexbase= new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F");

for (x=0; x<16; x++){
for (y=0; y<16; y++){
convert[value]= hexbase[x] + hexbase[y];
value++;
}
}

redx=srctecanimatecolor.substring(1,3);
greenx=srctecanimatecolor.substring(3,5);
bluex=srctecanimatecolor.substring(5,7);
hred=eval(parseInt(redx,16));
hgreen=eval(parseInt(greenx,16));
hblue=eval(parseInt(bluex,16));
eredx=srctecanimatebgcolor.substring(1,3);
egreenx=srctecanimatebgcolor.substring(3,5);
ebluex=srctecanimatebgcolor.substring(5,7);
ered=eval(parseInt(eredx,16));
egreen=eval(parseInt(egreenx,16));
eblue=eval(parseInt(ebluex,16));
red=ered;
green=egreen;
blue=eblue;

function start(){
if ((bname=="Netscape" && bversion>=4) || (bname=="Microsoft Internet Explorer" && bversion>=4)){
link=false;
updwn=true;
if (brows)
res=document.layers['srctectextanim'].top
else{

srctectextanim.innerHTML='<Pre><P Class="main" Align="Center">'+srctecanimatemessage[msg]+'</P></Pre>'
res=srctectextanim.style.top
for (x=0; x<document.all.length; x++)
if(document.all[x].id=="srctectextanimlink")
link=true;
}
up()
}
}

function stop(){
clearTimeout(timer1);
clearTimeout(timer2);
clearTimeout(timer3);
}

function resz(){
h=window.innerHeight;
w=window.innerWidth;

if (updwn)
timer1=setTimeout('up()',1000)
else
timer2=setTimeout('down()',1000)
}

function breakf(){
if (status){
clearTimeout(timer1);
clearTimeout(timer2);
status=false
return;
}
else{
status=true;
if (updwn)
timer1=setTimeout('up()',dt)
else
timer2=setTimeout('down()',dt)
}
}


function up(){
if (red<hred){
if ((red+7)<hred)
red+=7;
else
red=hred
redx = convert[red]
}
else{
if ((red-7)>hred)
red-=7;
else
red=hred
redx = convert[red]
}

if (green<hgreen){
if ((green+7)<hgreen)
green+=7;
else
green=hgreen
greenx = convert[green]
}
else{
if ((green-7)>hgreen)
green-=7;
else
green=hgreen
greenx = convert[green]
}

if (blue<hblue){
if ((blue+7)<hblue)
blue+=7;
else
blue=hblue
bluex = convert[blue]
}
else{
if ((blue-7)>hblue)
blue-=7;
else
blue=hblue
bluex = convert[blue]
}

rgb = "#"+redx+greenx+bluex;
if (brows){
document.layers['srctectextanim'].document.linkColor=rgb;
document.layers['srctectextanim'].document.vlinkColor=rgb;
if (window.innerHeight!=h || window.innerWidth!=w){
clearTimeout(timer1);
resz()
return;
}
else{
document.layers['srctectextanim'].document.write('<Pre><P Class="main" Align="Center"><font color="'+rgb+'">'+srctecanimatemessage[msg]+'</font></P></Pre>')
document.layers['srctectextanim'].document.close();
}
}
else{
srctectextanim.style.color=rgb;
if(link)
srctectextanimlink.style.color=rgb;
}
if (z<38){
if (brows)
document.layers['srctectextanim'].top-=srctecscrollsize
else
srctectextanim.style.posTop-=srctecscrollsize
z++
timer1=setTimeout('up()',dt)
}
else
{
updwn=false;
down()
}
}


function down(){
if (red<ered){
if ((red+7)<ered)
red+=7;
else
red=ered
redx = convert[red]
}
else{
if ((red-7)>ered)
red-=7;
else
red=ered
redx = convert[red]
}

if (green<egreen){
if ((green+7)<egreen)
green+=7;
else
green=egreen
greenx = convert[green]
}
else{
if ((green-7)>egreen)
green-=7;
else
green=egreen
greenx = convert[green]
}

if (blue<eblue){
if ((blue+7)<eblue)
blue+=7;
else
blue=eblue
bluex = convert[blue]
}
else{
if ((blue-7)>eblue)
blue-=7;
else
blue=eblue
bluex = convert[blue]
}

rgb = "#"+redx+greenx+bluex;
if (brows){
document.layers['srctectextanim'].document.linkColor=rgb;
document.layers['srctectextanim'].document.vlinkColor=rgb;
if (window.innerHeight!=h || window.innerWidth!=w){
clearTimeout(timer2);
resz()
return;
}
else{
document.layers['srctectextanim'].document.write('<Pre><P Class="main" Align="Center"><font color="'+rgb+'">'+srctecanimatemessage[msg]+'</font></P></Pre>')
document.layers['srctectextanim'].document.close();
}
}
else{
srctectextanim.style.color=rgb;
if(link)
srctectextanimlink.style.color=rgb;
}

if (z<76){
if (brows)
document.layers['srctectextanim'].top-=srctecscrollsize
else
srctectextanim.style.posTop-=srctecscrollsize
z++
timer2=setTimeout('down()',dt)
}
else
{
if (brows){
document.layers['srctectextanim'].document.write('')
document.layers['srctectextanim'].document.close();
}
else
srctectextanim.innerHTML='';
window.clearInterval(timer2);
if(msg<srctecanimatemessage.length-1){
msg++;
z=0;
if (brows){
document.layers['srctectextanim'].top=res;
}
else
srctectextanim.style.top=res;
timer3=setTimeout('start()',srctecanimatetextinterval);
}
else
{
msg=0;
z=0;
if (brows)
document.layers['srctectextanim'].top=res;
else
srctectextanim.style.top=res;
timer3=setTimeout('start()', srctecanimatelayinterval);
}
}
}
