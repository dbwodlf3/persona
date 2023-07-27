export interface PersonaDefinition {
    traits: string[];
    rules: string[];
    roles: string[];
    backgrounds: string[];
}

const persona = {
}

export function makePersonaString (input: PersonaDefinition){
    const EOF_SYMBOL = "@TOKEN@";
    const INPUT_SYMBOL = "@INPUT@";
    const tokenLimit = 1024 * 2 * 2;
    const system = [];

    const startPersona = "Lets Begin Role Playing, after this words its about defining a character role.";
    const endPersona = "\nEnd Defining a character role. you should follow above words.\n";

    system.push(startPersona);

    system.push("\nbelow statements its rules.\n");
    system.push(...input.rules);
    system.push("\nbelow statements its background.\n");
    system.push(...input.backgrounds);
    system.push("\nbelow statements its character traits\n");
    system.push(...input.traits);
    system.push("\nbelow statements its character role\n");
    system.push(...input.roles);

    system.push(endPersona);

    return system;
}

export function mergePersona(before: PersonaDefinition, after: PersonaDefinition){
    
}