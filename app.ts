// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних обїектів

// interface Imission{
//     mission_name: string
//     launch_date_local: string
//     launch_site: {
//     site_name_long: string
// },
//     links: {
//     article_link: string,
//         video_link: string
// },
//     rocket: {
//     rocket_name: string
//         first_stage: {
//         cores: [
//             {
//                 flight: number
//                 core: {
//                     reuse_count: number
//                     status: string
//                 }
//             }
//         ]
//     },
//     second_stage: {
//         payloads: [
//             {
//                 payload_type: string
//                 payload_mass_kg: number
//                 payload_mass_lbs: number
//             }
//         ]
//     }
// }
// }
//
// ---------------------------------------------------------------------------—————————
// 2) протипізувати функції:

    const user = {
        name:Max,
        age:18,
        gender:'male'
    }

    interface IUser {
        name:string
        age:number
        gender:string
    }

function sum(a:number,b:number):number{
    return a+b;
}
function showSum(a:number,b:number):void{
    console.log(a + b);
}

function incAge(someUser:IUser, inc:number):IUser{
    someUser.age+=inc
    return someUser
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)