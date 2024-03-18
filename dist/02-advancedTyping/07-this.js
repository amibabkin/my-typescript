"use strict";
const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
// <button onClick="myClickHandler">click</button>
// типизация this, this - в качестве первого параметра функции(ts не будет воспринимать this как переменную)
function myClickHandler(event) {
    this.disabled = true;
}
