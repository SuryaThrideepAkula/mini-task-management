import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { toggleModal } from './store/taskSlice';
import { TaskCard } from './components/TaskCard';
import { TaskForm } from './components/TaskForm';



export default function App() {
  const { tasks, isModalOpen } = useSelector((state: RootState) => state.taskManager);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black tracking-tight">Task System</h1>
            <p className="text-slate-500">You have {tasks.length} active tasks.</p>
          </div>
          <button
            onClick={() => dispatch(toggleModal())}
            className="w-full md:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-indigo-100"
          >
            + Create New Task
          </button>
        </header>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map(task => <TaskCard key={task.id} task={task} />)}
        </div>
      </div>

      {isModalOpen && <TaskForm />}
    </div>
  );
}
