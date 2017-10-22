var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);

  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line.";
}

function nowServing(arr){
  if (arr.length > 0){
    var serving = arr.shift();
    return "Currently serving " + serving + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}
