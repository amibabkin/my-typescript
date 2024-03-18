"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logUserByDisplayName = void 0;
// утверждаем, что user это User, что у него есть поле displayName, и что это строка
function assertDisplayName(user) {
    if (!user.displayName)
        throw new Error("User has no displayName field");
}
function logUserByDisplayName(user) {
    assertDisplayName(user);
    console.log(user.displayName.toLocaleUpperCase());
}
exports.logUserByDisplayName = logUserByDisplayName;
