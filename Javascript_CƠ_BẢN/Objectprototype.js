// Xay dung doi tuong

function User(firstName,lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

    var user1 = new User('Tam','Thanh','Avatar');
    var user = new User ('Vu','le','Avatar');
    console.log(user1);
    console.log(user);

    //Them thuoc tinh cho 2 doitg
    User.prototype.className = 'F8';
    console.log(user1.className);
