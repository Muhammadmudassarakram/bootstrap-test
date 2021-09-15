import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
public interval: any ;
@Output() intervalEventFired = new EventEmitter<number>();
public lastNumber: number=0;
  constructor() { }

  ngOnInit(): void {
  }
  

  public onStartGame(){
    this.interval = setInterval(()=>{
      this.intervalEventFired.emit(this.lastNumber + 1)
      this.lastNumber ++;
    }, 1000);
  }

  public onPauseGame(){
    clearInterval(this.interval);
  }
}
