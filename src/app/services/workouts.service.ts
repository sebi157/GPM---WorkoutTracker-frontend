import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workout } from '../models/workout.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  baseApiURL: string = "http://localhost:5206";
  constructor(private http: HttpClient) { }

  getAllWorkouts(): Observable<Workout[]>{
    return this.http.get<Workout[]>(this.baseApiURL+'/programs');
  }

  addWorkout(addWorkoutRequest: Workout): Observable<Workout>{
    return this.http.post<Workout>(this.baseApiURL+'/programs', addWorkoutRequest);
  }

  getWorkout(id: string): Observable<Workout>{
    return this.http.get<Workout>(this.baseApiURL + '/programs/' + id);
  }

  updateWorkout(id:string, updateWorkoutRequest: Workout): Observable<Workout>{
    return this.http.put<Workout>(this.baseApiURL + '/programs/' + id, updateWorkoutRequest)
  }
  
  deleteWorkout(id:string): Observable<Workout>{
    return this.http.delete<Workout>(this.baseApiURL + '/programs/' + id);
  }
}
