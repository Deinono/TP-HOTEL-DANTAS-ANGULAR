import {Client} from "./client";
import {Hotel} from "./hotel";

export class Reservation {
  id: number | undefined;
  client: Client | undefined;
  hotel: Hotel | undefined;
  startDate: Date | undefined;
  endDate: Date | undefined;
  roomNumber: number | undefined;

  constructor(_id?: number, _client?: Client, _hotel?: Hotel, _startDate?: Date, _endDate?: Date, _roomNumber?: number) {
    this.id = _id;
    this.client = _client;
    this.hotel = _hotel;
    this.startDate = _startDate;
    this.endDate = _endDate;
    this.roomNumber = _roomNumber;
  }
}
