import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: number) {
    return this.httpClient.get(`${environment.apiUrl}/users/${id}`);
  }

  register(user: User) {
    return this.httpClient.post(`${environment.apiUrl}/users/register`, user);
  }

  update(user: User) {
    return this.httpClient.put(`${environment.apiUrl}/users/${user.id}`, user);
  }

  delete(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}/users/${id}`);
  }
}
