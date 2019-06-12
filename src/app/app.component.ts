import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  tipoSeleccionado: number = 0;
  tipos = [
    { id: 0, texto: "Citas", clase: "fa-user" },
    { id: 1, texto: "Pacientes", clase: "fa-calendar" }
  ];
}
