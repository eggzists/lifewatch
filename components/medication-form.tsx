"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

export default function MedicationForm() {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <form className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="medication-name">Medication Name</Label>
          <Input id="medication-name" placeholder="e.g., Lisinopril" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dosage">Dosage</Label>
          <div className="flex gap-2">
            <Input id="dosage" placeholder="e.g., 10" className="flex-1" />
            <Select defaultValue="mg">
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mg">mg</SelectItem>
                <SelectItem value="mcg">mcg</SelectItem>
                <SelectItem value="ml">ml</SelectItem>
                <SelectItem value="g">g</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="frequency">Frequency</Label>
          <Select>
            <SelectTrigger id="frequency">
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="once">Once daily</SelectItem>
              <SelectItem value="twice">Twice daily</SelectItem>
              <SelectItem value="three">Three times daily</SelectItem>
              <SelectItem value="four">Four times daily</SelectItem>
              <SelectItem value="asNeeded">As needed</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Time of Day</Label>
          <div className="flex items-center gap-2">
            <Input type="time" className="flex-1" />
            <Button variant="outline" size="icon">
              <PlusCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Start Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Input id="quantity" type="number" placeholder="Number of pills/doses" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="purpose">Purpose</Label>
        <Input id="purpose" placeholder="e.g., Blood pressure control" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="instructions">Special Instructions</Label>
        <Textarea id="instructions" placeholder="e.g., Take with food, avoid grapefruit juice, etc." rows={3} />
      </div>

      <div className="space-y-2">
        <Label>Reminders</Label>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="reminder" className="rounded border-gray-300" />
          <Label htmlFor="reminder" className="text-sm font-normal">
            Enable reminders for this medication
          </Label>
        </div>
      </div>

      <div className="flex gap-2">
        <Button type="submit" className="flex-1">
          Save Medication
        </Button>
        <Button type="button" variant="outline" className="flex-1">
          Cancel
        </Button>
      </div>
    </form>
  )
}

function PlusCircle(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  )
}

