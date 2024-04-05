import {
  bulkTransaction,
  executeTransaction,
  writeTransaction,
} from './SQLiteDatabase';

export type Cliente = {
  idcliente: number;
  nome: string;
  telefone: string;
  endereco: string;
};

export default class ClienteRepository {
  constructor() {
    this.up();
  }

  public async up() {
    try {
      await bulkTransaction(
        `PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS clientes (
          idcliente INTEGER PRIMARY KEY AUTOINCREMENT,
          nome varchar(45) NOT NULL,
          telefone varchar(45) NOT NULL,
          endereco varchar(120) NOT NULL
        );`
      );
    } catch (error: any) {
      console.log(
        '[ClienteRepository] Erro ao verificar e criar tabela no banco de dados. Erro: ',
        error || error.message
      );
      return error;
    }
  }

  public async down() {
    try {
      await executeTransaction('DROP TABLE clientes;');
    } catch (error: any) {
      console.log(
        '[ClienteRepository] Erro ao deletar tabela no banco de dados. Erro: ',
        error || error.message
      );
      return error;
    }
  }

  async create(cliente: Cliente) {
    try {
      const result = await writeTransaction(
        `INSERT INTO clientes (nome, telefone, endereco) VALUES (?, ?, ?);`,
        [cliente.nome, cliente.telefone, cliente.endereco]
      );
      return result.lastInsertRowId;
    } catch (error: any) {
      console.log(
        '[ClienteRepository] Erro ao inserir registro no banco de dados. Erro: ',
        error || error.message
      );
      return error;
    }
  }

  public async update(cliente: Cliente) {
    try {
      const result = await writeTransaction(
        `UPDATE clientes
            SET
            nome = ?,
            telefone = ?,
            endereco = ?
            WHERE idcliente = ?;`,
        [cliente.nome, cliente.telefone, cliente.endereco, cliente.idcliente]
      );
      return result.changes;
    } catch (error: any) {
      console.log(
        '[ClienteRepository] Erro ao atualizar registro no banco de dados. Erro: ',
        error || error.message
      );
      return error;
    }
  }

  public async all() {
    try {
      const result = await executeTransaction('SELECT * FROM clientes;');
      return result;
    } catch (error: any) {
      console.log(
        '[ClienteRepository] Erro ao buscar registro no banco de dados. Erro: ',
        error || error.message
      );
      return error;
    }
  }

  public async getById(idcliente: number) {
    try {
      const result = await executeTransaction(
        'SELECT * FROM clientes WHERE idcliente = ?;',
        [idcliente]
      );
      return result;
    } catch (error: any) {
      console.log(
        '[ClienteRepository] Erro ao buscar registro no banco de dados. Erro: ',
        error || error.message
      );
      return error;
    }
  }

  public async remove(idcliente: number) {
    try {
      const result = await writeTransaction(
        'DELETE FROM clientes WHERE idcliente=?;',
        [idcliente]
      );
      return result.changes;
    } catch (error: any) {
      console.log(
        '[ClienteRepository] Erro ao remover registro no banco de dados. Erro: ',
        error || error.message
      );
      return error;
    }
  }
}
