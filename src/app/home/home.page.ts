import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text="";
  value=0;
  constructor(public tts:TextToSpeech)
   {}
   textToSpeech()
   {
    console.log(this.text);
    this.value += this.value+1;
    this.tts.speak(this.text)
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
   }
   pause()
   {
     this.tts.stop().then(()=>console.log('Success')).catch((reason:any)=>console.log(reason));
   }

}
