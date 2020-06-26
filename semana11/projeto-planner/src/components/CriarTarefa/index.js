import React from 'react'
import '../../App.css'


const Form = () => {



    return (
        <div className='CadastrarTarefaDia'>
            <h3>Criar Tarefa - Projeto Labenu</h3>
            <form>
                <label>Nome da Tarefa</label>
                <input type = 'Text' placeholder = 'Exemplo: Reunião' required/>
                <label>Escolha o dia da semana</label>
                <select required>
                    <option value='domingo'>Domingo</option>  
                    <option value='segunda'>Segunda</option>
                    <option value='terca'>Terça</option>  
                    <option value='quarta'>Quarta</option>  
                    <option value='quinta'>Quinta</option>    
                    <option value='sexta'>Sexta</option>  
                    <option value='sabado'>Sabado</option>                        
                </select>     
                         
            </form>
            <button className='Btn BtnCadastrar'>cadastrar</button>   
        </div>
    )

}

export default Form