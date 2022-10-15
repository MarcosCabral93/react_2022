import { useState } from 'react';
import { TodoListItem } from './todolistitem';

export function TodoList() {
    const lista = [
        { name: 'Tarefa 1', isComplete: true },
        { name: 'Tarefa 2', isComplete: true },
        { name: 'Tarefa 3', isComplete: true },
        { name: 'Tarefa 4', isComplete: true },
    ];
    const [items, setItems] = useState(lista);
    const [taskValue, setTaskValue] = useState("");

    function  handleTaskSubmit (event){
        event.preventDefault();
        if (items.find(i => i.name === taskValue)) {
            alert("esta tarefa já existe!")
            return;
        }

        setItems([...items, { name: taskValue, isComplete: false }])
        setTaskValue('')
       
    }

    function  handleOnTaskChanged (event, item){
        setItems(items.map(i => {
            if (i.name === item.name) {
                return {
                    ...i,
                    isComplete: event.target.checked
                }
            }

            return i;
        }))
    }

    return (
        <div className="todo-list-container">
            <p>Você conclui um total de {items.filter(i => i.isComplete).length} tarefas</p>
            <form onSubmit={handleTaskSubmit}>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={taskValue}
                    onChange={(event) => setTaskValue(event.target.value)}
                />
                <button type="submit">Adicionar tarefa</button>
            </form>
            <ul>
                {items.map((item) => (
                    <TodoListItem onTaskChanged={handleOnTaskChanged} item={item} />
                ))}
            </ul>
        </div>
    );
};
