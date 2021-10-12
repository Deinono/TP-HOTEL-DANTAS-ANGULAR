export class Hotel {
  id: number | undefined;
  name: string | undefined;
  starNumber: number | undefined;
  address: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  city: string | undefined;

  constructor(_id?: number, _name?: string, _starNumber?: number, _address?: string, _phone?: string, _email?: string, _city?: string) {
    this.id = _id;
    this.name = _name;
    this.starNumber = _starNumber;
    this.address = _address;
    this.phone = _phone;
    this.email = _email;
    this.city = _city;
  }
}
