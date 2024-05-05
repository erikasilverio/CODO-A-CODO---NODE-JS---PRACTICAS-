function User(id,name, email, password) {
    
        this.id = id;
        this.name = name;
        this.email =email;
        this.password = password;
        this.admin = false;

        // this.info = () => {
        //     console.log(`Nombre: ${this.name}, Correo: ${this.email}`);

        // };


    }

    User.prototype.info = function () {
            console.log(`Nombre: ${this.name}, Correo: ${this.email}`)
    };


    const user1 = new User(1, "User 1", "user1@x.com", "123456");

    
    user1.info();

    user1.adress = { calle: "Falsa" , numero: 123 };

    delete user1.id;

    user1.saludar = function(){
        console.log(`Hola, ${this.name}`);

    };


    // ---------- NO SE PUEDE 
//     user1.prototype.info = function () {
//         console.log(`Nombre: ${this.name}, Correo: ${this.email}`)
// };


    user1.saludar();

    console.log(user1);



    const user2 = new User(2, "User 2", "user2@x.com", "123456");

    // 
    // user2.saludar(); // SOLO CON LA INSTANCIA USER1
    user2.info();
    console.log(user2);