import { GenerateName,Test } from "./faker";

function Init() {
    const name = GenerateName()
    console.log(`name: ${name}`);
}

Init()