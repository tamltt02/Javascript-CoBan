// Xay dung doi tuong

function User(firstName,lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

    var author = new User('Tam','Thanh','Avatar');
    var user = new User ('Vu','le','Avatar');
    console.log(author);
    console.log(user);

    //them thuoc tinh
    author.title ='Chia se dao tai F8';
    user.comment = 'Lieu co khoa asp.net k ad';

    console.log(author.getName());
    console.log(user.getName());
