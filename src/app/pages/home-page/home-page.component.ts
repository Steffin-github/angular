
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private api:ApiService) {}
  isStriked: boolean = false;
  toggleStrikethrough() {
    this.isStriked = !this.isStriked;
  }
todos: any;
ngOnInit(){
  this.api.getTodo().subscribe((data:any)=>{
    this.todos=data
  })
}
delete(id: any)
{
  this.todos=this.todos.filter((e:{id:any})=>e.id!=id)
}
}