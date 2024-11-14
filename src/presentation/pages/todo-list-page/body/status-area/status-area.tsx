import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { todosReducer } from '../../../../../application/state/todo-state';
import { TodoUsecase } from '../../../../../application/usecase/todo/todo-usecase';
import Status from '../../../../../domain/todo/value-object/status';
import { TodoContext } from '../../../../../infrastructure/di';
import Droppable from '../../../../components/droppable/droppable';
import GridViewList from '../grid-view-list/grid-view-list';

export const StatusArea = () => {
    // DI
    const dispatch = useDispatch();
    const usecase = new TodoUsecase(useContext(TodoContext));
    // const todos = useSelector((state: RootState) => state.todos.value);

    // // 選択されたTodoを管理するstate
    // // todoが選択されたかどうかはnullか否かで判断する
    // const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const fetchTodos = async (): Promise<void> => {
        const todos = await usecase.fetchTodos();
        dispatch(todosReducer(todos));
    }

    // const updateTodo = async (updatedTodo: Todo): Promise<void> => {
    //     const todos = await usecase.updateTodo(updatedTodo);
    //     dispatch(todosReducer(todos));
    //     setSelectedTodo(null);
    // }

    // 初回のみ実行したいので、空の配列を第二引数に渡す
    useEffect(() => {
        fetchTodos();
        // eslint-disable-next-line
    }, []);

    return (
        <Stack direction="row" spacing={1} sx={{ justifyContent: "space-evenly" }}>
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
        // <div className={styles.gridView}>
        //     {todos.map(todo => (
        //         <TodoCard
        //             key={todo.getId()}
        //             todo={todo}
        //             onTap={setSelectedTodo}
        //         />
        //     ))}
        //     {/* // todoが選択された場合のみModalを表示する */}
        //     {selectedTodo &&
        //         <Modal
        //             initialTodo={selectedTodo}
        //             onClose={() => setSelectedTodo(null)}
        //             onUpdate={updateTodo}
        //         />}
        // </div>
    );
};

export default StatusArea;