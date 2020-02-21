const cipher = {
}
cipher.encode = function(offset,string){
  let str="";
  for(let i = 0; i<string.length;i++){
  let ascii = string.charCodeAt(i);
  if(ascii>=65 && ascii<=90){
      let num = (ascii - 65 + parseInt(offset)) % 26 + 65;
      str += String.fromCharCode(num);
  }
  else if(ascii>=97 && ascii<=122){
      let num = (ascii - 97 + parseInt(offset)) % 26 + 97;
      str += String.fromCharCode(num);
  }
  else{
    str += String.fromCharCode(ascii);
  }
}
  return str;
};
cipher.decode = function(offset,string){
  let str="";
  for(let i = 0; i<string.length;i++){
    let ascii = string.charCodeAt(i);
    if(ascii>=65 && ascii<=90){
        let num = (ascii - 90 - parseInt(offset)) % 26 + 90;
        str += String.fromCharCode(num);
    }
    else if(ascii>=97 && ascii<=122){
        let num = (ascii - 122 - parseInt(offset)) % 26 + 122;
        str += String.fromCharCode(num);
    }
    else{
      str += String.fromCharCode(ascii);
    }
  }
  return str;
};

export default cipher;
