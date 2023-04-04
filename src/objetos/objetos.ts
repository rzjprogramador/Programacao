import { ConceitoExemplo } from "./../utils/contracts/conceitos.ts";
import { StaticsObjects } from "../utils/statics/statics.objects.ts";

interface ObjetosArgs {
  nome: string;
  extrair_membros: ConceitoExemplo;
  criacao_obj_apartir_de_copia: ConceitoExemplo;
}

export class Objetos {
  constructor(private readonly args: ObjetosArgs) {
    this.args.extrair_membros.conceito = StaticsObjects.desestruturacao;
  }
}
