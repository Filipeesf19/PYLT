import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import BudgetPage from "./pages/BudgetPage";
import HabitsPage from "./pages/HabitsPage";
import GoalsPage from "./pages/GoalsPage";
import SelfAwarenessPage from "./pages/SelfAwarenessPage";
import TasksPage from "./pages/TasksPage";
import MealPrepPage from "./pages/MealPrepPage";
import { weekFormat } from "./utils/calculations";

weekFormat();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="budget" element={<BudgetPage />} />
          <Route path="habits" element={<HabitsPage />} />
          <Route path="goals" element={<GoalsPage />} />
          <Route path="self_awareness" element={<SelfAwarenessPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="meal_prep" element={<MealPrepPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
