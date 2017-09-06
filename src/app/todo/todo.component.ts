import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css', './abc.css']
})
export class TodoComponent implements OnInit {

  todolist: string[];
  todolisttwo: string[];
  Deletelist: string[];
  Starlist: string[];
  but: boolean;
  noitem: boolean;
  flag: boolean;
  flagrev: boolean;


  constructor() { 
    this.todolist=['I have to finish this', 'I will Visit Paris', 'I will become an Astronaut'];
    this.todolisttwo=['I have to finish this'];
    this.Deletelist = [''];
    this.Starlist = [''];
    this.but=false;
    this.noitem=false;
    this.flag=true;
    this.flagrev=false;
  
  }

  addListItems(listitem){
    if (listitem != "")
      {
        this.todolist.push(listitem);
        this.noitem=false;
       
      }
      else{
        this.todolist.splice(listitem,-1);
      }
  }

  DeleteListItems(i,listitem){
    this.Deletelist.push(listitem);
    this.but=true;
    this.todolist.splice(i, 1);
  }

  AddDeletedListItems(i,dellistitem){
    this.todolist.push(dellistitem);
    this.Deletelist.splice(i, 1);
  }

  DeleteListItemsPerm(i,dellistitem){
    this.Deletelist.splice(i, 1);
  }



  StarListItems(i,listitem,flag){
          this.Starlist.push(listitem);
          this.flag = false;
          }

  UnsStarListItems(i,staritem){
        this.Starlist.splice(i,1);
  }

    


/*
  StarListItems(i,listitem){
    this.flag.=true;
    if(flag == true){
      this.Starlist.push(listitem);
    }
  }

  */
  
  ngOnInit() {
  }

}
