#ng-herorouter

Angular.IO Routerexample with Angular-Cli Buildprocess.
##Migration steps:


Delete src/app files
Copy src app-files from source

Change main.ts: 
``` javascript
import { AppModule } from './app/app.module';
```

Change app.component.ts
``` javascript
@Component({
  selector: 'app-root',
```