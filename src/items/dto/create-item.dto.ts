/*Se encarga de validar/tratar los datos que se van a tranferir 
desde el controlador al service y luego posteriormente
van a pasar a la capa de datos que va a conectar con la base de datos, 
se envien de forma correcta.
*/

import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateItemDto {

    @IsNotEmpty()
    name: string;

    @IsNumber()
    price: number;
    
    @IsNotEmpty()
    description: string;
}
