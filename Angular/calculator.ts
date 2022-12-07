
<div class="container-fluid">
 
  <div class="jumbotron col-sm-4 p-2 m-0 bg-inverse">
 
    <h1 class="text-center">Angular Calculator</h1>
 
    //Displays the User Input
    <div class="input-group input-group-sm col-sm-12 m-0 p-0">
      <div class="col-sm-12 form-control text-lg-right" type="text">{{input}}</div>
    </div>
 
    //Displays the Results
    <div class="input-group input-group-sm col-sm-12 m-0 p-0">
      <div class="form-control text-sm-right" type="text">{{result}}</div>
    </div>
 
    <div class="col-sm-12 p-1 m-0">
      <button class="btn btn-info col-sm-6" type="button" (click)="allClear()">C</button>
      <button class="btn btn-warning col-sm-3" type="button" (click)="clear()">x</button>
      <button class="btn btn-secondary col-sm-3" type="button" (click)="pressOperator('/')">/</button>
    </div>
 
    <div class="col-sm-12 p-1 m-0">
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button" (click)="pressNum('7')">7</button>
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button" (click)="pressNum('8')">8</button>
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button" (click)="pressNum('9')">9</button>
      <button class="btn btn-lg btn-secondary col-sm-3 p-1" type="button" (click)="pressOperator('*')">X</button>
    </div>
    <div class="col-sm-12 p-1 m-0">
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button" (click)="pressNum('4')">4</button>
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button" (click)="pressNum('5')">5</button>
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button" (click)="pressNum('6')">6</button>
      <button class="btn btn-lg btn-secondary col-sm-3 p-1" type="button" (click)="pressOperator('-')">-</button>
    </div>
    <div class="col-sm-12 p-1 m-0">
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button" (click)="pressNum('1')">1</button>
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button" (click)="pressNum('2')">2</button>
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button" (click)="pressNum('3')">3</button>
      <button class="btn btn-lg btn-secondary col-sm-3 p-1" type="button" (click)="pressOperator('+')">+</button>
    </div>
    <div class="col-sm-12 p-1 m-0">
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button" (click)="pressNum('.')">.</button>
      <button class="btn btn-lg btn-outline-secondary col-sm-3 p-1" type="button" (click)="pressNum('0')">0</button>
      <button class="btn btn-lg btn-success col-sm-6 p-1" type="button" (click)="getAnswer()">=</button>
    </div>
 
  </div>
