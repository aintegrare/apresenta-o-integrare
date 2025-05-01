"use client"

import { useState, useEffect } from "react"
import { Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { X, Minus, FileText, Presentation, BarChart, Users, Settings, Mail } from "lucide-react"

export default function RetroInterface() {
  const [activeWindow, setActiveWindow] = useState<string | null>("main")
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([])
  const [currentTime, setCurrentTime] = useState(new Date())

  // Atualizar o relógio a cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const toggleMinimize = (windowId: string) => {
    if (minimizedWindows.includes(windowId)) {
      setMinimizedWindows(minimizedWindows.filter((id) => id !== windowId))
      setActiveWindow(windowId)
    } else {
      setMinimizedWindows([...minimizedWindows, windowId])
      setActiveWindow(null)
    }
  }

  const openWindow = (windowId: string) => {
    setActiveWindow(windowId)
    setMinimizedWindows(minimizedWindows.filter((id) => id !== windowId))
  }

  const closeWindow = (windowId: string) => {
    if (activeWindow === windowId) {
      setActiveWindow(null)
    }
    setMinimizedWindows(minimizedWindows.filter((id) => id !== windowId))
  }

  // Formatar a hora atual
  const formattedTime = `${currentTime.getHours().toString().padStart(2, "0")}:${currentTime.getMinutes().toString().padStart(2, "0")}`

  return (
    <div className="min-h-screen bg-amber-50 p-4 font-sans overflow-hidden">
      {/* Barra superior estilo Windows 3.11 */}
      <div className="bg-[#4b7bb5] text-white p-2 flex justify-between items-center mb-4 border-b-4 border-t-2 border-l-2 border-r-4 border-gray-300 shadow-md">
        <div className="flex items-center">
          <Image src="/images/logo-integrare.png" alt="Integrare" width={24} height={24} className="mr-2" />
          <span className="font-bold">Integrare Program Manager</span>
        </div>
        <div className="flex space-x-2">
          <span className="text-xs">Arquivo</span>
          <span className="text-xs">Editar</span>
          <span className="text-xs">Visualizar</span>
          <span className="text-xs">Opções</span>
          <span className="text-xs">Ajuda</span>
        </div>
      </div>

      {/* Área principal com janelas */}
      <div className="relative w-full h-[calc(100vh-6rem)]">
        {/* Janela Principal - Program Manager */}
        {activeWindow === "main" && !minimizedWindows.includes("main") && (
          <div className="absolute top-4 left-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] bg-gray-200 border-t-2 border-l-2 border-r-4 border-b-4 border-gray-400 shadow-lg">
            <div className="bg-[#4b7bb5] text-white p-2 flex justify-between items-center">
              <span className="font-bold">Integrare - Grupo Principal</span>
              <div className="flex space-x-2">
                <button onClick={() => toggleMinimize("main")} className="focus:outline-none">
                  <Minus size={16} />
                </button>
                <button onClick={() => closeWindow("main")} className="focus:outline-none">
                  <X size={16} />
                </button>
              </div>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Ícones de grupo */}
              <div
                className="flex flex-col items-center cursor-pointer hover:bg-blue-100 p-2 rounded"
                onClick={() => openWindow("articles")}
              >
                <div className="w-16 h-16 bg-amber-100 border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                  <FileText size={32} className="text-[#4b7bb5]" />
                </div>
                <span className="text-center font-bold">Artigos</span>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer hover:bg-blue-100 p-2 rounded"
                onClick={() => openWindow("presentations")}
              >
                <div className="w-16 h-16 bg-amber-100 border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                  <Presentation size={32} className="text-[#4b7bb5]" />
                </div>
                <span className="text-center font-bold">Apresentações</span>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer hover:bg-blue-100 p-2 rounded"
                onClick={() => openWindow("statistics")}
              >
                <div className="w-16 h-16 bg-amber-100 border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                  <BarChart size={32} className="text-[#4b7bb5]" />
                </div>
                <span className="text-center font-bold">Estatísticas</span>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer hover:bg-blue-100 p-2 rounded"
                onClick={() => openWindow("clients")}
              >
                <div className="w-16 h-16 bg-amber-100 border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                  <Users size={32} className="text-[#4b7bb5]" />
                </div>
                <span className="text-center font-bold">Clientes</span>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer hover:bg-blue-100 p-2 rounded"
                onClick={() => openWindow("settings")}
              >
                <div className="w-16 h-16 bg-amber-100 border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                  <Settings size={32} className="text-[#4b7bb5]" />
                </div>
                <span className="text-center font-bold">Configurações</span>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer hover:bg-blue-100 p-2 rounded"
                onClick={() => openWindow("contact")}
              >
                <div className="w-16 h-16 bg-amber-100 border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                  <Mail size={32} className="text-[#4b7bb5]" />
                </div>
                <span className="text-center font-bold">Contato</span>
              </div>

              <div
                className="flex flex-col items-center cursor-pointer hover:bg-blue-100 p-2 rounded"
                onClick={() => openWindow("tasks")}
              >
                <div className="w-16 h-16 bg-amber-100 border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                  <Calendar size={32} className="text-[#4b7bb5]" />
                </div>
                <span className="text-center font-bold">Tarefas</span>
              </div>
            </div>
          </div>
        )}

        {/* Janela de Artigos */}
        {activeWindow === "articles" && !minimizedWindows.includes("articles") && (
          <div className="absolute top-8 left-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] bg-gray-200 border-t-2 border-l-2 border-r-4 border-b-4 border-gray-400 shadow-lg">
            <div className="bg-[#4b7bb5] text-white p-2 flex justify-between items-center">
              <span className="font-bold">Artigos</span>
              <div className="flex space-x-2">
                <button onClick={() => toggleMinimize("articles")} className="focus:outline-none">
                  <Minus size={16} />
                </button>
                <button onClick={() => closeWindow("articles")} className="focus:outline-none">
                  <X size={16} />
                </button>
              </div>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-6">
              <Link href="/artigos/panorama-mercado-digital" className="block">
                <div className="flex flex-col items-center hover:bg-blue-100 p-3 rounded cursor-pointer">
                  <div className="w-16 h-16 bg-white border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                    <FileText size={28} className="text-[#4b7bb5]" />
                  </div>
                  <span className="text-center text-sm">Panorama do Mercado Digital</span>
                </div>
              </Link>

              <Link href="/artigos/terceirizacao-condominios" className="block">
                <div className="flex flex-col items-center hover:bg-blue-100 p-3 rounded cursor-pointer">
                  <div className="w-16 h-16 bg-white border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                    <FileText size={28} className="text-[#4b7bb5]" />
                  </div>
                  <span className="text-center text-sm">Terceirização em Condomínios</span>
                </div>
              </Link>

              <Link href="/artigos/inteligencia-artificial-marketing" className="block">
                <div className="flex flex-col items-center hover:bg-blue-100 p-3 rounded cursor-pointer">
                  <div className="w-16 h-16 bg-white border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                    <FileText size={28} className="text-[#4b7bb5]" />
                  </div>
                  <span className="text-center text-sm">IA no Marketing</span>
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* Janela de Apresentações */}
        {activeWindow === "presentations" && !minimizedWindows.includes("presentations") && (
          <div className="absolute top-12 left-12 w-[calc(100%-6rem)] h-[calc(100%-6rem)] bg-gray-200 border-t-2 border-l-2 border-r-4 border-b-4 border-gray-400 shadow-lg">
            <div className="bg-[#4b7bb5] text-white p-2 flex justify-between items-center">
              <span className="font-bold">Apresentações</span>
              <div className="flex space-x-2">
                <button onClick={() => toggleMinimize("presentations")} className="focus:outline-none">
                  <Minus size={16} />
                </button>
                <button onClick={() => closeWindow("presentations")} className="focus:outline-none">
                  <X size={16} />
                </button>
              </div>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-6">
              <Link href="/apresentacao" className="block">
                <div className="flex flex-col items-center hover:bg-blue-100 p-3 rounded cursor-pointer">
                  <div className="w-16 h-16 bg-white border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                    <Presentation size={28} className="text-[#4b7bb5]" />
                  </div>
                  <span className="text-center text-sm">Apresentação Institucional</span>
                </div>
              </Link>

              <Link href="/apresentacao-terceirizacao" className="block">
                <div className="flex flex-col items-center hover:bg-blue-100 p-3 rounded cursor-pointer">
                  <div className="w-16 h-16 bg-white border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                    <Presentation size={28} className="text-[#4b7bb5]" />
                  </div>
                  <span className="text-center text-sm">Terceirização em Condomínios</span>
                </div>
              </Link>
              <Link href="/apresentacao-medeiros" className="block">
                <div className="flex flex-col items-center hover:bg-blue-100 p-3 rounded cursor-pointer">
                  <div className="w-16 h-16 bg-white border-2 border-gray-400 rounded flex items-center justify-center mb-2">
                    <Presentation size={28} className="text-[#4b7bb5]" />
                  </div>
                  <span className="text-center text-sm">Regularização em Faixa de Fronteira</span>
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* Janela de Estatísticas */}
        {activeWindow === "statistics" && !minimizedWindows.includes("statistics") && (
          <div className="absolute top-16 left-16 w-[calc(100%-8rem)] h-[calc(100%-8rem)] bg-gray-200 border-t-2 border-l-2 border-r-4 border-b-4 border-gray-400 shadow-lg">
            <div className="bg-[#4b7bb5] text-white p-2 flex justify-between items-center">
              <span className="font-bold">Estatísticas</span>
              <div className="flex space-x-2">
                <button onClick={() => toggleMinimize("statistics")} className="focus:outline-none">
                  <Minus size={16} />
                </button>
                <button onClick={() => closeWindow("statistics")} className="focus:outline-none">
                  <X size={16} />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-white p-4 border-2 border-gray-400 mb-4">
                <h3 className="font-bold mb-2 text-[#4b7bb5]">Dados do Mercado Digital Brasileiro</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-amber-50 border border-gray-300">
                    <p className="text-2xl font-bold text-[#4b7bb5]">187.9M</p>
                    <p className="text-sm">Usuários de internet</p>
                  </div>
                  <div className="text-center p-3 bg-amber-50 border border-gray-300">
                    <p className="text-2xl font-bold text-[#4b7bb5]">9h+</p>
                    <p className="text-sm">Tempo diário online</p>
                  </div>
                  <div className="text-center p-3 bg-amber-50 border border-gray-300">
                    <p className="text-2xl font-bold text-[#4b7bb5]">R$85.7B</p>
                    <p className="text-sm">Mercado publicitário</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Janela de Tarefas */}
        {activeWindow === "tasks" && !minimizedWindows.includes("tasks") && (
          <div className="absolute top-20 left-20 w-[calc(100%-10rem)] h-[calc(100%-10rem)] bg-gray-200 border-t-2 border-l-2 border-r-4 border-b-4 border-gray-400 shadow-lg">
            <div className="bg-[#4b7bb5] text-white p-2 flex justify-between items-center">
              <span className="font-bold">Gerenciador de Tarefas</span>
              <div className="flex space-x-2">
                <button onClick={() => toggleMinimize("tasks")} className="focus:outline-none">
                  <Minus size={16} />
                </button>
                <button onClick={() => closeWindow("tasks")} className="focus:outline-none">
                  <X size={16} />
                </button>
              </div>
            </div>
            <TaskManager />
          </div>
        )}
      </div>

      {/* Barra de tarefas inferior estilo Windows */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-300 border-t-4 border-gray-400 p-1 flex space-x-2">
        <button
          className={`px-3 py-1 text-sm font-bold ${activeWindow === "main" ? "bg-white border-t-2 border-l-2 border-r-2 border-b-2 border-gray-500" : "bg-gray-200 border-2 border-gray-400"}`}
          onClick={() => openWindow("main")}
        >
          Grupo Principal
        </button>

        {(activeWindow === "articles" || minimizedWindows.includes("articles")) && (
          <button
            className={`px-3 py-1 text-sm font-bold ${activeWindow === "articles" ? "bg-white border-t-2 border-l-2 border-r-2 border-b-2 border-gray-500" : "bg-gray-200 border-2 border-gray-400"}`}
            onClick={() => openWindow("articles")}
          >
            Artigos
          </button>
        )}

        {(activeWindow === "presentations" || minimizedWindows.includes("presentations")) && (
          <button
            className={`px-3 py-1 text-sm font-bold ${activeWindow === "presentations" ? "bg-white border-t-2 border-l-2 border-r-2 border-b-2 border-gray-500" : "bg-gray-200 border-2 border-gray-400"}`}
            onClick={() => openWindow("presentations")}
          >
            Apresentações
          </button>
        )}

        {(activeWindow === "statistics" || minimizedWindows.includes("statistics")) && (
          <button
            className={`px-3 py-1 text-sm font-bold ${activeWindow === "statistics" ? "bg-white border-t-2 border-l-2 border-r-2 border-b-2 border-gray-500" : "bg-gray-200 border-2 border-gray-400"}`}
            onClick={() => openWindow("statistics")}
          >
            Estatísticas
          </button>
        )}

        {(activeWindow === "tasks" || minimizedWindows.includes("tasks")) && (
          <button
            className={`px-3 py-1 text-sm font-bold ${activeWindow === "tasks" ? "bg-white border-t-2 border-l-2 border-r-2 border-b-2 border-gray-500" : "bg-gray-200 border-2 border-gray-400"}`}
            onClick={() => openWindow("tasks")}
          >
            Tarefas
          </button>
        )}

        <div className="ml-auto flex items-center">
          <span className="text-xs mr-2">{formattedTime}</span>
          <Link href="/" className="text-xs bg-gray-200 px-2 py-1 border-2 border-gray-400 hover:bg-white">
            Sair
          </Link>
        </div>
      </div>
    </div>
  )
}

// Componente do Gerenciador de Tarefas
function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: "1", title: "Revisar apresentação", completed: false, priority: "alta", category: "Trabalho" },
    { id: "2", title: "Preparar relatório mensal", completed: false, priority: "média", category: "Trabalho" },
    { id: "3", title: "Agendar reunião com cliente", completed: true, priority: "média", category: "Clientes" },
  ])
  const [newTask, setNewTask] = useState("")
  const [newPriority, setNewPriority] = useState("média")
  const [newCategory, setNewCategory] = useState("Trabalho")
  const [filter, setFilter] = useState("todas")

  // Carregar tarefas do localStorage quando o componente montar
  useEffect(() => {
    const savedTasks = localStorage.getItem("retroTasks")
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, [])

  // Salvar tarefas no localStorage quando elas mudarem
  useEffect(() => {
    localStorage.setItem("retroTasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (newTask.trim() === "") return

    const task = {
      id: Date.now().toString(),
      title: newTask,
      completed: false,
      priority: newPriority,
      category: newCategory,
    }

    setTasks([...tasks, task])
    setNewTask("")
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const filteredTasks =
    filter === "todas"
      ? tasks
      : filter === "pendentes"
        ? tasks.filter((task) => !task.completed)
        : tasks.filter((task) => task.completed)

  return (
    <div className="p-4">
      <div className="mb-4 bg-white p-3 border-2 border-gray-400">
        <h3 className="font-bold mb-2">Nova Tarefa</h3>
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Digite a tarefa..."
            className="border-2 border-gray-400 p-1"
          />
          <div className="flex space-x-2">
            <select
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value)}
              className="border-2 border-gray-400 p-1"
            >
              <option value="baixa">Baixa</option>
              <option value="média">Média</option>
              <option value="alta">Alta</option>
            </select>
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="border-2 border-gray-400 p-1"
            >
              <option value="Trabalho">Trabalho</option>
              <option value="Pessoal">Pessoal</option>
              <option value="Clientes">Clientes</option>
            </select>
            <button onClick={addTask} className="bg-[#4b7bb5] text-white px-4 py-1">
              Adicionar
            </button>
          </div>
        </div>
      </div>

      <div className="mb-4 bg-white p-3 border-2 border-gray-400">
        <div className="flex space-x-2 mb-2">
          <button
            onClick={() => setFilter("todas")}
            className={`px-3 py-1 ${filter === "todas" ? "bg-[#4b7bb5] text-white" : "bg-gray-200"}`}
          >
            Todas
          </button>
          <button
            onClick={() => setFilter("pendentes")}
            className={`px-3 py-1 ${filter === "pendentes" ? "bg-[#4b7bb5] text-white" : "bg-gray-200"}`}
          >
            Pendentes
          </button>
          <button
            onClick={() => setFilter("concluídas")}
            className={`px-3 py-1 ${filter === "concluídas" ? "bg-[#4b7bb5] text-white" : "bg-gray-200"}`}
          >
            Concluídas
          </button>
        </div>

        <div className="space-y-2 max-h-64 overflow-y-auto">
          {filteredTasks.length === 0 ? (
            <p className="text-gray-500 text-center py-4">Nenhuma tarefa encontrada</p>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                className={`p-2 border-2 border-gray-300 flex justify-between items-center ${task.completed ? "bg-gray-100" : "bg-white"}`}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    className="mr-2"
                  />
                  <span className={task.completed ? "line-through text-gray-500" : ""}>{task.title}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 text-xs ${
                      task.priority === "alta"
                        ? "bg-red-100 text-red-800"
                        : task.priority === "média"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                    }`}
                  >
                    {task.priority}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 text-xs">{task.category}</span>
                  <button onClick={() => deleteTask(task.id)} className="bg-red-100 text-red-800 px-2 py-1 text-xs">
                    X
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="bg-gray-200 p-2 text-sm">
        <span>Total: {tasks.length} | </span>
        <span>Concluídas: {tasks.filter((t) => t.completed).length} | </span>
        <span>Pendentes: {tasks.filter((t) => !t.completed).length}</span>
      </div>
    </div>
  )
}
