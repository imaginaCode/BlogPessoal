import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: Usuario = new Usuario()
  senha: string

  constructor(
    private authServuce: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }
  conferirSenha(event: any) {
    this.senha = event.target.value

  }

  cadastrar() {
    if (this.senha === this.user.senha) {
      this.authServuce.cadastrar(this.user).subscribe((resp: Usuario) => {
        this.user = resp
        this.router.navigate(['/login'])
        alert('Usuario cadastrado com sucesso!')

      })
    } else {
      alert('Suas senhas nao conferem')
    }





  }

}
