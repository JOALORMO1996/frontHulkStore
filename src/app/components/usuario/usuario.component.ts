import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalUsuarioComponent } from './modal-usuario/modal-usuario.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{

  displayedColumns = ['id','nombre','email'];
  dataSource: MatTableDataSource<Usuario>

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Usuario>([]);
   }

   openModal(): void {
    const dialogRef = this.dialog.open(ModalUsuarioComponent, {
      width: '250px',
      data: { title: 'Modal title', name: '', password: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  ngOnInit(): void {
    // Lógica que se ejecutará al inicializar el componente
  }

}

