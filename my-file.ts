 import './types/to-no-case.d.ts';
 import toNoCase from 'to-no-case';
 const str = toNoCase('my-string');
 
 type Character = {
    name: string;
    life: number;
    attack: number;
    defense: number;
 };
 
 type Pet = Character;
 
 type MagicalPet = Character & {
    magic: number;
 };
 
 type Equipment = {
    price: number;
    attack?: number;
    defense?: number;
 };
 
 type WithMagic = Equipment & {
    magic: number;
 };
 
 type Hero = Character & {
    pet?: Pet;
    pets?: Pet[];
    equipments: Equipment[];
 };
 
 type Magician = Character & {
    magic: number;
    equipments: (Equipment | WithMagic)[];
 };
 
 // Ne touchez PAS aux lignes ci-dessous, faites en sorte que TypeScript
 // soit content en modifiant UNIQUEMENT le code du dessus !
 
 const babyDragon: Pet = {
    name: 'Typeon',
    life: 50,
    attack: 10,
    defense: 20,
 };
 
 const babyLicorn: MagicalPet = {
    name: 'Typemoor',
    life: 80,
    attack: 5,
    defense: 30,
    magic: 50,
 };
 
 const smallArmor: Equipment = {
    price: 30,
    attack: 2,
    defense: 5,
 };
 
 const smallSword: Equipment = {
    price: 20,
    attack: 5,
 };
 
 const smallShield: Equipment = {
    price: 15,
    defense: 10,
 };
 
 const smallMagicalWand: WithMagic = {
    price: 50,
    attack: 4,
    magic: 10,
 };
 
 const myWarriorHero: Hero = {
    name: 'TSolomon',
    life: 200,
    attack: 30,
    defense: 50,
    pets: [babyDragon, babyLicorn],
    equipments: [
       smallArmor,
       smallSword,
       smallShield,   
    ],
 };
 
 const myMagicianHero: Magician = {
    name: 'TSoren',
    life: 150,
    attack: 20,
    defense: 40,
    equipments: [smallMagicalWand],
    magic: 200,
 };
 