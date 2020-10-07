import { Component,OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators,ReactiveFormsModule} from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
form = new FormGroup({
    'associatename' : new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
      Validators.pattern('[a-zA-Z ]*')  
    ]),
    'associateid' :new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
      Validators.pattern('[0-9]*') 
    ]),
    'projectid' : new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(12),
      Validators.pattern('[a-zA-Z0-9]*')
    ]),
    'checklist' : new FormControl('',[
      Validators.required
    ]),
    'uploadprofile' : new FormControl('',[
      Validators.required
    ]),
    'comments' : new FormControl('',[
      Validators.required
    ])

  })

  get associateid(){
    return this.form.get('associateid');
  }
  get projectid(){
    return this.form.get('projectid');
  }

  onSubmit(form: { value: string; }){
    console.log("Form Submitted Successfully..."+ form.value);
}
}