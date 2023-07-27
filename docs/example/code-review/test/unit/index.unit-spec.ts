import { AngryDeveloper } from "../../src/persona/angry-developer";
import { makePersonaString } from "../../../../../packages/persona/src/persona";
import { DefaultPersona } from "../../src/persona/default-persona";

describe("Code Review Agora Test", ()=>{
    describe("Github API", ()=>{
        test.skip("should read a file", ()=>{})

        test.skip("should read all of file", ()=>{})

        test.skip("should read commit", ()=>{})

        test.skip("should read issue", ()=>{})

        test.skip("should read pr", ()=>{})

        test.skip("should write a commeont on pr", ()=>{})

        test.skip("should write a commeont on pr merged", ()=>{})

        test.skip("should response from mention", ()=>{})
    });

    describe("Bitbucket API", ()=>{
        test.skip("should read a file", ()=>{})

        test.skip("should read all of file", ()=>{})

        test.skip("should read commit", ()=>{})

        test.skip("should read issue", ()=>{})

        test.skip("should read pr", ()=>{})

        test.skip("should write a commeont on pr", ()=>{})

        test.skip("should write a commeont on pr merged", ()=>{})

        test.skip("should response from mention", ()=>{})
    });

    describe("Perosnas", ()=>{
        it("Print personas",()=>{
            console.log(makePersonaString(AngryDeveloper).join("\n"));
            console.log(makePersonaString(DefaultPersona).join("\n"));
        })
    })
});