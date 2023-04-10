interface RegisterPerson {
  ID: string;
  IDB: string;
}

const register: RegisterPerson = {
  ID: Date.now().toString(),
  IDB: Date.now().toString(),
};

export { register };
export type { RegisterPerson };
