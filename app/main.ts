import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';


function main(){
    platformBrowserDynamic().bootstrapModule(AppModule);
}

// can't find correct typings
var am = module as any;
if(am.hot){
    am.hot.accept();
    main();
}