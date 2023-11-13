import {NgModule} from "@angular/core";
import {AdminCreateComponent} from "./admin-create.component";
import {CommonModule} from "@angular/common";
import {AuthGuard} from "../../services/auth.guard";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    // AdminCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    // AdminCreateComponent
  ],
  providers: [AuthGuard]
})

export class AdminCreateModule {}
