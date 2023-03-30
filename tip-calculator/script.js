//get global access to all input / div her
//bill input, tip input, number of people div and per person
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv  = document.getElementById('perPersonTotal')

//get number of people from number of people div
 let numberOfPeople = Number(numberOfPeopleDiv.innerText)

 // calculate total bill per person
 const calculateBill = () => {
    const bill = Number(billInput.value)

    const tipPercentage = Number(tipInput.value)/100

    const tipAmount = bill * tipPercentage

    const total = tipAmount + bill

    const perPersonTotal = total / numberOfPeople

    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
 }

 //split bill between more people
 const increasePeople = () => {
   numberOfPeople += 1

   numberOfPeopleDiv.innerText = numberOfPeople

   calculateBill()
 }

 //split bill between less people
 const decreasePeople = () => {
    //guard clause: can't go below 1
    if (numberOfPeople <= 1){
      return
    }
   numberOfPeople -= 1
   
   numberOfPeopleDiv.innerText = numberOfPeople

   calculateBill()
 } 
