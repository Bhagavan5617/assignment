import { Component } from '@angular/core';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  formData: any = {
    name: "",
    email: "",
    number: "",
    pincode: "",
    state: "",
    country: ""
  }

  Selectstate: any[] = [
    { name: 'Andhra Pradesh' },
    { name: 'Arunachal Pradesh' },
    { name: 'Assam' },
    { name: 'Bihar' },
    { name: 'Chhattisgarh' },
    { name: 'Goa' },
    { name: 'Gujarat' },
    { name: 'Haryana' },
    { name: 'Himachal Pradesh' },
    { name: 'Jharkhand' },
    { name: 'Karnataka' },
    { name: 'Kerala' },
    { name: 'Madhya Pradesh' },
    { name: 'Maharashtra' },
    { name: 'Manipur' },
    { name: 'Meghalaya' },
    { name: 'Mizoram' },
    { name: 'Nagaland' },
    { name: 'Odisha' },
    { name: 'Punjab' },
    { name: 'Rajasthan' },
    { name: 'Sikkim' },
    { name: 'Tamil Nadu' },
    { name: 'Telangana' },
    { name: 'Tripura' },
    { name: 'Uttarakhand' },
    { name: 'Uttar Pradesh' },
    { name: 'West Bengal' }
  ];

  countries: any[] = [
    { name: 'India' },
    { name: 'United States' },
    { name: 'Canada' },
    { name: 'United Kingdom' },
    { name: 'Australia' },
    { name: 'Germany' },
    { name: 'France' },
    { name: 'Japan' },
    { name: 'Brazil' },
    { name: 'China' }
  ];
  
  public arrayOfTableData: any[] = [];

  submit() {
    if (
      !this.formData.name ||
      !this.formData.email ||
      !this.formData.number ||
      !this.formData.pincode ||
      !this.formData.state ||
      !this.formData.country
    ) 
    {
      alert("Please fill in all required fields.");
      return;
    }
    this.arrayOfTableData.push(this.formData)
    console.log(this.formData)
    console.log(this.arrayOfTableData)
    this.formData = {
      name: "",
      email: "",
      number: "",
      pincode: "",
      state: "",
      country: ""
    }
  }
}
