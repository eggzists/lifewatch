import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartPulse, Activity, Bell, PlusCircle, Clock, AlertTriangle } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="sticky top-0 z-10 border-b bg-white">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <HeartPulse className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold">LifeWatch</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
            <Link href="/history" className="text-sm font-medium">
              History
            </Link>
            <Link href="/medications" className="text-sm font-medium">
              Medications
            </Link>
            <Link href="/profile" className="text-sm font-medium">
              Profile
            </Link>
            <Button size="sm">Connect Device</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="container py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Welcome back,Yatharth</h1>
            <p className="text-gray-500">Here's your health overview for today</p>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Current Vitals</h2>
            <div className="grid gap-4 md:grid-cols-4">
              <VitalCard
                title="Heart Rate"
                value="72"
                unit="bpm"
                status="normal"
                icon={<HeartPulse className="h-5 w-5" />}
              />
              <VitalCard
                title="Blood Pressure"
                value="120/80"
                unit="mmHg"
                status="normal"
                icon={<Activity className="h-5 w-5" />}
              />
              <VitalCard
                title="Blood Oxygen"
                value="98"
                unit="%"
                status="normal"
                icon={<Activity className="h-5 w-5" />}
              />
              <VitalCard
                title="Temperature"
                value="98.6"
                unit="°F"
                status="normal"
                icon={<Activity className="h-5 w-5" />}
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Risk Assessment</h2>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Current Risk Level</CardTitle>
                <CardDescription>Based on your vitals and medical history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Low Risk</span>
                    <span className="text-sm font-medium">High Risk</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "35%" }}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  Your vitals are within normal ranges. Continue monitoring and taking your medications as prescribed.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Upcoming Medications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <MedicationItem name="Lisinopril" time="12:00 PM" dosage="10mg" />
                  <MedicationItem name="Metformin" time="6:00 PM" dosage="500mg" />
                  <MedicationItem name="Atorvastatin" time="9:00 PM" dosage="20mg" />
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Medication
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Emergency Contacts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <ContactItem name="Dr. Sarah Johnson" role="Primary Physician" phone="(555) 123-4567" />
                  <ContactItem name="Michael Smith" role="Emergency Contact" phone="(555) 987-6543" />
                  <ContactItem name="City Hospital" role="Emergency Room" phone="(555) 111-2222" />
                </ul>
                <Button variant="outline" className="w-full mt-4">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Contact
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

function VitalCard({ title, value, unit, status, icon }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "normal":
        return "bg-green-100 text-green-800"
      case "warning":
        return "bg-yellow-100 text-yellow-800"
      case "danger":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-500">{title}</span>
          {icon}
        </div>
        <div className="flex items-end gap-1">
          <span className="text-2xl font-bold">{value}</span>
          <span className="text-sm text-gray-500">{unit}</span>
        </div>
        <div
          className={`mt-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(status)}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </CardContent>
    </Card>
  )
}

function MedicationItem({ name, time, dosage }) {
  return (
    <li className="flex items-center justify-between">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{dosage}</p>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4 text-gray-400" />
        <span className="text-sm">{time}</span>
      </div>
    </li>
  )
}

function ContactItem({ name, role, phone }) {
  return (
    <li className="flex items-center justify-between">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
      <div>
        <span className="text-sm">{phone}</span>
      </div>
    </li>
  )
}

