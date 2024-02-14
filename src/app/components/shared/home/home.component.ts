import { Component, OnInit } from '@angular/core';
import { ComponentsService } from '../components.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // todos: string[] = [];
  // text: string = '';
  // name: any; 
  // parentData: any = "I'm from child ";
  // message: any; 
  // session: any;

  gameData: any = {
    entries: '',
    sports: '',
    winners: '',
    percentage: ''
  }

  selecteOption: string = '';

  totalSpots: any;

  result: any;

  splitResult: number[] = [];

  amountAfterDeduction: number = 0;


  forms: any = [
    { 
      start: '',
      end: '',
      amount: '',
      remaining: 0 }
  ];
  allFormsData: any = [];

  RemainingAmountNew: number = 0;

  newRemainingAmount: number = 0;


  constructor(private componetService: ComponentsService) { }

  calculatedTotal() {
debugger;
    if (isNaN(this.gameData.entries) || isNaN(this.gameData.sports)) {
      console.log("enter correct number")
      return;
    }
    this.result = this.gameData.entries * this.gameData.sports;

    this.totalSpots = Math.round(this.gameData.sports / 2)

    this.amountAfterDeduction = (this.result - ((this.gameData.percentage / 100) * (this.gameData.entries * this.gameData.sports)))

    this.RemainingAmountNew = this.amountAfterDeduction

    const percentages = [30, 20, 10, 10, 8, 8, 7, 7];
    this.splitResult = [];
    let totalPercentage = 0;  

    for (let i = 0; i < percentages.length; i++) {
      totalPercentage += percentages[i];
    }

    for (let i = 0; i < percentages.length; i++) {
      const percentage = percentages[i];
      const splitResult = Math.round((percentage / totalPercentage) * (this.result));
      this.splitResult.push(splitResult);
    }
  }

  subtractRemainingAmount(index: number) {
    const enteredAmount = Number(this.forms[index].amount);

    if (!isNaN(enteredAmount) && !isNaN(this.RemainingAmountNew)) {
      this.newRemainingAmount = this.amountAfterDeduction - enteredAmount;
      this.RemainingAmountNew=this.newRemainingAmount
      console.log(-1e+308)
    } else {
      console.log("Invalid input. Please enter valid numbers.");
    }
  }

  addAnotherForm() {
    const newForm: any = { start: '', end: '', amount: '', remaining: 0 };     
    this.forms.push(newForm);

  }

  removeForm(pageRemove: any) {
    this.forms.splice(pageRemove, 1)

  }

  collectData() {

    this.allFormsData = [...this.forms]

    const firstFormData = this.allFormsData[0];

    if (firstFormData && Object.values(firstFormData).some(value => value !== '')) {

      console.log(this.allFormsData);

    }
  }


  ngOnInit(): void {

  }
  // recivedData(data: any) {
  //   this.message = data
  // }
  // addTodo() {
  //   if (this.text.trim() !== '') {
  //     this.todos.push(this.text)
  //     this.text = '';
  //   }
  // }
  // deleteTodo(index: number) {
  //   return this.todos.splice(index, 1)
  // }
  // getWeatherUpdate(){}

  // saveData() {
  //   let data: any = {
  //     id: 1,
  //     name: 'Bhagavan'
  //   }
  //   this.session = localStorage.setItem('session', JSON.stringify(data))
  // }
  // loadData()   {
  //   let data: any = localStorage.getItem('session')
  //   this.session = JSON.parse(data)
  // }

}