// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));


// import { bootstrapApplication } from '@angular/platform-browser';
// import { importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideHttpClient } from '@angular/common/http';
// import { IonicModule } from '@ionic/angular';

// import { AppComponent } from './app/app.component';
// import { routes } from './app/app.routes';

// import { initializeApp } from '@angular/fire/app';
// import { provideFirebaseApp } from '@angular/fire/app';
// import { provideAuth } from '@angular/fire/auth';
// import { provideFirestore } from '@angular/fire/firestore';
// import { environment } from './environments/environment';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(IonicModule.forRoot({ mode: 'md' }),AngularFireModule.initializeApp(environment.firebaseConfig),
//       AngularFireAuthModule,
//       AngularFirestoreModule),
//     provideRouter(routes),
//     provideHttpClient(),
//     provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
//     provideAuth(() => getAuth()),
//     provideFirestore(() => getFirestore()), 
//   ]
// }).catch(err => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

import { initializeApp } from '@angular/fire/app';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { provideFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { FirebaseService } from './app/services/firebase.service';
import { TemasService } from './app/services/temas.service';
import { UtilsService } from './app/services/utils.service';
import { SpotifyService } from './app/services/spotify.service';
import { CambiarTemasComponent } from './app/shared/components/cambiar-temas/cambiar-temas.component';


bootstrapApplication(AppComponent, {
  providers: [
    FirebaseService,
    TemasService,
    UtilsService,
    SpotifyService,
    CambiarTemasComponent,

    importProvidersFrom(IonicModule.forRoot({ mode: 'md' }),AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireAuthModule,
      AngularFirestoreModule),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()), 
  ]
}).catch(err => console.error(err));