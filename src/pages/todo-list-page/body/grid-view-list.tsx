import React from 'react';
import styles from './grid-view-list.module.css';
import { Todo } from '../../../model/todo';

type GridViewListProps = {
    todos: Todo[];
}

const GridViewList = (props: GridViewListProps) => (
    <div className={styles.gridView}>
        {props.todos.map(todo => (
            <div key={todo.id} className={styles.gridViewItem}>
                {todo.title}
            </div>
        ))}
    </div>
);

export default GridViewList;