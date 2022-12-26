import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public appPages = [
    { title: 'Home', url: '', icon: 'home' },
    { title: 'Chamados', url: '/folder/Chamado', icon: 'alert' },
    { title: 'Meu Cadastro', url: '/folder/Meu Cadastro', icon: 'browsers' },
    { title: 'Contato', url: '/folder/Contato', icon: 'mail' },

  ];
  public labels = ['Site PMDF', 'Site Bombeiros', 'Sobre Nós', 'Instagram', 'Whatsapp'];
  constructor() {}
  ngOnInit() {
  }

}
