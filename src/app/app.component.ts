import { Component } from '@angular/core';

function log(target: any, name: any, descriptor: any): void {
  console.log(target, name, descriptor);

  const original = descriptor.value || descriptor

  descriptor.value = function (...args: any[]): void {
    console.log(args);
    const result = original.apply(this, args)
    console.log(result);
    return result;
  }

  return descriptor
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'todo';

  constructor() {
    this.aSimpleMethod(10)
  }

  @log
  aSimpleMethod(a: any): any {
    console.log('hey')
    return a * a
  }
}
