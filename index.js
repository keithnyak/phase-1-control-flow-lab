function scuberGreetingForFeet(feet){
  if(feet<= 400){
    return 'This one is on me!'
  }else if
    (feet>2500){
      return 'No can do.'
    }else
      (feet>=2000)
        return 'I will gladly take your thirty bucks.'
      }

function ternaryCheckCity(city){
 return city==='NYC'?'Ok, sounds good.':'No go.';
  }

function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      return tip='Thank you so much.';
      break;
     case 'not as generous':
      return tip="Thank you.";
      break;
     default:
      return tip="Bye.";
      break;  
  }
}