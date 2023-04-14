import { Component, Inject, OnInit} from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import {MatDialogRef,  MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.css']
})
export class ModalUsuarioComponent implements OnInit{

  usuario: Usuario = new Usuario();

  constructor(public dialogRef: MatDialogRef<ModalUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    this.dialogRef.close(this.data);
  }

}
