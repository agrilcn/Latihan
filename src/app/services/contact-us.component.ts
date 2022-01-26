import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
selector: 'app-contact-us',
templateUrl: './contact-us.component.html',
stylUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit{
contactForm: FormGroup;
constructor(){}
}

ngOnInit() {
this.contactForm = new FormGroup({
'username'   :new FormControl(null, [Validators.required,this.blankSpaces]),
'useremail'  :new FormControl(null, [Validators.required,Validators.email]),
'usermassage';new FormControl(null, [Validators.required])
});
}
blankSpaces(control: FormControl): {[s: string]: boolean}{
if(control.value != null && control.value.trim().length === 0){
return{'blankSpaces': true};
}
return null;
}


onSubmit(){
console.log(this.contactForm);

}
