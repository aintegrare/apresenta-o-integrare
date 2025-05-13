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
  Info,
  Mail,
  Settings,
  Play,
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
        clearTimeout(clippyTimerRef.current)
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

      {/* Remaining Windows... */}

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
              {window === "powerpoint" && <FilePresentation size={16} />}
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
                {window === "powerpoint" && "PowerPoint"}
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

            <div className="win95-divider"></div>

            <div className="win95-start-menu-item" onClick={handleShutdown}>
              <Power size={16} />
              <span>Desligar...</span>
            </div>
          </div>
        </div>
      )}

      {/* Dialogs and Overlays */}
      {showDialog && (
        <div className="win95-dialog">
          <div className="win95-title-bar">
            <div className="win95-title-bar-text">
              <span>Mensagem do Sistema</span>
            </div>
            <div className="win95-title-bar-controls">
              <button className="win95-button win95-button-small" onClick={() => setShowDialog(null)}>
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

      {showScreensaver && (
        <div className="win95-screensaver" onClick={() => setShowScreensaver(false)}>
          <div className="win95-screensaver-logo">Integrare</div>
        </div>
      )}

      {showBSOD && (
        <div className="win95-bsod">
          <div className="win95-bsod-header">Windows</div>
          <div className="win95-bsod-text">
            Um erro ocorreu. Para evitar danos ao seu computador, o sistema foi interrompido.
          </div>
          <div className="win95-bsod-text">* Pressione qualquer tecla para reiniciar</div>
        </div>
      )}

      {/* Back Button to Home */}
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
