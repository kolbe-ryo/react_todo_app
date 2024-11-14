import { FC, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todosReducer } from "../../../../../application/state/todo-state";
import { TodoUsecase } from "../../../../../application/usecase/todo/todo-usecase";
import { Todo } from "../../../../../domain/todo/todo";
import Status from "../../../../../domain/todo/value-object/status";
import { TodoContext } from "../../../../../infrastructure/di";
import { RootState } from "../../../../../redux/store";
import TodoCard from '../../../../components/todo-card/todo-card';
import Modal from "../../../../components/todo-modal/todo-modal";


type GridViewListProps = {
    status: Status;
};

// TODO: GridViewである必要なし。cssと命名の再検討
export const GridViewList: FC<GridViewListProps> = ({ status }) => {
    // DI
    const dispatch = useDispatch();
    const usecase = new TodoUsecase(useContext(TodoContext));

    // statusと一致するtodoのみ抽出する
    const todos = useSelector((state: RootState) => state.todos.value);
    const filteredTodos = todos.filter(todo => todo.getStatus() === status);

    // 選択されたTodoを管理するstate
    // todoが選択されたかどうかはnullか否かで判断する
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const updateTodo = async (updatedTodo: Todo): Promise<void> => {
        const todos = await usecase.updateTodo(updatedTodo);
        dispatch(todosReducer(todos));
        setSelectedTodo(null);
    }

    return (
        <div>
            {filteredTodos.map(todo => (
                <TodoCard
                    key={todo.getId()}
                    todo={todo}
                    onTap={setSelectedTodo}
                />
            ))}
            {/* // todoが選択された場合のみModalを表示する */}
            {selectedTodo &&
                <Modal
                    initialTodo={selectedTodo}
                    onClose={() => setSelectedTodo(null)}
                    onUpdate={updateTodo}
                />}
        </div>
    );
};

export default GridViewList;