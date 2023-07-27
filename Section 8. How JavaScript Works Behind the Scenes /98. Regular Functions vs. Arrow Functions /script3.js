"use strict";

const abhi = {
  name: "Abhi",
  calcAge: function () {
    console.log(this.name);
  },
};

abhi.calcAge();
// It is a method call, when function is related to an object, it points to that object only.
