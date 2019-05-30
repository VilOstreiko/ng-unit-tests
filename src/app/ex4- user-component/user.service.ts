import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class UserService {
  private url = 'http://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient
  ) {
  }

  getUsers() {
    return this.http.get(this.url)
      .pipe(map(res => res));
  }

  getUser(userId) {
    return this.http.get(this.getUserUrl(userId))
      .pipe(map(res => res));
  }

  addUser(user) {
    return this.http.post(this.url, JSON.stringify(user))
      .pipe(map(res => res));
  }

  updateUser(user) {
    return this.http.put(this.getUserUrl(user.id), JSON.stringify(user))
      .pipe(map(res => res));
  }

  deleteUser(userId) {
    return this.http.delete(this.getUserUrl(userId))
      .pipe(map(res => res));
  }

  private getUserUrl(userId) {
    return `${this.url}/${userId}`;
  }
}
