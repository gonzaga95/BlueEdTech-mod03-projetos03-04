import { randomUUID } from 'node:crypto';

export class CharacterEntity {
    constructor(character, userId) {
        this.id = character.id ?? randomUUID();
        this.name = character.name;
        this.image = character.image;
        this.userId = userId;
    }

    validate() {
        if (!this.name) throw new Error('Name undefined!');
        if (!this.image) throw new Error('Image undefined!');
        if (!this.userId) throw new Error('UserId undefined!');
    }

    getCharacter() {
        return {
            id: this.id,
            name: this.name,
            image: this.image,
            userId: this.userId
        };
    }
}
