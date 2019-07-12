export interface UserInfoInterface {
    UserName: string;
    UserAge: number;
    UserGender: string;
    UserEmail: string;
    UserPassword: string;
}

export class UserCheck implements UserInfoInterface {
    UserName: string;
    UserAge: number;
    UserGender: string;
    UserEmail: string;
    UserPassword: string;

    getInfo(name: string, age: number, gender: string, email: string) {
        return {UserName: name, UserAge: age, UserGender: gender, UserEmail: email};
    }
}


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
