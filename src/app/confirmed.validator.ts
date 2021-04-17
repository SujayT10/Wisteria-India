import { AbstractControl, FormGroup } from '@angular/forms';



export function confirmedValidator(pass: string, cpass: string){
  return (form: FormGroup) => {
      const control = form.controls[pass];
      const matchingControl = form.controls[cpass];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}

