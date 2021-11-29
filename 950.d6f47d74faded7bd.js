"use strict";(self.webpackChunkangular_miscellaneous=self.webpackChunkangular_miscellaneous||[]).push([[950],{3950:(C,d,m)=>{m.r(d),m.d(d,{ReactiveModule:()=>q});var u=m(6019),c=m(1509),s=m(7537),e=m(3556);let f=(()=>{class t{constructor(){this.noEduardo=r=>{var o;return"eduardo"===(null===(o=r.value)||void 0===o?void 0:o.toLowerCase())?{noEduardo:!0}:null},this.comparePasswords=(r,o)=>a=>{const l=a.controls[o];l.setErrors(a.controls[r].value===l.value?null:{equal:!0})},this.userExist=r=>r.value?new Promise((o,a)=>{setTimeout(()=>o("strider"===r.value?{exist:!0}:{}),3500)}):Promise.resolve({})}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Z(t,i){1&t&&(e.TgZ(0,"small",30),e._uU(1," Invalid username. "),e.qZA())}function v(t,i){1&t&&(e.TgZ(0,"small",30),e._uU(1," Write at least 3 letters. "),e.qZA())}function g(t,i){1&t&&(e.TgZ(0,"small",30),e._uU(1," Write the street. "),e.qZA())}function h(t,i){1&t&&(e.TgZ(0,"small",30),e._uU(1," Write the number. "),e.qZA())}function b(t,i){1&t&&(e.TgZ(0,"small",30),e._uU(1," The email is required. "),e.qZA())}function _(t,i){if(1&t){const r=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"th",31),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._UZ(4,"input",32),e.qZA(),e.TgZ(5,"td"),e.TgZ(6,"button",33),e.NdJ("click",function(){const n=e.CHM(r).index;return e.oxw().deleteHobbie(n)}),e._uU(7," Delete "),e.qZA(),e.qZA(),e.qZA()}if(2&t){const r=i.index;e.xp6(2),e.Oqu(r+1),e.xp6(2),e.Q6J("formControlName",r)}}const T=[{path:"",children:[{path:"",component:(()=>{class t{constructor(r,o){this.formBuilder=r,this.validatorsService=o,this.createForm=()=>{this.formGroup=this.formBuilder.group({username:["",s.kI.required,this.validatorsService.userExist],name:["",[s.kI.required,s.kI.minLength(3),this.validatorsService.noEduardo]],email:["",[s.kI.required,s.kI.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]],address:this.formBuilder.group({street:["",s.kI.required],number:["",s.kI.required]}),hobbies:this.formBuilder.array([]),pass1:["",s.kI.required],pass2:["",s.kI.required]},{validators:this.validatorsService.comparePasswords("pass1","pass2")})},this.setFormData=()=>{this.formGroup.reset({username:"A14N",name:"Alan",email:"a14n.arriaga@gmail.com",address:{street:"tuy",number:39}})},this.setFormListeners=()=>{var a;this.formGroup.valueChanges.subscribe(n=>{console.log(n)}),this.formGroup.statusChanges.subscribe(n=>{console.log(n)}),null===(a=this.formGroup.get("name"))||void 0===a||a.valueChanges.subscribe(console.log)},this.addHobbie=()=>this.hobbies.push(this.formBuilder.control("",s.kI.required)),this.deleteHobbie=a=>this.hobbies.removeAt(a),this.validField=a=>{var n,l;const p=(null===(n=this.formGroup.get(a))||void 0===n?void 0:n.invalid)&&(null===(l=this.formGroup.get(a))||void 0===l?void 0:l.touched);return void 0!==p&&p},this.check=()=>{this.formGroup.invalid&&Object.values(this.formGroup.controls).forEach(a=>{a instanceof s.cw?Object.values(a.controls).forEach(n=>n.markAsTouched()):a.markAsTouched()})},this.save=()=>{this.formGroup.reset({name:"",email:"",address:{street:"",number:""}})},this.createForm(),this.setFormData(),this.setFormListeners()}ngOnInit(){}get hobbies(){return this.formGroup.get("hobbies")}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(s.qu),e.Y36(f))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-basics"]],decls:70,vars:27,consts:[[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","username",1,"form-label"],["type","text","id","username","placeholder","Username","formControlName","username",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["for","name",1,"form-label"],["type","text","id","name","placeholder","Name","formControlName","name",1,"form-control"],["formGroupName","address",1,"row"],[1,"col"],["for","street",1,"form-label"],["type","text","id","street","placeholder","Street","formControlName","street",1,"form-control"],["for","number",1,"form-label"],["type","number","id","number","placeholder","Number","formControlName","number",1,"form-control"],["for","email",1,"form-label"],["type","email","id","email","placeholder","example@example.com","formControlName","email",1,"form-control"],[1,"table","table-striped","table-hover"],[1,"table-dark"],["scope","col"],["formArrayName","hobbies"],[4,"ngFor","ngForOf"],[1,"d-grid","gap-2","mb-3"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"row"],["for","pass1",1,"form-label"],["type","password","id","pass1","placeholder","password","formControlName","pass1",1,"form-control"],["for","pass2",1,"form-label"],["type","password","id","pass2","placeholder","password confirmation","formControlName","pass2",1,"form-control"],[1,"d-grid","gap-2","d-md-flex","justify-content-md-end","mb-4"],["type","button",1,"btn","btn-warning",3,"click"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"form-text","text-danger"],["scope","row"],["type","text",1,"form-control",3,"formControlName"],["type","submit",1,"btn","btn-danger",3,"click"]],template:function(r,o){1&r&&(e.TgZ(0,"section"),e.TgZ(1,"h3"),e._uU(2,"Reactive - Basics"),e.qZA(),e._UZ(3,"hr"),e.TgZ(4,"form",0),e.NdJ("ngSubmit",function(){return o.save()}),e.TgZ(5,"div",1),e.TgZ(6,"label",2),e._uU(7," Username "),e.qZA(),e._UZ(8,"input",3),e.YNc(9,Z,2,0,"small",4),e.qZA(),e.TgZ(10,"div",1),e.TgZ(11,"label",5),e._uU(12,"Name"),e.qZA(),e._UZ(13,"input",6),e.YNc(14,v,2,0,"small",4),e.qZA(),e.TgZ(15,"div",7),e.TgZ(16,"div",8),e.TgZ(17,"div",1),e.TgZ(18,"label",9),e._uU(19," Street "),e.qZA(),e._UZ(20,"input",10),e.YNc(21,g,2,0,"small",4),e.qZA(),e.qZA(),e.TgZ(22,"div",8),e.TgZ(23,"div",1),e.TgZ(24,"label",11),e._uU(25," Number "),e.qZA(),e._UZ(26,"input",12),e.YNc(27,h,2,0,"small",4),e.qZA(),e.qZA(),e.qZA(),e.TgZ(28,"div",1),e.TgZ(29,"label",13),e._uU(30,"Email"),e.qZA(),e._UZ(31,"input",14),e.YNc(32,b,2,0,"small",4),e.qZA(),e.TgZ(33,"section"),e.TgZ(34,"table",15),e.TgZ(35,"thead",16),e.TgZ(36,"tr"),e.TgZ(37,"th",17),e._uU(38,"#"),e.qZA(),e.TgZ(39,"th",17),e._uU(40,"Hobbie"),e.qZA(),e.TgZ(41,"th",17),e._uU(42,"Actions"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(43,"tbody",18),e.YNc(44,_,8,2,"tr",19),e.qZA(),e.qZA(),e.TgZ(45,"div",20),e.TgZ(46,"button",21),e.NdJ("click",function(){return o.addHobbie()}),e._uU(47," Add "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(48,"div",22),e.TgZ(49,"div",8),e.TgZ(50,"div",1),e.TgZ(51,"label",23),e._uU(52," Password "),e.qZA(),e._UZ(53,"input",24),e.qZA(),e.qZA(),e.TgZ(54,"div",8),e.TgZ(55,"div",1),e.TgZ(56,"label",25),e._uU(57," Password confirmation "),e.qZA(),e._UZ(58,"input",26),e.qZA(),e.qZA(),e.qZA(),e.TgZ(59,"div",27),e.TgZ(60,"button",28),e.NdJ("click",function(){return o.check()}),e._uU(61," Check "),e.qZA(),e.TgZ(62,"button",29),e._uU(63," Save "),e.qZA(),e.qZA(),e.qZA(),e._UZ(64,"hr"),e.TgZ(65,"pre"),e._uU(66),e.qZA(),e.TgZ(67,"pre"),e._uU(68),e.ALo(69,"json"),e.qZA(),e.qZA()),2&r&&(e.xp6(4),e.Q6J("formGroup",o.formGroup),e.xp6(4),e.ekj("is-invalid",o.validField("username")),e.xp6(1),e.Q6J("ngIf",o.validField("username")),e.xp6(4),e.ekj("is-invalid",o.validField("name")),e.xp6(1),e.Q6J("ngIf",o.validField("name")),e.xp6(6),e.ekj("is-invalid",o.validField("address.street")),e.xp6(1),e.Q6J("ngIf",o.validField("address.street")),e.xp6(5),e.ekj("is-invalid",o.validField("address.number")),e.xp6(1),e.Q6J("ngIf",o.validField("address.number")),e.xp6(4),e.ekj("is-invalid",o.validField("email")),e.xp6(1),e.Q6J("ngIf",o.validField("email")),e.xp6(12),e.Q6J("ngForOf",o.hobbies.controls),e.xp6(9),e.ekj("is-invalid",o.validField("pass1")),e.xp6(5),e.ekj("is-invalid",o.validField("pass2")),e.xp6(4),e.Q6J("disabled","VALID"!==o.formGroup.status),e.xp6(4),e.AsE("  Valid: ",o.formGroup.valid,"\n  Satus: ",o.formGroup.status,"\n"),e.xp6(2),e.hij("  ",e.lcZ(69,25,o.formGroup.value),"\n"))},directives:[s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,u.O5,s.x0,s.wV,s.CE,u.sg],pipes:[u.Ts],styles:[""]}),t})()},{path:"dinamics",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-dinamics"]],decls:2,vars:0,template:function(r,o){1&r&&(e.TgZ(0,"p"),e._uU(1,"dinamics works!"),e.qZA())},styles:[""]}),t})()},{path:"switches",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-switches"]],decls:2,vars:0,template:function(r,o){1&r&&(e.TgZ(0,"p"),e._uU(1,"switches works!"),e.qZA())},styles:[""]}),t})()},{path:"**",redirectTo:""}]}];let A=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(T)],c.Bz]}),t})(),q=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.ez,A,s.UX]]}),t})()}}]);