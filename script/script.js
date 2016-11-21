function resolve(a,b,c,d,e,f,g,h,i,j,k,l){
  var W=(a*f*k)+(b*g*i)+(c*e*j)-(i*f*c)-(j*g*a)-(k*e*b)
  var Wx=(d*f*k)+(b*g*l)+(c*h*j)-(l*f*c)-(j*g*d)-(k*h*b)
  var Wy=(a*h*k)+(d*g*i)+(c*e*l)-(i*h*c)-(l*g*a)-(k*e*d)
  var Wz=(a*f*l)+(b*h*i)+(d*e*j)-(i*f*d)-(j*h*a)-(l*e*b)

  if (W!=0){
    var x=(Wx/W).toFixed(3)
    var y=(Wy/W).toFixed(3)
    var z=(Wz/W).toFixed(3)
    document.getElementById("solutionfield").innerHTML = " X = " + x+"  Y = "+y+"  Z = "+z;
    document.getElementById("solutionfield2").innerHTML = " X = " + x+",  Y = "+y+",  Z = "+z;

    //alert("x="+x+"y="+y+"z="+z)
  }else if ((W==0) && (Wx==0) && (Wy==0) && (Wz==0)){
    document.getElementById("solutionfield").innerHTML = "A lot of solutions";
    document.getElementById("solutionfield2").innerHTML = "A lot of solutions";

    //alert("Nieskończenie wiele rozwiązań")
  }else{
    document.getElementById("solutionfield").innerHTML="None of solutions"
    document.getElementById("solutionfield2").innerHTML="None of solutions"
    // alert("Równanie jest sprzeczne")
  }
}

function clean(objectlist){
  var valueslist=[]
  for (i = 0; i <= 11; i++) {
    objectlist[i].value=0
    valueslist[i]=0
  }
  resolve.apply(12,valueslist)
}

function rozwiazanie(){
  var valueslist = []
  var objectslist = []
  for (i = 'a'.charCodeAt(); i <= 'l'.charCodeAt(); i++) {
    valueslist.push(document.getElementById(String.fromCharCode(i)).value)
    objectslist.push(document.getElementById(String.fromCharCode(i)))
  }
  resolve.apply(12, valueslist)
  return objectslist
}


function randomvalue(objectslist){
  var valueslist=[]
  for (i = 0; i <= 11; i++) {
    objectslist[i].value=Math.floor((Math.random() *100)+1)
    valueslist[i]=Math.floor((Math.random() *100)+1)
  }
  resolve.apply(12,valueslist)
}


function draw(){
  location.href='#openModal'
  var canvas = document.getElementById('xy');
  var context = canvas.getContext('2d');
  context.font = "20px Arial";
  context.fillStyle="grey";
  context.beginPath();

  context.moveTo(200, 0);
  context.lineTo(200, 300);
  context.fillText("Y",215,20);

  context.moveTo(0,150);
  context.lineTo(600,150);
  context.fillText("X",380,180);

  context.moveTo(350,60);
  context.lineTo(10,260);
  context.fillText("Z",20,290);

  context.lineWidth = 5;
  context.strokeStyle = 'grey';
  context.fillStyle="#FF00FF";
  context.fillRect(10,50,7,7);
  context.stroke();

}
