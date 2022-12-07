import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `{{ now }}`
})
export class AppComponent {
    public now: Date = new Date();

    constructor() {
        setInterval(() => {
          this.now = new Date();
        }, 1);
    }
}
