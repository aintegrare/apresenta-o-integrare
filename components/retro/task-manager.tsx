"use client"

import { useState, useEffect } from "react"
import { X, Check, Plus, Calendar, Clock } from "lucide-react"

interface Task {
  id: string
  title: string
  completed: boolean
  priority: "baixa" | "média" | "alta"
  category: string
  dueDate?: string
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState("")
  const [newTaskPriority, setNewTaskPriority] = useState<"baixa" | "média" | "alta">("média")
  const [newTaskCategory, setNewTaskCategory] = useState("Geral")
  const [newTaskDueDate, setNewTaskDueDate] = useState("")
  const [isMinimized, setIsMinimized] = useState(false)
  const [categories, setCategories] = useState(["Geral", "Marketing", "Design", "Desenvolvimento"])
  const [newCategory, setNewCategory] = useState("")
  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const [filterCategory, setFilterCategory] = useState("Todas")
  const [filterStatus, setFilterStatus] = useState("Todas")

  // Carregar tarefas do localStorage quando o componente montar
  useEffect(() => {
    const savedTasks = localStorage.getItem("retroTasks")
    const savedCategories = localStorage.getItem("retroCategories")

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }

    if (savedCategories) {
      setCategories(JSON.parse(savedCategories))
    }
  }, [])

  // Salvar tarefas no localStorage quando elas mudarem
  useEffect(() => {
    localStorage.setItem("retroTasks", JSON.stringify(tasks))
  }, [tasks])

  // Salvar categorias no localStorage quando elas mudarem
  useEffect(() => {
    localStorage.setItem("retroCategories", JSON.stringify(categories))
  }, [categories])

  const addTask = () => {
    if (newTaskTitle.trim() === "") return

    const newTask: Task = {
      id: Date.now().toString(),
      title: newTaskTitle,
      completed: false,
      priority: newTaskPriority,
      category: newTaskCategory,
      dueDate: newTaskDueDate || undefined,
    }

    setTasks([...tasks, newTask])
    setNewTaskTitle("")
    setNewTaskPriority("média")
    setNewTaskDueDate("")
  }

  const toggleTaskCompletion = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const addCategory = () => {
    if (newCategory.trim() === "" || categories.includes(newCategory)) {
      return
    }

    setCategories([...categories, newCategory])
    setNewCategory("")
    setShowCategoryModal(false)
  }

  const filteredTasks = tasks.filter((task) => {
    const categoryMatch = filterCategory === "Todas" || task.category === filterCategory
    const statusMatch =
      filterStatus === "Todas" ||
      (filterStatus === "Concluídas" && task.completed) ||
      (filterStatus === "Pendentes" && !task.completed)

    return categoryMatch && statusMatch
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "alta":
        return "#d14836"
      case "média":
        return "#f6b26b"
      case "baixa":
        return "#6aa84f"
      default:
        return "#6aa84f"
    }
  }

  if (isMinimized) {
    return (
      <div
        className="fixed bottom-4 right-4 bg-[#c0c0c0] border-2 border-[#ffffff] border-b-[#808080] border-r-[#808080] p-2 cursor-pointer shadow-md"
        onClick={() => setIsMinimized(false)}
      >
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="font-bold">Gerenciador de Tarefas</span>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#c0c0c0] border-2 border-[#ffffff] border-b-[#808080] border-r-[#808080] w-full max-w-3xl mx-auto shadow-lg">
      {/* Barra de título */}
      <div className="bg-[#000080] text-white p-1 flex justify-between items-center">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="font-bold">Gerenciador de Tarefas</span>
        </div>
        <div className="flex">
          <button
            onClick={() => setIsMinimized(true)}
            className="bg-[#c0c0c0] text-black w-6 h-6 flex items-center justify-center mr-1 border border-[#ffffff] border-b-[#808080] border-r-[#808080]"
          >
            _
          </button>
          <button className="bg-[#c0c0c0] text-black w-6 h-6 flex items-center justify-center border border-[#ffffff] border-b-[#808080] border-r-[#808080]">
            X
          </button>
        </div>
      </div>

      {/* Barra de menu */}
      <div className="bg-[#c0c0c0] border-b border-[#808080] p-1 flex">
        <button className="mr-4 hover:underline">Arquivo</button>
        <button className="mr-4 hover:underline">Editar</button>
        <button className="mr-4 hover:underline">Visualizar</button>
        <button className="mr-4 hover:underline">Ajuda</button>
      </div>

      {/* Área de adição de tarefas */}
      <div className="p-3 border-b border-[#808080] bg-[#c0c0c0]">
        <div className="flex flex-col md:flex-row gap-2">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Nova tarefa..."
            className="flex-grow p-1 border-2 border-[#808080] border-t-[#404040] border-l-[#404040] bg-white"
          />

          <select
            value={newTaskPriority}
            onChange={(e) => setNewTaskPriority(e.target.value as "baixa" | "média" | "alta")}
            className="p-1 border-2 border-[#808080] border-t-[#404040] border-l-[#404040] bg-white"
          >
            <option value="baixa">Baixa</option>
            <option value="média">Média</option>
            <option value="alta">Alta</option>
          </select>

          <select
            value={newTaskCategory}
            onChange={(e) => setNewTaskCategory(e.target.value)}
            className="p-1 border-2 border-[#808080] border-t-[#404040] border-l-[#404040] bg-white"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <button
            onClick={() => setShowCategoryModal(true)}
            className="p-1 border-2 border-[#ffffff] border-b-[#808080] border-r-[#808080] bg-[#c0c0c0] hover:bg-[#d0d0d0]"
          >
            +
          </button>
        </div>

        <div className="flex mt-2 gap-2">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <input
              type="date"
              value={newTaskDueDate}
              onChange={(e) => setNewTaskDueDate(e.target.value)}
              className="p-1 border-2 border-[#808080] border-t-[#404040] border-l-[#404040] bg-white"
            />
          </div>

          <button
            onClick={addTask}
            className="flex items-center p-1 border-2 border-[#ffffff] border-b-[#808080] border-r-[#808080] bg-[#c0c0c0] hover:bg-[#d0d0d0]"
          >
            <Plus className="w-4 h-4 mr-1" />
            Adicionar
          </button>
        </div>
      </div>

      {/* Filtros */}
      <div className="p-2 flex flex-wrap gap-2 bg-[#c0c0c0] border-b border-[#808080]">
        <div>
          <span className="mr-1">Categoria:</span>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="p-1 border-2 border-[#808080] border-t-[#404040] border-l-[#404040] bg-white"
          >
            <option value="Todas">Todas</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <span className="mr-1">Status:</span>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="p-1 border-2 border-[#808080] border-t-[#404040] border-l-[#404040] bg-white"
          >
            <option value="Todas">Todas</option>
            <option value="Pendentes">Pendentes</option>
            <option value="Concluídas">Concluídas</option>
          </select>
        </div>
      </div>

      {/* Lista de tarefas */}
      <div className="p-2 bg-white border-2 border-[#808080] border-t-[#404040] border-l-[#404040] m-2 h-64 overflow-y-auto">
        {filteredTasks.length === 0 ? (
          <div className="text-center text-gray-500 p-4">Nenhuma tarefa encontrada</div>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#c0c0c0] text-left">
                <th className="p-1 border border-[#808080]">Tarefa</th>
                <th className="p-1 border border-[#808080] w-20">Prioridade</th>
                <th className="p-1 border border-[#808080] w-24">Categoria</th>
                <th className="p-1 border border-[#808080] w-24">Vencimento</th>
                <th className="p-1 border border-[#808080] w-16">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <tr key={task.id} className={task.completed ? "bg-[#e0e0e0] line-through" : ""}>
                  <td className="p-1 border border-[#808080]">{task.title}</td>
                  <td className="p-1 border border-[#808080]">
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 mr-1 rounded-full"
                        style={{ backgroundColor: getPriorityColor(task.priority) }}
                      ></div>
                      {task.priority}
                    </div>
                  </td>
                  <td className="p-1 border border-[#808080]">{task.category}</td>
                  <td className="p-1 border border-[#808080]">
                    {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "-"}
                  </td>
                  <td className="p-1 border border-[#808080]">
                    <div className="flex">
                      <button
                        onClick={() => toggleTaskCompletion(task.id)}
                        className="mr-1 p-1 border border-[#ffffff] border-b-[#808080] border-r-[#808080] bg-[#c0c0c0]"
                        title={task.completed ? "Marcar como pendente" : "Marcar como concluída"}
                      >
                        <Check className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => deleteTask(task.id)}
                        className="p-1 border border-[#ffffff] border-b-[#808080] border-r-[#808080] bg-[#c0c0c0]"
                        title="Excluir tarefa"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Barra de status */}
      <div className="bg-[#c0c0c0] border-t border-[#808080] p-1 text-sm">
        <span>Total: {tasks.length} tarefas | </span>
        <span>Concluídas: {tasks.filter((t) => t.completed).length} | </span>
        <span>Pendentes: {tasks.filter((t) => !t.completed).length}</span>
      </div>

      {/* Modal para adicionar categoria */}
      {showCategoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#c0c0c0] border-2 border-[#ffffff] border-b-[#808080] border-r-[#808080] p-4 w-80">
            <div className="bg-[#000080] text-white p-1 mb-4 flex justify-between items-center">
              <span>Nova Categoria</span>
              <button
                onClick={() => setShowCategoryModal(false)}
                className="bg-[#c0c0c0] text-black w-6 h-6 flex items-center justify-center border border-[#ffffff] border-b-[#808080] border-r-[#808080]"
              >
                X
              </button>
            </div>

            <div className="mb-4">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Nome da categoria"
                className="w-full p-1 border-2 border-[#808080] border-t-[#404040] border-l-[#404040] bg-white"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={addCategory}
                className="mr-2 p-1 border-2 border-[#ffffff] border-b-[#808080] border-r-[#808080] bg-[#c0c0c0] hover:bg-[#d0d0d0]"
              >
                Adicionar
              </button>
              <button
                onClick={() => setShowCategoryModal(false)}
                className="p-1 border-2 border-[#ffffff] border-b-[#808080] border-r-[#808080] bg-[#c0c0c0] hover:bg-[#d0d0d0]"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
