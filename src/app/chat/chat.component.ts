import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChatService} from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked, AfterViewInit {

  public mensagens: Object[] = [];
  public mensagemInserir: string;

  @ViewChild('scrollMe')private scrollContainer: ElementRef;

  constructor(private _chatService: ChatService) {
    this._chatService.server.on('messages',
     m => this.mensagens.push(m))
  }
    ngAfterViewInit() {
      this.scrollToBottom();
    }
    ngAfterViewChecked() {
      this.scrollToBottom();
    }

    private scrollToBottom(): void {
      try {this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight
      }catch(err) {}
      
    }

  public enviaMensagem(): void {
    
    let obj = {
      message: this.mensagemInserir,
      author: this._chatService.usuario,
    }

    this._chatService.server.emit("messages", obj);

    this.mensagemInserir = '';
  }

  public limpaMensagem(): void {
    this.mensagemInserir = '';
  }

}
