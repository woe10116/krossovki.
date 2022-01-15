function buy(price, text, id, img){
  if(sessionStorage.getItem("index") ==null){
    sessionStorage.setItem("index", 0)
  };
  if(sessionStorage.getItem('sum') == null){
    sessionStorage.setItem('sum', 0)
  }

   var selind = document.getElementById(id).options.selectedIndex;
   var txt= document.getElementById(id).options[selind].text;
   var val= document.getElementById(id).options[selind].value;
   
 sessionStorage.setItem('img' + sessionStorage.getItem("index"), img)
  sessionStorage.setItem("text-" + sessionStorage.getItem("index"), text + ' ' + txt + 'а')
  sessionStorage.setItem("price-" + Number(sessionStorage.getItem("index")), price  +  parseInt(val))
  // sessionStorage.setItem('sum', + Number(sessionStorage.getItem('sum'))+price + parseInt(val))
   sessionStorage.setItem("quantity" + sessionStorage.getItem("index"), 1)
  sessionStorage.setItem('index', + Number(sessionStorage.getItem('index')) + 1)
 

 
};
function clean(i){
sessionStorage.removeItem("img" + i);
sessionStorage.removeItem("text-" + i);
sessionStorage.removeItem("quantity" + i);
sessionStorage.removeItem("quantityPrice" + i);
var newPrice = sessionStorage.getItem('sum') - sessionStorage.getItem("quantityPrice" + i);
sessionStorage.setItem('sum', newPrice);
sessionStorage.removeItem("price-"+ i);
$("." + i).hide();
window.location.reload();


};
function plus(i){
  sessionStorage.setItem(`quantity${i}`, Number(sessionStorage.getItem("quantity" + i)) + 1);
  sessionStorage.getItem("quantity");
  sessionStorage.setItem(`quantityPrice${i}`, Number(sessionStorage.getItem("quantity")) * sessionStorage.getItem(`price-${i}`))
window.location.reload();
}
function minus(i){
  sessionStorage.setItem(`quantity${i}`, Number(sessionStorage.getItem("quantity" + i)) - 1);
  sessionStorage.getItem("quantity");
window.location.reload();
if (Number(sessionStorage.getItem(`quantity${i}`)) < 1){
  clean(i);
};
};

  
window.onload = function message(){
  document.getElementById('message')
let sum = 0;
  // document.getElementById('message').value += "Обувь:" + "\n"
  for(let i = 0; i < sessionStorage.getItem('index'); i++){ 
    if(sessionStorage.getItem("text-" + i) != null){
     
     
  
  sessionStorage.setItem(`quantityPrice${i}`, Number(sessionStorage.getItem(`quantity${i}`)) * Number(sessionStorage.getItem('price-' + i)))
  sessionStorage.setItem('sum', + Number(sessionStorage.getItem(`quantityPrice${i}`)))
    $('.message').append('<section class = '+i+'>' + ' <div id ="clear" class=btn onclick = "clean('+i+')" >Удалить</div> ' + 
      '<div class="tovar ' + i + '"><img width=200 height=150 src="'+
      sessionStorage.getItem("img" + i)+'" alt="">' + sessionStorage.getItem("price-"+ i)+'рублей-' + ' '+sessionStorage.getItem("text-" + i) + 
      ' <div id ="plus" class=btn onclick = "plus('+i+')" > + </div> ' + '<input type = "text" id = "qnt", style = "width:50px;"value = ' +  
      sessionStorage.getItem("quantity" + i) + '>'+
      ' <div id ="minus" class=btn onclick = "minus('+i+')" > - </div> ' + '<div>Общая стоимость:</div>' + sessionStorage.getItem("quantityPrice" + i)+ '</div>' +  '</secttion>'  ) 
      sum += Number(sessionStorage.getItem("quantityPrice" + i))
  };



  


    // document.getElementById('message').value += sessionStorage.getItem("price-"+ String(i))+'-' + ' '+sessionStorage.getItem("text-" + String(i))+"\n"
  
  };
  // document.getElementById('message').value += "__________________________________________________________" + "\n" + "Общая сумма:"+'\n' +sessionStorage.getItem('sum') + ' ' + 'рублей.'
  $('.message').append('<div class = "sume">' + ("Общая сумма:"+'\n' + sum + ' ' + 'рублей.') + '</div>');

};
function clening_sessions(){
  sessionStorage.clear();
  // document.getElementById('message').value=" ";
  $(".message").empty();
  
}


function changeImg(id){
  if (id == 'prev'){
    index++;
    if (index == arrImg.length){
      index = 0;
    }
  } else {
    index--;
    if (index == -1){
      index = arrImg.length-1;
    }
  }
  document.getElementById('image').src = arrImg[index];
}
var arrImg = [
  'img/1adidas.jpg ', //index = 0
  'img/2adidas.jpg ', //index = 1
  'img/3adidas.jpg '  //index = 2
];
var index = 0;





function fun1() {
var chbox;
chbox=document.getElementById('one');
if (chbox.checked) {
alert('Покупка подтверждена');
}
else {
alert ('Не подтверждено');
}
}
   function GetData(id)
  {
     // получаем индекс выбранного элемента
     var selind = document.getElementById(id).options.selectedIndex;
   var txt= document.getElementById(id).options[selind].text;
   var val= document.getElementById(id).options[selind].value;

   alert( txt +" "  + val);
  }

// function save(textToWrite, fileName){
//  var textFileAsBlob = new
//  Blob([textToWrite],
//    {type:'text'});
//  var download = document.createElement("a");
//  download.download = fileName;
//  download.href = window.URL.createObjectURL(textFileAsBlob);
//  download.style.display = "none";
//  document.body.appendChild(download);
//  download.click();

// }
$('.download').click(function() {
  var textContent = $('.message').text();
  $('#output').text(textContent);
});
function addSpisok(){
    var jq=$('#user_text').val();
    $('#jq').append('<li>'+jq+'</li>');
}
// function myFunction(){
//   var input, filtet, glob, glob1, a, i;
//   input = document.getElementById("mySearch");
//   filter = input.value.toUpperCase();
//   glob = document.getElementById("overwiew0");
//   glob1 = glob.getElementByClassName("img");
//   for(i = 0; i < glob1.length; i++){
//     a = glob1[i].getElementByClassName("span")[0];
//     if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
//       glob1[i].style.display = "";
//     }
//     else{
//       glob1[i].style.display = "none";
//     }
//   }
// }
function searchTextOnPage(inputId) {
  var obj = window.document.getElementById(inputId);
  var textToFind;
  if (obj) {
    textToFind = obj.value;
  } else {
    alert("Немогу найти текст = " + inputId);
    return;
  }
  if (textToFind == "") {
    alert("Вы ничего не ввели");
    return;
  }
  document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/g"),"<a name=" + textToFind + " style='background:#F4CA16'>" + textToFind + "</a>");
  var obj = window.document.getElementById(inputId);
  obj.value = textToFind;
  window.location = "#" + textToFind;
}
