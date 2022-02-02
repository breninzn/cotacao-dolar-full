import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Cotacao } from './cotacao';

@Injectable({ providedIn: 'root' })
export class CotacaoDolarService{
    private apiServerUrl = "http://localhost:8080";

    constructor(private http: HttpClient) {}

    public getCotacaoAtualeData(): Observable<String>{
        return this.http.get(`${this.apiServerUrl}/moeda/hoje`, {responseType: 'text'});
    }

    public getCotacaoAtual(): Observable<number>{
        return this.http.get<number>(`${this.apiServerUrl}/moeda`);
    }

    public getCotacaoPorPeriodo(dataInicial: String | null, dataFinal: String | null): Observable<Cotacao[]>{
        return this.http.get<Cotacao[]>(`${this.apiServerUrl}/moeda/${dataInicial}&${dataFinal}`);
    }

    public saveCotacao( data: string | null, cotacao: Cotacao){
        return this.http.post<String>(`${this.apiServerUrl}/moeda/save/${data}`, cotacao);
    }

}