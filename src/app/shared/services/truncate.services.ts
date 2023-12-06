import {Injectable} from "@angular/core";

// Это гарантирует, что сервис будет создан в корневом модуле и будет доступен во всем приложении.
@Injectable({
  providedIn: 'root',
})

export class TruncateServices {

  truncateText(content: string): string {
    return content.replace(/<[^>]*>/g, '');
  }

}
