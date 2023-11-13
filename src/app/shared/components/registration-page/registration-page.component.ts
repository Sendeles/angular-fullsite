import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  public isFormValid(): boolean {
    console.log('this.form.valid', this.form.valid)
    return this.form.valid;
  }

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    pepYes: new FormControl(),
    pepNo: new FormControl(),
    pep: new FormControl('', Validators.required),
    sanction: new FormControl('', Validators.required),
    A: new FormControl(false),
    B: new FormControl(false),
    C: new FormControl(false),
    D: new FormControl(false),
    variants: new FormControl('', Validators.required),
    textarea: new FormControl('')
  });

  countries = ['USA', 'Canada', 'France', 'Ukraine', 'Poland', 'Lietuva', 'Latvia', 'Estonia'];


  onSubmit(): void {
    console.log(this.form.getRawValue());

  }

  ngOnInit(): void {

  }

  updatePep() {
    const pepYes = this.form.get('pepYes')?.value;
    const pepNo = this.form.get('pepNo')?.value;
    if (pepYes) {
      this.form.get('pep')?.setValue('Yes');
    } else if (pepNo) {
      this.form.get('pep')?.setValue('No');
    } else {
      this.form.get('pep')?.setValue('');
    }
    this.form.controls['pep'].markAsTouched();
  }

  updateVariants() {
    const A = this.form.get('A')?.value;
    const B = this.form.get('B')?.value;
    const C = this.form.get('C')?.value;
    const D = this.form.get('D')?.value;

    console.log(A);

    if (A) {
      this.form.get('variants')?.setValue('A');
    } else if (B) {
      this.form.get('variants')?.setValue('B');
    } else if (C) {
      this.form.get('variants')?.setValue('C');
    } else if (D) {
      this.form.get('variants')?.setValue('D');
    } else {
      this.form.get('variants')?.setValue('');
    }
    this.form.controls['variants'].markAsTouched();
    // this.form.markAllAsTouched();
  }
}
