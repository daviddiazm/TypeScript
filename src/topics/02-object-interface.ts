const skils: string[] =["heald, bash, counter"];


interface Character {
  name: string,
  hp: number,
  skils: string[],
  hometown?: string
}

const stride: Character = {
  name: "david",
  hp: 100,
  skils: ["bash", "healding"]
}

stride.hometown = "popayan"

console.table(stride)


export{}
