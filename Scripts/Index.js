{
    // var Name = 'Muhammed';
    // var number = 55555555;
    // var isthisMuhammed = 'Muhammed' == 'Muhammed';
    // console.log('Muhammed' == 'Muhammed');
    // var undef;
    // var undef2 = 2;
    // console.log(undef2 + "5");
    // console.log(undef);
    // console.log(undef2);

    // var Name = 'Muhammed';
    // var surname = 'Kahraman';
    // var age = 25;
    // var boy = 1.80;
    // var kilo = 80;
    // var endeks = (kilo / (boy ** 2));
    // console.log("İsim:" + Name + ", " + "Soyisim:" +
    //     surname + ", " + "Yaş:" + age + ", " + "Boy:" + boy + ", " +
    //     "Kilo:" + kilo + ", " + "Endeks:" + endeks);
    {
        let Name = 'Muhammed';
        Name = 'Kahraman';
        console.log(Name);
    }

    // console.log(Name);
    // const name2 = 'Alican';
    // name2 = 'Alican2';
    // console.log(name2);

    // var Name = 'Muhammed';
    // var surname = 'Kahraman';
    // var age = 25;
    // var boy = 1.80;
    // var kilo = 80;
    // var endeks = (kilo / (boy ** 2));

    let personList = [];
    let person = {
        name2: 'Muhammed',
        surname: 'Kahraman',
        age: 25,
        boy: 1.80,
        kilo: 80,
        endeks: 0
    };
    let person2 = {
        name2: 'Sezi',
        surname: 'Elevli',
        age: 25,
        boy: 1.60,
        kilo: 50,
        endeks: 0
    };
    person.endeks = (person.kilo / (person.boy ** 2));
    person2.endeks = (person2.kilo / (person2.boy ** 2));
    personList.push(person, person2);
    console.log(personList);


    console.log(person);

    let names = ['Muhammed', 'Alican', 'Seda', 'Merve'];
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let mix = ['Muhammed', 25, 1.80];
    console.log(names[0]);
    console.log(numbers);
    console.log(mix);
    console.log(names.length);

    let not = 80;
    let not2 = 100;
    let not3 = 100;


    let sonuc = (not + not2 + not3) / 3;
    console.log(sonuc);

    debugger;
    switch (true) {
        case sonuc >= 50 && sonuc <= 60:
            console.log('DD')
            break;
        case sonuc >= 0 && sonuc <= 50:
            console.log('FF')
            break;
        case sonuc >= 50 && sonuc <= 60:
            console.log('DD')
            break;
        case sonuc >= 60 && sonuc <= 70:
            console.log('CC')
            break;
        case sonuc >= 70 && sonuc <= 80:
            console.log('BB')
            break;
        case sonuc >= 80 && sonuc <= 90:
            console.log('BA')
            break;
        case sonuc >= 90 && sonuc <= 100:
            console.log('AA')
            break;
        default:
            console.log('Geçersiz Not')
            break;
    }

    if (sonuc >= 0 && sonuc <= 50) {
        console.log('FF');

    } else if (sonuc >= 50 && sonuc <= 60) {
        console.log('DD');
    } else if (sonuc >= 60 && sonuc <= 70) {
        console.log('CC');
    } else if (sonuc >= 70 && sonuc <= 80) {
        console.log('BB');
    } else if (sonuc >= 80 && sonuc <= 90) {
        console.log('BA');

    } else if (sonuc >= 90 && sonuc <= 100) {
        console.log('AA');
    } else {
        console.log('Geçersiz Not');
    }



}