"use client"

import { useEffect, useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data for heart rate
const heartRateData = [
  { time: "12 AM", value: 62 },
  { time: "3 AM", value: 58 },
  { time: "6 AM", value: 65 },
  { time: "9 AM", value: 75 },
  { time: "12 PM", value: 72 },
  { time: "3 PM", value: 78 },
  { time: "6 PM", value: 70 },
  { time: "9 PM", value: 68 },
  { time: "11 PM", value: 64 },
]

// Mock data for blood pressure
const bloodPressureData = [
  { time: "12 AM", systolic: 115, diastolic: 75 },
  { time: "3 AM", systolic: 110, diastolic: 70 },
  { time: "6 AM", systolic: 118, diastolic: 78 },
  { time: "9 AM", systolic: 125, diastolic: 82 },
  { time: "12 PM", systolic: 120, diastolic: 80 },
  { time: "3 PM", systolic: 122, diastolic: 81 },
  { time: "6 PM", systolic: 118, diastolic: 78 },
  { time: "9 PM", systolic: 115, diastolic: 76 },
  { time: "11 PM", systolic: 112, diastolic: 74 },
]

export default function VitalsChart({ type }) {
  const [timeRange, setTimeRange] = useState("24h")
  const [data, setData] = useState([])

  useEffect(() => {
    // In a real app, this would fetch data from an API based on the time range
    if (type === "heartRate") {
      setData(heartRateData)
    } else if (type === "bloodPressure") {
      setData(bloodPressureData)
    }
  }, [type, timeRange])

  return (
    <div>
      <Tabs value={timeRange} onValueChange={setTimeRange} className="mb-4">
        <TabsList>
          <TabsTrigger value="24h">24h</TabsTrigger>
          <TabsTrigger value="7d">7d</TabsTrigger>
          <TabsTrigger value="30d">30d</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          {type === "heartRate" ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={[50, 100]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#ef4444"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          ) : (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis domain={[60, 140]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="systolic"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="diastolic"
                stroke="#93c5fd"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>

      <div className="mt-4">
        {type === "heartRate" ? (
          <div className="flex items-center justify-between text-sm">
            <div>
              <span className="font-medium">Average: </span>
              <span>68 bpm</span>
            </div>
            <div>
              <span className="font-medium">Range: </span>
              <span>58-78 bpm</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between text-sm">
            <div>
              <span className="font-medium">Average: </span>
              <span>118/78 mmHg</span>
            </div>
            <div>
              <span className="font-medium">Range: </span>
              <span>110-125/70-82 mmHg</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

