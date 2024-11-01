import React from 'react';
import styles from './grid-view-list.module.css';
import { Todo } from '../../../model/todo';
import TodoCard from '../../../components/todo-card/todo-card';

type GridViewListProps = {
    todos: Todo[];
}

const GridViewList = (props: GridViewListProps) => (

    <div className={styles.gridView}>
        {props.todos.map(todo => (
            <TodoCard key={todo.id} todo={todo} onDelete={() => console.log("delete")} onEdit={() => console.log("edit")} />
        ))}
    </div>
);

export default GridViewList;