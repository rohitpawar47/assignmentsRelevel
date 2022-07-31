/* Create a program wherein you will be given a list of name of the people along with their designation, 
based on the name you type in from the input field of the given html file the relevant 
designation of the person will be displayed. */


const nameOfPeople = {
    firstName: [`Alex`, `John`, `Strek`, `Smith`],
    designation: [`Developer`, `Artist`, `Singer`, `Actor`],
    callAlex: function () {
        console.log(this.firstName[0] + ` is a ` + this.designation[0]);
    },
    callJohn: function () {
        console.log(this.firstName[1] + ` is a ` + this.designation[1]);
    },
    callStrek: function () {
        console.log(this.firstName[2] + ` is a ` + this.designation[2]);
    },
    callSmith: function () {
        console.log(this.firstName[3] + ` is a ` + this.designation[3]);
    }
};

nameOfPeople.callJohn();
nameOfPeople.callSmith();
nameOfPeople.callAlex();
nameOfPeople.callStrek();
