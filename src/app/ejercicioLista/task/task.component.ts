
import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  public nombre:string='';
  public estado:boolean=false;
  public fecha:Date=new Date();

  
}
