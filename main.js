document.getElementById('enter').onclick = region;
let numRegion;
let nameRegion;
let visitors;

const sharm=15;
const hurgada=25;
const taba=6;

function region() {

    numRegion = prompt(`Введите любое число, от 1 до 3-х. \n Курорты: \n 1->Taba\n 2->Sharm\n 3->Hurgada`);
    numRegion = +numRegion;

    switch(numRegion) {
        case 1:
            nameRegion='Taba';
            group(taba);
            break;
        case 2:
            nameRegion='Sharm';
            group(sharm);
            break;
        case 3:
            nameRegion='Hurgada';
            group(hurgada);
            break;
        default:
            alert(`Вы ввели ${numRegion}. Это не верное чило, введите число в диапазоне от 1 до 3-х.`);
    }
}

function group(countInReg) {

  visitors = prompt(`Вы выбрали ${nameRegion}. Введите число участников группы!!!`);
  let freePlace = countInReg-visitors;

  if (!isNaN(visitors) && visitors>0 && (Math.ceil(visitors)-visitors===0)) {
      if(freePlace>=0) {
          let condition = confirm(`Место в группе ${nameRegion} есть! Хотите забронировать?`);
          if(condition) {
              alert(`Вы подтвердили бронь! Кол-во оставшихся мест ${freePlace}`);
          }
      }
      else {
          alert(`К сожалению такого кол-ва мест нет! Выберите пожалуйста другую группу.`);
      }
  }
  else if (!visitors){
      region();
  }
  else {
      alert(`Кол-во участников должно быть целым и положительным числом!`);
  }
}