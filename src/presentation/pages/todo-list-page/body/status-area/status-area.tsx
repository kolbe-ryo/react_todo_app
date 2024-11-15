import { DndContext, DragEndEvent, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todosReducer } from '../../../../../application/state/todo-state';
import { TodoUsecase } from '../../../../../application/usecase/todo-usecase';
import Status from '../../../../../domain/todo/value-object/status';
import { TodoContext } from '../../../../../infrastructure/di';
import { RootState } from '../../../../../redux/store';
import Droppable from '../../../../components/droppable/droppable';

/**
 * ステータスエリアコンポーネント
 * 
 * @description
 * このコンポーネントは、Todoリストのステータスエリアを表示し、ドラッグアンドドロップによるステータスの更新を行います。
 * 
 * @returns {JSX.Element} ステータスエリアのJSX要素
 * 
 */
export const StatusArea = () => {
    const dispatch = useDispatch();
    const usecase = new TodoUsecase(useContext(TodoContext));

    const todos = useSelector((state: RootState) => state.todos.value);

    const fetchTodos = async (): Promise<void> => {
        const fetchTodos = await usecase.fetchTodos();
        dispatch(todosReducer(fetchTodos));
    }

    const updateStatus = async (id: string, status: Status): Promise<void> => {
        const activeTodo = todos.find((todo) => todo.getId() === id)?.updateStatus(status);
        if (!activeTodo) {
            return;
        };
        const updateTodos = await usecase.updateTodo(activeTodo);
        dispatch(todosReducer(updateTodos));
    }

    // useSensorを用いて指定のpx以上動かないとドラッグと判定しないようにする
    // この制約を加えないと、カード用をタップできない
    const mouseSensor = useSensor(MouseSensor, {
        activationConstraint: { distance: 15 },
    });
    const sensors = useSensors(mouseSensor);

    // ドラッグアンドドロップしたら該当のTodoのステータスを更新する
    const onDragEnd = async (event: DragEndEvent): Promise<void> => {
        // active: ドラッグしているTodo
        // over  : ドロップ先エリア
        const { over, active } = event;
        console.log('onDragEnd', over?.id, active.id);
        if (over === null || active.data.current === null) {
            return;
        };
        await updateStatus(active.id.toString(), over.id as Status);
    };

    // 初回のみ実行したいので、空の配列を第二引数に渡す
    useEffect(() => {
        fetchTodos();
        // eslint-disable-next-line
    }, []);

    return (
        <DndContext onDragEnd={onDragEnd} sensors={sensors}>
            <Stack direction="row" spacing={1} sx={{ justifyContent: "space-around" }}>
                <Droppable id={Status.todo} />
                <Divider orientation="vertical" flexItem ></Divider>
                <Droppable id={Status.progress} />
                <Divider orientation="vertical" flexItem />
                <Droppable id={Status.done} />
            </Stack>
        </DndContext>
    );
};

export default StatusArea;