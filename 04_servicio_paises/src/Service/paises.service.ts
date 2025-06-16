import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Pais } from 'src/Model/Pais';


@Injectable()
export class PaisesService {
  urlGlobal:string="https://restcountries.com/v2/all?fields=name,region,flag,population,capital";
 

  async findByContinente(continente:string):Promise<Pais[]>{
   const response=await axios.get(this.urlGlobal);
   const data: any = response.data;
   const paises:Pais[]=data.filter(p=>p.region==continente)
        .map(p=>new Pais(p.name,p.region,p.population,p.capital,p.flag));
   return paises;
    
  }

  //Promesa con await para esperar el resultado, que devuelve tb una promesa como resultado no un resultado concreto
  async findAllContinente():Promise<string[]>{
    const response = await axios.get(this.urlGlobal);
    const data: any = response.data;
    const regions:string[]=data  //el json de la respuesta
    .map(p=>p.region); // array de strings con los nombres de continente pero suplicados
    return [...new Set(regions)] // sin duplicados
  }
  async findPoblacionMax(): Promise<Pais>{
    const response = await axios.get(this.urlGlobal);
    const data: any = response.data;
    const paisPoblacionMax:Pais[] = data.map(p=> new Pais(p.name,p.region,p.population,p.capital,p.flag));
    //Aqui va mirando la poblacion y las va comparando para encontrar la maxima
    return paisPoblacionMax.reduce((poblacionMayor, poblacionActual)=>{
      if (poblacionActual.poblacion>poblacionMayor.poblacion){
        return poblacionActual;
      }else{
        return poblacionMayor;
      }
    });
  }
}
