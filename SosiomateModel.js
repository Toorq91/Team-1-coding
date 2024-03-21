
const model = {
    app: {
        displayLogo: null, //tror ikke vi trenger denne, tror dette kan settes i funksjonen til currentPage
        currentPage: null,
        darkMode: 0,
        language: 'Norsk',
    },

    inputs: {
        userName: null,
        password: null,
    }, 
  
    // createUser = page 2
    userCreation: {
        userDetails: {
            emailOrUserName: null,
            tlf: null,
            password: null,
            repeatPassword: null,
        }
    },

    //Page3 Opprett profil.
    profileCreation: {
        profileDetails: {
            profileImage: null,
            Name: null,
            age: null,
            sex: null,
            occupation: null,
            hobby: null,
            email: null,
            phoneNumber: null,

        },
    },

    // Page4 Oversikt
    profilePage: {
        detail: [
            {
                userName: 'Kari Nordmann',
                age: '29',
                sex: 'Female',
                occupation: 'HeadMaster',
                hobbies: 'Secret',
                Email: 'KariNordmann77@gmail.com',
                cellPhone: '815-493-00'
            },
        ],
        users: ['Kari Nordmann', 'Ola Nordmann']
    },
   
    // Page5 Kalender/events
    calenderInputs5: {
       calender: null,
       loadMap: null,
    }
} 
