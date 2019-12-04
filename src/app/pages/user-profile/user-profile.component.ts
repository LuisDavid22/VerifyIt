import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
 analizando:string = "none";

 
  constructor(private router:Router) { }

  ngOnInit() {
  }

analizarCandidato(){
this.analizando = "inline-block";

setTimeout(this.cambiarEstado, 7000,this.router);

 console.log(this.analizando);
}

cambiarEstado(ruta:Router){
  ruta.navigate(['/reporte']);
}

}
