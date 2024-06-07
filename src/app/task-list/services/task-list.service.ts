import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor() { }

  private http = inject(HttpClient); // Можно инициализировать в конструкторе
}
