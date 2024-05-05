class User {
    constructor(id,name, email, password){
        this.id = id;
        this.name = name;
        this.email =email;
        this.password = password;
        this.admin = false;
    }

    info(){

        console.log(`Nombre: ${this.name}, Correo: ${this.email}`);
    };

}

const user1 = new User(1, "User 1", "user1@x.com", "123456");

console.log(user1);

user1.info();

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

