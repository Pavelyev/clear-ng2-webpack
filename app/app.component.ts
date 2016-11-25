import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: require('./app.template.html'),
    styles: [require('./app.style.css')]
})
export class AppComponent { name = 'Angular'; }
