import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-btn-start',
  imports: [RouterLink , TranslateModule],
  templateUrl: './btn-start.html',
  styleUrl: './btn-start.scss'
})
export class BtnStart {

}
