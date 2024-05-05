// let id = 12;
// let name = "User 1";
// let email = "x@x.com";
// let password = "123456";
// let admin = true;

//-------------------------------

// const user = new Object();

// user.id = 12
// user.name = "User 1"
// user.email = "x@x.com";
// user.password = "123456";
// user.admin = true;

// ------------------------

// const user = {
//     id : 12,
//     name : "User 1",
//     email : "x@x.com",
//     password : "123456",
//     admin : true,

// }



    // console.log(user, user.email, typeof user);
    // console.log(user.name, user["email"]);



    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


    const user1 = {
        id : 12,
        name : "User 1",
        email : "x@x.com",
        password : "123456",
        admin : true,
        info() {
            console.log(`Nombre: ${this.name}, Correo: ${this.email}`);
        },
        isAdmin: function () {
            return this.admin;

        },    
    };

    console.log(user);

    user1.info();