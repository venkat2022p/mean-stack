import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  subject: any = new Subject<any>();

  constructor() { }

  onSubmit() {
    let arr: any = [];
    let i =0;
    setInterval(()=>{
      arr.push(i)
      this.subject.next(arr);
      i++
    }, 5000)
    // this.subject.next(2);
    // this.subject.next(3);
    // this.subject.next(4);
  }
  onSubscription() {

    this.subject.subscribe({
      next: (v: any) => console.log(`observerA: ${v}`),
    });
  }
}
