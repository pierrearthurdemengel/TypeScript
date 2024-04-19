// const a: string = "Hello world"
// const n: number = 3
// const b: boolean = true
// const d: null = null
// const arr: string[] = ["aze", "aze", "aze", "aze"]
// const user: {firstname: string, lastname?: string} = {firstname: "John", lastname: "Doe"};
// const user1: {firstname: string, [key:string]: string} = {firstname: "John", lastname: "Doe"};
// const date: Date = new Date();
// const cb: (e: MouseEvent) => void = (e: MouseEvent): void => {


// };

const compteur = document.querySelector("#compteur");
let i = 0;

const increment = (e: Event) => {
    e.prenventDefault();
    i++;
    const span = compteur?.querySelector('span')
    if (span) {
        span.innerText = i.toString()
    }
}

compteur?.addEventListener('click', increment)





// function printId( id: number | string ): void {
//     console.log(id.toString());
// }