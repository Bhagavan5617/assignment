import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
interface User {
  firstName: string;
  lastName: string;
  adress: string;
  city: string;
  state: string;
  email: string;
  phone: string;
}
@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  private apiUrl = 'http://ilandertech.com/api/index.php/Welcome/getStuUsers';

  public data: any[] = [];
  UserData: User = {
    firstName: '',
    lastName: '',
    adress: '',
    city: '',
    state: '',
    email: '',
    phone: '',
  };

  constructor(public http: HttpClient) {}
  getData(): Observable<any> {
    const url = `${this.apiUrl}/your-endpoint`;
    return this.http.get(url);
  }
  getDataWithPagination(page: number, pageSize: number): Observable<any> {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const url = `${this.apiUrl}/your-endpoint`;
    return this.http.get(url).pipe(
      map((data: any) => {
        const paginatedData = data.slice(startIndex, endIndex);
        return {
          data: paginatedData,
          totalRecords: data.length,
        };
      })
    );
  }
  addUser() {
    const endpoint =
      'http://ilandertech.com/api/index.php/Welcome/AddStuRegister';

    return this.http.post(endpoint, this.data);
  }
    addNewUser(formData: any) {
    this.UserData = formData;
    return this.http.post(
      'http://localhost:8080/login/customers/id',
      this.UserData
    );
  }
  getUserData() {
    return this.http.get('http://localhost:8080/login/customers');
  }
  deleteUser(userId: number): Observable<any> {
    const endpoint = `http://localhost:8080/login/customers/${userId}`;
    return this.http.delete(endpoint);
  }
  updateUser(userId: any) {
    const endpoint = `http://localhost:8080/login/customers/${userId}`;
    return this.http.put(endpoint, this.UserData);
  }
  getUserById(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }
}
