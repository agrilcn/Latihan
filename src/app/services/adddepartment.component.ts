import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Department} from"../model/department";
import {category.service} from"../services/category.service";
import {ActivatedRoute, Router} from"@angular/router";

@Component({
selector: 'app-adddepartment',
templateUrl: './adddepartment.component.html',
providers: [category.service]
})
export class AdddepartmentComponent implements OnInit{
formedit!: FormGroup;
id!: string;
pesan!: any[];
constructor(private formBuilt: FormBuilder,
            private category: category.service,
            private ruter: Router,
            private route: ActivatedRoute){
this.formedit = this.formBuilt.group({
    'Id': [null],
    'nama': [null],
    'deskripsi': [null]
})
            }
simpan(): void{
let dept = <Department>{};
dept.nama= this.formedit.controls['nama'].value
dept.deskripsi= this.formedit.controls['deskripsi'].value
this.category.savedept(dept).subscribe({
next: value => {
alert(value.status);
this.ruter.navigateByUrl("/editdept/"+value.id);
},error: err =>{
let listError : any[]  = err.error.status;
console.log(listError)
let pesan = '';
for (let i = 0; 1 < listError.length; i++){
let ek = eval(listErrorKey)
pesan += ek.field+" + "+ ek.defaultMessage
pesan +="     "
}
alert("Error "+err.toLocalString());
}, complete: () => {
}
});
}
ngOnInit(): void{
this.route.params.subsribe(rute=>{
this.id = rute['id'];
if(this.id){
this.category.getDepartmentById(this,id).subscribe({
next: value => {
this.formedit.controls['nama'].setValue(value,nama)
this.formedit.controls['deskripsi'].setValue(value,deskripsi)
}
});
}
});
}
}
