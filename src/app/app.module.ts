import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
/* Agregamos aquí la importación necesaria */
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  /* Aquí inyectamos la dependencia agregando "FormsModule" a "imports" */
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
