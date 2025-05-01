"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Computer,
  FileText,
  Folder,
  Globe,
  Home,
  Info,
  Mail,
  Settings,
  Terminal,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Trash2,
  Palette,
  FileIcon as FilePresentation,
  Power,
} from "lucide-react"
import "./styles.css"

export default function Windows95() {
  const [bootStage, setBootStage] = useState<"booting" | "login" | "desktop">("booting")
  const [activeWindow, setActiveWindow] = useState<string | null>(null)
  const [openWindows, setOpenWindows] = useState<string[]>([])
  const [windowPositions, setWindowPositions] = useState({
    about: { x: 50, y: 50, width: 500, height: 400 },
    services: { x: 100, y: 100, width: 500, height: 400 },
    portfolio: { x: 150, y: 150, width: 600, height: 450 },
    contact: { x: 200, y: 200, width: 400, height: 350 },
    explorer: { x: 80, y: 80, width: 600, height: 400 },
    notepad: { x: 120, y: 120, width: 400, height: 350 },
    browser: { x: 160, y: 160, width: 650, height: 500 },
    calculator: { x: 240, y: 240, width: 220, height: 300 },
    minesweeper: { x: 280, y: 280, width: 200, height: 250 },
    paint: { x: 320, y: 120, width: 600, height: 450 },
    solitaire: { x: 200, y: 150, width: 650, height: 500 },
    wordpad: { x: 180, y: 180, width: 550, height: 400 },
    mediaplayer: { x: 260, y: 260, width: 300, height: 250 },
    recyclebin: { x: 300, y: 100, width: 400, height: 350 },
    controlpanel: { x: 220, y: 120, width: 500, height: 400 },
    powerpoint: { x: 150, y: 100, width: 700, height: 550 },
    cdrom: { x: 180, y: 150, width: 600, height: 450 },
  })
  const [windowStates, setWindowStates] = useState({
    about: { minimized: false, maximized: false },
    services: { minimized: false, maximized: false },
    portfolio: { minimized: false, maximized: false },
    contact: { minimized: false, maximized: false },
    explorer: { minimized: false, maximized: false },
    notepad: { minimized: false, maximized: false },
    browser: { minimized: false, maximized: false },
    calculator: { minimized: false, maximized: false },
    minesweeper: { minimized: false, maximized: false },
    paint: { minimized: false, maximized: false },
    solitaire: { minimized: false, maximized: false },
    wordpad: { minimized: false, maximized: false },
    mediaplayer: { minimized: false, maximized: false },
    recyclebin: { minimized: false, maximized: false },
    controlpanel: { minimized: false, maximized: false },
    powerpoint: { minimized: false, maximized: false },
    cdrom: { minimized: false, maximized: false },
  })
  const [paintState, setPaintState] = useState({
    tool: "pencil",
    color: "#000000",
    isDrawing: false,
    lastX: 0,
    lastY: 0,
  })
  const [wordpadContent, setWordpadContent] = useState(
    "Bem-vindo ao WordPad da Integrare!\n\nEste é um exemplo de editor de texto estilo Windows 95.",
  )
  const [wordpadFormat, setWordpadFormat] = useState({
    font: "Times New Roman",
    size: "12",
    bold: false,
    italic: false,
    underline: false,
    align: "left",
  })
  const [mediaPlayerState, setMediaPlayerState] = useState({
    playing: false,
    currentTrack: "Integrare - Apresentação.mp3",
    volume: 50,
    position: 0,
  })
  const [showScreensaver, setShowScreensaver] = useState(false)
  const [showBSOD, setShowBSOD] = useState(false)
  const [showClippy, setShowClippy] = useState(false)
  const [clippyMessage, setClippyMessage] = useState("")
  const [recycleBinItems, setRecycleBinItems] = useState<string[]>([])
  const [showShutdown, setShowShutdown] = useState(false)
  const [shutdownOption, setShutdownOption] = useState("restart")
  const [powerPointSlide, setPowerPointSlide] = useState(0)
  const [powerPointSlides, setPowerPointSlides] = useState([
    {
      title: "Agência Integrare",
      content: ["Marketing Digital & Estratégias de Negócios", "Apresentação Institucional", "2023"],
      footer: "Slide 1 de 5",
    },
    {
      title: "Nossa História",
      content: [
        "• Fundada em 2020",
        "• Foco em marketing baseado em evidências",
        "• Crescimento constante e sustentável",
        "• Equipe multidisciplinar",
      ],
      footer: "Slide 2 de 5",
    },
    {
      title: "Nossos Serviços",
      content: [
        "• Marketing Digital",
        "• Gestão de Redes Sociais",
        "• SEO e Tráfego Orgânico",
        "• Criação de Sites",
        "• Campanhas Pagas",
      ],
      footer: "Slide 3 de 5",
    },
    {
      title: "Nossos Resultados",
      content: [
        "• Aumento médio de 150% no tráfego orgânico",
        "• ROI de 300% em campanhas pagas",
        "• Crescimento de 200% em engajamento",
        "• Mais de 50 clientes satisfeitos",
      ],
      footer: "Slide 4 de 5",
    },
    {
      title: "Entre em Contato",
      content: [
        "Email: contato@integrare.com",
        "Telefone: (11) 1234-5678",
        "Site: www.integrare.com",
        "Redes Sociais: @agenciaintegrare",
      ],
      footer: "Slide 5 de 5",
    },
  ])
  const [startMenuOpen, setStartMenuOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const [showDialog, setShowDialog] = useState<{ type: string; message: string } | null>(null)
  const [selectedDesktopIcon, setSelectedDesktopIcon] = useState<string | null>(null)
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; type: string } | null>(null)
  const [calculatorDisplay, setCalculatorDisplay] = useState("0")
  const [calculatorState, setCalculatorState] = useState({
    firstOperand: null as number | null,
    operator: null as string | null,
    waitingForSecondOperand: false,
    clearOnNextInput: true,
  })
  const [notepadContent, setNotepadContent] = useState(
    "Bem-vindo ao Bloco de Notas da Integrare!\n\nEste é um exemplo de bloco de notas estilo Windows 95.",
  )
  const [browserState, setBrowserState] = useState({
    url: "https://www.integrare.com",
    title: "Integrare - Marketing Digital",
    loading: false,
  })
  const [minesweeperState, setMinesweeperState] = useState({
    grid: Array(9)
      .fill(null)
      .map(() => Array(9).fill({ revealed: false, mine: false, flagged: false, value: 0 })),
    gameOver: false,
    minesLeft: 10,
    face: "🙂",
  })
  const [tooltipState, setTooltipState] = useState<{ text: string; x: number; y: number } | null>(null)
  const [username, setUsername] = useState("Usuário")
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const [soundEnabled, setSoundEnabled] = useState(true)

  const windowRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const startButtonRef = useRef<HTMLButtonElement | null>(null)
  const desktopRef = useRef<HTMLDivElement | null>(null)
  const paintCanvasRef = useRef<HTMLCanvasElement | null>(null)
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null)
  const clippyTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Efeito para simular a sequência de inicialização
  useEffect(() => {
    if (bootStage === "booting") {
      // Reproduzir som de inicialização
      if (soundEnabled) {
        const startupSound = new Audio("/sounds/windows95-startup.mp3")
        startupSound.play().catch((e) => console.log("Erro ao reproduzir som:", e))
      }

      // Simular tempo de inicialização
      setTimeout(() => {
        setBootStage("login")
      }, 4000)
    }
  }, [bootStage, soundEnabled])

  // Atualizar relógio
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Fechar menu iniciar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (startMenuOpen && startButtonRef.current && !startButtonRef.current.contains(e.target as Node)) {
        setStartMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [startMenuOpen])

  // Fechar menu de contexto ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (contextMenu) {
        setContextMenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [contextMenu])

  // Inicializar o jogo Campo Minado
  useEffect(() => {
    if (openWindows.includes("minesweeper") && !minesweeperState.gameOver) {
      initializeMinesweeper()
    }
  }, [openWindows.includes("minesweeper")])

  // Adicionar efeito para o protetor de tela
  useEffect(() => {
    const resetInactivityTimer = () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current)
      }

      inactivityTimerRef.current = setTimeout(() => {
        if (bootStage === "desktop" && !showScreensaver && !showBSOD && !showShutdown) {
          setShowScreensaver(true)
        }
      }, 120000) // 2 minutos de inatividade
    }

    const handleActivity = () => {
      if (showScreensaver) {
        setShowScreensaver(false)
      }
      resetInactivityTimer()
    }

    window.addEventListener("mousemove", handleActivity)
    window.addEventListener("mousedown", handleActivity)
    window.addEventListener("keydown", handleActivity)

    resetInactivityTimer()

    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current)
      }
      window.removeEventListener("mousemove", handleActivity)
      window.removeEventListener("mousedown", handleActivity)
      window.removeEventListener("keydown", handleActivity)
    }
  }, [bootStage, showScreensaver, showBSOD, showShutdown])

  // Adicionar efeito para o Clippy
  useEffect(() => {
    if (bootStage === "desktop" && !clippyTimerRef.current) {
      // Mostrar Clippy após 30 segundos
      clippyTimerRef.current = setTimeout(() => {
        setShowClippy(true)
        setClippyMessage("Parece que você está explorando a Agência Integrare. Precisa de ajuda?")
      }, 30000)
    }

    return () => {
      if (clippyTimerRef.current) {
      }
    }
  }, [bootStage])

  // Função para inicializar o Paint
  const initializePaint = useCallback(() => {
    const canvas = paintCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Limpar o canvas
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  // Função para desenhar no Paint
  const handlePaintMouseDown = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = e.currentTarget
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPaintState((prev) => ({
      ...prev,
      isDrawing: true,
      lastX: x,
      lastY: y,
    }))
  }, [])

  const handlePaintMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (!paintState.isDrawing) return

      const canvas = e.currentTarget
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      ctx.strokeStyle = paintState.color
      ctx.lineWidth = paintState.tool === "pencil" ? 1 : 3
      ctx.lineCap = "round"

      ctx.beginPath()
      ctx.moveTo(paintState.lastX, paintState.lastY)
      ctx.lineTo(x, y)
      ctx.stroke()

      setPaintState((prev) => ({
        ...prev,
        lastX: x,
        lastY: y,
      }))
    },
    [paintState],
  )

  const handlePaintMouseUp = useCallback(() => {
    setPaintState((prev) => ({
      ...prev,
      isDrawing: false,
    }))
  }, [])

  // Função para lidar com o Clippy
  const handleClippyClick = () => {
    setShowClippy(false)
  }

  // Função para mostrar a tela azul da morte
  const triggerBSOD = () => {
    if (soundEnabled) {
      const errorSound = new Audio("/sounds/windows95-error.mp3")
      errorSound.play().catch((e) => console.log("Erro ao reproduzir som:", e))
    }

    setShowBSOD(true)

    // Reiniciar após 5 segundos
    setTimeout(() => {
      setShowBSOD(false)
      setBootStage("booting")
    }, 5000)
  }

  // Função para lidar com o desligamento
  const handleShutdown = () => {
    setShowShutdown(true)
  }

  const confirmShutdown = () => {
    if (shutdownOption === "restart") {
      setShowShutdown(false)
      setBootStage("booting")
    } else if (shutdownOption === "shutdown") {
      window.location.href = "/"
    } else {
      setShowShutdown(false)
    }
  }

  const handleLogin = () => {
    if (password === "integrare" || password === "") {
      if (soundEnabled) {
        const loginSound = new Audio("/sounds/windows95-login.mp3")
        loginSound.play().catch((e) => console.log("Erro ao reproduzir som:", e))
      }
      setBootStage("desktop")
    } else {
      setLoginError("Senha incorreta. Tente novamente.")
    }
  }

  const handleWindowClick = (window: string) => {
    if (!openWindows.includes(window)) {
      setOpenWindows([...openWindows, window])

      // Reproduzir som de abertura de janela
      if (soundEnabled) {
        const openSound = new Audio("/sounds/windows95-open.mp3")
        openSound.play().catch((e) => console.log("Erro ao reproduzir som:", e))
      }
    }

    setActiveWindow(window)

    // Desmarcar ícone selecionado
    setSelectedDesktopIcon(null)
  }

  const handleCloseWindow = (e: React.MouseEvent, window: string) => {
    e.stopPropagation()

    // Reproduzir som de fechamento de janela
    if (soundEnabled) {
      const closeSound = new Audio("/sounds/windows95-close.mp3")
      closeSound.play().catch((e) => console.log("Erro ao reproduzir som:", e))
    }

    setOpenWindows(openWindows.filter((w) => w !== window))

    if (activeWindow === window) {
      setActiveWindow(openWindows.length > 1 ? openWindows[openWindows.length - 2] : null)
    }
  }

  const handleMinimizeWindow = (e: React.MouseEvent, window: string) => {
    e.stopPropagation()

    setWindowStates({
      ...windowStates,
      [window]: { ...windowStates[window as keyof typeof windowStates], minimized: true, maximized: false },
    })

    if (activeWindow === window) {
      setActiveWindow(openWindows.length > 1 ? openWindows.filter((w) => w !== window)[0] : null)
    }
  }

  const handleMaximizeWindow = (e: React.MouseEvent, window: string) => {
    e.stopPropagation()

    setWindowStates({
      ...windowStates,
      [window]: {
        ...windowStates[window as keyof typeof windowStates],
        maximized: !windowStates[window as keyof typeof windowStates].maximized,
      },
    })
  }

  const handleRestoreWindow = (window: string) => {
    setWindowStates({
      ...windowStates,
      [window]: { ...windowStates[window as keyof typeof windowStates], minimized: false },
    })

    setActiveWindow(window)
  }

  const handleStartClick = () => {
    setStartMenuOpen(!startMenuOpen)

    // Reproduzir som de menu
    if (soundEnabled && !startMenuOpen) {
      const menuSound = new Audio("/sounds/windows95-menu.mp3")
      menuSound.play().catch((e) => console.log("Erro ao reproduzir som:", e))
    }
  }

  const handleStartMenuItemClick = (window: string) => {
    setStartMenuOpen(false)
    handleWindowClick(window)
  }

  const handleDesktopIconClick = (icon: string) => {
    setSelectedDesktopIcon(icon)
  }

  const handleDesktopIconDoubleClick = (window: string) => {
    handleWindowClick(window)
    setSelectedDesktopIcon(null)
  }

  const handleContextMenu = (e: React.MouseEvent, type: string) => {
    e.preventDefault()
    setContextMenu({ x: e.clientX, y: e.clientY, type })
  }

  const handleDragStart = (e: React.DragEvent, window: string) => {
    if (windowStates[window as keyof typeof windowStates].maximized) return

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const offsetX = e.clientX - rect.left
    const offsetY = e.clientY - rect.top

    e.dataTransfer.setData("window", window)
    e.dataTransfer.setData("offset", JSON.stringify({ x: offsetX, y: offsetY }))
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    const window = e.dataTransfer.getData("window")
    const offset = JSON.parse(e.dataTransfer.getData("offset"))

    if (!window || windowStates[window as keyof typeof windowStates].maximized) return

    setWindowPositions({
      ...windowPositions,
      [window]: {
        ...windowPositions[window as keyof typeof windowPositions],
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      },
    })
  }

  const handleCalculatorButton = (value: string) => {
    const { firstOperand, operator, waitingForSecondOperand, clearOnNextInput } = calculatorState

    if (value === "C") {
      setCalculatorDisplay("0")
      setCalculatorState({
        firstOperand: null,
        operator: null,
        waitingForSecondOperand: false,
        clearOnNextInput: true,
      })
      return
    }

    if (/[0-9.]/.test(value)) {
      if (waitingForSecondOperand || clearOnNextInput) {
        setCalculatorDisplay(value === "." ? "0." : value)
        setCalculatorState({
          ...calculatorState,
          waitingForSecondOperand: false,
          clearOnNextInput: false,
        })
      } else {
        if (value === "." && calculatorDisplay.includes(".")) return
        setCalculatorDisplay(calculatorDisplay === "0" && value !== "." ? value : calculatorDisplay + value)
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      setCalculatorState({
        firstOperand: Number.parseFloat(calculatorDisplay),
        operator: value,
        waitingForSecondOperand: true,
        clearOnNextInput: false,
      })
    } else if (value === "=") {
      if (firstOperand === null || operator === null) return

      let result = 0
      const secondOperand = Number.parseFloat(calculatorDisplay)

      switch (operator) {
        case "+":
          result = firstOperand + secondOperand
          break
        case "-":
          result = firstOperand - secondOperand
          break
        case "*":
          result = firstOperand * secondOperand
          break
        case "/":
          result = firstOperand / secondOperand
          break
      }

      setCalculatorDisplay(String(result))
      setCalculatorState({
        firstOperand: result,
        operator: null,
        waitingForSecondOperand: false,
        clearOnNextInput: true,
      })
    }
  }

  const handleBrowserNavigation = (url: string) => {
    setBrowserState({
      ...browserState,
      url,
      loading: true,
    })

    setTimeout(() => {
      setBrowserState({
        ...browserState,
        url,
        loading: false,
      })
    }, 1000)
  }

  const initializeMinesweeper = () => {
    // Criar grid vazio
    const grid = Array(9)
      .fill(null)
      .map(() =>
        Array(9)
          .fill(null)
          .map(() => ({
            revealed: false,
            mine: false,
            flagged: false,
            value: 0,
          })),
      )

    // Colocar minas aleatoriamente
    let minesPlaced = 0
    while (minesPlaced < 10) {
      const row = Math.floor(Math.random() * 9)
      const col = Math.floor(Math.random() * 9)

      if (!grid[row][col].mine) {
        grid[row][col].mine = true
        minesPlaced++

        // Incrementar valores ao redor
        for (let r = Math.max(0, row - 1); r <= Math.min(8, row + 1); r++) {
          for (let c = Math.max(0, col - 1); c <= Math.min(8, col + 1); c++) {
            if (!(r === row && c === col)) {
              grid[r][c].value++
            }
          }
        }
      }
    }

    setMinesweeperState({
      grid,
      gameOver: false,
      minesLeft: 10,
      face: "🙂",
    })
  }

  const handleMinesweeperCellClick = (row: number, col: number) => {
    if (minesweeperState.gameOver) return
    if (minesweeperState.grid[row][col].flagged) return

    const newGrid = [...minesweeperState.grid]

    if (newGrid[row][col].mine) {
      // Revelar todas as minas
      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          if (newGrid[r][c].mine) {
            newGrid[r][c].revealed = true
          }
        }
      }

      setMinesweeperState({
        ...minesweeperState,
        grid: newGrid,
        gameOver: true,
        face: "😵",
      })

      // Reproduzir som de explosão
      if (soundEnabled) {
        const explosionSound = new Audio("/sounds/windows95-error.mp3")
        explosionSound.play().catch((e) => console.log("Erro ao reproduzir som:", e))
      }

      return
    }

    // Revelar célula
    revealCell(newGrid, row, col)

    // Verificar vitória
    let unrevealed = 0
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (!newGrid[r][c].revealed && !newGrid[r][c].mine) {
          unrevealed++
        }
      }
    }

    if (unrevealed === 0) {
      setMinesweeperState({
        ...minesweeperState,
        grid: newGrid,
        gameOver: true,
        face: "😎",
      })

      // Reproduzir som de vitória
      if (soundEnabled) {
        const winSound = new Audio("/sounds/windows95-tada.mp3")
        winSound.play().catch((e) => console.log("Erro ao reproduzir som:", e))
      }
    } else {
      setMinesweeperState({
        ...minesweeperState,
        grid: newGrid,
      })
    }
  }

  const revealCell = (grid: any[][], row: number, col: number) => {
    if (row < 0 || row >= 9 || col < 0 || col >= 9) return
    if (grid[row][col].revealed || grid[row][col].flagged) return

    grid[row][col].revealed = true

    if (grid[row][col].value === 0) {
      for (let r = row - 1; r <= row + 1; r++) {
        for (let c = col - 1; c <= col + 1; c++) {
          if (!(r === row && c === col)) {
            revealCell(grid, r, c)
          }
        }
      }
    }
  }

  const handleMinesweeperCellRightClick = (e: React.MouseEvent, row: number, col: number) => {
    e.preventDefault()

    if (minesweeperState.gameOver) return
    if (minesweeperState.grid[row][col].revealed) return

    const newGrid = [...minesweeperState.grid]
    newGrid[row][col].flagged = !newGrid[row][col].flagged

    const minesLeft = minesweeperState.minesLeft + (newGrid[row][col].flagged ? -1 : 1)

    setMinesweeperState({
      ...minesweeperState,
      grid: newGrid,
      minesLeft,
    })
  }

  const handleMinesweeperReset = () => {
    initializeMinesweeper()
  }

  const handleShowTooltip = (text: string, e: React.MouseEvent) => {
    setTooltipState({
      text,
      x: e.clientX + 10,
      y: e.clientY + 10,
    })
  }

  const handleHideTooltip = () => {
    setTooltipState(null)
  }

  const renderBootScreen = () => (
    <div className="win95 win95-boot-screen">
      <div className="win95-boot-logo">
        <div className="win95-boot-logo-windows">Windows</div>
        <div className="win95-boot-logo-95">95</div>
      </div>
      <div className="win95-boot-progress">
        <div className="win95-boot-progress-bar"></div>
      </div>
      <div className="win95-boot-text">Iniciando Windows 95...</div>
    </div>
  )

  const renderLoginScreen = () => (
    <div className="win95 win95-login-screen">
      <div className="win95-login-box">
        <div className="win95-login-header">
          <div className="win95-login-logo">🖥️</div>
          <div className="win95-login-title">Integrare OS</div>
        </div>
        <div className="win95-login-form">
          <div className="win95-login-field">
            <label htmlFor="username">Nome de usuário:</label>
            <input
              type="text"
              id="username"
              className="win95-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="win95-login-field">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              className="win95-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
          </div>
          {loginError && <div className="text-red-600 text-sm">{loginError}</div>}
          <div className="win95-login-buttons">
            <button className="win95-button" onClick={handleLogin}>
              OK
            </button>
            <button className="win95-button" onClick={() => setPassword("")}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderDesktop = () => (
    <div
      className="win95 win95-desktop"
      ref={desktopRef}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => {
        setSelectedDesktopIcon(null)
        setStartMenuOpen(false)
      }}
      onContextMenu={(e) => handleContextMenu(e, "desktop")}
    >
      {/* Desktop Icons */}
      <div className="win95-desktop-icons">
        <div
          className={`win95-desktop-icon ${selectedDesktopIcon === "mycomputer" ? "selected" : ""}`}
          onClick={(e) => {
            e.stopPropagation()
            handleDesktopIconClick("mycomputer")
          }}
          onDoubleClick={() => handleDesktopIconDoubleClick("explorer")}
          onContextMenu={(e) => {
            e.stopPropagation()
            handleContextMenu(e, "icon")
          }}
        >
          <div className="win95-desktop-icon-img">
            <Computer size={32} />
          </div>
          <div className="win95-desktop-icon-text">Meu Computador</div>
        </div>

        <div
          className={`win95-desktop-icon ${selectedDesktopIcon === "about" ? "selected" : ""}`}
          onClick={(e) => {
            e.stopPropagation()
            handleDesktopIconClick("about")
          }}
          onDoubleClick={() => handleDesktopIconDoubleClick("about")}
          onContextMenu={(e) => {
            e.stopPropagation()
            handleContextMenu(e, "icon")
          }}
        >
          <div className="win95-desktop-icon-img">
            <Info size={32} />
          </div>
          <div className="win95-desktop-icon-text">Sobre Nós</div>
        </div>

        <div
          className={`win95-desktop-icon ${selectedDesktopIcon === "services" ? "selected" : ""}`}
          onClick={(e) => {
            e.stopPropagation()
            handleDesktopIconClick("services")
          }}
          onDoubleClick={() => handleDesktopIconDoubleClick("services")}
          onContextMenu={(e) => {
            e.stopPropagation()
            handleContextMenu(e, "icon")
          }}
        >
          <div className="win95-desktop-icon-img">
            <Settings size={32} />
          </div>
          <div className="win95-desktop-icon-text">Serviços</div>
        </div>

        <div
          className={`win95-desktop-icon ${selectedDesktopIcon === "portfolio" ? "selected" : ""}`}
          onClick={(e) => {
            e.stopPropagation()
            handleDesktopIconClick("portfolio")
          }}
          onDoubleClick={() => handleDesktopIconDoubleClick("portfolio")}
          onContextMenu={(e) => {
            e.stopPropagation()
            handleContextMenu(e, "icon")
          }}
        >
          <div className="win95-desktop-icon-img">
            <Folder size={32} />
          </div>
          <div className="win95-desktop-icon-text">Portfólio</div>
        </div>

        <div
          className={`win95-desktop-icon ${selectedDesktopIcon === "contact" ? "selected" : ""}`}
          onClick={(e) => {
            e.stopPropagation()
            handleDesktopIconClick("contact")
          }}
          onDoubleClick={() => handleDesktopIconDoubleClick("contact")}
          onContextMenu={(e) => {
            e.stopPropagation()
            handleContextMenu(e, "icon")
          }}
        >
          <div className="win95-desktop-icon-img">
            <Mail size={32} />
          </div>
          <div className="win95-desktop-icon-text">Contato</div>
        </div>

        <div
          className={`win95-desktop-icon ${selectedDesktopIcon === "browser" ? "selected" : ""}`}
          onClick={(e) => {
            e.stopPropagation()
            handleDesktopIconClick("browser")
          }}
          onDoubleClick={() => handleDesktopIconDoubleClick("browser")}
          onContextMenu={(e) => {
            e.stopPropagation()
            handleContextMenu(e, "icon")
          }}
        >
          <div className="win95-desktop-icon-img">
            <Globe size={32} />
          </div>
          <div className="win95-desktop-icon-text">Internet</div>
        </div>

        <div
          className={`win95-desktop-icon ${selectedDesktopIcon === "notepad" ? "selected" : ""}`}
          onClick={(e) => {
            e.stopPropagation()
            handleDesktopIconClick("notepad")
          }}
          onDoubleClick={() => handleDesktopIconDoubleClick("notepad")}
          onContextMenu={(e) => {
            e.stopPropagation()
            handleContextMenu(e, "icon")
          }}
        >
          <div className="win95-desktop-icon-img">
            <FileText size={32} />
          </div>
          <div className="win95-desktop-icon-text">Bloco de Notas</div>
        </div>

        <div
          className={`win95-desktop-icon ${selectedDesktopIcon === "minesweeper" ? "selected" : ""}`}
          onClick={(e) => {
            e.stopPropagation()
            handleDesktopIconClick("minesweeper")
          }}
          onDoubleClick={() => handleDesktopIconDoubleClick("minesweeper")}
          onContextMenu={(e) => {
            e.stopPropagation()
            handleContextMenu(e, "icon")
          }}
        >
          <div className="win95-desktop-icon-img">
            <span className="text-2xl">💣</span>
          </div>
          <div className="win95-desktop-icon-text">Campo Minado</div>
        </div>

        <div
          className={`win95-desktop-icon ${selectedDesktopIcon === "recyclebin" ? "selected" : ""}`}
          onClick={(e) => {
            e.stopPropagation()
            handleDesktopIconClick("recyclebin")
          }}
          onDoubleClick={() => handleDesktopIconDoubleClick("recyclebin")}
          onContextMenu={(e) => {
            e.stopPropagation()
            handleContextMenu(e, "icon")
          }}
        >
          <div className="win95-desktop-icon-img">
            <Trash2 size={32} />
          </div>
          <div className="win95-desktop-icon-text">Lixeira</div>
        </div>

        <div
          className={`win95-desktop-icon ${selectedDesktopIcon === "paint" ? "selected" : ""}`}
          onClick={(e) => {
            e.stopPropagation()
            handleDesktopIconClick("paint")
          }}
          onDoubleClick={() => handleDesktopIconDoubleClick("paint")}
          onContextMenu={(e) => {
            e.stopPropagation()
            handleContextMenu(e, "icon")
          }}
        >
          <div className="win95-desktop-icon-img">
            <Palette size={32} />
          </div>
          <div className="win95-desktop-icon-text">Paint</div>
        </div>

        <div
          className={`win95-desktop-icon ${selectedDesktopIcon === "wordpad" ? "selected" : ""}`}
          onClick={(e) => {
            e.stopPropagation()
            handleDesktopIconClick("wordpad")
          }}
          onDoubleClick={() => handleDesktopIconDoubleClick("wordpad")}
          onContextMenu={(e) => {
            e.stopPropagation()
            handleContextMenu(e, "icon")
          }}
        >
          <div className="win95-desktop-icon-img">
            <FileText size={32} />
          </div>
          <div className="win95-desktop-icon-text">WordPad</div>
        </div>

        <div
          className={`win95-desktop-icon ${selectedDesktopIcon === "mediaplayer" ? "selected" : ""}`}
          onClick={(e) => {
            e.stopPropagation()
            handleDesktopIconClick("mediaplayer")
          }}
          onDoubleClick={() => handleDesktopIconDoubleClick("mediaplayer")}
          onContextMenu={(e) => {
            e.stopPropagation()
            handleContextMenu(e, "icon")
          }}
        >
          <div className="win95-desktop-icon-img">
            <Play size={32} />
          </div>
          <div className="win95-desktop-icon-text">Media Player</div>
        </div>

        <div
          className={`win95-desktop-icon ${selectedDesktopIcon === "controlpanel" ? "selected" : ""}`}
          onClick={(e) => {
            e.stopPropagation()
            handleDesktopIconClick("controlpanel")
          }}
          onDoubleClick={() => handleDesktopIconDoubleClick("controlpanel")}
          onContextMenu={(e) => {
            e.stopPropagation()
            handleContextMenu(e, "icon")
          }}
        >
          <div className="win95-desktop-icon-img">
            <Settings size={32} />
          </div>
          <div className="win95-desktop-icon-text">Painel de Controle</div>
        </div>

        <div
          className={`win95-desktop-icon ${selectedDesktopIcon === "cdrom" ? "selected" : ""}`}
          onClick={(e) => {
            e.stopPropagation()
            handleDesktopIconClick("cdrom")
          }}
          onDoubleClick={() => handleDesktopIconDoubleClick("cdrom")}
          onContextMenu={(e) => {
            e.stopPropagation()
            handleContextMenu(e, "icon")
          }}
        >
          <div className="win95-desktop-icon-img">
            <span className="text-2xl">💿</span>
          </div>
          <div className="win95-desktop-icon-text">CD-ROM Integrare</div>
        </div>
      </div>

      {/* Windows */}
      {openWindows.includes("about") && (
        <div
          ref={(el) => (windowRefs.current.about = el)}
          className={`win95-window ${activeWindow === "about" ? "win95-window-active" : "win95-window-inactive"} ${
            windowStates.about.minimized ? "win95-window-minimized" : ""
          } ${windowStates.about.maximized ? "win95-window-maximized" : ""}`}
          style={
            !windowStates.about.maximized
              ? {
                  top: windowPositions.about.y,
                  left: windowPositions.about.x,
                  width: windowPositions.about.width,
                  height: windowPositions.about.height,
                }
              : {}
          }
          onClick={() => handleWindowClick("about")}
        >
          <div
            className="win95-title-bar"
            draggable={!windowStates.about.maximized}
            onDragStart={(e) => handleDragStart(e, "about")}
          >
            <div className="win95-title-bar-text">
              <Info size={14} />
              <span>Sobre Nós - Integrare</span>
            </div>
            <div className="win95-title-bar-controls">
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMinimizeWindow(e, "about")}
                onMouseEnter={(e) => handleShowTooltip("Minimizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                _
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMaximizeWindow(e, "about")}
                onMouseEnter={(e) => handleShowTooltip(windowStates.about.maximized ? "Restaurar" : "Maximizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                □
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleCloseWindow(e, "about")}
                onMouseEnter={(e) => handleShowTooltip("Fechar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ×
              </button>
            </div>
          </div>
          <div className="win95-about-content">
            <div className="win95-about-header">
              <div className="win95-about-logo">🏢</div>
              <div>
                <div className="win95-about-title">Agência Integrare</div>
                <div className="win95-about-subtitle">Marketing Digital & Estratégias de Negócios</div>
              </div>
            </div>

            <div className="win95-about-section">
              <div className="win95-about-section-title">Nossa História</div>
              <div className="win95-about-section-content">
                <p>
                  Fundada em 2020, a Integrare nasceu com a missão de levar Marketing de Qualidade, baseado em
                  evidências científicas e casos práticos de sucesso.
                </p>
                <p>
                  Começamos oferecendo serviços simples de gestão de social media e hoje oferecemos um ecossistema
                  completo de serviços de marketing, que inclui todos os aspectos dos negócios digitais das empresas.
                </p>
              </div>
            </div>

            <div className="win95-about-section">
              <div className="win95-about-section-title">Nossa Filosofia</div>
              <div className="win95-about-section-content">
                <p>
                  Tratamos os negócios dos nossos clientes como se fossem o nosso, trabalhamos lado a lado, porque nosso
                  compromisso é com os resultados que entregamos.
                </p>
                <p>
                  Marketing não é sobre vender mais, é sobre ter propósito e mostrar isso para o mundo. É uma ferramenta
                  de reafirmação do porquê viemos e para que estamos aqui.
                </p>
              </div>
            </div>

            <div className="win95-about-section">
              <div className="win95-about-section-title">Nossa Visão</div>
              <div className="win95-about-section-content">
                <p>
                  Marketing é o meio mais barato de geração de negócios de alto valor, é o meio pelo qual conquistamos
                  nossa autoridade e conquistamos a confiança do consumidor e dos concorrentes.
                </p>
                <p>
                  Nosso objetivo é que nosso cliente tenha confiança e nosso concorrente ansiedade quando pensa em nosso
                  trabalho.
                </p>
              </div>
            </div>

            <div className="win95-about-footer">
              <div className="win95-about-copyright">© 2023 Agência Integrare. Todos os direitos reservados.</div>
              <div className="win95-about-logo-small">🚀</div>
            </div>
          </div>
        </div>
      )}

      {openWindows.includes("services") && (
        <div
          ref={(el) => (windowRefs.current.services = el)}
          className={`win95-window ${activeWindow === "services" ? "win95-window-active" : "win95-window-inactive"} ${
            windowStates.services.minimized ? "win95-window-minimized" : ""
          } ${windowStates.services.maximized ? "win95-window-maximized" : ""}`}
          style={
            !windowStates.services.maximized
              ? {
                  top: windowPositions.services.y,
                  left: windowPositions.services.x,
                  width: windowPositions.services.width,
                  height: windowPositions.services.height,
                }
              : {}
          }
          onClick={() => handleWindowClick("services")}
        >
          <div
            className="win95-title-bar"
            draggable={!windowStates.services.maximized}
            onDragStart={(e) => handleDragStart(e, "services")}
          >
            <div className="win95-title-bar-text">
              <Settings size={14} />
              <span>Serviços - Integrare</span>
            </div>
            <div className="win95-title-bar-controls">
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMinimizeWindow(e, "services")}
                onMouseEnter={(e) => handleShowTooltip("Minimizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                _
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMaximizeWindow(e, "services")}
                onMouseEnter={(e) => handleShowTooltip(windowStates.services.maximized ? "Restaurar" : "Maximizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                □
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleCloseWindow(e, "services")}
                onMouseEnter={(e) => handleShowTooltip("Fechar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ×
              </button>
            </div>
          </div>
          <div className="win95-window-content">
            <div className="win95-services-grid">
              <div className="win95-service-item">
                <div className="win95-service-header">
                  <div className="win95-service-icon">📱</div>
                  <div className="win95-service-title">Marketing Digital</div>
                </div>
                <div className="win95-service-desc">
                  Estratégias completas para sua presença online, incluindo SEO, marketing de conteúdo, e-mail marketing
                  e análise de dados para otimizar seus resultados.
                </div>
              </div>

              <div className="win95-service-item">
                <div className="win95-service-header">
                  <div className="win95-service-icon">💬</div>
                  <div className="win95-service-title">Gestão de Redes Sociais</div>
                </div>
                <div className="win95-service-desc">
                  Criação de conteúdo, planejamento estratégico, gerenciamento de comunidades e análise de métricas para
                  maximizar o engajamento nas suas redes sociais.
                </div>
              </div>

              <div className="win95-service-item">
                <div className="win95-service-header">
                  <div className="win95-service-icon">🔍</div>
                  <div className="win95-service-title">SEO</div>
                </div>
                <div className="win95-service-desc">
                  Otimização para mecanismos de busca, análise de palavras-chave, otimização on-page e off-page, e
                  estratégias para aumentar seu tráfego orgânico.
                </div>
              </div>

              <div className="win95-service-item">
                <div className="win95-service-header">
                  <div className="win95-service-icon">🖥️</div>
                  <div className="win95-service-title">Criação de Sites</div>
                </div>
                <div className="win95-service-desc">
                  Desenvolvimento de websites responsivos, otimizados para SEO, com design moderno e focado na
                  experiência do usuário para converter visitantes em clientes.
                </div>
              </div>

              <div className="win95-service-item">
                <div className="win95-service-header">
                  <div className="win95-service-icon">📊</div>
                  <div className="win95-service-title">Análise de Dados</div>
                </div>
                <div className="win95-service-desc">
                  Monitoramento e análise de métricas, relatórios personalizados, insights acionáveis e recomendações
                  estratégicas baseadas em dados.
                </div>
              </div>

              <div className="win95-service-item">
                <div className="win95-service-header">
                  <div className="win95-service-icon">🎯</div>
                  <div className="win95-service-title">Campanhas Pagas</div>
                </div>
                <div className="win95-service-desc">
                  Gestão de campanhas no Google Ads, Facebook Ads, Instagram Ads e outras plataformas, com foco em ROI e
                  otimização contínua.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {openWindows.includes("portfolio") && (
        <div
          ref={(el) => (windowRefs.current.portfolio = el)}
          className={`win95-window ${activeWindow === "portfolio" ? "win95-window-active" : "win95-window-inactive"} ${
            windowStates.portfolio.minimized ? "win95-window-minimized" : ""
          } ${windowStates.portfolio.maximized ? "win95-window-maximized" : ""}`}
          style={
            !windowStates.portfolio.maximized
              ? {
                  top: windowPositions.portfolio.y,
                  left: windowPositions.portfolio.x,
                  width: windowPositions.portfolio.width,
                  height: windowPositions.portfolio.height,
                }
              : {}
          }
          onClick={() => handleWindowClick("portfolio")}
        >
          <div
            className="win95-title-bar"
            draggable={!windowStates.portfolio.maximized}
            onDragStart={(e) => handleDragStart(e, "portfolio")}
          >
            <div className="win95-title-bar-text">
              <Folder size={14} />
              <span>Portfólio - Integrare</span>
            </div>
            <div className="win95-title-bar-controls">
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMinimizeWindow(e, "portfolio")}
                onMouseEnter={(e) => handleShowTooltip("Minimizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                _
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMaximizeWindow(e, "portfolio")}
                onMouseEnter={(e) => handleShowTooltip(windowStates.portfolio.maximized ? "Restaurar" : "Maximizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                □
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleCloseWindow(e, "portfolio")}
                onMouseEnter={(e) => handleShowTooltip("Fechar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ×
              </button>
            </div>
          </div>
          <div className="win95-window-content">
            <div className="win95-portfolio-grid">
              <div className="win95-portfolio-item">
                <div className="win95-portfolio-image">🏪</div>
                <div className="win95-portfolio-title">E-commerce Completo</div>
                <div className="win95-portfolio-desc">
                  Desenvolvimento de loja virtual com integração de pagamentos, gestão de estoque e marketing digital.
                </div>
                <div className="win95-portfolio-client">Cliente: Loja Virtual XYZ</div>
              </div>

              <div className="win95-portfolio-item">
                <div className="win95-portfolio-image">📱</div>
                <div className="win95-portfolio-title">Campanha de Redes Sociais</div>
                <div className="win95-portfolio-desc">
                  Estratégia completa para Instagram e Facebook, com aumento de 200% no engajamento.
                </div>
                <div className="win95-portfolio-client">Cliente: Marca de Moda ABC</div>
              </div>

              <div className="win95-portfolio-item">
                <div className="win95-portfolio-image">🔍</div>
                <div className="win95-portfolio-title">Otimização SEO</div>
                <div className="win95-portfolio-desc">
                  Aumento de 150% no tráfego orgânico em 6 meses, com primeiras posições para palavras-chave
                  estratégicas.
                </div>
                <div className="win95-portfolio-client">Cliente: Clínica Médica 123</div>
              </div>

              <div className="win95-portfolio-item">
                <div className="win95-portfolio-image">📊</div>
                <div className="win95-portfolio-title">Campanha Google Ads</div>
                <div className="win95-portfolio-desc">
                  ROI de 300% em campanha de Google Ads para serviços profissionais.
                </div>
                <div className="win95-portfolio-client">Cliente: Escritório de Advocacia</div>
              </div>

              <div className="win95-portfolio-item">
                <div className="win95-portfolio-image">🎨</div>
                <div className="win95-portfolio-title">Redesign de Marca</div>
                <div className="win95-portfolio-desc">
                  Rebranding completo com nova identidade visual, logo e materiais de marketing.
                </div>
                <div className="win95-portfolio-client">Cliente: Restaurante Gourmet</div>
              </div>

              <div className="win95-portfolio-item">
                <div className="win95-portfolio-image">📧</div>
                <div className="win95-portfolio-title">Campanha de Email Marketing</div>
                <div className="win95-portfolio-desc">
                  Taxa de abertura de 35% e conversão de 12% em campanha de lançamento.
                </div>
                <div className="win95-portfolio-client">Cliente: Curso Online</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {openWindows.includes("contact") && (
        <div
          ref={(el) => (windowRefs.current.contact = el)}
          className={`win95-window ${activeWindow === "contact" ? "win95-window-active" : "win95-window-inactive"} ${
            windowStates.contact.minimized ? "win95-window-minimized" : ""
          } ${windowStates.contact.maximized ? "win95-window-maximized" : ""}`}
          style={
            !windowStates.contact.maximized
              ? {
                  top: windowPositions.contact.y,
                  left: windowPositions.contact.x,
                  width: windowPositions.contact.width,
                  height: windowPositions.contact.height,
                }
              : {}
          }
          onClick={() => handleWindowClick("contact")}
        >
          <div
            className="win95-title-bar"
            draggable={!windowStates.contact.maximized}
            onDragStart={(e) => handleDragStart(e, "contact")}
          >
            <div className="win95-title-bar-text">
              <Mail size={14} />
              <span>Contato - Integrare</span>
            </div>
            <div className="win95-title-bar-controls">
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMinimizeWindow(e, "contact")}
                onMouseEnter={(e) => handleShowTooltip("Minimizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                _
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMaximizeWindow(e, "contact")}
                onMouseEnter={(e) => handleShowTooltip(windowStates.contact.maximized ? "Restaurar" : "Maximizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                □
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleCloseWindow(e, "contact")}
                onMouseEnter={(e) => handleShowTooltip("Fechar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ×
              </button>
            </div>
          </div>
          <div className="win95-window-content">
            <div className="win95-contact-form">
              <div className="win95-contact-field">
                <label className="win95-contact-label">Nome:</label>
                <input type="text" className="win95-input" />
              </div>

              <div className="win95-contact-field">
                <label className="win95-contact-label">Email:</label>
                <input type="email" className="win95-input" />
              </div>

              <div className="win95-contact-field">
                <label className="win95-contact-label">Telefone:</label>
                <input type="tel" className="win95-input" />
              </div>

              <div className="win95-contact-field">
                <label className="win95-contact-label">Assunto:</label>
                <select className="win95-input">
                  <option>Selecione um assunto</option>
                  <option>Orçamento</option>
                  <option>Dúvidas</option>
                  <option>Parceria</option>
                  <option>Outro</option>
                </select>
              </div>

              <div className="win95-contact-field">
                <label className="win95-contact-label">Mensagem:</label>
                <textarea className="win95-textarea" rows={5}></textarea>
              </div>

              <div className="win95-contact-buttons">
                <button
                  className="win95-button"
                  onClick={() => {
                    setShowDialog({
                      type: "info",
                      message: "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.",
                    })
                    if (soundEnabled) {
                      const sendSound = new Audio("/sounds/windows95-ding.mp3")
                      sendSound.play().catch((e) => console.log("Erro ao reproduzir som:", e))
                    }
                  }}
                >
                  Enviar
                </button>
                <button className="win95-button">Limpar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {openWindows.includes("notepad") && (
        <div
          ref={(el) => (windowRefs.current.notepad = el)}
          className={`win95-window ${activeWindow === "notepad" ? "win95-window-active" : "win95-window-inactive"} ${
            windowStates.notepad.minimized ? "win95-window-minimized" : ""
          } ${windowStates.notepad.maximized ? "win95-window-maximized" : ""}`}
          style={
            !windowStates.notepad.maximized
              ? {
                  top: windowPositions.notepad.y,
                  left: windowPositions.notepad.x,
                  width: windowPositions.notepad.width,
                  height: windowPositions.notepad.height,
                }
              : {}
          }
          onClick={() => handleWindowClick("notepad")}
        >
          <div
            className="win95-title-bar"
            draggable={!windowStates.notepad.maximized}
            onDragStart={(e) => handleDragStart(e, "notepad")}
          >
            <div className="win95-title-bar-text">
              <FileText size={14} />
              <span>Bloco de Notas - Integrare</span>
            </div>
            <div className="win95-title-bar-controls">
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMinimizeWindow(e, "notepad")}
                onMouseEnter={(e) => handleShowTooltip("Minimizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                _
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMaximizeWindow(e, "notepad")}
                onMouseEnter={(e) => handleShowTooltip(windowStates.notepad.maximized ? "Restaurar" : "Maximizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                □
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleCloseWindow(e, "notepad")}
                onMouseEnter={(e) => handleShowTooltip("Fechar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ×
              </button>
            </div>
          </div>
          <div className="win95-notepad">
            <div className="win95-explorer-menubar">
              <div className="win95-explorer-menu-item">Arquivo</div>
              <div className="win95-explorer-menu-item">Editar</div>
              <div className="win95-explorer-menu-item">Formatar</div>
              <div className="win95-explorer-menu-item">Exibir</div>
              <div className="win95-explorer-menu-item">Ajuda</div>
            </div>
            <div className="win95-notepad-content">
              <textarea
                className="win95-notepad-textarea"
                value={notepadContent}
                onChange={(e) => setNotepadContent(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      )}

      {openWindows.includes("browser") && (
        <div
          ref={(el) => (windowRefs.current.browser = el)}
          className={`win95-window ${activeWindow === "browser" ? "win95-window-active" : "win95-window-inactive"} ${
            windowStates.browser.minimized ? "win95-window-minimized" : ""
          } ${windowStates.browser.maximized ? "win95-window-maximized" : ""}`}
          style={
            !windowStates.browser.maximized
              ? {
                  top: windowPositions.browser.y,
                  left: windowPositions.browser.x,
                  width: windowPositions.browser.width,
                  height: windowPositions.browser.height,
                }
              : {}
          }
          onClick={() => handleWindowClick("browser")}
        >
          <div
            className="win95-title-bar"
            draggable={!windowStates.browser.maximized}
            onDragStart={(e) => handleDragStart(e, "browser")}
          >
            <div className="win95-title-bar-text">
              <Globe size={14} />
              <span>Internet Explorer - {browserState.title}</span>
            </div>
            <div className="win95-title-bar-controls">
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMinimizeWindow(e, "browser")}
                onMouseEnter={(e) => handleShowTooltip("Minimizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                _
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMaximizeWindow(e, "browser")}
                onMouseEnter={(e) => handleShowTooltip(windowStates.browser.maximized ? "Restaurar" : "Maximizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                □
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleCloseWindow(e, "browser")}
                onMouseEnter={(e) => handleShowTooltip("Fechar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ×
              </button>
            </div>
          </div>
          <div className="win95-browser">
            <div className="win95-explorer-menubar">
              <div className="win95-explorer-menu-item">Arquivo</div>
              <div className="win95-explorer-menu-item">Editar</div>
              <div className="win95-explorer-menu-item">Exibir</div>
              <div className="win95-explorer-menu-item">Favoritos</div>
              <div className="win95-explorer-menu-item">Ferramentas</div>
              <div className="win95-explorer-menu-item">Ajuda</div>
            </div>
            <div className="win95-browser-toolbar">
              <button
                className="win95-button"
                onClick={() => handleBrowserNavigation("https://www.integrare.com")}
                onMouseEnter={(e) => handleShowTooltip("Voltar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ←
              </button>
              <button
                className="win95-button"
                onClick={() => handleBrowserNavigation("https://www.integrare.com/servicos")}
                onMouseEnter={(e) => handleShowTooltip("Avançar", e)}
                onMouseLeave={handleHideTooltip}
              >
                →
              </button>
              <button
                className="win95-button"
                onClick={() => handleBrowserNavigation(browserState.url)}
                onMouseEnter={(e) => handleShowTooltip("Atualizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ↻
              </button>
              <button
                className="win95-button"
                onClick={() => handleBrowserNavigation("https://www.integrare.com")}
                onMouseEnter={(e) => handleShowTooltip("Página Inicial", e)}
                onMouseLeave={handleHideTooltip}
              >
                <Home size={14} />
              </button>
              <div className="win95-browser-address">
                <span>Endereço:</span>
                <div className="win95-browser-address-text">{browserState.url}</div>
              </div>
            </div>
            <div className="win95-browser-content">
              {browserState.loading ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="win95-loading-animation mb-4"></div>
                  <div>Carregando página...</div>
                </div>
              ) : (
                <div>
                  <div className="win95-ie-logo">
                    <div className="win95-ie-logo-img">🌐</div>
                    <div className="win95-ie-logo-text">Integrare</div>
                  </div>

                  <div className="win95-ie-welcome">
                    <h1>Bem-vindo à Agência Integrare</h1>
                    <p>Sua parceira em marketing digital e estratégias de negócios</p>
                  </div>

                  <div className="win95-ie-links">
                    <div className="win95-ie-link">
                      <div className="win95-ie-link-icon">📊</div>
                      <div className="win95-ie-link-text">Nossos Serviços</div>
                    </div>
                    <div className="win95-ie-link">
                      <div className="win95-ie-link-icon">📁</div>
                      <div className="win95-ie-link-text">Portfólio</div>
                    </div>
                    <div className="win95-ie-link">
                      <div className="win95-ie-link-icon">👥</div>
                      <div className="win95-ie-link-text">Sobre Nós</div>
                    </div>
                    <div className="win95-ie-link">
                      <div className="win95-ie-link-icon">📞</div>
                      <div className="win95-ie-link-text">Contato</div>
                    </div>
                  </div>

                  <div className="win95-ie-news">
                    <div className="win95-ie-news-header">Últimas Notícias</div>
                    <div className="win95-ie-news-item">
                      Lançamos nossa nova plataforma de análise de dados para marketing digital
                    </div>
                    <div className="win95-ie-news-item">Webinar gratuito: Estratégias de SEO para 2023</div>
                    <div className="win95-ie-news-item">
                      Case de sucesso: Como aumentamos em 300% o ROI de um cliente do setor de saúde
                    </div>
                  </div>

                  <div className="win95-ie-footer">
                    © 2023 Agência Integrare. Todos os direitos reservados. | Política de Privacidade | Termos de Uso
                  </div>
                </div>
              )}
            </div>
            <div className="win95-browser-statusbar">
              {browserState.loading && <div className="win95-browser-loading">⟳</div>}
              <div>{browserState.loading ? "Carregando..." : "Concluído"}</div>
            </div>
          </div>
        </div>
      )}

      {openWindows.includes("explorer") && (
        <div
          ref={(el) => (windowRefs.current.explorer = el)}
          className={`win95-window ${activeWindow === "explorer" ? "win95-window-active" : "win95-window-inactive"} ${
            windowStates.explorer.minimized ? "win95-window-minimized" : ""
          } ${windowStates.explorer.maximized ? "win95-window-maximized" : ""}`}
          style={
            !windowStates.explorer.maximized
              ? {
                  top: windowPositions.explorer.y,
                  left: windowPositions.explorer.x,
                  width: windowPositions.explorer.width,
                  height: windowPositions.explorer.height,
                }
              : {}
          }
          onClick={() => handleWindowClick("explorer")}
        >
          <div
            className="win95-title-bar"
            draggable={!windowStates.explorer.maximized}
            onDragStart={(e) => handleDragStart(e, "explorer")}
          >
            <div className="win95-title-bar-text">
              <Computer size={14} />
              <span>Meu Computador</span>
            </div>
            <div className="win95-title-bar-controls">
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMinimizeWindow(e, "explorer")}
                onMouseEnter={(e) => handleShowTooltip("Minimizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                _
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMaximizeWindow(e, "explorer")}
                onMouseEnter={(e) => handleShowTooltip(windowStates.explorer.maximized ? "Restaurar" : "Maximizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                □
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleCloseWindow(e, "explorer")}
                onMouseEnter={(e) => handleShowTooltip("Fechar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ×
              </button>
            </div>
          </div>
          <div className="win95-explorer">
            <div className="win95-explorer-menubar">
              <div className="win95-explorer-menu-item">Arquivo</div>
              <div className="win95-explorer-menu-item">Editar</div>
              <div className="win95-explorer-menu-item">Exibir</div>
              <div className="win95-explorer-menu-item">Ir</div>
              <div className="win95-explorer-menu-item">Favoritos</div>
              <div className="win95-explorer-menu-item">Ajuda</div>
            </div>
            <div className="win95-explorer-toolbar">
              <button className="win95-button">Voltar</button>
              <button className="win95-button">Avançar</button>
              <button className="win95-button">Acima</button>
              <button className="win95-button">Cortar</button>
              <button className="win95-button">Copiar</button>
              <button className="win95-button">Colar</button>
              <button className="win95-button">Desfazer</button>
              <button className="win95-button">Excluir</button>
              <button className="win95-button">Propriedades</button>
            </div>
            <div className="win95-explorer-content">
              <div className="win95-explorer-sidebar">
                <div className="font-bold mb-2">Pastas</div>
                <div className="ml-2">
                  <div className="mb-1">Desktop</div>
                  <div className="mb-1">Meus Documentos</div>
                  <div className="mb-1">Meu Computador</div>
                  <div className="mb-1">Rede</div>
                  <div className="mb-1">Lixeira</div>
                </div>
              </div>
              <div className="win95-explorer-main">
                <div className="win95-explorer-item">
                  <div className="win95-explorer-item-icon">💾</div>
                  <div className="win95-explorer-item-text">Disco Local (C:)</div>
                </div>
                <div className="win95-explorer-item">
                  <div className="win95-explorer-item-icon">📁</div>
                  <div className="win95-explorer-item-text">Arquivos de Programas</div>
                </div>
                <div className="win95-explorer-item">
                  <div className="win95-explorer-item-icon">📁</div>
                  <div className="win95-explorer-item-text">Windows</div>
                </div>
                <div className="win95-explorer-item">
                  <div className="win95-explorer-item-icon">📁</div>
                  <div className="win95-explorer-item-text">Documentos</div>
                </div>
                <div className="win95-explorer-item">
                  <div className="win95-explorer-item-icon">📁</div>
                  <div className="win95-explorer-item-text">Integrare</div>
                </div>
                <div className="win95-explorer-item">
                  <div className="win95-explorer-item-icon">📁</div>
                  <div className="win95-explorer-item-text">Projetos</div>
                </div>
                <div className="win95-explorer-item">
                  <div className="win95-explorer-item-icon">📁</div>
                  <div className="win95-explorer-item-text">Clientes</div>
                </div>
                <div className="win95-explorer-item">
                  <div className="win95-explorer-item-icon">📁</div>
                  <div className="win95-explorer-item-text">Marketing</div>
                </div>
              </div>
            </div>
            <div className="win95-statusbar">8 objetos | 3.5 GB livre de 8.1 GB</div>
          </div>
        </div>
      )}

      {openWindows.includes("calculator") && (
        <div
          ref={(el) => (windowRefs.current.calculator = el)}
          className={`win95-window ${activeWindow === "calculator" ? "win95-window-active" : "win95-window-inactive"} ${
            windowStates.calculator.minimized ? "win95-window-minimized" : ""
          } ${windowStates.calculator.maximized ? "win95-window-maximized" : ""}`}
          style={
            !windowStates.calculator.maximized
              ? {
                  top: windowPositions.calculator.y,
                  left: windowPositions.calculator.x,
                  width: windowPositions.calculator.width,
                  height: windowPositions.calculator.height,
                }
              : {}
          }
          onClick={() => handleWindowClick("calculator")}
        >
          <div
            className="win95-title-bar"
            draggable={!windowStates.calculator.maximized}
            onDragStart={(e) => handleDragStart(e, "calculator")}
          >
            <div className="win95-title-bar-text">
              <span>🧮</span>
              <span>Calculadora</span>
            </div>
            <div className="win95-title-bar-controls">
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMinimizeWindow(e, "calculator")}
                onMouseEnter={(e) => handleShowTooltip("Minimizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                _
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleCloseWindow(e, "calculator")}
                onMouseEnter={(e) => handleShowTooltip("Fechar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ×
              </button>
            </div>
          </div>
          <div className="win95-calculator">
            <div className="win95-calculator-display">{calculatorDisplay}</div>
            <div className="win95-calculator-buttons">
              <button className="win95-button win95-calculator-button" onClick={() => handleCalculatorButton("7")}>
                7
              </button>
              <button className="win95-button win95-calculator-button" onClick={() => handleCalculatorButton("8")}>
                8
              </button>
              <button className="win95-button win95-calculator-button" onClick={() => handleCalculatorButton("9")}>
                9
              </button>
              <button className="win95-button win95-calculator-button" onClick={() => handleCalculatorButton("/")}>
                ÷
              </button>
              <button className="win95-button win95-calculator-button" onClick={() => handleCalculatorButton("4")}>
                4
              </button>
              <button className="win95-button win95-calculator-button" onClick={() => handleCalculatorButton("5")}>
                5
              </button>
              <button className="win95-button win95-calculator-button" onClick={() => handleCalculatorButton("6")}>
                6
              </button>
              <button className="win95-button win95-calculator-button" onClick={() => handleCalculatorButton("*")}>
                ×
              </button>
              <button className="win95-button win95-calculator-button" onClick={() => handleCalculatorButton("1")}>
                1
              </button>
              <button className="win95-button win95-calculator-button" onClick={() => handleCalculatorButton("2")}>
                2
              </button>
              <button className="win95-button win95-calculator-button" onClick={() => handleCalculatorButton("3")}>
                3
              </button>
              <button className="win95-button win95-calculator-button" onClick={() => handleCalculatorButton("-")}>
                -
              </button>
              <button className="win95-button win95-calculator-button" onClick={() => handleCalculatorButton("0")}>
                0
              </button>
              <button className="win95-button win95-calculator-button" onClick={() => handleCalculatorButton(".")}>
                .
              </button>
              <button className="win95-button win95-calculator-button" onClick={() => handleCalculatorButton("=")}>
                =
              </button>
              <button className="win95-button win95-calculator-button" onClick={() => handleCalculatorButton("+")}>
                +
              </button>
              <button
                className="win95-button win95-calculator-button"
                style={{ gridColumn: "span 4" }}
                onClick={() => handleCalculatorButton("C")}
              >
                C
              </button>
            </div>
          </div>
        </div>
      )}

      {openWindows.includes("minesweeper") && (
        <div
          ref={(el) => (windowRefs.current.minesweeper = el)}
          className={`win95-window ${
            activeWindow === "minesweeper" ? "win95-window-active" : "win95-window-inactive"
          } ${windowStates.minesweeper.minimized ? "win95-window-minimized" : ""} ${
            windowStates.minesweeper.maximized ? "win95-window-maximized" : ""
          }`}
          style={
            !windowStates.minesweeper.maximized
              ? {
                  top: windowPositions.minesweeper.y,
                  left: windowPositions.minesweeper.x,
                  width: windowPositions.minesweeper.width,
                  height: windowPositions.minesweeper.height,
                }
              : {}
          }
          onClick={() => handleWindowClick("minesweeper")}
        >
          <div
            className="win95-title-bar"
            draggable={!windowStates.minesweeper.maximized}
            onDragStart={(e) => handleDragStart(e, "minesweeper")}
          >
            <div className="win95-title-bar-text">
              <span>💣</span>
              <span>Campo Minado</span>
            </div>
            <div className="win95-title-bar-controls">
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMinimizeWindow(e, "minesweeper")}
                onMouseEnter={(e) => handleShowTooltip("Minimizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                _
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleCloseWindow(e, "minesweeper")}
                onMouseEnter={(e) => handleShowTooltip("Fechar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ×
              </button>
            </div>
          </div>
          <div className="win95-minesweeper">
            <div className="win95-explorer-menubar">
              <div className="win95-explorer-menu-item">Jogo</div>
              <div className="win95-explorer-menu-item">Ajuda</div>
            </div>
            <div className="win95-minesweeper-header">
              <div className="win95-minesweeper-counter">{minesweeperState.minesLeft}</div>
              <div className="win95-minesweeper-face" onClick={handleMinesweeperReset}>
                {minesweeperState.face}
              </div>
              <div className="win95-minesweeper-counter">000</div>
            </div>
            <div className="win95-minesweeper-grid">
              {minesweeperState.grid.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`win95-minesweeper-cell ${cell.revealed ? "revealed" : ""} ${
                      cell.revealed && cell.mine ? "mine" : ""
                    } ${cell.flagged ? "flag" : ""}`}
                    onClick={() => handleMinesweeperCellClick(rowIndex, colIndex)}
                    onContextMenu={(e) => handleMinesweeperCellRightClick(e, rowIndex, colIndex)}
                  >
                    {cell.revealed && !cell.mine && cell.value > 0 && cell.value}
                    {cell.revealed && cell.mine && "💣"}
                  </div>
                )),
              )}
            </div>
          </div>
        </div>
      )}

      {openWindows.includes("paint") && (
        <div
          ref={(el) => (windowRefs.current.paint = el)}
          className={`win95-window ${activeWindow === "paint" ? "win95-window-active" : "win95-window-inactive"} ${
            windowStates.paint.minimized ? "win95-window-minimized" : ""
          } ${windowStates.paint.maximized ? "win95-window-maximized" : ""}`}
          style={
            !windowStates.paint.maximized
              ? {
                  top: windowPositions.paint.y,
                  left: windowPositions.paint.x,
                  width: windowPositions.paint.width,
                  height: windowPositions.paint.height,
                }
              : {}
          }
          onClick={() => handleWindowClick("paint")}
        >
          <div
            className="win95-title-bar"
            draggable={!windowStates.paint.maximized}
            onDragStart={(e) => handleDragStart(e, "paint")}
          >
            <div className="win95-title-bar-text">
              <Palette size={14} />
              <span>Paint</span>
            </div>
            <div className="win95-title-bar-controls">
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMinimizeWindow(e, "paint")}
                onMouseEnter={(e) => handleShowTooltip("Minimizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                _
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMaximizeWindow(e, "paint")}
                onMouseEnter={(e) => handleShowTooltip(windowStates.paint.maximized ? "Restaurar" : "Maximizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                □
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleCloseWindow(e, "paint")}
                onMouseEnter={(e) => handleShowTooltip("Fechar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ×
              </button>
            </div>
          </div>
          <div className="win95-paint">
            <div className="win95-explorer-menubar">
              <div className="win95-explorer-menu-item">Arquivo</div>
              <div className="win95-explorer-menu-item">Editar</div>
              <div className="win95-explorer-menu-item">Exibir</div>
              <div className="win95-explorer-menu-item">Imagem</div>
              <div className="win95-explorer-menu-item">Cores</div>
              <div className="win95-explorer-menu-item">Ajuda</div>
            </div>
            <div className="win95-paint-toolbar">
              <div className="win95-paint-tools">
                <div
                  className={`win95-paint-tool ${paintState.tool === "pencil" ? "active" : ""}`}
                  onClick={() => setPaintState((prev) => ({ ...prev, tool: "pencil" }))}
                >
                  ✏️
                </div>
                <div
                  className={`win95-paint-tool ${paintState.tool === "brush" ? "active" : ""}`}
                  onClick={() => setPaintState((prev) => ({ ...prev, tool: "brush" }))}
                >
                  🖌️
                </div>
                <div
                  className={`win95-paint-tool ${paintState.tool === "eraser" ? "active" : ""}`}
                  onClick={() => setPaintState((prev) => ({ ...prev, tool: "eraser" }))}
                >
                  🧽
                </div>
                <div
                  className={`win95-paint-tool ${paintState.tool === "fill" ? "active" : ""}`}
                  onClick={() => setPaintState((prev) => ({ ...prev, tool: "fill" }))}
                >
                  🪣
                </div>
              </div>
              <div className="win95-paint-colors">
                <div
                  className={`win95-paint-color ${paintState.color === "#000000" ? "active" : ""}`}
                  style={{ backgroundColor: "#000000" }}
                  onClick={() => setPaintState((prev) => ({ ...prev, color: "#000000" }))}
                ></div>
                <div
                  className={`win95-paint-color ${paintState.color === "#ff0000" ? "active" : ""}`}
                  style={{ backgroundColor: "#ff0000" }}
                  onClick={() => setPaintState((prev) => ({ ...prev, color: "#ff0000" }))}
                ></div>
                <div
                  className={`win95-paint-color ${paintState.color === "#00ff00" ? "active" : ""}`}
                  style={{ backgroundColor: "#00ff00" }}
                  onClick={() => setPaintState((prev) => ({ ...prev, color: "#00ff00" }))}
                ></div>
                <div
                  className={`win95-paint-color ${paintState.color === "#0000ff" ? "active" : ""}`}
                  style={{ backgroundColor: "#0000ff" }}
                  onClick={() => setPaintState((prev) => ({ ...prev, color: "#0000ff" }))}
                ></div>
                <div
                  className={`win95-paint-color ${paintState.color === "#ffff00" ? "active" : ""}`}
                  style={{ backgroundColor: "#ffff00" }}
                  onClick={() => setPaintState((prev) => ({ ...prev, color: "#ffff00" }))}
                ></div>
                <div
                  className={`win95-paint-color ${paintState.color === "#ff00ff" ? "active" : ""}`}
                  style={{ backgroundColor: "#ff00ff" }}
                  onClick={() => setPaintState((prev) => ({ ...prev, color: "#ff00ff" }))}
                ></div>
                <div
                  className={`win95-paint-color ${paintState.color === "#00ffff" ? "active" : ""}`}
                  style={{ backgroundColor: "#00ffff" }}
                  onClick={() => setPaintState((prev) => ({ ...prev, color: "#00ffff" }))}
                ></div>
                <div
                  className={`win95-paint-color ${paintState.color === "#ffffff" ? "active" : ""}`}
                  style={{ backgroundColor: "#ffffff" }}
                  onClick={() => setPaintState((prev) => ({ ...prev, color: "#ffffff" }))}
                ></div>
              </div>
            </div>
            <div className="win95-paint-canvas-container">
              <canvas
                ref={paintCanvasRef}
                width={550}
                height={350}
                className="win95-paint-canvas"
                onMouseDown={handlePaintMouseDown}
                onMouseMove={handlePaintMouseMove}
                onMouseUp={handlePaintMouseUp}
                onMouseLeave={handlePaintMouseUp}
              ></canvas>
            </div>
          </div>
        </div>
      )}

      {openWindows.includes("wordpad") && (
        <div
          ref={(el) => (windowRefs.current.wordpad = el)}
          className={`win95-window ${activeWindow === "wordpad" ? "win95-window-active" : "win95-window-inactive"} ${
            windowStates.wordpad.minimized ? "win95-window-minimized" : ""
          } ${windowStates.wordpad.maximized ? "win95-window-maximized" : ""}`}
          style={
            !windowStates.wordpad.maximized
              ? {
                  top: windowPositions.wordpad.y,
                  left: windowPositions.wordpad.x,
                  width: windowPositions.wordpad.width,
                  height: windowPositions.wordpad.height,
                }
              : {}
          }
          onClick={() => handleWindowClick("wordpad")}
        >
          <div
            className="win95-title-bar"
            draggable={!windowStates.wordpad.maximized}
            onDragStart={(e) => handleDragStart(e, "wordpad")}
          >
            <div className="win95-title-bar-text">
              <FileText size={14} />
              <span>WordPad</span>
            </div>
            <div className="win95-title-bar-controls">
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMinimizeWindow(e, "wordpad")}
                onMouseEnter={(e) => handleShowTooltip("Minimizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                _
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMaximizeWindow(e, "wordpad")}
                onMouseEnter={(e) => handleShowTooltip(windowStates.wordpad.maximized ? "Restaurar" : "Maximizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                □
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleCloseWindow(e, "wordpad")}
                onMouseEnter={(e) => handleShowTooltip("Fechar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ×
              </button>
            </div>
          </div>
          <div className="win95-wordpad">
            <div className="win95-explorer-menubar">
              <div className="win95-explorer-menu-item">Arquivo</div>
              <div className="win95-explorer-menu-item">Editar</div>
              <div className="win95-explorer-menu-item">Exibir</div>
              <div className="win95-explorer-menu-item">Inserir</div>
              <div className="win95-explorer-menu-item">Formatar</div>
              <div className="win95-explorer-menu-item">Ajuda</div>
            </div>
            <div className="win95-wordpad-format">
              <select
                className="win95-wordpad-select"
                value={wordpadFormat.font}
                onChange={(e) => setWordpadFormat((prev) => ({ ...prev, font: e.target.value }))}
              >
                <option>Times New Roman</option>
                <option>Arial</option>
                <option>Courier New</option>
                <option>Comic Sans MS</option>
              </select>
              <select
                className="win95-wordpad-select"
                value={wordpadFormat.size}
                onChange={(e) => setWordpadFormat((prev) => ({ ...prev, size: e.target.value }))}
              >
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>14</option>
                <option>16</option>
                <option>18</option>
                <option>20</option>
                <option>22</option>
                <option>24</option>
                <option>26</option>
                <option>28</option>
                <option>36</option>
                <option>48</option>
                <option>72</option>
              </select>
              <button
                className={`win95-button ${wordpadFormat.bold ? "active" : ""}`}
                onClick={() => setWordpadFormat((prev) => ({ ...prev, bold: !prev.bold }))}
              >
                <strong>N</strong>
              </button>
              <button
                className={`win95-button ${wordpadFormat.italic ? "active" : ""}`}
                onClick={() => setWordpadFormat((prev) => ({ ...prev, italic: !prev.italic }))}
              >
                <em>I</em>
              </button>
              <button
                className={`win95-button ${wordpadFormat.underline ? "active" : ""}`}
                onClick={() => setWordpadFormat((prev) => ({ ...prev, underline: !prev.underline }))}
              >
                <u>S</u>
              </button>
            </div>
            <div className="win95-wordpad-content">
              <div
                className="win95-wordpad-editor"
                contentEditable
                style={{
                  fontFamily: wordpadFormat.font,
                  fontSize: `${wordpadFormat.size}px`,
                  fontWeight: wordpadFormat.bold ? "bold" : "normal",
                  fontStyle: wordpadFormat.italic ? "italic" : "normal",
                  textDecoration: wordpadFormat.underline ? "underline" : "none",
                  textAlign: wordpadFormat.align as any,
                }}
                dangerouslySetInnerHTML={{ __html: wordpadContent.replace(/\n/g, "<br>") }}
                onInput={(e) => setWordpadContent((e.target as HTMLDivElement).innerText)}
              ></div>
            </div>
          </div>
        </div>
      )}

      {openWindows.includes("mediaplayer") && (
        <div
          ref={(el) => (windowRefs.current.mediaplayer = el)}
          className={`win95-window ${activeWindow === "mediaplayer" ? "win95-window-active" : "win95-window-inactive"} ${
            windowStates.mediaplayer.minimized ? "win95-window-minimized" : ""
          } ${windowStates.mediaplayer.maximized ? "win95-window-maximized" : ""}`}
          style={
            !windowStates.mediaplayer.maximized
              ? {
                  top: windowPositions.mediaplayer.y,
                  left: windowPositions.mediaplayer.x,
                  width: windowPositions.mediaplayer.width,
                  height: windowPositions.mediaplayer.height,
                }
              : {}
          }
          onClick={() => handleWindowClick("mediaplayer")}
        >
          <div
            className="win95-title-bar"
            draggable={!windowStates.mediaplayer.maximized}
            onDragStart={(e) => handleDragStart(e, "mediaplayer")}
          >
            <div className="win95-title-bar-text">
              <Play size={14} />
              <span>Windows Media Player</span>
            </div>
            <div className="win95-title-bar-controls">
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMinimizeWindow(e, "mediaplayer")}
                onMouseEnter={(e) => handleShowTooltip("Minimizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                _
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleCloseWindow(e, "mediaplayer")}
                onMouseEnter={(e) => handleShowTooltip("Fechar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ×
              </button>
            </div>
          </div>
          <div className="win95-media-player">
            <div className="win95-media-player-display">
              {mediaPlayerState.playing ? "▶️ Reproduzindo:" : "⏸️ Pausado:"} {mediaPlayerState.currentTrack}
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={mediaPlayerState.position}
              onChange={(e) => setMediaPlayerState((prev) => ({ ...prev, position: Number.parseInt(e.target.value) }))}
              className="win95-media-player-slider"
            />
            <div className="win95-media-player-controls">
              <button
                className="win95-button win95-media-player-button"
                onClick={() => setMediaPlayerState((prev) => ({ ...prev, position: 0 }))}
              >
                <SkipBack size={16} />
              </button>
              <button
                className="win95-button win95-media-player-button"
                onClick={() => setMediaPlayerState((prev) => ({ ...prev, playing: !prev.playing }))}
              >
                {mediaPlayerState.playing ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button
                className="win95-button win95-media-player-button"
                onClick={() => setMediaPlayerState((prev) => ({ ...prev, position: 100 }))}
              >
                <SkipForward size={16} />
              </button>
              <button
                className="win95-button win95-media-player-button"
                onClick={() => setMediaPlayerState((prev) => ({ ...prev, volume: Math.min(100, prev.volume + 10) }))}
              >
                <Volume2 size={16} />
              </button>
            </div>
            <div className="mt-2 text-center text-xs">Volume: {mediaPlayerState.volume}%</div>
          </div>
        </div>
      )}

      {openWindows.includes("recyclebin") && (
        <div
          ref={(el) => (windowRefs.current.recyclebin = el)}
          className={`win95-window ${activeWindow === "recyclebin" ? "win95-window-active" : "win95-window-inactive"} ${
            windowStates.recyclebin.minimized ? "win95-window-minimized" : ""
          } ${windowStates.recyclebin.maximized ? "win95-window-maximized" : ""}`}
          style={
            !windowStates.recyclebin.maximized
              ? {
                  top: windowPositions.recyclebin.y,
                  left: windowPositions.recyclebin.x,
                  width: windowPositions.recyclebin.width,
                  height: windowPositions.recyclebin.height,
                }
              : {}
          }
          onClick={() => handleWindowClick("recyclebin")}
        >
          <div
            className="win95-title-bar"
            draggable={!windowStates.recyclebin.maximized}
            onDragStart={(e) => handleDragStart(e, "recyclebin")}
          >
            <div className="win95-title-bar-text">
              <Trash2 size={14} />
              <span>Lixeira</span>
            </div>
            <div className="win95-title-bar-controls">
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMinimizeWindow(e, "recyclebin")}
                onMouseEnter={(e) => handleShowTooltip("Minimizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                _
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMaximizeWindow(e, "recyclebin")}
                onMouseEnter={(e) =>
                  handleShowTooltip(windowStates.recyclebin.maximized ? "Restaurar" : "Maximizar", e)
                }
                onMouseLeave={handleHideTooltip}
              >
                □
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleCloseWindow(e, "recyclebin")}
                onMouseEnter={(e) => handleShowTooltip("Fechar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ×
              </button>
            </div>
          </div>
          <div className="win95-recycle-bin">
            <div className="win95-explorer-menubar">
              <div className="win95-explorer-menu-item">Arquivo</div>
              <div className="win95-explorer-menu-item">Editar</div>
              <div className="win95-explorer-menu-item">Exibir</div>
              <div className="win95-explorer-menu-item">Ajuda</div>
            </div>
            <div className="win95-explorer-toolbar">
              <button
                className="win95-button"
                onClick={() => setRecycleBinItems([])}
                disabled={recycleBinItems.length === 0}
              >
                Esvaziar Lixeira
              </button>
            </div>
            <div className="win95-recycle-bin-content">
              {recycleBinItems.length === 0 ? (
                <div className="win95-recycle-bin-empty">
                  <div className="win95-recycle-bin-empty-icon">🗑️</div>
                  <div>A Lixeira está vazia</div>
                </div>
              ) : (
                recycleBinItems.map((item, index) => (
                  <div key={index} className="win95-recycle-bin-item">
                    <div className="win95-recycle-bin-item-icon">📄</div>
                    <div>{item}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {openWindows.includes("controlpanel") && (
        <div
          ref={(el) => (windowRefs.current.controlpanel = el)}
          className={`win95-window ${activeWindow === "controlpanel" ? "win95-window-active" : "win95-window-inactive"} ${
            windowStates.controlpanel.minimized ? "win95-window-minimized" : ""
          } ${windowStates.controlpanel.maximized ? "win95-window-maximized" : ""}`}
          style={
            !windowStates.controlpanel.maximized
              ? {
                  top: windowPositions.controlpanel.y,
                  left: windowPositions.controlpanel.x,
                  width: windowPositions.controlpanel.width,
                  height: windowPositions.controlpanel.height,
                }
              : {}
          }
          onClick={() => handleWindowClick("controlpanel")}
        >
          <div
            className="win95-title-bar"
            draggable={!windowStates.controlpanel.maximized}
            onDragStart={(e) => handleDragStart(e, "controlpanel")}
          >
            <div className="win95-title-bar-text">
              <Settings size={14} />
              <span>Painel de Controle</span>
            </div>
            <div className="win95-title-bar-controls">
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMinimizeWindow(e, "controlpanel")}
                onMouseEnter={(e) => handleShowTooltip("Minimizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                _
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMaximizeWindow(e, "controlpanel")}
                onMouseEnter={(e) =>
                  handleShowTooltip(windowStates.controlpanel.maximized ? "Restaurar" : "Maximizar", e)
                }
                onMouseLeave={handleHideTooltip}
              >
                □
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleCloseWindow(e, "controlpanel")}
                onMouseEnter={(e) => handleShowTooltip("Fechar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ×
              </button>
            </div>
          </div>
          <div className="win95-control-panel">
            <div className="win95-control-panel-content">
              <div className="win95-control-panel-grid">
                <div className="win95-control-panel-item" onClick={() => triggerBSOD()}>
                  <div className="win95-control-panel-item-icon">🖥️</div>
                  <div className="win95-control-panel-item-title">Sistema</div>
                </div>
                <div className="win95-control-panel-item">
                  <div className="win95-control-panel-item-icon">🔊</div>
                  <div className="win95-control-panel-item-title">Sons</div>
                </div>
                <div className="win95-control-panel-item">
                  <div className="win95-control-panel-item-icon">🖱️</div>
                  <div className="win95-control-panel-item-title">Mouse</div>
                </div>
                <div className="win95-control-panel-item">
                  <div className="win95-control-panel-item-icon">⌨️</div>
                  <div className="win95-control-panel-item-title">Teclado</div>
                </div>
                <div className="win95-control-panel-item">
                  <div className="win95-control-panel-item-icon">🎨</div>
                  <div className="win95-control-panel-item-title">Vídeo</div>
                </div>
                <div className="win95-control-panel-item">
                  <div className="win95-control-panel-item-icon">🕰️</div>
                  <div className="win95-control-panel-item-title">Data/Hora</div>
                </div>
                <div className="win95-control-panel-item">
                  <div className="win95-control-panel-item-icon">👤</div>
                  <div className="win95-control-panel-item-title">Usuários</div>
                </div>
                <div className="win95-control-panel-item">
                  <div className="win95-control-panel-item-icon">🌐</div>
                  <div className="win95-control-panel-item-title">Rede</div>
                </div>
                <div className="win95-control-panel-item">
                  <div className="win95-control-panel-item-icon">🖨️</div>
                  <div className="win95-control-panel-item-title">Impressoras</div>
                </div>
                <div className="win95-control-panel-item">
                  <div className="win95-control-panel-item-icon">💾</div>
                  <div className="win95-control-panel-item-title">Adicionar/Remover Programas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {openWindows.includes("powerpoint") && (
        <div
          ref={(el) => (windowRefs.current.powerpoint = el)}
          className={`win95-window ${activeWindow === "powerpoint" ? "win95-window-active" : "win95-window-inactive"} ${
            windowStates.powerpoint.minimized ? "win95-window-minimized" : ""
          } ${windowStates.powerpoint.maximized ? "win95-window-maximized" : ""}`}
          style={
            !windowStates.powerpoint.maximized
              ? {
                  top: windowPositions.powerpoint.y,
                  left: windowPositions.powerpoint.x,
                  width: windowPositions.powerpoint.width,
                  height: windowPositions.powerpoint.height,
                }
              : {}
          }
          onClick={() => handleWindowClick("powerpoint")}
        >
          <div
            className="win95-title-bar"
            draggable={!windowStates.powerpoint.maximized}
            onDragStart={(e) => handleDragStart(e, "powerpoint")}
          >
            <div className="win95-title-bar-text">
              <FilePresentation size={14} />
              <span>PowerPoint - Apresentação Integrare</span>
            </div>
            <div className="win95-title-bar-controls">
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMinimizeWindow(e, "powerpoint")}
                onMouseEnter={(e) => handleShowTooltip("Minimizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                _
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMaximizeWindow(e, "powerpoint")}
                onMouseEnter={(e) =>
                  handleShowTooltip(windowStates.powerpoint.maximized ? "Restaurar" : "Maximizar", e)
                }
                onMouseLeave={handleHideTooltip}
              >
                □
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleCloseWindow(e, "powerpoint")}
                onMouseEnter={(e) => handleShowTooltip("Fechar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ×
              </button>
            </div>
          </div>
          <div className="win95-powerpoint">
            <div className="win95-explorer-menubar">
              <div className="win95-explorer-menu-item">Arquivo</div>
              <div className="win95-explorer-menu-item">Editar</div>
              <div className="win95-explorer-menu-item">Exibir</div>
              <div className="win95-explorer-menu-item">Inserir</div>
              <div className="win95-explorer-menu-item">Formatar</div>
              <div className="win95-explorer-menu-item">Ferramentas</div>
              <div className="win95-explorer-menu-item">Apresentação</div>
              <div className="win95-explorer-menu-item">Ajuda</div>
            </div>
            <div className="win95-powerpoint-content">
              <div className="win95-powerpoint-slide">
                <div className="win95-powerpoint-slide-title">{powerPointSlides[powerPointSlide].title}</div>
                <div className="win95-powerpoint-slide-content">
                  {powerPointSlides[powerPointSlide].content.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
                <div className="win95-powerpoint-slide-footer">{powerPointSlides[powerPointSlide].footer}</div>
              </div>
            </div>
            <div className="win95-powerpoint-controls">
              <button
                className="win95-button"
                onClick={() => setPowerPointSlide((prev) => Math.max(0, prev - 1))}
                disabled={powerPointSlide === 0}
              >
                Anterior
              </button>
              <button
                className="win95-button"
                onClick={() => setPowerPointSlide((prev) => Math.min(powerPointSlides.length - 1, prev + 1))}
                disabled={powerPointSlide === powerPointSlides.length - 1}
              >
                Próximo
              </button>
            </div>
          </div>
        </div>
      )}

      {openWindows.includes("cdrom") && (
        <div
          ref={(el) => (windowRefs.current.cdrom = el)}
          className={`win95-window ${activeWindow === "cdrom" ? "win95-window-active" : "win95-window-inactive"} ${
            windowStates.cdrom.minimized ? "win95-window-minimized" : ""
          } ${windowStates.cdrom.maximized ? "win95-window-maximized" : ""}`}
          style={
            !windowStates.cdrom.maximized
              ? {
                  top: windowPositions.cdrom.y,
                  left: windowPositions.cdrom.x,
                  width: windowPositions.cdrom.width,
                  height: windowPositions.cdrom.height,
                }
              : {}
          }
          onClick={() => handleWindowClick("cdrom")}
        >
          <div
            className="win95-title-bar"
            draggable={!windowStates.cdrom.maximized}
            onDragStart={(e) => handleDragStart(e, "cdrom")}
          >
            <div className="win95-title-bar-text">
              <span>💿</span>
              <span>CD-ROM Integrare (D:)</span>
            </div>
            <div className="win95-title-bar-controls">
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMinimizeWindow(e, "cdrom")}
                onMouseEnter={(e) => handleShowTooltip("Minimizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                _
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleMaximizeWindow(e, "cdrom")}
                onMouseEnter={(e) => handleShowTooltip(windowStates.cdrom.maximized ? "Restaurar" : "Maximizar", e)}
                onMouseLeave={handleHideTooltip}
              >
                □
              </button>
              <button
                className="win95-button win95-button-small"
                onClick={(e) => handleCloseWindow(e, "cdrom")}
                onMouseEnter={(e) => handleShowTooltip("Fechar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ×
              </button>
            </div>
          </div>
          <div className="win95-cdrom">
            <div className="win95-explorer-menubar">
              <div className="win95-explorer-menu-item">Arquivo</div>
              <div className="win95-explorer-menu-item">Editar</div>
              <div className="win95-explorer-menu-item">Exibir</div>
              <div className="win95-explorer-menu-item">Ajuda</div>
            </div>
            <div className="win95-cdrom-content">
              <div className="win95-cdrom-header">
                <div className="win95-cdrom-logo">💿</div>
                <div>
                  <div className="win95-cdrom-title">Integrare Marketing Digital</div>
                  <div className="win95-cdrom-subtitle">CD-ROM Interativo - v1.0</div>
                </div>
              </div>

              <div className="win95-cdrom-section">
                <div className="win95-cdrom-section-title">Bem-vindo ao CD-ROM da Integrare</div>
                <p>
                  Este CD-ROM contém informações sobre nossa agência, portfólio de trabalhos e materiais de marketing.
                </p>
                <p>Clique nos ícones abaixo para explorar o conteúdo:</p>

                <div className="win95-cdrom-grid">
                  <div className="win95-cdrom-item" onClick={() => handleWindowClick("about")}>
                    <div className="win95-cdrom-item-icon">🏢</div>
                    <div className="win95-cdrom-item-title">Sobre a Integrare</div>
                  </div>
                  <div className="win95-cdrom-item" onClick={() => handleWindowClick("services")}>
                    <div className="win95-cdrom-item-icon">🛠️</div>
                    <div className="win95-cdrom-item-title">Nossos Serviços</div>
                  </div>
                  <div className="win95-cdrom-item" onClick={() => handleWindowClick("portfolio")}>
                    <div className="win95-cdrom-item-icon">📁</div>
                    <div className="win95-cdrom-item-title">Portfólio</div>
                  </div>
                  <div className="win95-cdrom-item" onClick={() => handleWindowClick("powerpoint")}>
                    <div className="win95-cdrom-item-icon">📊</div>
                    <div className="win95-cdrom-item-title">Apresentação</div>
                  </div>
                  <div className="win95-cdrom-item" onClick={() => handleWindowClick("mediaplayer")}>
                    <div className="win95-cdrom-item-icon">🎵</div>
                    <div className="win95-cdrom-item-title">Mídia</div>
                  </div>
                  <div className="win95-cdrom-item" onClick={() => handleWindowClick("contact")}>
                    <div className="win95-cdrom-item-icon">📞</div>
                    <div className="win95-cdrom-item-title">Contato</div>
                  </div>
                </div>
              </div>

              <div className="win95-cdrom-section mt-4">
                <div className="win95-cdrom-section-title">Requisitos do Sistema</div>
                <p>• Windows 95 ou superior</p>
                <p>• Processador 486DX 66MHz ou superior</p>
                <p>• 16MB de RAM</p>
                <p>• Placa de vídeo SVGA</p>
                <p>• Drive de CD-ROM 4x</p>
                <p>• Placa de som compatível com Windows</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showScreensaver && (
        <div className="win95-screensaver" onClick={() => setShowScreensaver(false)}>
          <div
            className="win95-screensaver-logo"
            style={{
              top: Math.random() * window.innerHeight,
              left: Math.random() * window.innerWidth,
            }}
          >
            Integrare
          </div>
        </div>
      )}

      {showBSOD && (
        <div className="win95-bsod">
          <div className="win95-bsod-header">Windows</div>
          <div className="win95-bsod-text">
            Um erro ocorreu. Para evitar danos ao seu computador, o sistema foi interrompido.
          </div>
          <div className="win95-bsod-code">
            INTEGRARE_MARKETING_EXCEPTION
            <br />
            Error: 0x0000001E (0xC0000005, 0x00000000, 0x00000000, 0x00000000)
          </div>
          <div className="win95-bsod-text">* Pressione qualquer tecla para reiniciar</div>
          <div className="win95-bsod-footer">Reiniciando automaticamente em 5 segundos...</div>
        </div>
      )}

      {showClippy && (
        <div className="win95-clippy" onClick={handleClippyClick}>
          {clippyMessage && <div className="win95-clippy-bubble">{clippyMessage}</div>}
          <div className="win95-clippy-image"></div>
        </div>
      )}

      {showShutdown && (
        <div className="win95-shutdown">
          <div className="win95-shutdown-header">Desligar o Windows</div>
          <div className="win95-shutdown-content">
            <div className="win95-shutdown-message">
              <div className="win95-shutdown-icon">🖥️</div>
              <div>O que você deseja fazer com o computador?</div>
            </div>
            <div className="win95-shutdown-options">
              <div className="win95-shutdown-option">
                <input
                  type="radio"
                  id="shutdown-option-restart"
                  name="shutdown-option"
                  checked={shutdownOption === "restart"}
                  onChange={() => setShutdownOption("restart")}
                />
                <label htmlFor="shutdown-option-restart">Reiniciar</label>
              </div>
              <div className="win95-shutdown-option">
                <input
                  type="radio"
                  id="shutdown-option-shutdown"
                  name="shutdown-option"
                  checked={shutdownOption === "shutdown"}
                  onChange={() => setShutdownOption("shutdown")}
                />
                <label htmlFor="shutdown-option-shutdown">Desligar</label>
              </div>
              <div className="win95-shutdown-option">
                <input
                  type="radio"
                  id="shutdown-option-cancel"
                  name="shutdown-option"
                  checked={shutdownOption === "cancel"}
                  onChange={() => setShutdownOption("cancel")}
                />
                <label htmlFor="shutdown-option-cancel">Cancelar</label>
              </div>
            </div>
            <div className="win95-shutdown-buttons">
              <button className="win95-button" onClick={confirmShutdown}>
                OK
              </button>
              <button className="win95-button" onClick={() => setShowShutdown(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Taskbar */}
      <div className="win95-taskbar">
        <button
          ref={startButtonRef}
          className={`win95-button win95-start-button ${startMenuOpen ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation()
            handleStartClick()
          }}
        >
          <span className="text-lg">🪟</span>
          <span>Iniciar</span>
        </button>

        <div className="win95-taskbar-items">
          {openWindows.map((window) => (
            <button
              key={window}
              className={`win95-button win95-taskbar-item ${activeWindow === window ? "active" : ""}`}
              onClick={() => {
                if (windowStates[window as keyof typeof windowStates].minimized) {
                  handleRestoreWindow(window)
                } else {
                  setActiveWindow(window === activeWindow ? null : window)
                }
              }}
            >
              {window === "about" && <Info size={16} />}
              {window === "services" && <Settings size={16} />}
              {window === "portfolio" && <Folder size={16} />}
              {window === "contact" && <Mail size={16} />}
              {window === "explorer" && <Computer size={16} />}
              {window === "notepad" && <FileText size={16} />}
              {window === "browser" && <Globe size={16} />}
              {window === "calculator" && <span>🧮</span>}
              {window === "minesweeper" && <span>💣</span>}
              {window === "paint" && <Palette size={16} />}
              {window === "wordpad" && <FileText size={16} />}
              {window === "mediaplayer" && <Play size={16} />}
              {window === "recyclebin" && <Trash2 size={16} />}
              {window === "controlpanel" && <Settings size={16} />}
              {window === "cdrom" && <span>💿</span>}
              <span>
                {window === "about" && "Sobre Nós"}
                {window === "services" && "Serviços"}
                {window === "portfolio" && "Portfólio"}
                {window === "contact" && "Contato"}
                {window === "explorer" && "Meu Computador"}
                {window === "notepad" && "Bloco de Notas"}
                {window === "browser" && "Internet Explorer"}
                {window === "calculator" && "Calculadora"}
                {window === "minesweeper" && "Campo Minado"}
                {window === "paint" && "Paint"}
                {window === "wordpad" && "WordPad"}
                {window === "mediaplayer" && "Media Player"}
                {window === "recyclebin" && "Lixeira"}
                {window === "controlpanel" && "Painel de Controle"}
                {window === "cdrom" && "CD-ROM Integrare"}
              </span>
            </button>
          ))}
        </div>

        <div className="win95-taskbar-time">{currentTime}</div>
      </div>

      {/* Start Menu */}
      {startMenuOpen && (
        <div className="win95-start-menu" onClick={(e) => e.stopPropagation()}>
          <div className="win95-start-menu-header">
            <span>Windows 95</span>
          </div>
          <div className="win95-start-menu-items">
            <div className="win95-start-menu-item" onClick={() => handleStartMenuItemClick("about")}>
              <Info size={16} />
              <span>Sobre Nós</span>
            </div>
            <div className="win95-start-menu-item" onClick={() => handleStartMenuItemClick("services")}>
              <Settings size={16} />
              <span>Serviços</span>
            </div>
            <div className="win95-start-menu-item" onClick={() => handleStartMenuItemClick("portfolio")}>
              <Folder size={16} />
              <span>Portfólio</span>
            </div>
            <div className="win95-start-menu-item" onClick={() => handleStartMenuItemClick("contact")}>
              <Mail size={16} />
              <span>Contato</span>
            </div>

            <div className="win95-divider"></div>

            <div className="win95-start-menu-item" onClick={() => handleStartMenuItemClick("explorer")}>
              <Computer size={16} />
              <span>Meu Computador</span>
            </div>
            <div className="win95-start-menu-item" onClick={() => handleStartMenuItemClick("browser")}>
              <Globe size={16} />
              <span>Internet Explorer</span>
            </div>
            <div className="win95-start-menu-item" onClick={() => handleStartMenuItemClick("notepad")}>
              <FileText size={16} />
              <span>Bloco de Notas</span>
            </div>
            <div className="win95-start-menu-item" onClick={() => handleStartMenuItemClick("calculator")}>
              <span className="text-lg mr-2">🧮</span>
              <span>Calculadora</span>
            </div>
            <div className="win95-start-menu-item" onClick={() => handleStartMenuItemClick("minesweeper")}>
              <span className="text-lg mr-2">💣</span>
              <span>Campo Minado</span>
            </div>
            <div className="win95-start-menu-item" onClick={() => handleStartMenuItemClick("paint")}>
              <Palette size={16} />
              <span>Paint</span>
            </div>
            <div className="win95-start-menu-item" onClick={() => handleStartMenuItemClick("wordpad")}>
              <FileText size={16} />
              <span>WordPad</span>
            </div>
            <div className="win95-start-menu-item" onClick={() => handleStartMenuItemClick("mediaplayer")}>
              <Play size={16} />
              <span>Media Player</span>
            </div>
            <div className="win95-start-menu-item" onClick={() => handleStartMenuItemClick("controlpanel")}>
              <Settings size={16} />
              <span>Painel de Controle</span>
            </div>
            <div className="win95-start-menu-item" onClick={() => handleStartMenuItemClick("cdrom")}>
              <span className="text-lg mr-2">💿</span>
              <span>CD-ROM Integrare</span>
            </div>

            <div className="win95-divider"></div>

            <div
              className="win95-start-menu-item"
              onClick={() => {
                setSoundEnabled(!soundEnabled)
                setStartMenuOpen(false)
              }}
            >
              <span className="text-lg mr-2">{soundEnabled ? "🔊" : "🔇"}</span>
              <span>{soundEnabled ? "Desativar Sons" : "Ativar Sons"}</span>
            </div>

            <div className="win95-divider"></div>

            <Link href="/" className="win95-start-menu-item">
              <Home size={16} />
              <span>Voltar ao Portal</span>
            </Link>

            <div
              className="win95-start-menu-item"
              onClick={() => {
                setBootStage("booting")
                setStartMenuOpen(false)
              }}
            >
              <Terminal size={16} />
              <span>Reiniciar</span>
            </div>

            <div className="win95-start-menu-item" onClick={handleShutdown}>
              <Power size={16} />
              <span>Desligar...</span>
            </div>
          </div>
        </div>
      )}

      {/* Context Menu */}
      {contextMenu && (
        <div
          className="win95-context-menu"
          style={{ top: contextMenu.y, left: contextMenu.x }}
          onClick={(e) => e.stopPropagation()}
        >
          {contextMenu.type === "desktop" && (
            <>
              <div className="win95-context-menu-item">
                <div className="win95-context-menu-item-icon">↻</div>
                <span>Atualizar</span>
              </div>
              <div className="win95-divider"></div>
              <div className="win95-context-menu-item">
                <div className="win95-context-menu-item-icon">📋</div>
                <span>Colar</span>
              </div>
              <div className="win95-divider"></div>
              <div className="win95-context-menu-item">
                <div className="win95-context-menu-item-icon">📊</div>
                <span>Propriedades</span>
              </div>
            </>
          )}

          {contextMenu.type === "icon" && (
            <>
              <div className="win95-context-menu-item">
                <div className="win95-context-menu-item-icon">▶️</div>
                <span>Abrir</span>
              </div>
              <div className="win95-divider"></div>
              <div className="win95-context-menu-item">
                <div className="win95-context-menu-item-icon">✂️</div>
                <span>Recortar</span>
              </div>
              <div className="win95-context-menu-item">
                <div className="win95-context-menu-item-icon">📋</div>
                <span>Copiar</span>
              </div>
              <div className="win95-divider"></div>
              <div className="win95-context-menu-item">
                <div className="win95-context-menu-item-icon">🗑️</div>
                <span>Excluir</span>
              </div>
              <div className="win95-divider"></div>
              <div className="win95-context-menu-item">
                <div className="win95-context-menu-item-icon">📊</div>
                <span>Propriedades</span>
              </div>
            </>
          )}
        </div>
      )}

      {/* Dialog */}
      {showDialog && (
        <div className="win95-dialog">
          <div className="win95-title-bar">
            <div className="win95-title-bar-text">
              <span>Mensagem do Sistema</span>
            </div>
            <div className="win95-title-bar-controls">
              <button
                className="win95-button win95-button-small"
                onClick={() => setShowDialog(null)}
                onMouseEnter={(e) => handleShowTooltip("Fechar", e)}
                onMouseLeave={handleHideTooltip}
              >
                ×
              </button>
            </div>
          </div>
          <div className="win95-dialog-content">
            <div className="win95-dialog-icon">
              {showDialog.type === "error" && "❌"}
              {showDialog.type === "info" && "ℹ️"}
              {showDialog.type === "warning" && "⚠️"}
            </div>
            <div>{showDialog.message}</div>
          </div>
          <div className="win95-dialog-buttons">
            <button className="win95-button" onClick={() => setShowDialog(null)}>
              OK
            </button>
          </div>
        </div>
      )}

      {/* Tooltip */}
      {tooltipState && (
        <div className="win95-tooltip" style={{ top: tooltipState.y, left: tooltipState.x }}>
          {tooltipState.text}
        </div>
      )}

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-4 right-4 bg-gray-300 border-t-2 border-l-2 border-white border-r-2 border-b-2 border-gray-500 p-2 flex items-center z-50"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        <span className="text-sm">Voltar</span>
      </Link>
    </div>
  )

  // Adicionar efeito para inicializar o Paint quando aberto
  useEffect(() => {
    if (openWindows.includes("paint")) {
      initializePaint()
    }
  }, [openWindows.includes("paint"), initializePaint])

  if (bootStage === "booting") {
    return renderBootScreen()
  }

  if (bootStage === "login") {
    return renderLoginScreen()
  }

  return renderDesktop()
}
