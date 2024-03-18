// утверждения, выбрасывающие ошибки
type User = {
  name: string;
  displayName: string | null;
};

// утверждаем, что user это User, что у него есть поле displayName, и что это строка
function assertDisplayName(
  user: User
): asserts user is User & { displayName: string } {
  if (!user.displayName) throw new Error("User has no displayName field");
}

export function logUserByDisplayName(user: User) {
  assertDisplayName(user);
  console.log(user.displayName.toLocaleUpperCase());
}
