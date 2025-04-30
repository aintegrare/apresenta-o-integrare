"use client"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

interface LatexRechartsProps {
  type: "line" | "bar" | "pie"
  data: any[]
  width?: number
  height?: number
  caption: string
  label?: string
  config?: {
    xKey?: string
    yKey?: string
    dataKey?: string
    nameKey?: string
    valueKey?: string
    lines?: Array<{
      dataKey: string
      stroke: string
      name?: string
    }>
    bars?: Array<{
      dataKey: string
      fill: string
      name?: string
    }>
    pies?: Array<{
      dataKey: string
      nameKey: string
      colors: string[]
    }>
  }
}

export default function LatexRecharts({
  type,
  data,
  width = 600,
  height = 300,
  caption,
  label,
  config,
}: LatexRechartsProps) {
  const renderChart = () => {
    switch (type) {
      case "line":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis
                dataKey={config?.xKey || "name"}
                tick={{ fill: "#333" }}
                tickLine={{ stroke: "#333" }}
                axisLine={{ stroke: "#333" }}
              />
              <YAxis tick={{ fill: "#333" }} tickLine={{ stroke: "#333" }} axisLine={{ stroke: "#333" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              />
              <Legend
                wrapperStyle={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "12px",
                }}
              />
              {config?.lines?.map((line, index) => (
                <Line
                  key={index}
                  type="monotone"
                  dataKey={line.dataKey}
                  stroke={line.stroke}
                  name={line.name || line.dataKey}
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        )
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis
                dataKey={config?.xKey || "name"}
                tick={{ fill: "#333" }}
                tickLine={{ stroke: "#333" }}
                axisLine={{ stroke: "#333" }}
              />
              <YAxis tick={{ fill: "#333" }} tickLine={{ stroke: "#333" }} axisLine={{ stroke: "#333" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              />
              <Legend
                wrapperStyle={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "12px",
                }}
              />
              {config?.bars?.map((bar, index) => (
                <Bar
                  key={index}
                  dataKey={bar.dataKey}
                  fill={bar.fill}
                  name={bar.name || bar.dataKey}
                  radius={[4, 4, 0, 0]}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        )
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                outerRadius={height / 3}
                dataKey={config?.pies?.[0]?.dataKey || "value"}
                nameKey={config?.pies?.[0]?.nameKey || "name"}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      config?.pies?.[0]?.colors?.[index % (config?.pies?.[0]?.colors?.length || 1)] ||
                      `#${Math.floor(Math.random() * 16777215).toString(16)}`
                    }
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
                formatter={(value: number) => [`${value}`, ""]}
              />
              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                wrapperStyle={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "12px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        )
      default:
        return <div>Tipo de gráfico não suportado</div>
    }
  }

  return (
    <div className="my-8">
      <div className="border border-gray-200 p-4 bg-white">{renderChart()}</div>
      <div className="mt-2 text-sm text-center">
        <span className="font-semibold text-integrare-blue">Figura {label}: </span>
        {caption}
      </div>
    </div>
  )
}
