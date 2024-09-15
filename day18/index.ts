import { error, log } from 'console';

const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// (async () => {
//     await fetch(countriesAPI)
//         .then((res) => res.json())
//         .then((res) => {
//             (res as Array<any>).forEach((country) => {
//                 log(country.capital);
//                 log(
//                     (country.languages as Array<any>)
//                         .map((langObj) => langObj.name)
//                         .toString()
//                 );
//                 log(country.population), log(country.area), log(country.name);
//                 log(`

//                   `);
//             });
//         })
//         .catch((e) => error(e));
// })();

// (async () => {
//     await fetch(catsAPI)
//         .then((res) => res.json())
//         .then((res) => {
//             log((res as Array<any>).map((cat) => cat.name));
//         })
//         .catch((e) => error(e))
//         .finally(() => log(`done`));
// })();

// (async () => {
//     await fetch(catsAPI)
//         .then((res) => res.json())
//         .then((res) => {
//             log((res as Array<any>).map((cat) => cat.weight.metric));
//         })
//         .catch((e) => error(e))
//         .finally(() => log(`done`));
// })();

// (async () => {
//     await fetch(countriesAPI)
//         .then((res) => res.json())
//         .then((res) => {
//             const bigCountries: {}[] = [];
//             const countryArray = res as Array<any>;

//             for (let i = 0; i < 10; i++) {
//                 var area = 0;
//                 for (let j = 0; j < countryArray.length; j++) {
//                     const country = countryArray[j];
//                     if (country.area > area) {
//                         area = country.area;
//                     }
//                 }
//                 countryArray.filter((country) => country.area !== area);
//             }

//             log(bigCountries);
//         })
//         .catch((e) => error(e))
//         .finally(() => log(`done`));
// })();

(async () => {
    await fetch(countriesAPI)
        .then((res) => res.json())
        .then((res) => {
            log(
                new Set(
                    (res as Array<any>)
                        .map((country) =>
                            (country.languages as Array<any>).map(
                                (language) => language.name
                            )
                        )
                        .flat(2)
                ).size
            );
        })
        .catch((e) => error(e))
        .finally(() => log(`done`));
})();
