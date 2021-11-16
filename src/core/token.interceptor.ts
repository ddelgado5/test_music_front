import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SessionStorageService } from "./sesion-storage.service";

/**
 * Intercept request and add token
*/
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        private sessionStorageService: SessionStorageService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const Authorization = this.sessionStorageService.get('token')
        if (Authorization) {            
            request = request.clone({
                setHeaders: {
                    Authorization
                },
            });
        }
        return next.handle(request)
    }
}