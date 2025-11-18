import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CambiarTemasComponent } from './shared/components/cambiar-temas/cambiar-temas.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
    imports: [
    IonicModule,
    CambiarTemasComponent,
  ],
})
export class AppComponent {
  constructor(public router:Router) {
    this.initializeApp();
  }

  initializeApp(){
    this.router.navigateByUrl('splash');
  }
}
