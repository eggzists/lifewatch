import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Phone, MessageSquare, MapPin, Users } from "lucide-react"

export default function EmergencyPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Emergency Services</h1>
        <p className="text-gray-500">Quick access to emergency contacts and services</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-red-200 bg-red-50">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="h-5 w-5" />
              Emergency SOS
            </CardTitle>
            <CardDescription className="text-red-600">Use in case of medical emergency</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white mb-4">Activate Emergency SOS</Button>
            <p className="text-sm text-red-700 mb-4">
              This will alert your emergency contacts and share your current location with them.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-red-600" />
                <span>Notifies all emergency contacts</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-600" />
                <span>Shares your precise location</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <span>Sends your recent vital signs data</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Emergency Contacts</CardTitle>
            <CardDescription>People to contact in case of emergency</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <EmergencyContact name="Dr. Sarah Johnson" role="Primary Physician" phone="(555) 123-4567" />
              <EmergencyContact name="Michael Smith" role="Emergency Contact (Spouse)" phone="(555) 987-6543" />
              <EmergencyContact name="City Hospital" role="Emergency Room" phone="(555) 111-2222" />
            </ul>
            <Button variant="outline" className="w-full mt-4">
              Manage Emergency Contacts
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Emergency Settings</CardTitle>
            <CardDescription>Configure your emergency alert preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Alert Thresholds</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Set the vital sign thresholds that will trigger an emergency alert
                </p>
                <div className="space-y-4">
                  <AlertThreshold name="Heart Rate" low="45 bpm" high="120 bpm" />
                  <AlertThreshold name="Blood Pressure" low="90/60 mmHg" high="160/100 mmHg" />
                  <AlertThreshold name="Blood Oxygen" low="92%" high="N/A" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Alert Methods</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="sms" className="rounded border-gray-300" checked readOnly />
                      <label htmlFor="sms" className="text-sm font-medium">
                        SMS Text Message
                      </label>
                    </div>
                    <MessageSquare className="h-4 w-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="call" className="rounded border-gray-300" checked readOnly />
                      <label htmlFor="call" className="text-sm font-medium">
                        Phone Call
                      </label>
                    </div>
                    <Phone className="h-4 w-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="app" className="rounded border-gray-300" checked readOnly />
                      <label htmlFor="app" className="text-sm font-medium">
                        App Notification
                      </label>
                    </div>
                    <Bell className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>

              <Button>Save Settings</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function EmergencyContact({ name, role, phone }) {
  return (
    <li className="flex items-center justify-between">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
      <div className="flex gap-2">
        <Button size="icon" variant="outline">
          <Phone className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="outline">
          <MessageSquare className="h-4 w-4" />
        </Button>
      </div>
    </li>
  )
}

function AlertThreshold({ name, low, high }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-medium">{name}</span>
      <div className="flex items-center gap-4">
        <div>
          <span className="text-sm text-gray-500">Low: </span>
          <span className="text-sm font-medium">{low}</span>
        </div>
        <div>
          <span className="text-sm text-gray-500">High: </span>
          <span className="text-sm font-medium">{high}</span>
        </div>
        <Button size="sm" variant="outline">
          Edit
        </Button>
      </div>
    </div>
  )
}

function Bell(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}

