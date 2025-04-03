import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { HeartPulse, Activity, ArrowRight, Clock, Calendar } from "lucide-react"
import VitalsChart from "@/components/vitals-chart"
import AnomalyDetection from "@/components/anomaly-detection"



export default function DashboardPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Health Dashboard</h1>
        <p className="text-gray-500">Detailed monitoring and analysis of your health data</p>
      </div>

      <Tabs defaultValue="vitals" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="vitals">Vitals</TabsTrigger>
          <TabsTrigger value="anomalies">Anomaly Detection</TabsTrigger>
          <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
        </TabsList>

        <TabsContent value="vitals">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-red-500" />
                  Heart Rate
                </CardTitle>
                <CardDescription>24-hour monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <VitalsChart type="heartRate" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-blue-500" />
                  Blood Pressure
                </CardTitle>
                <CardDescription>Systolic & Diastolic</CardDescription>
              </CardHeader>
              <CardContent>
                <VitalsChart type="bloodPressure" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="anomalies">
          <Card>
            <CardHeader>
              <CardTitle>AI-Based Anomaly Detection</CardTitle>
              <CardDescription>Our AI system analyzes your vitals to detect potential health issues</CardDescription>
            </CardHeader>
            <CardContent>
              <AnomalyDetection />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risk">
          <Card>
            <CardHeader>
              <CardTitle>Personalized Risk Assessment</CardTitle>
              <CardDescription>Based on your medical history, current vitals, and AI predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Overall Risk Score</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Low Risk</span>
                    <span className="text-sm font-medium">High Risk</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Risk Factors</h3>
                  <ul className="space-y-2">
                    <RiskFactor name="Cardiovascular" level="low" score={15} />
                    <RiskFactor name="Diabetes" level="low" score={10} />
                    <RiskFactor name="Respiratory" level="minimal" score={5} />
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Recommendations</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Continue taking your prescribed medications regularly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Maintain your current exercise routine of 30 minutes daily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>Schedule your next check-up with Dr. Johnson in 3 months</span>
                    </li>
                  </ul>
                </div>

                <Button>Update Medical History</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Medication Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Lisinopril</p>
                  <p className="text-sm text-gray-500">10mg - 1 tablet</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">12:00 PM</span>
                  <Button size="sm" variant="outline">
                    Take
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Metformin</p>
                  <p className="text-sm text-gray-500">500mg - 1 tablet</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">6:00 PM</span>
                  <Button size="sm" variant="outline">
                    Take
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Atorvastatin</p>
                  <p className="text-sm text-gray-500">20mg - 1 tablet</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">9:00 PM</span>
                  <Button size="sm" variant="outline">
                    Take
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Dr. Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Regular Check-up</p>
                </div>
                <div>
                  <p className="text-sm font-medium">May 15, 2025</p>
                  <p className="text-sm text-gray-500">10:30 AM</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Dr. Robert Chen</p>
                  <p className="text-sm text-gray-500">Cardiology Specialist</p>
                </div>
                <div>
                  <p className="text-sm font-medium">June 2, 2025</p>
                  <p className="text-sm text-gray-500">2:00 PM</p>
                </div>
              </div>
            </div>

            <Button variant="outline" className="w-full mt-4">
              Schedule New Appointment
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function RiskFactor({ name, level, score }: { name: string; level: string; score: number }) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "minimal":
        return "bg-green-100 text-green-800"
      case "low":
        return "bg-blue-100 text-blue-800"
      case "moderate":
        return "bg-yellow-100 text-yellow-800"
      case "high":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="font-medium">{name}</span>
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getLevelColor(level)}`}
        >
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </span>
      </div>
      <span className="text-sm font-medium">{score}%</span>
    </li>
  )
}

