/*var personne = new Object();

personne.lastname = "lala";
personne.firstname = "lolo";
personne.age = "21";
personne.ville = "New-York";
personne.pays="USA";

console.log(personne);
*/


var button = document.getElementById("run");

button.addEventListener("click",function(){

    class personne{
        constructor(lastname,firstname,age,ville,pays){
            this.lastname = lastname;
            this.firstname = firstname;
            this.age = age ;
            this.ville = ville;
            this.pays = pays;
        }
    }
    
     var gens= [];
    
     var gen = (new personne ("lili","lele",45,"popi","jeza"));
    
     gens.push(gen);
    
     console.log(gen)
});


