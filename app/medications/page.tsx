import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Calendar, CheckCircle, XCircle } from "lucide-react"
import MedicationForm from "@/components/medication-form"

export default function MedicationsPage() {
  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Medications</h1>
          <p className="text-gray-500">Manage your medications and track adherence</p>
        </div>
        <Button>
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Medication
        </Button>
      </div>

      <Tabs defaultValue="current" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="current">Current Medications</TabsTrigger>
          <TabsTrigger value="history">Medication History</TabsTrigger>
          <TabsTrigger value="add">Add Medication</TabsTrigger>
        </TabsList>

        <TabsContent value="current">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <MedicationCard
              name="Lisinopril"
              dosage="10mg"
              frequency="Once daily"
              time="12:00 PM"
              purpose="Blood pressure control"
              startDate="Jan 15, 2025"
              refillDate="May 15, 2025"
              pillsLeft={45}
            />

            <MedicationCard
              name="Metformin"
              dosage="500mg"
              frequency="Twice daily"
              time="8:00 AM, 6:00 PM"
              purpose="Diabetes management"
              startDate="Feb 1, 2025"
              refillDate="May 1, 2025"
              pillsLeft={30}
            />

            <MedicationCard
              name="Atorvastatin"
              dosage="20mg"
              frequency="Once daily"
              time="9:00 PM"
              purpose="Cholesterol management"
              startDate="Mar 10, 2025"
              refillDate="Jun 10, 2025"
              pillsLeft={60}
            />
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Medication History</CardTitle>
              <CardDescription>Track your medication adherence over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">April 2025</h3>
                  <div className="space-y-4">
                    <MedicationHistoryItem
                      date="Apr 3, 2025"
                      medications={[
                        { name: "Lisinopril", taken: true, time: "12:05 PM" },
                        { name: "Metformin", taken: true, time: "8:10 AM" },
                        { name: "Metformin", taken: true, time: "6:15 PM" },
                        { name: "Atorvastatin", taken: true, time: "9:20 PM" },
                      ]}
                    />

                    <MedicationHistoryItem
                      date="Apr 2, 2025"
                      medications={[
                        { name: "Lisinopril", taken: true, time: "12:10 PM" },
                        { name: "Metformin", taken: true, time: "8:05 AM" },
                        { name: "Metformin", taken: true, time: "6:20 PM" },
                        { name: "Atorvastatin", taken: true, time: "9:15 PM" },
                      ]}
                    />

                    <MedicationHistoryItem
                      date="Apr 1, 2025"
                      medications={[
                        { name: "Lisinopril", taken: true, time: "12:15 PM" },
                        { name: "Metformin", taken: true, time: "8:10 AM" },
                        { name: "Metformin", taken: false, missed: true },
                        { name: "Atorvastatin", taken: true, time: "9:30 PM" },
                      ]}
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">March 2025</h3>
                  <Button variant="outline" className="w-full">
                    Load More History
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle>Add New Medication</CardTitle>
              <CardDescription>Enter the details of your new medication</CardDescription>
            </CardHeader>
            <CardContent>
              <MedicationForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Medication Adherence</CardTitle>
          <CardDescription>Your medication adherence over the past 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Overall Adherence</span>
                <span className="text-sm font-medium">95%</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: "95%" }}></div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Lisinopril</span>
                  <span className="text-sm font-medium">100%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Metformin</span>
                  <span className="text-sm font-medium">90%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Atorvastatin</span>
                  <span className="text-sm font-medium">95%</span>
                </div>
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function MedicationCard({ name, dosage, frequency, time, purpose, startDate, refillDate, pillsLeft }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{purpose}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-500">Dosage</p>
              <p className="font-medium">{dosage}</p>
            </div>
            <div>
              <p className="text-gray-500">Frequency</p>
              <p className="font-medium">{frequency}</p>
            </div>
            <div>
              <p className="text-gray-500">Time</p>
              <p className="font-medium">{time}</p>
            </div>
            <div>
              <p className="text-gray-500">Pills Left</p>
              <p className="font-medium">{pillsLeft}</p>
            </div>
          </div>

          <div className="pt-2 border-t">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>Started: {startDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-gray-400" />
                <span>Refill: {refillDate}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button size="sm" className="flex-1">
              Take Now
            </Button>
            <Button size="sm" variant="outline" className="flex-1">
              Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function MedicationHistoryItem({ date, medications }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-50 px-4 py-2 font-medium">{date}</div>
      <div className="divide-y">
        {medications.map((med, index) => (
          <div key={index} className="px-4 py-2 flex items-center justify-between">
            <div>
              <p className="font-medium">{med.name}</p>
              {med.taken ? (
                <p className="text-sm text-gray-500">Taken at {med.time}</p>
              ) : med.missed ? (
                <p className="text-sm text-red-500">Missed</p>
              ) : null}
            </div>
            {med.taken ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

