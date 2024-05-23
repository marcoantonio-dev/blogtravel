import React from "react"; 
import styles from "./Produto.module.css"; 
import { useState, useEffect } from "react"; 

const Produto = () => { 

  return ( 
    <div> 
      <h1>Cadastrar Produto</h1> 
      <form> 
        <label> 
            <span> 
                Nome: 
            </span> 
            <input type="text" name="displayName" required placeholder="Nome do Produto" /> 
        </label> 
        <label> 
            <span> 
                Tipo: 
            </span> 
            <input type="text" name="displayProduto" required placeholder="Tipo do Produto" /> 
        </label> 
        <label> 
            <span> 
                Marca: 
            </span> 
            <input type="text" name="displayMarca" required placeholder="Cor do Produto" /> 
        </label> 
        <label> 
            <span> 
                Preço: 
            </span> 
            <input type="text" name="displayPreco" required placeholder="Preço do Produto" /> 
        </label> 
        <button className="btn"> 
            Cadastrar Produto
        </button> 
      </form> 
    </div> 
  ); 
}; 
export default Produto; 