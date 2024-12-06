import React, { useState } from "react";
import axios from "axios";
import "./FormularioProduto.css";

const URL_API = "http://localhost:3000";

export default function FormularioProduto() {
  // Estados do formulário
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (event) => { // envio do form
    event.preventDefault();

    if(!nome || !preco || !descricao) {
      setMensagem("Todos os campos são obrigatórios!");
      return;
    } else if(preco <= 0) {
      setMensagem("O preço deve ser um valor positivo.");
      return;
    }

    try {
      // Envia os dados para a API
      const response = await axios.post(`${URL_API}/produtos`, {
        nome,
        preco: parseFloat(preco).toFixed(2), // Garante duas casas decimais
        descricao,
      });

      // Exibe mensagem de sucesso
      setMensagem("[*] Produto cadastrado com sucesso!");
      console.log(response.data);

      setNome(""); setPreco(""); setDescricao("");
    } catch (error) {
      // Trata erros e exibe mensagem de erro
      setMensagem("[!] Erro ao cadastrar o produto.");
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <h1>Cadastro de Produtos</h1>

      {mensagem && <p className="mensagem">{mensagem}</p>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome do produto"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="preco">Preço:</label>
          <input
            type="number"
            id="preco"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            placeholder="Preço"
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição"
            required
          />
        </div>

        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
}
