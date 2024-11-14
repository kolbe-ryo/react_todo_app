import { DndContext, DragEndEvent, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todosReducer } from '../../../../../application/state/todo-state';
import { TodoUsecase } from '../../../../../application/usecase/todo/todo-usecase';
import Status from '../../../../../domain/todo/value-object/status';
import { TodoContext } from '../../../../../infrastructure/di';
import { RootState } from '../../../../../redux/store';
import Droppable from '../../../../components/droppable/droppable';
import GridViewList from '../grid-view-list/grid-view-list';

// TODO: コメント追加など行うこと
export const StatusArea = () => {
    // DI
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

        console.log('updateStatus: ', activeTodo);

        const updateTodos = await usecase.updateTodo(activeTodo);
        dispatch(todosReducer(updateTodos));
    }

    const mouseSensor = useSensor(MouseSensor, {
        // 指定のpx以上動かないとドラッグと判定しない
        // この制約を加えないと、カード用をタップできない
        activationConstraint: { distance: 15 },
    });

    const sensors = useSensors(mouseSensor);

    // ドラッグアンドドロップイベント
    const onDragEnd = async (event: DragEndEvent): Promise<void> => {
        const { over, active } = event;
        console.log('Drag End', over?.id, active.id);
        if (over === null || active.data.current === null) {
            return;
        };
        console.log('Drag End OK');

        // active: ドラッグしているTodo
        // over  : ドロップ先エリア
        await updateStatus(active.id.toString(), over.id as Status);
    };

    // 初回のみ実行したいので、空の配列を第二引数に渡す
    useEffect(() => {
        fetchTodos();
        // eslint-disable-next-line
    }, []);

    // TODO: 上部にそれぞれ何件のTODOがあるかつける
    return (
        <DndContext onDragEnd={onDragEnd} sensors={sensors}>
            <Stack direction="row" spacing={1} sx={{ justifyContent: "space-around" }}>
                <Droppable id={Status.todo}>
                    <GridViewList status={Status.todo} />
                </Droppable>
                <Divider orientation="vertical" flexItem ></Divider>
                <Droppable id={Status.progress}>
                    <GridViewList status={Status.progress} />
                </Droppable>
                <Divider orientation="vertical" flexItem />
                <Droppable id={Status.done}>
                    <GridViewList status={Status.done} />
                </Droppable>
            </Stack>
        </DndContext>
    );
};

export default StatusArea;