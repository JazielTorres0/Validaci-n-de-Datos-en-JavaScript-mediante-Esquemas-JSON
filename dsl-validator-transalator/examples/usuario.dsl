schema Usuario {
nombre:string required min(3) max(50)
edad:number min(0) max(120)
email:string email required
}
