
// for(var i = 0;i<text.length;i++){
//     for(var j = 0;j<tab.length;j++) {
//         if(text[i]==tab[j]){
//           chiffre.push(tab[(j+cle)%26]);
//         }if(i==0){
//           tab2.push(tab[(j+cle)%26]);
//         }
        
//     }
// }

// document.write(tab,"<br>",tab2,"<br> cle:",cle,"<br> text à chiffre :",text,"<br>");
// document.write("text chiffre ...:",chiffre);
// // for(var k =0;k<text.length;k++){
// //   document.write(tab[chiffre[k]]);
// }
function crypter(){
  var tab = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var tab2 =[];
  var cle = parseInt(document.getElementById("cle").value);
  
  var stri = document.getElementById("text").value.toUpperCase();
  var g = stri.split("");
  var stritab = [];
  var stritab1= [];
  for (var i=0; i<stri.length; i++){
  stritab.push(g[i]);
  }
  // document.write (stritab, "<br>");
  for(var i = 0;i<stritab.length;i++){
    for(var j = 0;j<tab.length;j++) {
        if(stritab[i]==tab[j]){
          stritab1.push(tab[Math.abs((j+cle))%26]);
        }else if(stritab[i]== " "){
          stritab1.push(" ");
        }
        if(i==0){
          tab2.push(tab[Math.abs((j+cle))%26]);
        }
        
    }
  }
  document.getElementById("resultat").innerHTML =stritab1.join("") + "<br>"+  tab.join(" ")+"<br>"+ tab2.join(" ");
}

// document.write(tab,"<br>",tab2,"<br> cle:",cle,"<br> text à chiffre :",stri,"<br>");
// document.write("text crypte ...:",stritab1.join(""));





