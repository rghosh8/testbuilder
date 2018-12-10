// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  
  var firstOne = cardNumber[0];
  var firstTwo = cardNumber[0]+cardNumber[1];
  var firstThree = cardNumber[0]+cardNumber[1]+ cardNumber[2];
  var firstFour = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];
  var firstSix = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] + cardNumber[4] + cardNumber[5];
  var cardLength = cardNumber.length;
  
  //Diner's Club
  if (firstTwo==='38' || firstTwo==='39' && cardLength===14){
  	return "Diner's Club"
  }
  //American Express
  if ((firstTwo==='34' || firstTwo==='37') && cardLength===15){
  	return "American Express"
  }

  //MasterCard
  if ((firstTwo==='51' || firstTwo==='52' || firstTwo==='53' || firstTwo==='54' || firstTwo==='55') && cardNumber.length==16){
  	return "MasterCard"
  }
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  
  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  //Discover
  if ((firstTwo === '65' || firstFour ==='6011')&&(cardLength === 16 || cardLength === 19)){
  //if((cardLength === 16 || cardLength === 19)){
  		return 'Discover';
  }
  for (var prefix = 644; prefix <= 649; prefix++){
  	if (firstThree === prefix.toString() && (cardLength === 16 || cardLength === 19)){
  		return 'Discover';
  	}
  }
  //Maestro
  cardLengthLocal = cardLength;
  for (cardLengthLocal=12; cardLengthLocal<=19; cardLengthLocal++){
    if (firstFour==='5018' || firstFour==='5020' || firstFour==='5038' || firstFour==='6304'){
      return 'Maestro';
    }
  } 
  //China UnionPay
  for (var prefix = 622126; prefix <= 622925; prefix++){
    if (firstSix === prefix.toString() && (cardNumber.length === 16 || cardNumber.length === 17 ||cardNumber.length === 18 || cardNumber.length === 19)){
      return 'China UnionPay';
    }
  }
  for (var prefix = 624; prefix <= 626; prefix++){
    if (firstThree === prefix.toString() && (cardNumber.length === 16 || cardNumber.length === 17 ||cardNumber.length === 18 || cardNumber.length === 19)){
      return 'China UnionPay';
    }
  }
  for (var prefix = 6282; prefix <= 6288; prefix++){
    if (firstFour === prefix.toString() && (cardNumber.length === 16 || cardNumber.length === 17 ||cardNumber.length === 18 || cardNumber.length === 19)){
      return 'China UnionPay';
    }
  }
  //Switch
   if (firstFour==='4903' || firstFour==='4905' || firstFour==='4911' || firstFour==='4936' || firstFour==='6333' || firstFour==='6759' || firstSix==='564182' || firstSix ==='633110'){
    if(cardLength==16 || cardLength==18 || cardLength==19){
      return "Switch"
    }
  }

  //Visa
  if (firstOne==='4' && (cardLength===13 || cardLength===16 || cardLength===19)){
    return "Visa"
  }


};


//Visa always has a prefix of 4 and a length of 13, 16, or 19.
//MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

//China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
//Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.

