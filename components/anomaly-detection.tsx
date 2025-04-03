"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, CheckCircle } from "lucide-react"

// Mock anomaly data
const anomalyData = [
  {
    id: 1,
    date: "Apr 1, 2025",
    time: "3:45 PM",
    type: "Heart Rate",
    value: "95 bpm",
    threshold: "90 bpm",
    severity: "low",
    description: "Heart rate slightly elevated for 15 minutes",
    resolved: true,
  },
  {
    id: 2,
    date: "Mar 28, 2025",
    time: "10:30 AM",
    type: "Blood Pressure",
    value: "145/95 mmHg",
    threshold: "140/90 mmHg",
    severity: "medium",
    description: "Blood pressure elevated above normal range",
    resolved: true,
  },
  {
    id: 3,
    date: "Mar 25, 2025",
    time: "8:15 PM",
    type: "Blood Oxygen",
    value: "94%",
    threshold: "95%",
    severity: "low",
    description: "Blood oxygen slightly below normal range",
    resolved: true,
  },
  {
    id: 4,
    date: "Today",
    time: "11:20 AM",
    type: "Heart Rate Variability",
    value: "25 ms",
    threshold: "30 ms",
    severity: "medium",
    description: "Heart rate variability below normal range",
    resolved: false,
  },
]

interface Anomaly {
  id: number;
  date: string;
  time: string;
  type: string;
  value: string;
  threshold: string;
  severity: "low" | "medium" | "high"; // Assuming severity can only be these values
  description: string;
  resolved: boolean;
}

export default function AnomalyDetection() {
  const [filter, setFilter] = useState("all")

  const filteredAnomalies = anomalyData.filter((anomaly) => {
    if (filter === "active") return !anomaly.resolved
    if (filter === "resolved") return anomaly.resolved
    return true
  })

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>
          All
        </Button>
        <Button variant={filter === "active" ? "default" : "outline"} size="sm" onClick={() => setFilter("active")}>
          Active
        </Button>
        <Button variant={filter === "resolved" ? "default" : "outline"} size="sm" onClick={() => setFilter("resolved")}>
          Resolved
        </Button>
      </div>

      <div className="space-y-4">
        {filteredAnomalies.length > 0 ? (
          filteredAnomalies.map((anomaly) => <AnomalyCard key={anomaly.id} anomaly={anomaly} />)
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium">No anomalies detected</h3>
            <p className="text-gray-500">Your vitals are within normal ranges</p>
          </div>
        )}
      </div>
    </div>
  )
}

function AnomalyCard({ anomaly }: { anomaly: Anomaly }) {
  const getSeverityColor = (severity: "low" | "medium" | "high") => {
    switch (severity) {
      case "low":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "medium":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <Card className={`border-l-4 ${getSeverityColor(anomaly.severity)}`}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium">{anomaly.type} Anomaly</h3>
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getSeverityColor(anomaly.severity)}`}
              >
                {anomaly.severity.charAt(0).toUpperCase() + anomaly.severity.slice(1)}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-2">{anomaly.description}</p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm mt-2">
              <div>
                <span className="text-gray-500">Value: </span>
                <span className="font-medium">{anomaly.value}</span>
              </div>
              <div>
                <span className="text-gray-500">Threshold: </span>
                <span className="font-medium">{anomaly.threshold}</span>
              </div>
              <div>
                <span className="text-gray-500">Date: </span>
                <span className="font-medium">{anomaly.date}</span>
              </div>
              <div>
                <span className="text-gray-500">Time: </span>
                <span className="font-medium">{anomaly.time}</span>
              </div>
            </div>
          </div>

          {anomaly.resolved ? (
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <CheckCircle className="h-4 w-4" />
              <span>Resolved</span>
            </div>
          ) : (
            <Button size="sm" variant="outline" className="text-sm">
              <AlertTriangle className="h-4 w-4 mr-1" />
              Review
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

