"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

export const Appointment = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <section className="section">
      <div className="container">
        <h2 className="mb-5 xl:mb-12.5 h2 text-center xl:text-left">
          Book Appointment or call:&nbsp;
          <span className="text-accent-tertiary">(773) 555-1234</span>
        </h2>
        <form className="flex flex-col gap-y-5">
          <div className="grid xl:grid-cols-2 gap-5">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Department</SelectLabel>
                  <SelectSeparator className="bg-accent-tertiary/30" />
                  <SelectItem value="general-medicine">
                    General Medicine
                  </SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="dermatology">Dermatology</SelectItem>
                  <SelectItem value="gynecology">
                    Gynecology & Obstetrics
                  </SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                  <SelectItem value="dentistry">Dentistry</SelectItem>
                  <SelectItem value="nutrition">
                    Nutrition & Dietetics
                  </SelectItem>
                  <SelectItem value="radiology">Radiology & Imaging</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Doctor" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Doctor</SelectLabel>
                  <SelectSeparator className="bg-accent-tertiary/30" />
                  <SelectItem value="oliviaBrown">
                    Dr. Olivia Brown — Cardiologist
                  </SelectItem>
                  <SelectItem value="liamHarris">
                    Dr. Liam Harris — General Practitioner
                  </SelectItem>
                  <SelectItem value="emmaClark">
                    Dr. Emma Clark — Pediatrician
                  </SelectItem>
                  <SelectItem value="noahLewis">
                    Dr. Noah Lewis — Orthopedic Surgeon
                  </SelectItem>
                  <SelectItem value="avaMartinez">
                    Dr. John Martinez — Dermatologist
                  </SelectItem>
                  <SelectItem value="ethanWalker">
                    Dr. Ethan Walker — Neurologist
                  </SelectItem>
                  <SelectItem value="isabellaScott">
                    Dr. Isabella Scott — Gynecologist
                  </SelectItem>
                  <SelectItem value="masonAdams">
                    Dr. Mason Adams — Dentist
                  </SelectItem>
                  <SelectItem value="miaNelson">
                    Dr. Mia Nelson — Nutrition Specialist
                  </SelectItem>
                  <SelectItem value="williamTurner">
                    Dr. William Turner — Radiologist
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input type="text" placeholder="Full Name" />
            <Input type="text" placeholder="Phone Number" />
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date-picker"
                  className="w-full h-16.5 justify-between font-normal border-[#dfdfdf] hover:bg-transparent"
                >
                  {date ? date.toLocaleDateString() : "Select date"}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0 border-[#dfdfdf] bg-white"
                align="end"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  captionLayout="dropdown"
                  onSelect={(date) => {
                    setDate(date);
                    setOpen(false);
                  }}
                  disabled={(date) =>
                    date < new Date(new Date().setHours(0, 0, 0, 0))
                  }
                />
              </PopoverContent>
            </Popover>
            <Input
              type="time"
              step="1"
              defaultValue="10:30:00"
              className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
            />
            <button
              type="submit"
              className="mt-5 btn btn-lg btn-accent w-fit self-start"
            >
              Book an appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
