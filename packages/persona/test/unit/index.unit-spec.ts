import { makePersonaString } from "../../src/persona";
import { Developer } from "../../src/lib/persona-set";

describe("Persona Test", ()=>{
    describe("GPT Connector", ()=>{
        test.skip("should connect to gpt", ()=>{})

        test.skip("should memorize before chat", ()=>{})

        test.skip("should save persona", ()=>{})

        test.skip("should load persona", ()=>{})

        test.skip("should know how much used", ()=>{})
    })

    describe("Persona manager", ()=>{
        it("should create a persona", ()=>{
            const system = makePersonaString(Developer.typeScriptDeveloper);
            console.log(system.join("\n"));
        })

        test.skip("should memorize before chats", ()=>{});

        test.skip("should memorize before feedback", ()=>{});

        test.skip("should have emotion", ()=>{});

        test.skip("should have summary and memorize", ()=>{});
    });

    describe("Agora", ()=>{
        test.skip("should talk each other persona", ()=>{});
    })
});