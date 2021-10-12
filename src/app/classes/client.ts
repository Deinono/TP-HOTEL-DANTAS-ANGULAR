export class Client {
  id: number | undefined;
  completeName: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  address: string | undefined;

  constructor(_id?: number, _completeName?: string, _phone?: string, _email?: string, _address?: string){
    this.id = _id;
    this.completeName = _completeName;
    this.phone = _phone;
    this.email = _email;
    this.address = _address;
  }
}
