import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { LoggingService } from "../logging.service";

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: "", component: ShoppingListComponent }]),
  ],
  // providers: [LoggingService],
})
export class ShoppingListModule {}
