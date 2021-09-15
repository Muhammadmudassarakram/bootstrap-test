import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() printChild = new EventEmitter<{counter:number, countIs:string}>();
  public counter: number = 0;
  @Input()  public parentName: string;
  public nameOfCount:string ='Counter';

  constructor() { }

  ngOnInit(): void { }

  public printNumber(){
    this.counter = this.counter+1 ;
    this.printChild.emit({counter:this.counter, countIs:this.nameOfCount});
  }

}
