import service1 from "./images/service1.jpg";
import service2 from './images/service2.jpg';
import service3 from './images/service3.jpg';
import audi from './images/audi.jpg';
import toyota from './images/toyota.jpg';
import bmw from './images/bmw.jpg';
import mercedes from './images/mercedes.jpg';
import vw1 from './images/VW1.jpg';
import vw2 from './images/VW2.jpg';

export const data = {
    link: ['Home','About','Vehicle Models','Testimonials','Our Team','Contacts'],
    logoLink: 'https://car-rental-main.netlify.app/static/media/logo.0ad964cb93ab30cc809d.png',
    service:[
    {
        name: 'Select Car',
        info: 'We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs',
        path: service1
    },

    {
        name: 'Contact Operater',
        info: 'Our knowledgeable and friendly operators are always ready to help with any questions or concerns',
        path: service2
    },

    {
        name: "Let's Drive",
        info: "Whether you're hitting the open road, we've got you covered with our wide range of cars",
        path: service3
    }],
    typesOfCar: {
        'Audi A1 S-Line': {
            rent: '45$',
            model: 'Audi',
            mark: 'A1',
            year: 2012,
            doors: '4/5',
            ac: 'YES',
            transmission: 'Manual',
            fuel: 'Gasoline',
            image: audi
        }, 
        'VW Golf 6': {
            rent: '37$',
            model: 'Golf 6',
            mark: 'Volkswagen',
            year: 2008,
            doors: '4/5',
            ac: 'YES',
            transmission: 'Manual',
            fuel: 'Diesel',
            image: vw1
        },
        'Toyota Camry': {
            rent: '30$',
            model: 'Camry',
            mark: 'Toyota',
            year: 2008,
            doors: '4/5',
            ac: 'YES',
            transmission: 'Automatic',
            fuel: 'Hybrid',
            image: toyota
        },
        'BMW 320 ModernLine': {
            rent: '35$',
            model: '320',
            mark: 'BMW',
            year: 2012,
            doors: '4/5',
            ac: 'YES',
            transmission: 'Manual',
            fuel: 'Diesel',
            image: bmw
        },
        'Mercedes-Benz GLK': {
            rent: '50$',
            model: 'Benz GLK',
            mark: 'Mercedes',
            year: 2006,
            doors: '4/5',
            ac: 'YES',
            transmission: 'Manual',
            fuel: 'Diesel',
            image: mercedes
        },
        'VW Passat CC': {
            rent: '25$',
            model: 'Passat CC',
            mark: 'Volkswagen',
            year: 2008,
            doors: '4/5',
            ac: 'YES',
            transmission: 'Automatic',
            fuel: 'Gasoline',
            image: vw2
        }
    }
}