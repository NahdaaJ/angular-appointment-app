import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})

export class AppointmentListComponent {
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = []

  addAppointment() {
    let appointmentString: string = "";

    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      }

      this.appointments.push(newAppointment);

      for (let i = 0; i < this.appointments.length; i++) {
        appointmentString += `Task: ${this.appointments[i].title}   Date: ${this.appointments[i].date}\n`;
      }

      this.newAppointmentDate = new Date();
      this.newAppointmentTitle = "";
    }
    alert(appointmentString);
  }
}

