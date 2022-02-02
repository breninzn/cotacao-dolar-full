

export class Cotacao{
    preco: number;
    data: Date | "dd/MM/yyyy";
    hora: String;
    diferenca: String | null = "";
    precoTexto: String = "";
    dataTexto: string | null= "";

    constructor(preco:number, data:Date, hora:String){
        this.preco = preco;
        this.data = data;
        this.hora = hora;
    }

}