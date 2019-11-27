import { Component, OnInit } from '@angular/core';
import { BuscaService } from '../../services/busca.service';

@Component({
    selector: 'app-edicao',
    templateUrl: './edicao.page.html',
    styleUrls: ['./edicao.page.scss'],
})
export class EdicaoPage implements OnInit {
    descricao: string;
    especialidade: string;
    tel: number;
    id: number;
    titulo: string;
    imagem: string;
    constructor(private BusSer: BuscaService) { }
    ngOnInit() {
    }

    removerRegistro(rowID) {
        console.log(rowID);
        this.BusSer.excluir(rowID);
    }

    editarAnuncio(record) {
        record.isEdit = true;
        record.EditNome = record.nome;
        record.EditIdade = record.idade;
        record.EditCidade = record.cidade;
        record.EditEmail = record.email;
    }

    atualizarAnuncio(recordRow) {
        let record = {};
        record['descricao'] = recordRow.EditNome;
        record['especialidade'] = recordRow.EditIdade;
        record['tel'] = recordRow.EditCidade;
        record['titulo'] = recordRow.EditEmail;
        this.BusSer.alterar(recordRow.id, record);
        recordRow.isEdit = false;
    }
    criarAnuncio() {
        let record = {};
        record['descricao'] = this.descricao;
        record['especialidade'] = this.especialidade;
        record['tel'] = this.tel;
        record['titulo'] = this.titulo;

        this.BusSer.criar(record).then(resp => {
            this.descricao = "";
            this.especialidade = undefined;
            this.tel = undefined;
            this.titulo = "";
            console.log(resp);
        })
            .catch(error => {
                console.log(error);

            });
    }
}
