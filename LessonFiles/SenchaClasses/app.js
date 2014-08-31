Ext.define('TP.sample.Person', {
    name: 'Mr. Unknown',
 
    constructor: function(name) {
        this.name = name;
 
        return this;
    },
 
    walk: function(steps) {
        alert(this.name + ' is walking ' + steps + ' steps');
    }
});

//var jason = new TP.sample.Person("Jason");
//jason.walk(10);

Ext.define('TP.sample.Developer', {
    extend: 'TP.sample.Person',
 
    code: function(language) {
        alert(this.name + ' is coding in ' + language);
    },

    walk: function(steps) {
        if (steps > 100) {
            alert("Are you serious? That's too far! I'm lazy...");
        }
        else {
            return this.callParent(arguments);
        }
    }

});

var tommy = new TP.sample.Developer('Tommy');




Ext.define('TP.sample.Dog', {
    config: {
        name: 'Scruffy',
        age: 0,
        gender: 'Male'
    },
 
    constructor: function(config) {
        this.initConfig(config);
 
        return this;
    },
 
    applyAge: function(age) {
        if (typeof age != 'number' || age < 0) {
            console.warn("Invalid age, must be a positive number");
            return;
        }
 
        return age;
    },
 
    updateAge: function(newAge, oldAge) {
        console.log(this, newAge, oldAge);
        //Would fire event
    },

    walk: function(steps) {
        console.log(this.getName() + ' is walking ' + steps + ' steps');
    }
});


var fluffy = new TP.sample.Dog({
    name: "Fluffy",
    age: 7
});
 
console.log(fluffy.getAge());
console.log(fluffy.getGender());
 
fluffy.walk(10);
 
fluffy.setName("Bowser");
console.log(fluffy.getName());
 
fluffy.walk(10);
fluffy.setAge(8);















