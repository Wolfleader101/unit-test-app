"use strict";
exports.__esModule = true;
var UserCheck = /** @class */ (function () {
    function UserCheck() {
    }
    UserCheck.prototype.getInfo = function (name, age, gender, email) {
        return { UserName: name, UserAge: age, UserGender: gender, UserEmail: email };
    };
    UserCheck.prototype.LogInfo = function () {
        var Usr = this.getInfo('James', 16, 'male', 'james.morgan');
        console.log(Usr);
    };
    return UserCheck;
}());
exports.UserCheck = UserCheck;
// export class UserCheck  {
//     Name: ComplexNameDto;
//     public nametoJSON(name: ComplexNameDto): string {
//         return JSON.stringify(name);
//     }
//     getName(first: string, middle: string, last: string){
//         return {FirstName: first, MiddleName: middle, LastName: last} as ComplexName;
//     }
//     public test(){
//         let name = this.getName('first', 'middle', 'last');
//         name.
//     }
// }
