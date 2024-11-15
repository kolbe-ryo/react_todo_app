import { FC, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { todosReducer } from "../../../../../application/state/todo-state";
import { TodoUsecase } from "../../../../../application/usecase/todo-usecase";
import { Todo } from "../../../../../domain/todo/todo";
import Status, { getStatusColor } from "../../../../../domain/todo/value-object/status";
import { TodoContext } from "../../../../../infrastructure/di";
import { RootState } from "../../../../../redux/store";
import { StatusIcon } from "../../../../components/status-icon/status-icon";
import TodoCard from '../../../../components/todo-card/todo-card';
import Modal from "../../../../components/todo-modal/todo-modal";


type ListViewProps = {
    status: Status;
};

export const ListView: FC<ListViewProps> = ({ status }) => {
    const dispatch = useDispatch();
    const usecase = new TodoUsecase(useContext(TodoContext));

    // statusと一致するtodoのみ抽出する
    const todos = useSelector((state: RootState) => state.todos.value);
    const filteredTodos = todos.filter(todo => todo.getStatus() === status);

    // 選択されたTodoを管理するstate
    // todoが選択されたかどうかはnullか否かで判断する
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    // Todo内容の更新Modalに渡すupdate関数
    const updateTodo = async (updatedTodo: Todo): Promise<void> => {
        const todos = await usecase.updateTodo(updatedTodo);
        dispatch(todosReducer(todos));
        setSelectedTodo(null);
    }

    return (
        <div>
            <Wrapper>
                <StatusIcon status={status} color={getStatusColor(status)} />
                {filteredTodos.length}
            </Wrapper>
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

const Wrapper = styled.div`
    text-align: center;
    padding-bottom: 20px;
`;

export default ListView;