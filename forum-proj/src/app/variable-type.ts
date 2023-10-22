export class Utente {
  id: number;
  username : string;
  password: string;
  nome : string;
  cognome : string;
  sesso : string;
  eta : number;
  image: string;

  iscrizione: string;
  constructor(id: number, username: string, password: string, nome: string, cognome: string, sesso: string, eta: number, image: string, iscrizione: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.nome = nome;
    this.cognome = cognome;
    this.sesso = sesso;
    this.eta = eta;
    this.image = image;
    this.iscrizione = iscrizione;
  }
}

export class Comment{
  testo: string;
  autore: string;
  id: number;
  like: number[];
  dislike: number[];
  view?: boolean;
  parentid: number;
  answer?: boolean;
  commcounter: number;
  level: number;
  creato: string;

  constructor(id: number,testo: string, autore: string, parentid: number, like: number[], dislike: number[], level: number, creato: string) {
    this.testo = testo;
    this.autore = autore;
    this.id = id;
    this.like = like;
    this.dislike = dislike;
    this.view = false;
    this.parentid = parentid;
    this.answer = false;
    this.commcounter = 0;
    this.level = level;
    this.creato = creato;
  }
}

export class Thread{
  testo: string;
  autore: string;
  id: number;
  like: number[];
  dislike: number[];
  view?: boolean;
  titolo: string;
  expand?: boolean;
  answer?: boolean;
  commcounter: number;
  creato: string;

  constructor(id: number,title: string,testo: string, autore: string, like: number[], dislike: number[], creato: string) {
    this.testo = testo;
    this.autore = autore;
    this.id = id;
    this.like = like;
    this.dislike = dislike;
    this.view = true;
    this.titolo = title;
    this.expand = false;
    this.answer = false;
    this.commcounter = 0;
    this.creato = creato;
  }
}

export class Controller {
  autenticato: boolean;
  loginform: boolean;
  registform: boolean;
  pagectrl: number;
  newthread: boolean;

  constructor(autenticato: boolean, loginform: boolean, registform: boolean, pagectrl: number, newthread: boolean) {
    this.autenticato = autenticato;
    this.loginform = loginform;
    this.registform = registform;
    this.pagectrl = pagectrl;
    this.newthread = newthread;
  }
}
