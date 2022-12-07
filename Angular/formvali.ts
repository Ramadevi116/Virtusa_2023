@Component({  
   selector:'module-id',  
   templateUrl:'./login.component.html',  
})  
exportclassLoginComponentimplementsOnInit {  
   loginForm: FormGroup;  
   constructor(privatehttp: Http,privatefrombuilders: FormBuilder){  
}  
ngOnInit() {  
this.Form = this.frombuilders.group({  
   Email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],  
   Password: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],  
});  
}  
