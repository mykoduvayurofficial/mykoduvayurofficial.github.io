/**
 * Created by kriz on 1/18/2017.
 */

// create the module and name it mykdrApp
// also include ngRoute for all our routing needs
var mykdrApp = angular.module('mykdrApp', ['ngRoute']);

// configure our routes
mykdrApp.config(function($routeProvider) {
    $routeProvider

    // route for the theme page
        .when('/', {
            title : "MyKoduvayur -  Everything About Koduvayur",
            description : "",
            templateUrl : 'pages/theme.html',
            controller  : 'mainController'
        })

        // route for the home page
        .when('/home', {
            title :"Home - MyKoduvayur",
            description : "",
            templateUrl : 'pages/home.html',
            controller  : 'homeController'
        })

        // route for the landscape page
        .when('/locality', {
            title :"Locality - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality.html',
            controller  : 'localityController'
        })
        // route for the culture page
        .when('/culture', {
            title :"Culture - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture.html',
            controller  : 'cultureController'
        })
        // route for the trending page
        .when('/events', {
            title :"Events - MyKoduvayur",
            description : "",
            templateUrl : 'pages/events.html',
            controller  : 'eventsController'
        })
        // route for the services page
        .when('/services', {
            title :"Services - MyKoduvayur",
            description : "",
            templateUrl : 'pages/services.html',
            controller  : 'servicesController'
        })
        // route for the feedback page
        .when('/feedback', {
            title :"Feedback - MyKoduvayur",
            description : "",
            templateUrl : 'pages/feedback.html',
            controller  : 'feedbackController'
        })
        // route for the about page
        .when('/about', {
            title :"About Us - MyKoduvayur",
            description : "",
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })
        // route for the trending page
        .when('/trending', {
            title :"Trending - MyKoduvayur",
            description : "",
            templateUrl : 'pages/trending.html',
            controller  : 'trendingController'
        })

        //locality

        // route for the gramapanchayathoffice page
        .when('/gramapanchayathoffice', {
            title :"Grama Panchayat Office - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/gramapanchayathoffice.html',
            controller  : 'localityController'
        })

        // route for the govthospital page
        .when('/govthospital', {
            title :"Govt. Hospital - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/govthospital.html',
            controller  : 'localityController'
        })

        // route for the ghsskoduvayur page
        .when('/ghsskoduvayur', {
            title :"Govt. High School - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/ghsskoduvayur.html',
            controller  : 'localityController'
        })

        // route for the oldagehome page
        .when('/oldagehome', {
            title :"Old Age Home - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/oldagehome.html',
            controller  : 'localityController'
        })

        // route for the koduvayurmarket page
        .when('/koduvayurmarket', {
            title :"Koduvayur Market - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/panchayatoffice.html',
            controller  : 'localityController'
        })

        // route for the ksebkoduvayur page
        .when('/ksebkoduvayur', {
            title :"Koduvayur Market - MyKoduvayur",
            description : "",
            templateUrl : 'pages/locality/ksebkoduvayur.html',
            controller  : 'localityController'
        })

        //culture

        // route for the krishnankovil page
        .when('/krishnankovil', {
            title :"Krishna Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/krishnankovil.html',
            controller  : 'cultureController'
        })

        // route for the keralathappankovil page
        .when('/keralathappankovil', {
            title :"Keralathappan Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/keralathappankovil.html',
            controller  : 'cultureController'
        })

        // route for the sivankovil page
        .when('/sivankovil', {
            title :"Sree Visalakshi Sametha Sree Viswanatha Swamy Temple  - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/sivankovil.html',
            controller  : 'cultureController'
        })

        // route for the ganapathikovil page
        .when('/ganapathikovil', {
            title :"MahaGanapathy Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/ganapathikovil.html',
            controller  : 'cultureController'
        })

        // route for the keralathappankovil page
        .when('/keralathappankovil', {
            title :"Keralathappan Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/keralathappankovil.html',
            controller  : 'cultureController'
        })

        // route for the mariyammankovil page
        .when('/mariyammankovil', {
            title :"Keralapuram Mariyamman Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/mariyammankovil.html',
            controller  : 'cultureController'
        })

        // route for the kurukkulamtemple page
        .when('/kurukkulamtemple', {
            title :"Kurukkulam Mariyamman Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/kurukkulamtemple.html',
            controller  : 'cultureController'
        })

        // route for the kolodetemple page
        .when('/kolodetemple', {
            title :"Kolode Mariyamman Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/kolodetemple.html',
            controller  : 'cultureController'
        })

        // route for the kakkayursivankovil page
        .when('/kakkayursivankovil', {
            title :"Kakkayur Siva Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/kakkayursivankovil.html',
            controller  : 'cultureController'
        })

        // route for the kottamalakovil page
        .when('/kottamala', {
            title :"Kottamala Sree Ayyappa Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/kottamala.html',
            controller  : 'cultureController'
        })

        // route for the kottakovil page
        .when('/kottakovil', {
            title :"Sree Thiruvilayanadu Bhagavathy Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/kottakovil.html',
            controller  : 'cultureController'
        })

        // route for the altharaganapathy page
        .when('/altharaganapathy', {
            title :"Althara MahaGanapathy Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/altharaganapathy.html',
            controller  : 'cultureController'
        })

        // route for the ethanurkovil page
        .when('/kizhakkethara', {
            title :"Kizhakkethara Sree Thiruvilayanadu Bhagavathy Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/kizhakkethara.html',
            controller  : 'cultureController'
        })

        // route for the maruthikavu page
        .when('/maruthikavu', {
            title :"Ethanur Maruthi Bhagavathy Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/maruthikavu.html',
            controller  : 'cultureController'
        })

        // route for the koymarpadam page
        .when('/koymarpadam', {
            title :"Koymar Padam Sree Subramaniya Swamy Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/koymarpadam.html',
            controller  : 'cultureController'
        })

        // route for the mandathbhagavathy page
        .when('/mandathbhagavathy', {
            title :"Thottekkattthara Sree Mandath Bhagavathy Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/mandathbhagavathy.html',
            controller  : 'cultureController'
        })

        // route for the nochurbhagavathy page
        .when('/nochurbhagavathy', {
            title :"Nochur Bhagavathy Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/nochurbhagavathy.html',
            controller  : 'cultureController'
        })

        // route for the nochurkrishnatemple page
        .when('/nochurkrishnatemple', {
            title :"Nochur Krishna Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/nochurkrishnatemple.html',
            controller  : 'cultureController'
        })

        // route for the ramapuramtemple page
        .when('/ramapuramtemple', {
            title :"Ramapuram Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/ramapuramtemple.html',
            controller  : 'cultureController'
        })

        // route for the uchimahaliyammantemple page
        .when('/uchimahaliyammantemple', {
            title :"Uchimahaliyamman Temple - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/uchimahaliyammantemple.html',
            controller  : 'cultureController'
        })

        // route for the examplefestival page
        .when('/examplefestival', {
            title :"Example for Festival Page - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/example.html',
            controller  : 'cultureController'
        })

        // route for the koduvayurratholsavam page
        .when('/koduvayurratholsavam', {
            title :"Koduvayur Ratholsavam - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/koduvayurratholsavam.html',
            controller  : 'cultureController'
        })

        // route for the thaipooyam page
        .when('/thaipooyam', {
            title :"Thaipooyam - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/thaipooyam.html',
            controller  : 'cultureController'
        })

        // route for the nochurratholsavam page
        .when('/nochurratholsavam', {
            title :"Nochur Ratholsavam - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/nochurratholsavam.html',
            controller  : 'cultureController'
        })

        // route for the sivarathri page
        .when('/sivarathri', {
            title :"Sivarathri - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/sivarathri.html',
            controller  : 'cultureController'
        })

        // route for the ethanurkummati page
        .when('/ethanurkummati', {
            title :"Ethanur Kummati - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/ethanurkummati.html',
            controller  : 'cultureController'
        })

        // route for the kanyarkali page
        .when('/kanyarkali', {
            title :"Kanyar Kali - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/kanyarkali.html',
            controller  : 'cultureController'
        })

        // route for the mariyammanpongal page
        .when('/mariyammanpongal', {
            title :"Mariyamman Pongal - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/mariyammanpongal.html',
            controller  : 'cultureController'
        })

        // route for the aadipooram page
        .when('/aadipooram', {
            title :"Aadipooram - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/aadipooram.html',
            controller  : 'cultureController'
        })

        // route for the ganeshothsavam page
        .when('/ganeshothsavam', {
            title :"Ganeshothsavam - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/ganeshothsavam.html',
            controller  : 'cultureController'
        })

        // route for the navarathri page
        .when('/navarathri', {
            title :"Navarathri - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/navarathri.html',
            controller  : 'cultureController'
        })

        // route for the annabhishekham page
        .when('/annabhishekham', {
            title :"Annsbhishekham - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/annabhishekham.html',
            controller  : 'cultureController'
        })

        // route for the kottamaladhanupath page
        .when('/kottamaladhanupath', {
            title :"Kottamala Dhanupath - MyKoduvayur",
            description : "",
            templateUrl : 'pages/culture/kottamaladhanupath.html',
            controller  : 'cultureController'
        })

        // events

        // route for the ganeshothsavam2017 page
        .when('/ganeshothsavam2017', {
            title :"Ganeshothsavam 2017- MyKoduvayur",
            description : "Koduvayur, Mykoduvayur, Events, Festival, Ganeshothsavam, Vinayaka Chathurthi, 2017, Ganapathy, Ghoshayatra, Palakkad, Official, Photos, Pictures, Althara, Ethanur",
            templateUrl : 'pages/events/ganeshothsavam2017.html',
            controller  : 'eventsController'
        })

        // route for the keralotsavam2017 page
        .when('/keralotsavam2017', {
            title :"Keralotsavam 2017, Koduvayur Grama Panchayath - MyKoduvayur",
            description : "Koduvayur, Mykoduvayur, Events, Keralotsavam, Panchayat Mela, Grama Panchayath, Live, Update, Official, 2017, Arts and Sports, Football, Volleyball, Cricket, Athletics, Block, Winners, Champions, Clubs",
            templateUrl : 'pages/events/keralotsavam2017.html',
            controller  : 'eventsController'
        })

        // route for the mobilephotographycontest2017 page
        .when('/mobilephotographycontest2017', {
            title :"Mobile Photography Contest 2017, Koduvayur Ratholsavam - MyKoduvayur",
            description : "Koduvayur, Mykoduvayur, Events, Mobile, Photography, Contest, 2017, Koduvayur, Ratholsavam, Arts, Creative, Official",
            templateUrl : 'pages/events/mobilephotographycontest2017.html',
            controller  : 'eventsController'
        })

});

mykdrApp.run(['$rootScope', '$route', function($rootScope, $route) {

    // $rootScope.$on('$viewContentLoaded', function () {
    //     $templateCache.removeAll();
    // });

    $rootScope.$on('$routeChangeSuccess', function () {
        document.title = $route.current.title;
    });



    $rootScope.langChange = false;
    $rootScope.myLang = "ENGLISH";
    $rootScope.engdata = {};
    $rootScope.maldata = {};
    $rootScope.dataSelected = {};

    $rootScope.engdata.mainData = {

        general: {
            author: "kriz815",
            url: "http://www.mykoduvayur.in",
            logo: "./images/mylogo.png",
            lastupdated: "30 September 2017"
        },
        menu: {
            english: "EN",
            malayalam: "മ",
            home: "HOME",
            locality: "LOCALITY",
            culture: "CULTURE",
            services: "SERVICES",
            trending: "TRENDING",
            events: "EVENTS",
            feedback: "FEEDBACK",
            about: "ABOUT US"
        },
        theme: {
            portrait: {
                pic1: "./images/theme/thememob.jpg",
                pic2: "./images/theme/albummob.jpg",
                pic3: "./images/theme/mountmob.jpg",
                pic1alt: "My Koduvayur.",
                pic2alt: "PhotoFrame",
                pic3alt: "Kottamala, Koduvayur"
            },
            landscape: {
                pic1: "./images/theme/themepc.jpg",
                pic2: "./images/theme/albumpc.jpg",
                pic3: "./images/theme/mountpc.jpg",
                pic1alt: "My Koduvayur.",
                pic2alt: "PhotoFrame",
                pic3alt: "Kottamala, Koduvayur"
            }
        },
        pagetop: {
            updated: "Last Updated : "
        },
        footer: {
            copyright: "Team BehindBrains © 2017. All Rights Reserved.",
            share: "Share: "
        }
    };

    $rootScope.maldata.mainData = {

        general: {
            author: "kriz815",
            url: "http://www.mykoduvayur.in",
            logo: "./images/mylogo.png",
            lastupdated: "30 സെപ്റ്റംബർ 2017"
        },
        menu: {
            english: "EN",
            malayalam: "മ",
            home: "ഉള്ളടക്കം",
            locality: "പ്രദേശം",
            culture: "സാംസ്കാരികം",
            services: "സേവനം",
            trending: "തരംഗം",
            events: "പരിപാടി",
            feedback: "ജനശബ്ദം",
            about: "അണിയറ"
        },
        theme: {
            portrait: {
                pic1: "./images/theme/thememob.jpg",
                pic2: "./images/theme/albummob.jpg",
                pic3: "./images/theme/mountmob.jpg",
                pic1alt: "My Koduvayur.",
                pic2alt: "PhotoFrame",
                pic3alt: "Kottamala, Koduvayur"
            },
            landscape: {
                pic1: "./images/theme/themepc.jpg",
                pic2: "./images/theme/albumpc.jpg",
                pic3: "./images/theme/mountpc.jpg",
                pic1alt: "My Koduvayur.",
                pic2alt: "PhotoFrame",
                pic3alt: "Kottamala, Koduvayur"
            }
        },
        pagetop: {
            updated: "Last Updated : "
        },
        footer: {
            copyright: "Team BehindBrains © 2017. All Rights Reserved.",
            share: "Share: "
        }
    };

    $rootScope.engdata.home = {
        intro: {
            title: "INTRODUCTION",
            para1: "Koduvayur is a town located in the Southern part of Palakkad district in Kerala. It’s a Village Panchayat that comes under the Chittur Taluk. It is a place known for its Diversity. Be it the population, slang, festivals, business, culture or the livelihood, there are various kinds of it all in this place.",
            para2_1: "MyKoduvayur",
            para2_2: " is a Web Project initiated by ",
            para2_3: "Team BehindBrains ",
            para2_4: "based on Koduvayur. This is an Information Website which primarily focuses on :",
            list1: "Delivering any and every kind of regularly updated and correct Information related to Koduvayur.",
            list2: "Providing Technical Assistance and Promotion to institutions, businesses, events and schemes for Public Welfare, happening in and around Koduvayur.",
            para3: "This website intends to be a Library about Koduvayur for people from outside, a trustable and informative friend for those who live here, and an everlasting book of memories for those who miss this place.",
            para4: "Read on to find out more…"
        },
        aboutthis: {
            title: "ABOUT THIS WEBSITE",
            list1: "This website is a collection of information regarding anything and everything that is related to Koduvayur.",
            list2: "All the different institutions, Govt. offices, schools, hospitals, historic and religious places, festivals, news, commerce, politics, events, associations etc. find their place on our website, presented in a clean ordered way.",
            list3: "An extensive collection of information and contact details of every establishment and service in and around Koduvayur will help the public to meet their needs in an easier and faster way.",
            list4: "Regular news updates, alerts and a collection of good articles, photographs and videos that relate to our context are included.."
        },
        behindlogo: {
            title: "BEHIND THE LOGO",
            para1_1: "The logo of ",
            para1_2: "MyKoduvayur",
            para1_3: " is a ",
            para1_4: "Banyan tree",
            para1_5: ". Its the National Tree of India. Its from the Moraceae family and its Scientific name is Ficus Benghalensis. Its considered as a Sacred tree all over India and it also has several medicinal properties.",
            para2: "But that’s not why we kept it as Our Logo. In the culturally, geographically and ethnically diverse place of Koduvayur, it is the one thing in common that unites everyone in Koduvayur irrespective of age, gender, religion, caste, location and economic or social status.",
            para3_1: "‘",
            para3_2: "Althara",
            para3_3: "', as we call it, is present in every prime location of the village, and it serves as the main host for almost every event that takes place in here. From small gatherings, to public meetings, business, processions, promotions, games, perfomance and festivals… these ‘Altharas’ have seen them all, from time to time. The term is a part and parcel of everyone in and around this place on their daily conversations. Koduvayur is decorated with numerous banyan trees in general. But it’s the old ones at the prime spots that are considered of great significance.",
            para4: "Be it Angadi Althara, the Capital Centre of Koduvayur, which is the Gateway to the Koduvayur Market, or the Gramapeedika/ High School Athara, which is at the Junction entrance to the Keralapuram Agraharam, or the Sivan Kovil Althara which is at the Heart of the village and the centre spot of Koduvayur Radholsavam, or be it Ethanur, Kakkayur or other locations, ‘Althara’ is the one term that unites the whole of Koduvayur and that’s why we chose an Althara to represent MyKoduvayur."
        },
        funds: {
            title: "FUNDS",
            para1_1: "As is the case with any other website, this website needs funding for its ",
            para1_2: "functioning and regular activity",
            para1_3: ".",
            para2_1: "This website ",
            para2_2: "DOES NOT feature any Online Ads or Cookies",
            para2_3: " as a source of income.",
            para3_1: "Instead, we provide ",
            para3_2: "Prescribed Ad Slots for fixed Time Period",
            para3_3: " for Interested Businesses who wish to promote themselves with this website.",
            para4_1: "The Ad Slot consists of a ",
            para4_2: "fixed area",
            para4_3: " on each page and a ",
            para4_4: "Dedicated Page",
            para4_5: " for each Sponsor.",
            para5: "We also accept and appreciate funds from Well Wishers for the functioning of this Website."
        },
        guide: {
            title: "WEBSITE GUIDE",
            image: "./images/kdrguide.jpg"
        }
    };

    $rootScope.maldata.home = {
        intro: {
            title: "ആമുഖം",
            para1: "കേരളത്തിലെ പാലക്കാട് ജില്ലയുടെ തെക്ക് പടിഞ്ഞാറ് ഭാഗത്തായി സ്ഥിതി ചെയ്യുന്ന ഒരു നഗരമാണ് കൊടുവായൂർ . ചിറ്റൂർ താലൂക്കിലുള്ള ഒരു ഗ്രാമ പഞ്ചായത്താണ് ഇത്. വൈവിധ്യത്തിന്‌  അറിയപ്പെടുന്ന ഒരു സ്ഥലമാണിത്. സംസാരഭാഷ , ജീവിതശൈലി , ഉത്സവങ്ങൾ, ബിസിനസ്, സംസ്കാരം എന്നിവയൊക്കെ ഈ സ്ഥലത്ത് വിവിധമായ നിരവധി ഇനങ്ങളുണ്ട്.",
            para2_1: "Team BehindBrains",
            para2_2: " ആരംഭിച്ച ഒരു വെബ് പ്രോജക്റ്റ് ആണ്",
            para2_3: " MyKoduvayur",
            para2_4: ". ഇത് കൊടുവായൂരിനെ ആസ്പദമാക്കിയുള്ള ഒരു വെബ്സൈറ്റ് ആണ്. ഈ വെബ്സൈറ്റിന്റെ പ്രധാന ലക്‌ഷ്യം എന്നത്  : ",
            list1: "കൊടുവായൂരുമായി ബന്ധപ്പെട്ട എല്ലാ തരത്തിലും ഉള്ള പതിവായി വിലയിരുത്തപ്പെട്ട ശരിയായ വിവരങ്ങൾ  നാട്ടുകാരിലേക്ക് എത്തിക്കുക.",
            list2: "കൊടുവായൂർ ഭാഗത്തും ചുറ്റുപാടും  ഉള്ള പൊതുമേഖലാ സ്ഥാപനങ്ങൾ, സ്വകാര്യ സ്ഥാപനങ്ങൾ, ബിസിനസ്സുകൾ, പൊതുജനക്ഷേമ പദ്ധതികൾ എന്നിവയ്ക്കുള്ള സാങ്കേതിക സഹായവും പ്രോത്സാഹനവും നൽകുക.  ",
            para3: "ഈ വെബ്സൈറ്റ് പുറമെ നിന്നുള്ളവർക്ക് കൊടുവായൂരിനെക്കുറിച്ചുള്ള ഒരു വിജ്ഞാനകോശവും, ഇവിടെ ജനിച്ചുവളർന്ന് ഇപ്പോൾ മറുനാടുകളിൽ ജീവിക്കുന്നവർക്ക് ഇവിടത്തെ ഓർമകളുടെ ഒരു പുസ്തകവും, ഇവിടത്തെ നാട്ടുകാർക്ക് ശരിയായ വിവരങ്ങൾ ആവശ്യമായ സമയത്ത് നൽകുന്ന ഒരു വിശ്വസ്‌തനായ സുഹൃത്തും ആവും എന്ന് ഞങ്ങൾ വിശ്വസിക്കുന്നു. ",
            para4: "കൂടുതൽ വിവരങ്ങൾക്കായി തുടർന്ന് വായിക്കുക..."
        },
        aboutthis: {
            title: "ആശയം",
            list1: "കൊടുവായൂരിനെ സംബന്ധിച്ചുള്ള എല്ലാ തരം വിവരങ്ങളുടെയും ഒരു ശേഖരമാണ് ഈ വെബ്‌സൈറ്റ്. ",
            list2: "ഇവിടെയുള്ള എല്ലാതരം സ്ഥാപനങ്ങൾ, സർക്കാർ. ഓഫീസുകൾ, സ്കൂളുകൾ, ആശുപത്രികൾ, ആരാധനാലയങ്ങൾ, ഉത്സവങ്ങൾ, വാർത്തകൾ, വാണിജ്യം, ഭരണകൂടം, രാഷ്ട്രീയം, പരിപാടികൾ, അസോസിയേഷനുകൾ എന്നിവയെക്കുറിച്ചുള്ള വിവരങ്ങൾ ഞങ്ങളുടെ വെബ്സൈറ്റിൽ കൃത്യമായി ക്രമീകരിച്ച് അവതരിപ്പിച്ചിരിക്കുന്നു.",
            list3: "കൊടുവായൂരിലും ചുറ്റുപാടും ഉള്ള എല്ലാ സ്ഥാപനങ്ങളെയും സേവനങ്ങളേയും കുറിച്ചുള്ള വിവരങ്ങളുടെ ഒരു വിശാലമായ ശേഖരം പൊതുജനങ്ങളെ അവരുടെ ആവശ്യങ്ങൾ എളുപ്പം നിറവേറ്റാൻ സഹായിക്കും.",
            list4: "കൊടുവായൂരിനെ സംബന്ധിച്ചുള്ള വാർത്തകൾ, അറിയിപ്പുകൾ, നല്ല ലേഖനങ്ങളുടെ ഒരു ശേഖരം, ഫോട്ടോഗ്രാഫുകൾ, വിഡിയോകൾ എന്നിവയും ഈ വെബ്‌സൈറ്റിൽ ഉൾപ്പെടുന്നു."
        },
        behindlogo: {
            title: "ലോഗോയെക്കുറിച്ച്",
            para1_1: "",
            para1_2: "MyKoduvayur",
            para1_3: "ന്റെ ലോഗോ ഒരു ",
            para1_4: "ആൽമരം",
            para1_5: " ആണ്. ഇന്ത്യയുടെ ദേശീയ വൃക്ഷമായ ആൽമരം മോറാസെയ എന്ന ജൈവകുടുംബത്തിൽ നിന്നാണ്.  അതിന്റെ ശാസ്ത്രനാമം ഫിക്കസ് ബെൻഘലെൻസിസ് ആണ്. ഇന്ത്യയിലുടനീളം ഒരു വിശുദ്ധ മരമായിട്ടാണ് ഇതിനെ ജനങ്ങൾ കാണുന്നത്. ആൽമരത്തിന് നിരവധി ഔഷധഗുണങ്ങൾ ഉണ്ട്.",
            para2: "പക്ഷേ ഇത് കാരണമല്ല ആൽമരത്തെ ഞങ്ങളുടെ ലോഗോ ആക്കിയത്. സംസ്‌കാരത്തിലും പ്രദേശങ്ങളിലും സംസാരരീതികളിലും വൈവിധ്യമുള്ള  കൊടുവായൂരിലെ ജനങ്ങളെ ഏകീകരിക്കുന്ന ഒരു പദം കൂടി ആണ് ആൽമരം.",
            para3_1: "‘",
            para3_2: "ആൽത്തറ",
            para3_3: "', എന്ന് നാം വിളിക്കുന്ന ഈ മരങ്ങൾ കൊടുവായൂരിന്റെ നാനാഭാഗത്തും ഉള്ള എല്ലാ സുപ്രധാന സ്ഥലങ്ങളുടെയും ഭാഗം ആണ്. ഇവിടെ ഏതു ഭാഗത്തു നടത്തുന്ന പരിപാടികൾ ആയാലും പൊതുവെ ആൽത്തറകൾ കേന്ദ്രികരിച്ചാണ് നടക്കാറുള്ളത്. ചെറിയ കൂടികാഴ്‌ചകൾ മുതൽ വലിയ ചടങ്ങുകളും ജാഥയും ബിസിനസ്സും ഉത്സവങ്ങളും കളികളും കലാപരിപാടികളും ഒക്കെ ഈ ആൽത്തറകൾ കാലാകാലങ്ങളായി കണ്ടുവരുന്നതാണ്. 'ആൽത്തറ' എന്ന ഈ വാക്ക് ഇവിടെ ഉള്ള എല്ലാവരുടെയും ദൈനംദിന സംഭാഷണങ്ങളുടെ ഒരു ഭാഗം ആണ്. കൊടുവായൂരിനെ അലങ്കരിക്കാൻ കുറെ ആൽമരങ്ങൾ ഉണ്ടെങ്കിലും, പ്രധാന സ്ഥലങ്ങളിലുള്ള പഴയ ആൽത്തറകളാണ് കൂടുതൽ വിശേഷപ്പെട്ടത്.",
            para4: "കൊടുവായൂരിന്റെ തലസ്ഥാന കേന്ദ്രമായ 'അങ്ങാടി ആൽത്തറ', കേരളപുരം ഗ്രാമത്തിലേക്കുള്ള കവാടമായ 'ഗ്രാമപീടിക', ഗ്രാമത്തിന്റെ ഹൃദയഭാഗത്തുള്ളതും കൊടുവായൂർ രഥോത്സവത്തിന്റെ കേന്ദ്രവും ആയ 'ശിവൻ കോവിൽ ആൽത്തറ', എത്തനുർ, കിഴക്കേത്തറ, കാക്കയൂർ, നവക്കോട്, തുടങ്ങി കൊടുവായൂരിലെ ഏതു സ്ഥലം ആയാലും, കൊടുവായൂരിനെ ജാതി മത പ്രായ വർഗ ബേദമന്യേ ഒന്നിപ്പിക്കുന്ന ഒരു പദം ആണ് 'ആൽത്തറ'. അതിനാലാണ് ആൽത്തറയെ MyKoduvayurന്റെ ലോഗോ ആയി തിരഞ്ഞെടുത്തത്. "
        },
        funds: {
            title: "ഫണ്ടുകൾ",
            para1_1: "ഏതൊരു വെബ്‌സൈറ്റിനെയും പോലെ, ഈ വെബ്‌സൈറ്റിനും അതിന്റെ ",
            para1_2: "സ്ഥിരമായ പ്രവർത്തനത്തിനുവേണ്ടിയുള്ള ",
            para1_3: "ഫണ്ടുകൾ ആവശ്യമാണ്.",
            para2_1: "ഈ വെബ്സൈറ്റിന്റെ വരുമാനത്തിന് വേണ്ടി ഞങ്ങൾ ",
            para2_2: "ഓൺലൈൻ പരസ്യങ്ങൾ പ്രസിദ്ധികരിക്കുന്നില്ല",
            para2_3: ".",
            para3_1: "അതിനു പകരം, ഇവിടെയുള്ള ബിസിനസ്സുകൾ പ്രചരിപ്പിക്കുവാൻ ആഗ്രഹിക്കുന്നവർക്കായി ഞങ്ങൾ ",
            para3_2: "നിശ്ചിത കാലയളവിനുള്ള പരസ്യങ്ങൾ",
            para3_3: " ഈ വെബ്‌സൈറ്റിൽ ലഭ്യമാക്കുന്നു.",
            para4_1: "ഈ പരസ്യങ്ങൾക്ക് ഓരോ പേജിലും ഉള്ള ഒരു ",
            para4_2: "നിശ്ചിത ഭാഗവും",
            para4_3: " ഓരോ സ്‌പോൺസർമാർക്കും വേണ്ടി ",
            para4_4: "വേറിട്ട ഒരു പേജും",
            para4_5: " നൽകുന്നു.  ",
            para5: "ഈ വെബ്സൈറ്റിന്റെ അഭ്യുദയാകാംക്ഷികളിൽ നിന്നുള്ള സംഭാവനകൾ ഞങ്ങൾ നന്ദിപൂർവം സ്വീകരിക്കുന്നു."
        },
        guide: {
            title: "വെബ്‌സൈറ്റ് ഘടന",
            image: "./images/kdrguide.jpg"
        }
    };

    $rootScope.engdata.locality = {
        intro: {
            title: "INTRODUCTION",
            para1: "Koduvayur is one of the most prominent regions in the Southern part of Palakkad. The population here is a diverse combination of people with different lifestyles, belonging to several communities and speak different languages and slang. Nochur, Ethanur, Kakkayur, Keralapuram Gramam, Navakkode, Pittupeedika, Mini Estate etc are some of the notable places of this region, divided into 10 administrative wards."
        },
        koduvayur: {
            title: "KODUVAYUR",
            para1: "The domain of Koduvayur stretches to Mannathukavu in the North-West, Nochur in the North-East, Ethanur in the West, Karippode in the East, Kakkayur in the South-West and Annakode in the South.",
            para2: "Koduvayur is the Geographical Intersection between a number of places like Palakkad, Nemmara, Alathur, Chittur, Pollachi, Kollengode etc. The Vehicle Traffic that frequently occurs here is a stand out feature. The road is busy 24/7 as it connects a number of places. KSRTC operates long route buses to Thrissur, Trivandrum, Kochi and Coimbatore through here.",
            para3: "Being the prime Business Center for the south-west region of Palakkad district, most of the population depends upon Koduvayur for their day-to-day needs like vegetables & other groceries, cloth and meat products. This place acts as a hub for merchandise coming from Coimbatore and Pollachi in Tamil Nadu. Koduvayur Market is one of the prominent places and business range from small scale shops to wholesale godowns, active 24/7.",
            para4: "The speaking tongues are mainly Malayalam and Tamil, although the slang varies for each locality and community of people. Population has a majority of Hindus belonging to a number of sub-castes. Muslim community is concentrated on some parts of Koduvayur and there are a number of Christian families spread around even though it is a minority here.  As a part of the land of Palakkad, which is known for its cultural diversity, Koduvayur inherits that Palakkadan esssence for festivals and celebrations. From Eid, Easter and Onam to a number of Regional Festivals spread around, there is something to celebrate each time of the year."
        },
        administration: {
            title: "ADMINISTRATION",
            para1: "The Koduvayur Grama Panchayath is divided into 18 Administrative Wards. It is headed by the Grama Panchayath President and each Ward is represented and administered by the respective Ward Member. The details of the Administration Panel is given below. We hope you find good use of it.",
            list: [
                {
                    wardno: "1",
                    ward: "PULLA ROAD",
                    name: "G.KRISHNAPRASAD",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9495485304"
                },
                {
                    wardno: "2",
                    ward: "UMMATHUMTHOPPU",
                    name: "PRIYA.M",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9846165729"
                },
                {
                    wardno: "3",
                    ward: "CHANTHIRUTHI",
                    name: "PATHMAKRISHNAN",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9809157250"
                },
                {
                    wardno: "4",
                    ward: "KERALAPURAM",
                    name: "UMAIBA.A",
                    party: "S.D.P.I",
                    pic: "",
                    phone: "8086059431"
                },
                {
                    wardno: "5",
                    ward: "KARUVANNURTHARA",
                    name: "NILAVARNEESA",
                    party: "I.U.M.L",
                    pic: "",
                    phone: "9388803700"
                },
                {
                    wardno: "6",
                    ward: "VADAKKUMPADAM",
                    name: "SARITHA.B",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9961557345, 9447248583"
                },
                {
                    wardno: "7",
                    ward: "VEETIYODE",
                    name: "C.ARUMUGHAN‍",
                    party: "B.J.P",
                    pic: "",
                    phone: "9446152553"
                },
                {
                    wardno: "8",
                    ward: "NOCHUR‍",
                    name: "USHA.N‍‍",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "8891374073"
                },
                {
                    wardno: "9",
                    ward: "KARNAKI NAGAR‍",
                    name: "SREEJA SUNIL",
                    party: "B.J.P",
                    pic: "",
                    phone: "9447941346"
                },
                {
                    wardno: "10",
                    ward: "KOYMAR PADAM",
                    name: "M.SUNIL",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9447255022, 9745255022"
                },
                {
                    wardno: "11",
                    ward: "VETTUMPULLI",
                    name: "V.RAJAN",
                    party: "B.J.P",
                    pic: "",
                    phone: "9526408175"
                },
                {
                    wardno: "12",
                    ward: "PEZHUMKADU",
                    name: "C.SWAMINATHAN‍‍",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9526312089"
                },
                {
                    wardno: "13",
                    ward: "KOLODE",
                    name: "THANKAM",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9947446586"
                },
                {
                    wardno: "14",
                    ward: "KANNAMKODE",
                    name: "CHANDRIKA.N‍",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9072982537"
                },
                {
                    wardno: "15",
                    ward: "VAKKODE",
                    name: "BABU.K‍",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9447532813"
                },
                {
                    wardno: "16",
                    ward: "KAKKAYUR‍",
                    name: "INDIRA.K‍",
                    party: "INDEPENDENT‍",
                    pic: "",
                    phone: "9562612035"
                },
                {
                    wardno: "17",
                    ward: "VRINDHAVANAM",
                    name: "UNNIKRISHNAN.M",
                    party: "C.P.I(M)",
                    pic: "",
                    phone: "9287541060"
                },
                {
                    wardno: "18",
                    ward: "ETHANUR",
                    name: "M.SUDHIR‍‍",
                    party: "I.N.C",
                    pic: "",
                    phone: "9447964597"
                }
            ]
        },
        institutions: {
            title: "INSTITUTIONS",
            list: {
                ghsskoduvayur: {

                },
                gramapanchayathoffice: {

                },
                koduvayurarket: {

                },
                govthospital: {

                },
                ksebkoduvayur: {

                },
                oldagehome: {

                }
            }
        },
        society: {
            title: "SOCIETY",
            party: {
                title: "POLITICAL PARTIES",
                list: [

                ]
            },
            clubs: {
                title: "ARTS & SPORTS CLUBS",
                list: [

                ]
            },
            other: {
                title: "OTHER ASSOCIATIONS",
                list: [

                ]
            }
        }
    };

    $rootScope.maldata.locality = {
        intro: {
            title: "ആമുഖം",
            para1: "പാലക്കാട് തെക്ക് ഭാഗത്തെ ഏറ്റവും പ്രധാനപ്പെട്ട ഭാഗങ്ങളിൽ ഒന്നാണ് കൊടുവായൂർ. വിവിധ ജനവിഭാഗങ്ങളിൽ പെട്ട വ്യത്യസ്ത ജീവിതശൈലികളും സംസാരഭാഷകളും  ഉള്ള ജനങ്ങയുടെ  വൈവിധ്യമാർന്ന സംയോജനമാണ് ഇവിടെയുള്ളത്. നൊച്ചൂർ, എത്തനൂർ, കാക്കയൂർ, കേരളപുരം ഗ്രാമം, നവക്കോട്, പിട്ടുപ്പീടിക, മിനി എസ്റ്റേറ്റ് തുടങ്ങിയവയാണ് ഈ മേഖലയിലെ ചില പ്രധാന സ്ഥലങ്ങൾ. ഭരണപരമായി കൊടുവായൂർ എന്ന ഗ്രാമപഞ്ചായത്ത് 10 വാർഡുകളായി തരംതിരിച്ചിരിക്കുന്നു. "
        },
        koduvayur: {
            title: "കൊടുവായൂർ",
            para1: "വടക്കുപടിഞ്ഞാറ് ഭാഗത്ത് മന്നത്തുകാവ്, വടക്കുകിഴക്ക് ഭാഗത്ത് ഏത്തനൂർ, കിഴക്ക് ഭാഗത്ത് കരിപ്പോട്, തെക്കുപടിഞ്ഞാറ് ഭാഗത്ത് കാക്കയൂർ, തെക്കു ഭാഗത്ത് അണ്ണക്കോട് എന്നിവിടങ്ങൾക്കുള്ളിലായാണ്  കൊടുവായൂർ എന്ന പ്രദേശം സ്ഥിതി ചെയ്യുന്നത്.",
            para2: "പാലക്കാട്, നെന്മാറ, ആലത്തൂർ, ചിറ്റൂർ, പൊള്ളാച്ചി, കൊല്ലങ്കോട് തുടങ്ങിയ സ്ഥലങ്ങളെ തമ്മിൽ ബന്ധിപ്പിക്കുന്ന സ്ഥലമാണ് കൊടുവായൂർ. ഇവിടെ പലപ്പോഴും ഉണ്ടാവാറുള്ള ട്രാഫിക് ബ്ലോക്കുകൾ ഒരു സ്ഥിരം ചർച്ചാവിഷയം ആണ്. നിരവധി സ്ഥലങ്ങൾ ബന്ധിപ്പിക്കുന്നതിനാൽ ഈ റൂട്ടിൽ എല്ലാ സമയങ്ങളിലും വാഹനഗതാഗതം പതിവാണ്. തൃശ്ശൂർ, തിരുവനന്തപുരം, കൊച്ചി, കോയമ്പത്തൂർ എന്നിവിടങ്ങളിലേക്ക് ഈ വഴി ദീർഘദൂര കെഎസ്ആർടിസി ബസ് സർവ്വീസ് ഉണ്ട്.",
            para3: "പാലക്കാട് ജില്ലയുടെ തെക്ക്-പടിഞ്ഞാറേ ഭാഗത്തെ പ്രധാന വാണിജ്യകേന്ദ്രം ആയതിനാൽ ജനസംഖ്യയുടെ ഭൂരിഭാഗവും പച്ചക്കറി, പലചരക്ക്, തുണികൾ, ഇറച്ചി തുടങ്ങിയ ആവശ്യങ്ങൾക്ക് കൊടുവായൂരിനെ ആശ്രയിക്കുന്നു. തമിഴ്‌നാട്ടിലെ കോയമ്പത്തൂർ, പൊള്ളാച്ചി എന്നിവിടങ്ങളിൽ നിന്നു വരുന്ന സാധനങ്ങളൊക്കെ ഇവിടത്തെ വിപണി വഴിയാണ് ജനങ്ങളിലെത്തുന്നത്. കൊടുവായൂർ അങ്ങാടി ഇവിടത്തെ കച്ചവടത്തിന്റെ ഒരു പ്രധാന കേന്ദ്രമാണ്. ചെറുകിട കടകൾ മുതൽ സജീവമായ വലിയ ഗോഡൗണുകൾ വരെ ഇവിടത്തെ കച്ചവടസ്ഥാപനങ്ങൾ നീളുന്നു. അതിരാവിലെ തൊട്ട് അർധരാത്രി വരെ ഇവിടത്തെ വാണിജ്യം സജീവമാണ്.",
            para4: "കൊടുവായൂരിൽ സംസാരിക്കുന്ന ഭാഷകൾ പ്രധാനമായും മലയാളം, തമിഴ് ആണ് എന്നിരുന്നാലും ഇവിടത്തെ ഓരോ പ്രദേശങ്ങളിലും അവിടത്തേതായ  സംസാരശൈലികൾ ഉണ്ട്. ജനസംഖ്യയിൽ കൂടുതൽ ഹിന്ദുക്കൾ ആണ്. ഇവിടത്തെ കുറച്ചു പ്രദേശങ്ങൾ കേന്ദ്രികരിച്ച് മുസ്ലീം സമുദായക്കാർ ജീവിക്കുന്നു. ഇവിടത്തെ ഒരു ന്യൂനപക്ഷമാണെങ്കിലും അനേകം ക്രിസ്ത്യൻ കുടുംബങ്ങളും ഇവിടെയുണ്ട്. സാംസ്കാരിക വൈവിധ്യത്തിനും  ഉത്സവങ്ങൾക്കും പേരുകേട്ട പാലക്കാടിന്റെ തനിമ അപ്പാടെ ഉൾക്കൊണ്ട ഒരു നാടാണ് കൊടുവായൂർ. ഈദ്, ഓണം, ഈസ്റ്റർ പോലത്തെ പൊതു ഉത്സവങ്ങളും നിരവധി പ്രാദേശിക ഉത്സവങ്ങളും ഇവിടെ ആഘോഷിക്കാറുണ്ട്. അനേകം വിഭാഗങ്ങളും ഉത്സവങ്ങളും ഉള്ളതിനാൽ ഇവിടെ വർഷമെമ്പാടും ആഘോഷങ്ങൾ പതിവാണ്."
        },
        administration: {
            title: "ഭരണഘടന",
            para1: "",
            list: [
                {
                    wardno: "1",
                    ward: "പുല്ലാറോഡ്",
                    name: "ജി.ക്യഷ്ണപ്രസാദ്",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9495485304"
                },
                {
                    wardno: "2",
                    ward: "ഉമ്മത്തും തോപ്പ്",
                    name: "പ്രീയ.എം",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9846165729"
                },
                {
                    wardno: "3",
                    ward: "ചാന്തിരുത്തി",
                    name: "പത്മകൃഷ്ണന്‍",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9809157250"
                },
                {
                    wardno: "4",
                    ward: "കേരളപുരം",
                    name: "ഉമൈബ.എ",
                    party: "എസ്.ഡി.പി.ഐ",
                    pic: "",
                    phone: "8086059431"
                },
                {
                    wardno: "5",
                    ward: "കരുവന്നൂര്‍തറ",
                    name: "നിലാവര്‍നീസ",
                    party: "ഐ യു എം.എല്‍	",
                    pic: "",
                    phone: "9388803700"
                },
                {
                    wardno: "6",
                    ward: "വടക്കുംമ്പാടം",
                    name: "സരിത.ബി",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9961557345, 9447248583"
                },
                {
                    wardno: "7",
                    ward: "വീട്ടിയോട്",
                    name: "സി.ആറുമുഖന്‍",
                    party: "ബി.ജെ.പി",
                    pic: "",
                    phone: "9446152553"
                },
                {
                    wardno: "8",
                    ward: "നൊച്ചൂൂര്‍",
                    name: "ഉഷ.എന്‍‍",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "8891374073"
                },
                {
                    wardno: "9",
                    ward: "കര്‍ണ്ണകി നഗര്‍",
                    name: "ശ്രീജ സുനില്‍",
                    party: "ബി.ജെ.പി",
                    pic: "",
                    phone: "9447941346"
                },
                {
                    wardno: "10",
                    ward: "കൊയ്മാര്‍പാടം",
                    name: "എ.സുനില്‍‍",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9447255022, 9745255022"
                },
                {
                    wardno: "11",
                    ward: "വെട്ടുുംമ്പുള്ളി",
                    name: "വി.രാജന്‍‍",
                    party: "ബി.ജെ.പി",
                    pic: "",
                    phone: "9526408175"
                },
                {
                    wardno: "12",
                    ward: "പേഴുംകാട്",
                    name: "സി.സ്വാമിനാഥന്‍‍",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9526312089"
                },
                {
                    wardno: "13",
                    ward: "കോളോട്",
                    name: "തങ്കം‍",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9947446586"
                },
                {
                    wardno: "14",
                    ward: "കണ്ണങ്കോട്",
                    name: "ചന്ദ്രിക.എന്‍",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9072982537"
                },
                {
                    wardno: "15",
                    ward: "വാക്കോട്",
                    name: "ബാബു.കെ‍",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9447532813"
                },
                {
                    wardno: "16",
                    ward: "കാക്കയൂര്‍",
                    name: "ഇന്ദിര.കെ‍",
                    party: "സ്വതന്ത്രന്‍",
                    pic: "",
                    phone: "9562612035"
                },
                {
                    wardno: "17",
                    ward: "വ്യന്ദാവനം",
                    name: "ഉണ്ണിക്യഷ്ണന്‍.എ",
                    party: "സി.പി.ഐ (എം)",
                    pic: "",
                    phone: "9287541060"
                },
                {
                    wardno: "18",
                    ward: "എത്തന്നൂര്‍",
                    name: "എം.സുധീര്‍‍",
                    party: "ഐ.എന്‍.സി",
                    pic: "",
                    phone: "9447964597"
                }
            ]
        },
        institutions: {
            title: "സ്ഥാപനങ്ങൾ",
            list: {
                ghsskoduvayur: {

                },
                gramapanchayathoffice: {

                },
                koduvayurarket: {

                },
                govthospital: {

                },
                ksebkoduvayur: {

                },
                oldagehome: {

                }
            }
        },
        society: {
            title: "സമൂഹം",
            party: {
                title: "രാഷ്ട്രീയ പാർട്ടികൾ",
                list: [

                ]
            },
            clubs: {
                title: "ക്ലബ്ബുകൾ",
                list: [

                ]
            },
            other: {
                title: "മറ്റു കൂട്ടായ്‌മകൾ",
                list: [

                ]
            }
        }
    };


    $rootScope.engdata.culture = {
        intro: {
            title: "INTRODUCTION",
            para1: "The lifestyle and traditions of people vary for each locality and community of people, here in Koduvayur. This Cultural Diversity results in numerous festivals to celebrate. Koduvayur Radholsavam is a Special Occasion for everyone here, regardless of their religion, gender, caste or age. From Eid, Easter and Onam to a number of other Regional Festivals spread around like the Ethanur Kummaty, Ganeshotsavam or Navarathri, there is something to celebrate each time of the year. This page throws light upon the Religious Places of Worship and the details of all the important festivals that are celebrated in and around Koduvayur."
        },
        worship: {
            title: "PLACES OF WORSHIP",
            temples: {
                title: "TEMPLES",
                subtitle: "TEMPLES IN KODUVAYUR",
                list: {
                    krishnankovil: {
                        title: "SREE KRISHNA TEMPLE",
                        coverpic: "./images/culture/krishnankovil/cover.jpg",
                        thumb: "./images/culture/krishnankovil/thumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    ganapathikovil: {
                        title: "SREE MAHAGANAPATHY TEMPLE",
                        coverpic: "./images/culture/ganapathikovil/templecover.jpg",
                        thumb: "./images/culture/ganapathikovil/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Corner Street - Double Street Junction, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "Jayaraman Vadhyar, Double Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Ganapathy Kovil’, The Mahaganapathy Temple of Keralapuram Gramam is one of the newer temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in the intersection of Corner Street and Double Street, in the north-west side of the pond that is populary called as 'Valyankulam' of this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    sivankovil: {
                        title: "SREE VISALAKSHY SAMETHA SREE VISWANATHA SWAMY TEMPLE",
                        coverpic: "./images/culture/sivankovil/templecover.jpg",
                        thumb: "./images/culture/sivankovil/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    keralathappankovil: {
                        title: "SREE KERALATHAPPAN TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    mariyammankovil: {
                        title: "KERALAPURAM SREE MARIYAMMAN TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    kurukkulamtemple: {
                        title: "KURUKKULAM SREE MARIYAMMAN TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    kolodetemple: {
                        title: "KOLODE SREE MARIYAMMAN TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    kakkayursivankovil: {
                        title: "KAKKAYUR SREE MAHADEVA TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    kottamala: {
                        title: "KOTTAMALA SREE AYYAPPA TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    kottakovil: {
                        title: "SREE THIRUVILAYANADU BHAGAVATHY TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    altharaganapathy: {
                        title: "ALTHARA SREE MAHAGANAPATHY TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    kizhakkethara: {
                        title: "KIZHAKKETHARA SREE THIRUVILAYANADU BHAGAVATHY TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    maruthikavu: {
                        title: "ETHANUR SREE MARUTHI BHAGAVATHY TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    koymarpadam: {
                        title: "KOYMAR PADAM SREE SUBRAMANIYA SWAMY TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    mandathbhagavathy: {
                        title: "SREE MANDATH BHAGAVATHY TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    nochurbhagavathy: {
                        title: "NOCHUR SREE BHAGAVATHY TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    nochurkrishnatemple: {
                        title: "NOCHUR SREE KRISHNA TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    ramapuramtemple: {
                        title: "PAMAPURAM SREERAMA TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    },
                    uchimahaliyammantemple: {
                        title: "SREE UCHIMAHALIYAMMAN TEMPLE",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "LOCATION",
                            info: "Gokula Street, Keralapuram Gramam, Koduvayur."
                        },
                        priest: {
                            title: "HEAD PRIEST",
                            info: "K.P.Ramachandra Vadhyar, Gokula Street, Koduvayur."
                        },
                        intro: {
                            title: "INTRODUCTION",
                            info: "More popularly known as ‘Krishnan Kovil’, The Sree Krishna Temple of Keralapuram Gramam is one of the oldest temples of this place. It functions under Keralapuram Sree Viswanatha Swamy Devaswom. It is located in one end of Gokula Street, which is the longest and widest street in this village. It is a regular stop for devotees in and around the village. "
                        },
                        history: {
                            title: "HISTORY",
                            info: "Most Agraharas of Kerala were said to be inhabited by a class of Brahmins called ‘Smartha Vibhaga’, from the ancient times. They worshipped Lord Maha Deva and Lord Maha Vishnu equally.  The west side of Keralapuram Village faces the Burial Grounds of the village. All funerary rituals of people around this place were carried out there. The regular deaths and the fires from the grounds were a reason for the worries and concerns of the people. The smoke from the grounds reaching the village was considered to be a cause for these deaths.  So with the guidance of Scholars and Astrologers, A Maha Vishnu temple was constructed facing the East, on this side of the village. Daily Poojas were carried out and peace returned to the village."
                        },
                        deities: {
                            title: "DEITIES",
                            info: "Lord Maha Vishnu, adorned by Sankhu Chakra Gadha and Pathma, is the Main Deity of this Sree Krishna Temple. This temple also has Lord Maha Ganapathy, placed at the ‘Kanni Moola’ and NagaDevathas as Sub Deities. This temple also consists of a Namaskara Mandapa, Thidappally and a sacred well which is all modeled based on the Guruvayur Temple. A Dhwaja Sthamba is placed on the front of the Temple. The grace of all the Incarnations of Lord Maha Vishnu is believed to be present in this temple. "
                        },
                        pooja: {
                            title: "SPECIAL POOJAS",
                            info: "Generally, 3 Kala Pooja is carried out every day in this Temple. In Special and Festive Days, 5 Kala Pooja is carried out. The Palpayasam Nivedyam, which is as Sacred and delicious as anywhere, is what this Sree Krishna Temple is widely known for, especially on Thiruvonam star each month.  Avil Nivedyam during Kuchela Dinam and Sree Rama Navami and Vada Nivedyam during Anjaneyotsava are also equally famous. Kalabhabhisheka is another Special Pooja that happens frequently in this temple on Special days or Devotee Requests. The fact that the Sandal prepared here is pure and without using machineries, makes the Chandhanakkappu Vazhipadu here very famous. Other Poojas include Shravanavratha Pooja on Thiruvonam days,  Sudharshana Pushpanjali, Santhana Gopala Pushpanjali, etc. "
                        },
                        festival: {
                            title: "FESTIVE DAYS",
                            info: "Sree Rama Navami, considered to be the birthday of Lord Rama is the most Important Festival celebrated based on this Temple, which is followed by Anjaneyotsavam on the next day.Gokulashtami or Sree Krishna Ashtami, considered the birthday of Lord Krishna, is another important festival of this temple, which is followed by Uriyadi on next day. Ekadashi days are always considered sacred on Maha Vishnu temples. Vaikunta Ekadashi, which falls on the month of Dhanu, is another Special and Festive Day here. Other than that, Vishukani, Illam Nira Thripputhari, Navarathri and Dhanumasa Pooja during month of Dhanu are other Festive Events here."
                        }
                    }
                }


            },
            mosques: {
                title: "MOSQUES",
                subtitle: "MOSQUES IN KODUVAYUR"
            },
            church: {
                title: "CHURCHES",
                subtitle: "CHURCHES IN KODUVAYUR"
            }
        },
        festive: {
            title: "FESTIVE CALENDAR"
        },
        festivals: {
            title: "FESTIVALS",
            list: {
                example: {
                    title: "OUR FESTIVAL",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                koduvayurratholsavam: {
                    title: "KODUVAYUR RATHOLSAVAM",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                thaipooyam: {
                    title: "THAIPOOYAM",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                nochurratholsavam: {
                    title: "NOCHUR RATHOLSAVAM",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                sivarathri: {
                    title: "MAHASIVARATHRI",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                ethanurkummati: {
                    title: "ETHANUR KUMMATI",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                kanyarkali: {
                    title: "KANYARKALI",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                mariyammanpongal: {
                    title: "MARIYAMMAN PONGAL",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                aadipooram: {
                    title: "AADIPOORAM",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                ganeshothsavam: {
                    title: "GANESHOTHSAVAM",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                navarathri: {
                    title: "NAVARATHRI",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                annabhishekham: {
                    title: "ANNABHISHEKHAM",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                },
                kottamaladhanupath: {
                    title: "KOTTAMALA DHANUPATH",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "LOCATION",
                        info: "The place of the festival celebration."
                    },
                    intro: {
                        title: "INTRODUCTION",
                        info: "A brief introduction about the festival."
                    },
                    history: {
                        title: "HISTORY",
                        info: "The history how this festival was started and why it is celebrated."
                    },
                    season: {
                        title: "THE FESTIVE SEASON",
                        info: "The time of the year when the festival is celebrated."
                    },
                    celebration: {
                        title: "CELEBRATIONS",
                        info: "Description about how the festival is celebrated."
                    },
                    specialities: {
                        title: "SPECIALITY",
                        info: "About the important special facts and significance of this festival."
                    },
                    gallery: {
                        title: "GALLERY",
                        info: "Featured photos and video collection of this festival."
                    }
                }

            }
        }
    };

    $rootScope.maldata.culture = {
        intro: {
            title: "ആമുഖം",
            para1: "ഏതൊരു സ്ഥലത്തും ഓരോ പ്രദേശത്തിലുള്ള ജനങ്ങളുടെ ജീവിതരീതികളും പാരമ്പര്യവും സമൂഹത്തിനും വ്യത്യാസമുണ്ടാവാം. ഇവിടെ കൊടുവായൂരിലും ഇത് ഒരു ശരിയായ വസ്തുത ആണ്. ഈ സാംസ്കാരിക വൈവിധ്യങ്ങൾ ഉള്ളതിനാൽ നിരവധി ആഘോഷങ്ങളും ഉത്സവങ്ങളും ഇവിടെയുണ്ട്. അവരുടെ ജാതിമതപ്രായബേദമന്യേ എല്ലാവർക്കും അതിവിശേഷമായ ദിവസങ്ങളാണ് കൊടുവായൂർ രഥോത്സവം. ഈസ്റ്റർ, ഓണം, റംസാൻ പോലെയുള്ള ലോകവ്യാപകമായ ഉത്സവങ്ങൾ മുതൽ എത്തനൂർ കുമമാട്ടി, ഗണേശോത്സവം, നവരാത്രി തുടങ്ങിയ നിരവധി പ്രാദേശിക ഉത്സവങ്ങൾ വരെ ഇവിടെ വർഷത്തിന്റെ ഓരോ സമയത്തും ആഘോഷിക്കുവാൻ കാരണങ്ങൾ ഉണ്ട്. ആരാധനാലയങ്ങളെക്കുറിച്ചും കൊടുവായൂരിൽ ആഘോഷിക്കുന്ന എല്ലാ പ്രധാനപ്പെട്ട ഉത്സവങ്ങളെക്കുറിച്ചും ഉള്ള വിശദാംശങ്ങളിലേക്ക്  ഈ പേജ് വെളിച്ചം വീശുന്നു."
        },
        worship: {
            title: "ആരാധനാലയങ്ങൾ",
            temples: {
                title: "അമ്പലങ്ങൾ",
                subtitle: "അമ്പലങ്ങൾ",
                list: {
                    krishnankovil: {
                        title: "ശ്രീ കൃഷ്ണ ക്ഷേത്രം",
                        coverpic: "./images/culture/krishnankovil/cover.jpg",
                        thumb: "./images/culture/krishnankovil/thumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും ആഞ്ജനേയോത്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    ganapathikovil: {
                        title: "ശ്രീ മഹാഗണപതി ക്ഷേത്രം",
                        coverpic: "./images/culture/ganapathikovil/templecover.jpg",
                        thumb: "./images/culture/ganapathikovil/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    sivankovil: {
                        title: "ശ്രീ വിശാലാക്ഷി സമേത ശ്രീ വിശ്വനാഥ സ്വാമി ക്ഷേത്രം",
                        coverpic: "./images/culture/sivankovil/templecover.jpg",
                        thumb: "./images/culture/sivankovil/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    keralathappankovil: {
                        title: "ശ്രീ കേരളത്തപ്പന്‍ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    mariyammankovil: {
                        title: "കേരളപുരം ശ്രീ മാരിയമ്മന്‍ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    kurukkulamtemple: {
                        title: "കുരുക്കുളം ശ്രീ മാരിയമ്മന്‍ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    kolodetemple: {
                        title: "കോളോട് ശ്രീ മാരിയമ്മന്‍ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    kakkayursivankovil: {
                        title: "കാക്കയൂര്‍ ശ്രീ മഹാദേവ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    kottamala: {
                        title: "കോട്ടമല ശ്രീ അയ്യപ്പ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    kottakovil: {
                        title: "ശ്രീ തിരുവിളയനാട് ഭഗവതി ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    altharaganapathy: {
                        title: "ആല്‍ത്തറ ശ്രീ മഹാഗണപതി ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    kizhakkethara: {
                        title: "കിഴക്കേത്തറ ശ്രീ തിരുവിളയനാട് ഭഗവതി ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    maruthikavu: {
                        title: "എത്തനൂര്‍ ശ്രീ മരുതി ഭഗവതി ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    koymarpadam: {
                        title: "കൊയ്മര്‍ പാടം ശ്രീ സുബ്ബ്രഹ്മണ്യ സ്വാമി ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    mandathbhagavathy: {
                        title: "ശ്രീ മന്ദത്ത് ഭഗവതി ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    nochurbhagavathy: {
                        title: "നൊച്ചൂര്‍ ശ്രീ ഭഗവതി ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    nochurkrishnatemple: {
                        title: "നൊച്ചൂര് ‍ശ്രീ കൃഷ്ണ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    ramapuramtemple: {
                        title: "രാമപുരം ശ്രീരാമ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    },
                    uchimahaliyammantemple: {
                        title: "ശ്രീ ഉച്ചിമാഹാളിയമ്മന്‍ ക്ഷേത്രം",
                        coverpic: "./images/culture/example/templecover.jpg",
                        thumb: "./images/culture/example/templethumb.jpg",
                        location: {
                            title: "സ്ഥലം",
                            info: "ഗോകുലാ തെരുവ്, കേരളപുരം ഗ്രാമം, കൊടുവായൂർ."
                        },
                        priest: {
                            title: "മേൽശാന്തി",
                            info: "കെ.പീ.രാമചന്ദ്ര വാദ്ധ്യാർ, ഗോകുലാ സ്ട്രീറ്റ്, കൊടുവായൂർ."
                        },
                        intro: {
                            title: "മുഖവുര",
                            info: "'കൃഷ്ണൻ കോവിൽ' എന്ന് അറിയപ്പെടുന്ന കേരളപുരം ഗ്രാമത്തെ ശ്രീ കൃഷ്ണ ക്ഷേത്രം ഇവിടെയുള്ള പുരാതനമായ അമ്പലങ്ങളിൽ ഒന്നാണ്. ഈ അമ്പലം കൊടുവായൂർ ശ്രീ വിശ്വനാഥസ്വാമി ദേവസ്വത്തിന് കീഴിലാണ് പ്രവർത്തിക്കുന്നത്. ഗ്രാമത്തിലെ ഏറ്റവും കൂടുതൽ നീളവും വീതിയും ഉള്ള ഗോകുലാ തെരുവ് എന്നറിയപ്പെടുന്ന കൊരങ്ങോട്ട് തെരുവിന്റെ ഒരു അറ്റത്താണ് ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിനുള്ളിലും ചുറ്റും ഉള്ള ഭക്തജനങ്ങയുടെ പതിവായുള്ള സന്ദർശനസ്ഥലം ആണ് ഈ ശ്രീ കൃഷ്ണ ക്ഷേത്രം."
                        },
                        history: {
                            title: "ചരിത്രം",
                            info: "കേരളത്തിലെ അഗ്രഹാരങ്ങളിൽ പുരാതന കാലങ്ങൾ തൊട്ട് വസിച്ചിരുന്നത് ബ്രാഹ്മണരിലെ 'സ്മാർത്ത വിഭാഗക്കാർ' ആണെന്ന് പറയപ്പെടുന്നു. മഹാദേവനെയും മഹാവിഷ്ണുവിനേയും ഒരുപോലെ ആരാധിച്ചിരുന്നവരായിരുന്നു ഇവർ. കേരളപുരം ഗ്രാമത്തിലെ പടിഞ്ഞാറു ഭാഗത്താണ് ശ്മശാനം സ്ഥിതി ചെയ്യുന്നത്. ഗ്രാമത്തിലും ചുറ്റിലും ഉള്ളവരുടെ എല്ലാം അന്ത്യകർമങ്ങൾ പണ്ടുതൊട്ടേ നടത്തിവരുന്നത് ഇവിടെയാണ്. അവിടെനിന്നുയർന്നു ഗ്രാമത്തിൽ എത്തുമായിരുന്ന പുകയും ഇടയ്ക്കിടെ ഗ്രാമത്തിൽ ഉണ്ടായിരുന്ന മരണങ്ങളും ജനങ്ങളെ ഭീതിയിലാഴ്ത്തി. പണ്ഡിതരുടെയും ജ്യോതിഷരുടെയും നിഗമനങ്ങളിൽ ഗ്രാമത്തിലോട്ട് വമിച്ചിരുന്ന ആ പുകയും ഗന്ധവും ആണ് മരണങ്ങൾക്ക് കാരണം എന്ന് ജനങ്ങൾക്ക് ബോധ്യപ്പെട്ടു. അവരുടെ ഉപദേശപ്രകാരം പ്രായശ്ചിത്തമായി ഗ്രാമത്തിന്റെ പടിഞ്ഞാറു ഭാഗത്തു കിഴക്കു നോക്കി ഒരു മഹാവിഷ്ണുക്ഷേത്രം നിര്മിക്കപ്പെടുകയും ദിവസപൂജ നടത്തിവരുകയും ചെയ്തു."
                        },
                        deities: {
                            title: "നടകൾ",
                            info: "ശംഖുചക്രഗദാപത്മധാരിയായ ഭഗവൻ മഹാവിഷ്ണു ആണ് ഇവിടത്തെ പ്രധാന പ്രതിഷ്ഠ. കന്നിമൂലസ്ഥാനത്തു പ്രതിഷ്ഠിക്കപ്പെട്ട മഹാഗണപതിയും പിന്നെ നാഗദേവതകളും ആണ് ഇവിടത്തെ മറ്റു പ്രതിഷ്ഠകൾ. ഇതുകൂടാതെ ഗുരുവായൂർ ക്ഷേത്രത്തിന്റെ മാതൃകയിൽ നിർമിച്ചിട്ടുള്ള നമസ്കാര മണ്ഡപവും തിടപ്പള്ളിയും തീർത്ഥകിണറും ഈ ക്ഷേത്രത്തിൽ സ്ഥിതി ചെയ്യുന്നു. ശ്രീ മഹാവിഷ്ണുവിന്റെ അവതാരങ്ങളുടെ എല്ലാം, പ്രത്യേകിച്ച് ശ്രീരാമന്റെയും ശ്രീകൃഷ്ണന്റെയും ചൈതന്യവും അന്തർലീനവും ഇവിടെ നിലകൊള്ളുന്നു എന്ന് വിശ്വസിക്കപ്പെടുന്നു. "
                        },
                        pooja: {
                            title: "വിശേഷ പൂജകൾ",
                            info: "ഈ ക്ഷേത്രത്തിൽ ദിവസേന 3 കാല പൂജയും വിശേഷ ദിവസങ്ങളിൽ 5 കാല പൂജയും ചെയ്ത വരുന്നു. ഇവിടത്തെ വിശേഷവും രുചികരവും ആയ പാൽപായസ നിവേദ്യം, പ്രത്യേകിച്ച് തിരുവോണത്തിലും മറ്റു വിശേഷ ദിനങ്ങളിലും, നാടാകെ പ്രശശ്തി ആർജിച്ചതാണ്. കുചേലദിനത്തിലും ശ്രീരാമാനവമിയിലും ഉണ്ടാവാറുള്ള അവിൽ നിവേദ്യവും അജ്ഞാനിയോട്സവത്തിലെ വട നിവേദ്യവും ഇതുപോലെ പ്രശസ്തമാണ്. വിശേഷ ദിവസങ്ങളിലും വഴിപാടുകൾ ആയും ഇവിടെ കളഭാഭിഷേകം നടത്താറുണ്ട്. ഇവിടത്തെ ചന്ദനം ശുദ്ധമായും യന്ത്രസഹായം ഇല്ലാതെയും അരക്കുന്നതാണ്. ചന്ദനക്കാപ്പ്, തിരുവോണദിനങ്ങളിലെ ശ്രവണവ്രതപൂജ, സുദർശന പുഷ്പാഞ്ജലി, സന്താന ഗോപാല പുഷ്പാഞ്ജലി, തുടങ്ങിയവയാണ് ഇവിടത്തെ മറ്റു വഴിപാടുകൾ."
                        },
                        festival: {
                            title: "വിശേഷ ദിവസങ്ങൾ",
                            info: "ഭഗവൻ ശ്രീരാമന്റെ ജന്മദിനത്തോടനുബന്ധിച്ചു നടത്താറുള്ള ശ്രീരാമാനവമി ഉത്സവം ആണ് ഈ ക്ഷേത്രത്തിലെ പ്രധാന ഉത്സാവങ്ങളിൽ ഒന്ന്. ഇതിന്റെ പിറ്റേദിവസം ആഞ്ജനേയോത്സവവും ആഘോഷിക്കുന്നു. ഭഗവൻ ശ്രീകൃഷ്ണന്റെ പിറന്നാളായ ഗോകുലാഷ്ടമി അഥവാ ശ്രീകൃഷ്ണാഷ്ടമി ആണ് ഇവിടത്തെ മറ്റൊരു പ്രധാന ഉത്സവം. അത് കഴിഞ്ഞുള്ള ദിവസം ഉരിയാടിയും നടക്കാറുണ്ട്.  ഏകാദശി ദിനങ്ങൾ ഏതൊരു മഹാവിഷ്ണു ക്ഷേത്രത്തിലെയും പുണ്യദിനങ്ങൾ ആണ്. ധനുമാസത്തിൽ വരാറുള്ള വൈകുണ്ഠ ഏകാദശി ഇവിടത്തെ ഒരു വിശേഷ ദിവസം ആണ്.  ഇതുകൂടാതെ വിഷുക്കണി, ഇല്ലം നിര തൃപ്പുത്തരി, നവരാത്രി, ധനുമാസപൂജ, തുടങ്ങിയവ ഈ ക്ഷേത്രത്തിലെ വിശേഷങ്ങൾ ആണ്."
                        }
                    }
                }
            },
            mosques: {
                title: "മസ്‌ജിദുകൾ",
                subtitle: "മസ്‌ജിദുകൾ"
            },
            church: {
                title: "പള്ളികൾ",
                subtitle: "പള്ളികൾ"
            }
        },
        festive: {
            title: "ഉത്സവ കലണ്ടർ",
        },
        festivals: {
            title: "ഉത്സവങ്ങൾ",
            list: {
                example: {
                    title: "നമ്മുടെ ഉത്സവം",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                koduvayurratholsavam: {
                    title: "കൊടുവായൂര്‍ രഥോത്സവം",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                thaipooyam: {
                    title: "തൈപ്പൂയം",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                nochurratholsavam: {
                    title: "നൊച്ചൂര്‍ രഥോത്സവം",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                sivarathri: {
                    title: "മഹാശിവരാത്രി",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                ethanurkummati: {
                    title: "എത്തനൂര്‍ കുമ്മാട്ടി",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                kanyarkali: {
                    title: "കണ്യാര്‍കളി",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                mariyammanpongal: {
                    title: "മാരിയമ്മന്‍ പൊങ്കല്‍",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                aadipooram: {
                    title: "ആടിപ്പൂരം",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                ganeshothsavam: {
                    title: "ഗണേശോത്സവം",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                navarathri: {
                    title: "നവരാത്രി",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                annabhishekham: {
                    title: "അന്നാഭിഷേകം",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                },
                kottamaladhanupath: {
                    title: "കോട്ടമല ധനുപ്പത്ത്",
                    coverpic: "./images/culture/example/cover.jpg",
                    thumb: "./images/culture/example/thumb.jpg",
                    location: {
                        title: "ഉത്സവാങ്കണം ",
                        info: "ഉത്സവം ആഘോഷിക്കുന്ന സ്ഥലത്തെപ്പറ്റി. "
                    },
                    intro: {
                        title: "മുഖവുര",
                        info: "ഉത്സവത്തെക്കുറിച്ചുള്ള ഒരു പരിചയപ്പെടുത്തൽ. "
                    },
                    history: {
                        title: "ഉത്സവചരിത്രം",
                        info: "ഈ ഉത്സവത്തിന്റെ ചരിത്രവും എന്തിനാണ് ആഘോഷിക്കുന്നത് എന്നതിനെക്കുറിച്ചും."
                    },
                    season: {
                        title: "ഉത്സവവേള",
                        info: "എപ്പോഴാണ് ഈ ഉത്സവം ആഘോഷിക്കപ്പെടുന്നത് എന്നതിന്റെ വിവരണം."
                    },
                    celebration: {
                        title: "ആഘോഷങ്ങൾ",
                        info: "ഈ ആഘോഷകാലത്തിന്റെ വിവരണങ്ങൾ."
                    },
                    specialities: {
                        title: "ഉത്സവവിശേഷം",
                        info: "ഈ ഉത്സവത്തിന്റെ വ്യത്യസ്തമാക്കുന്ന വിശേഷങ്ങളും വസ്തുതകളും."
                    },
                    gallery: {
                        title: "ഗാലറി",
                        info: "ഉത്സവത്തിന്റെ ചിത്രങ്ങളും വിഡിയോകളുടെയും ശേഖരം."
                    }
                }
            }
        }
    };

    $rootScope.engdata.services = {
        intro: {
            title: "INTRODUCTION",
            para1: "Koduvayur is the prime Business Center for the south-west region of Palakkad district. Almost every kind of services that one needs is available in and around this place. Its hard to keep record of every one of them and use them at the time of need. MyKoduvayur brings to you the entire list and details of every kind of services that is available around this place, presented in a clean and ordered way with categories and sub-categories. One can look through it whenever needed, choose one and use it. We believe that this page will be the most useful one in this website. We hope you find it useful."
        },
        emergency: {
            title: "EMERGENCY"
        },
        categories: {
            title: "CATEGORIES",
            list: [
                {
                    title: "EDUCATION",
                    myid: "education",
                    pic: "./images/thumbs/01.jpg",
                    sublist: [
                        {
                            type: "SCHOOLS",
                            listid: "school",
                            typeitems: [
                                {
                                    a: "GHSS KODUVAYUR",
                                    c: "HIGHER SECONDARY",
                                    d: "Since 1904",
                                    e: "Govt. School"
                                },

                            ]
                        },
                        {
                            type: "COLLEGES",
                            listid: "college",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TUITION COLLEGE",
                            listid: "tuitionclg",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TUITION CENTERS",
                            listid: "tuition",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "COMPUTER COURSE",
                            listid: "computercourse",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TTC",
                            listid: "ttc",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "OTHER COURSES",
                            listid: "othercourse",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "HEALTH",
                    myid: "health",
                    pic: "./images/thumbs/02.jpg",
                    sublist: [
                        {
                            type: "HOSPITALS",
                            listid: "hospital",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "CLINICS",
                            listid: "clinic",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "HOMOEO",
                            listid: "homoeo",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "AYURVEDA",
                            listid: "ayurveda",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ENG. MED. SHOP",
                            listid: "engmed",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "AYUR. MED. SHOP",
                            listid: "ayurmed",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "AMBULANCE",
                            listid: "ambulance",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "TRANSPORT",
                    myid: "transport",
                    pic: "./images/thumbs/03.jpg",
                    sublist: [
                        {
                            type: "AUTORIKSHAW",
                            listid: "auto",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "AUTO-TAXI",
                            listid: "autotaxi",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TAXI",
                            listid: "taxi",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "SUV",
                            listid: "suv",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TRAVELLERS",
                            listid: "traveller",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "CARRIER AUTO",
                            listid: "carrier",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "HEAVY VEHICLES",
                            listid: "heavy",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TRAVEL AGENCY",
                            listid: "agency",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "HOUSEHOLD",
                    myid: "household",
                    pic: "./images/thumbs/04.jpg",
                    sublist: [
                        {
                            type: "ELECTRICIAN",
                            listid: "electrician",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "PLUMBER",
                            listid: "plumber",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "CARPENTER",
                            listid: "carpenter",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "PAINTING",
                            listid: "painting",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "CONSTRUCTION",
                            listid: "construction",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "SERVANTS",
                            listid: "servant",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TREE CLIMBERS",
                            listid: "treeclimb",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TREE CUTTING",
                            listid: "treecut",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "GAS AGENCIES",
                            listid: "gas",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "BANKING",
                            listid: "bank",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ATM",
                            listid: "atm",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "SALOONS",
                            listid: "saloon",
                            typeitems: [
                                {

                                }
                            ]
                        },{
                            type: "BEAUTY PARLOR",
                            listid: "beauty",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TAILORING",
                            listid: "tailor",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "INSURANCE",
                            listid: "insurance",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "FINANCE",
                            listid: "finance",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "LOCK PICKING",
                            listid: "lockpick",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "FOOD & STAY",
                    myid: "foodnstay",
                    pic: "./images/thumbs/05.jpg",
                    sublist: [
                        {
                            type: "BAKERY",
                            listid: "bakery",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "RESTAURANTS",
                            listid: "restaurant",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TEA STALLS",
                            listid: "teastall",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "THATTUKADA",
                            listid: "thattukada",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "MEAT STALLS",
                            listid: "meat",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "HOTELS",
                            listid: "hotel",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "LODGE",
                            listid: "lodge",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "OTHER FOODS",
                            listid: "other",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "BEVARAGES",
                            listid: "bevarage",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "SHOPPING",
                    myid: "shopping",
                    pic: "./images/thumbs/06.jpg",
                    sublist: [
                        {
                            type: "SUPERMARKET",
                            listid: "supermarket",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "JEWELLERY",
                            listid: "jewellery",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "FURNITURE",
                            listid: "furniture",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "METALS",
                            listid: "metals",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "HARDWARE",
                            listid: "hardware",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "PAINT SHOPS",
                            listid: "paint",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ELECTRICALS",
                            listid: "electrical",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ELECTRONICS",
                            listid: "electronics",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "HOME APPLIANCE",
                            listid: "homeappliance",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "GIFT & FANCY",
                            listid: "giftnfancy",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "GROCERY",
                            listid: "grocery",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "STATIONERY",
                            listid: "stationery",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "FOOTWEAR",
                            listid: "footwear",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "FRUIT STALL",
                            listid: "fruits",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "VEGETABLES",
                            listid: "vegetables",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "FLOWER MART",
                            listid: "flower",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "BOOK STALLS",
                            listid: "books",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "MILMA STALL",
                            listid: "milma",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "WATCH MART",
                            listid: "watch",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "MOBILE STORES",
                            listid: "mobile",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "MOBILE PARTS",
                            listid: "mobaccessories",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "RECHARGE SHOPS",
                            listid: "recharge",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TWO WHEELERS",
                            listid: "twowheeler",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "GOVT. SERVICES",
                    myid: "govtservices",
                    pic: "./images/thumbs/07.jpg",
                    sublist: [
                        {
                            type: "RATION SHOPS",
                            listid: "ration",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "GRAMAPANCHAYAT",
                            listid: "panchayat",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "WATER AUTHORITY",
                            listid: "water",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "KSEB",
                            listid: "kseb",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "GOVT. HOSPITAL",
                            listid: "govthospital",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "OLD AGE HOME",
                            listid: "oldagehome",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "EVENTS",
                    myid: "eventservice",
                    pic: "./images/thumbs/08.jpg",
                    sublist: [
                        {
                            type: "STUDIO",
                            listid: "studio",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "LIGHT & SOUND",
                            listid: "lightnsound",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "DECORATION",
                            listid: "decoration",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "AUDITORIUM",
                            listid: "auditorium",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "CARD SHOPPE",
                            listid: "cardshoppe",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "GRAPHIC DESIGN",
                            listid: "graphicdesign",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "PRIEST",
                            listid: "priest",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "SERVICE & REPAIR",
                    myid: "servicenrepair",
                    pic: "./images/thumbs/09.jpg",
                    sublist: [
                        {
                            type: "WATCH REPAIR",
                            listid: "watchrepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "MOBILE REPAIR",
                            listid: "mobilerepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TV REPAIR",
                            listid: "tvrepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "FRIDGE REPAIR",
                            listid: "fridgerepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "OTHER ELECTRONICS",
                            listid: "otherelectronicsrepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "COMPUTER REPAIR",
                            listid: "computerrepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "MOBILE NETWORK",
                            listid: "mobilenetwork",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "TWO WHEELERS",
                            listid: "twowheelers",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "THREE WHEELERS",
                            listid: "threewheelers",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "FOUR WHEELERS",
                            listid: "fourwheelers",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                }
            ]
        }
    };

    $rootScope.maldata.services = {
        intro: {
            title: "ആമുഖം",
            para1: "പാലക്കാട് ജില്ലയുടെ തെക്ക്-പടിഞ്ഞാറ് ഭാഗത്തെ പ്രധാന വാണിജ്യകേന്ദ്രമാണ് കൊടുവായൂർ. ഈ സ്ഥലത്തുള്ളവർക്ക് ആവശ്യമായ എല്ലാതരം സേവനങ്ങളും ഇവിടെ ലഭ്യമാണ്. ഓരോ സേവനത്തിന്റെയും രേഖകൾ സൂക്ഷിക്കുകയും ആവശ്യസമയത്ത് അവ ഉപയോഗിക്കുകയും ചെയ്യുന്നത് ബുദ്ധിമുട്ടാണ്. ഈ സ്ഥലത്ത് ലഭ്യമായ എല്ലാ സേവനങ്ങളുടെയും വിശദാംശങ്ങളും വിവരങ്ങളും, വിഭാഗങ്ങളും ഉപ വിഭാഗങ്ങളുമായി വൃത്തിയായി ക്രമീകരിച്ചിരിക്കുന്നതുമായ വിവരങ്ങളടങ്ങിയ ഈ പേജ് MyKoduvayur  നാട്ടുകാർക്ക് സമർപ്പിക്കുന്നു. ആവശ്യമുള്ളപ്പോഴെല്ലാം അത് നോക്കി ഉപയോഗിക്കുക. ഈ പേജ് എല്ലാവര്ക്കും ഉപയോഗപ്രദമാകുമെന്ന് ഞങ്ങൾ വിശ്വസിക്കുന്നു. നിങ്ങൾ അത് ഉപയോഗപ്രദമായി കണ്ടെത്തുമെന്ന് ഞങ്ങൾ പ്രതീക്ഷിക്കുന്നു.."
        },
        emergency: {
            title: "അത്യാവശ്യം"
        },
        categories: {
            title: "വിഭാഗങ്ങൾ",
            list: [
                {
                    title: "വിദ്യാഭ്യാസം",
                    myid: "education",
                    pic: "./images/thumbs/01.jpg",
                    sublist: [
                        {
                            type: "വിദ്യാലയങ്ങൾ",
                            listid: "school",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "കോളേജ്",
                            listid: "college",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ട്യൂഷൻ  കോളേജ്",
                            listid: "tuitionclg",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ട്യൂഷൻ സെന്റർ",
                            listid: "tuition",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "കമ്പ്യൂട്ടർ കോഴ്സ്",
                            listid: "computercourse",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ടി ടി സി",
                            listid: "ttc",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഇതര കോഴ്സുകൾ",
                            listid: "othercourse",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "ആരോഗ്യം",
                    myid: "health",
                    pic: "./images/thumbs/02.jpg",
                    sublist: [
                        {
                            type: "ആശുപത്രികൾ",
                            listid: "hospital",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ക്ലിനിക്കുകൾ",
                            listid: "clinic",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഹോമിയോ",
                            listid: "homoeo",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ആയുർവ്വേദം",
                            listid: "ayurveda",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഇംഗ്ലീഷ് മരുന്ന്",
                            listid: "engmed",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ആയുർ. മരുന്ന്",
                            listid: "ayurmed",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ആംബുലൻസ്",
                            listid: "ambulance",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "വാഹനം",
                    myid: "transport",
                    pic: "./images/thumbs/03.jpg",
                    sublist: [
                        {
                            type: "ഓട്ടോ",
                            listid: "auto",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഓട്ടോ-ടാക്സി",
                            listid: "autotaxi",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ടാക്സി",
                            listid: "taxi",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "എസ്.യു.വി",
                            listid: "suv",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ട്രാവലർ",
                            listid: "traveller",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "പെട്ടി ഓട്ടോ",
                            listid: "carrier",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഹെവി മോട്ടോർ",
                            listid: "heavy",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഏജൻസികൾ",
                            listid: "agency",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "വീട്ടുകാര്യങ്ങൾ",
                    myid: "household",
                    pic: "./images/thumbs/04.jpg",
                    sublist: [
                        {
                            type: "ഇലക്ട്രിഷ്യൻ",
                            listid: "electrician",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "പ്ലംബർ ",
                            listid: "plumber",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ആശാരി ",
                            listid: "carpenter",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "പെയിന്റിംഗ്",
                            listid: "painting",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "കെട്ടുപണി",
                            listid: "construction",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "വീട്ടുജോലി",
                            listid: "servant",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "മരംകേറാൻ ",
                            listid: "treeclimb",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "മരംവെട്ടൽ ",
                            listid: "treecut",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: " ഗ്യാസ് ഏജൻസി",
                            listid: "gas",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ബാങ്കുകൾ",
                            listid: "bank",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "എ.ടി.എം",
                            listid: "atm",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "സലൂൺ",
                            listid: "saloon",
                            typeitems: [
                                {

                                }
                            ]
                        },{
                            type: "ബ്യൂട്ടിപാർലർ ",
                            listid: "beauty",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ടെയ്‌ലർ",
                            listid: "tailor",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഇൻഷുറൻസ്",
                            listid: "insurance",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഫിനാൻസ്",
                            listid: "finance",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ലോക്ക്പിക്കിങ്",
                            listid: "lockpick",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "ഭക്ഷണം & താമസം",
                    myid: "foodnstay",
                    pic: "./images/thumbs/05.jpg",
                    sublist: [
                        {
                            type: "ബേക്കറി",
                            listid: "bakery",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "റെസ്റ്ററന്റ്",
                            listid: "restaurant",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ചായക്കട",
                            listid: "teastall",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "തട്ടുകട",
                            listid: "thattukada",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഇറച്ചിക്കട",
                            listid: "meat",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഹോട്ടൽ",
                            listid: "hotel",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ലോഡ്ജ്",
                            listid: "lodge",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "മറ്റു ഭക്ഷണം",
                            listid: "other",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "പാനീയങ്ങൾ",
                            listid: "bevarage",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "ഷോപ്പിംഗ്",
                    myid: "shopping",
                    pic: "./images/thumbs/06.jpg",
                    sublist: [
                        {
                            type: "സൂപ്പർമാർക്കറ്റ്",
                            listid: "supermarket",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ജ്വല്ലറി",
                            listid: "jewellery",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഫർണിച്ചർ",
                            listid: "furniture",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "മെറ്റൽസ്",
                            listid: "metals",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഹാർഡ്‌വെയർ",
                            listid: "hardware",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "പെയിന്റ്",
                            listid: "paint",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഇലക്ട്രിക്കൽസ്",
                            listid: "electrical",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഇലക്ട്രോണിക്സ്",
                            listid: "electronics",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഹോം അപ്ലയൻസ്",
                            listid: "homeappliance",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഗിഫ്റ് & ഫാൻസി",
                            listid: "giftnfancy",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "പലചരക്ക്",
                            listid: "grocery",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "സ്റ്റേഷനറി",
                            listid: "stationery",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഫൂട്ട്‍വെയർ",
                            listid: "footwear",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഫ്രൂട്ട് സ്റ്റാൾ",
                            listid: "fruits",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "പച്ചക്കറി",
                            listid: "vegetables",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഫ്ലവർ മാർട്ട്",
                            listid: "flower",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ബുക്ക് സ്റ്റാൾ",
                            listid: "books",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "മിൽമ സ്റ്റാൾ",
                            listid: "milma",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "വാച്ച് മാർട്ട്",
                            listid: "watch",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "മൊബൈൽ സ്റ്റോർ",
                            listid: "mobile",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "അക്‌സെസ്സറിസ്",
                            listid: "mobaccessories",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "റീച്ചാർജ്",
                            listid: "recharge",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ടൂ വീലേഴ്സ്",
                            listid: "twowheeler",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "ഗവ. സേവനങ്ങൾ",
                    myid: "govtservices",
                    pic: "./images/thumbs/07.jpg",
                    sublist: [
                        {
                            type: "റേഷൻ കട",
                            listid: "ration",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഗ്രാമപഞ്ചായത്ത് ",
                            listid: "panchayat",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "വാട്ടർ അതോറിറ്റി",
                            listid: "water",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "കെ.എസ്.ഇ.ബി",
                            listid: "kseb",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഗവ. ആശുപത്രി",
                            listid: "govthospital",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "വൃദ്ധ സദനം",
                            listid: "oldagehome",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "പരിപാടികൾ",
                    myid: "eventservice",
                    pic: "./images/thumbs/08.jpg",
                    sublist: [
                        {
                            type: "സ്റ്റുഡിയോ",
                            listid: "studio",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ലൈറ്റ് സൗണ്ട്",
                            listid: "lightnsound",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "അലങ്കാരം",
                            listid: "decoration",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഓഡിറ്റോറിയം",
                            listid: "auditorium",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "കാർഡ് ഷോപ്പ്",
                            listid: "cardshoppe",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഡിസൈനിംഗ്",
                            listid: "graphicdesign",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "വൈദീകം",
                            listid: "priest",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                },
                {
                    title: "സർവീസ് & റിപ്പയർ",
                    myid: "servicenrepair",
                    pic: "./images/thumbs/09.jpg",
                    sublist: [
                        {
                            type: "വാച്ച് റിപ്പയർ",
                            listid: "watchrepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "മൊബൈലുകൾ",
                            listid: "mobilerepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ടിവി റിപ്പയർ",
                            listid: "tvrepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഫ്രിഡ്ജ് റിപ്പയർ",
                            listid: "fridgerepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "മറ്റു ഇലക്ട്രോണിക്സ്",
                            listid: "otherelectronicsrepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "കമ്പ്യൂട്ടറുകൾ",
                            listid: "computerrepair",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "നെറ്റ്വർക്കുകൾ",
                            listid: "mobilenetwork",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ടൂ വീലർ",
                            listid: "twowheelers",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ത്രീ വീലർ ",
                            listid: "threewheelers",
                            typeitems: [
                                {

                                }
                            ]
                        },
                        {
                            type: "ഫോർ വീലർ",
                            listid: "fourwheelers",
                            typeitems: [
                                {

                                }
                            ]
                        }
                    ]
                }
            ]
        }
    };


    $rootScope.engdata.trending = {
        alerts: {
            title: "ALERTS",
            list: {

            }
        },
        offers: {
            title: "OFFERS",
            list: {

            }
        },
        trends: {
            news: {
                title: "NEWS",
                list: {

                }
            },
            articles: {
                title: "ARTICLES",
                list: {

                }
            },
            pictures: {
                title: "PICTURES",
                list: {

                }
            },
            videos: {
                title: "VIDEOS",
                list: {

                }
            }

        }
    };

    $rootScope.maldata.trending = {
        alerts: {
            title: "അറിയിപ്പുകൾ",
            list: {

            }
        },
        offers: {
            title: "ആനുകൂല്യങ്ങള്‍",
            list: {

            }
        },
        trends: {
            news: {
                title: "വാർത്ത",
                list: [
                    {

                    }
                ]
            },
            articles: {
                title: "ലേഖനം",
                list: [
                    {

                    }
                ]
            },
            pictures: {
                title: "ചിത്രങ്ങൾ",
                list: [
                    {

                    }
                ]
            },
            videos: {
                title: "വീഡിയോ",
                list: [
                    {

                    }
                ]
            }

        }
    };

    $rootScope.engdata.feedback = {
        intro: {
            title: "INTRODUCTION",
            para1: "This venture - MyKoduvayur, was planned and processed with the motive of making the Life better for the people in and from this place, using the Web Technology that is growing higher and reaching farther each passing day. So each one of you definitely have a say in here. Your opinions, suggestions and appreciations are a huge motivation for us to go forward and do further. We appreciate each of your support. "
        },
        haveyoursay: {
            title: "HAVE YOUR SAY"
        }

    };

    $rootScope.maldata.feedback = {
        intro: {
            title: "ആമുഖം",
            para1: "MyKoduvayur എന്ന ഈ സംരംഭം ഇപ്പോൾ വളർന്നുവരുന്ന വെബ് ടെക്നോളജി ഉപയോഗിച്ച് കൊടുവായൂരിലെ ജനങ്ങളുടെ ജീവിതശൈലി എളുപ്പമാക്കുവാൻ സഹായിക്കുക എന്ന ഉദ്ദേശത്തോടെയാണ് ആരംഭിച്ചത്. നാട്ടുകാർക്ക് വേണ്ടിയുള്ള ഈ വെബ്‌സൈറ്റിൽ നിങ്ങൾക്കെല്ലാവർക്കും നിങ്ങളുടെ അഭിപ്രായങ്ങളും നിർദേശങ്ങളും ഇവിടെ നിങ്ങളുടെ ഫേസ്ബുക് അക്കൗണ്ട് ഉപയോഗിച്ച് പങ്കുവെക്കാം. നിങ്ങൾ ഓരോരുത്തരുടെയും പിന്തുണയ്ക്കും പ്രോത്സാഹനത്തിനും ഞങ്ങളുടെ നന്ദി പ്രകടിപ്പിക്കുന്നു."
        },
        haveyoursay: {
            title: "HAVE YOUR SAY"
        }

    };

    $rootScope.engdata.eventpage = {
        intro: {
            title: "INTRODUCTION",
            para1: "Our busy lives may hinder us from witnessing and attending many events we wish to watch and participate. Also, memories of the ones we were part of will give us the sheer joy of watching and reading through them again and again. MyKoduvayur gives you the chance to do this with this page, where you can go through every kind of important events that happen in and around this place. Do enjoy the experience..."
        },
        general: {
            title: "GENERAL EVENTS",
            list: {

            }
        },
        festive: {
            title: "FESTIVE EVENTS",
            list: {

                ganeshothsavam2017: {
                    pagetitle: "GANESHOTHSAVAM 2017",
                    cover: "./images/events/ganeshothsavam2017/cover.jpg",
                    thumb: "./images/events/ganeshothsavam2017/thumb.jpg",
                    gallery: {
                        title: "PHOTO ALBUM",
                        info: "",
                        list: [
                            {
                                pic: "./images/events/ganeshothsavam2017/1.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/2.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/3.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/4.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/5.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/6.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/7.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/8.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/9.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/10.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/11.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/12.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/13.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/14.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/15.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/16.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/17.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/18.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/19.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/20.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/21.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/22.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/23.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/24.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/25.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/26.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/27.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/28.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/29.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/30.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/31.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/32.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/33.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/ganeshothsavam2017/34.jpg",
                                caption: ""
                            }
                        ]
                    }
                }

            }
        },
        artsnsports: {
            title: "ARTS & SPORTS",
            list: {

                keralotsavam2017 : {
                    coverpic:  "./images/events/keralothsavam2017/klogo.jpg",
                    thumb:  "./images/events/keralothsavam2017/kthumbs.jpg",
                    pagetitle: "KERALOTSAVAM 2017",
                    title: "WELCOME",
                    intro1: "22 of the strongest football teams of Koduvayur featuring in 21 thrilling matches...",
                    intro2: "9 cricket teams to match up for the trophy ( stitch ball cricket tournament )....",
                    intro3: "To swish up magic while ball is in the air and get the crowd ballistic with Engaging Volleyball bouts ...",
                    intro4: "Photo finishes and Snapshots with various Athletic events ....",
                    intro5: "And many other events...",
                    intro6: "Our Place.. Our Fest.. Our Sport.. Our Passion...",
                    intro7: "2017 Keralotsavam, Koduvayur Grama Panchayath Sep 29,30 & Oct 1...",
                    intro8: "'Show the Real sportsman's spirit'",
                    cricket: "CRICKET",
                    cricketpic: "./images/events/keralothsavam2017/kcricket.jpg",
                    football: "FOOTBALL",
                    footballpic : "./images/events/keralothsavam2017/kfootball.jpg",
                    volleyball: "VOLLEYBALL",
                    volleyballpic : "./images/events/keralothsavam2017/kvolleyball.jpg",
                    results : "RESULTS",
                    resultlist: [
                        {
                            title: "TRACK EVENTS",
                            list: [
                                {
                                    a: "5000m RACE JUNIOR BOYS",
                                    b: "1st Place: KiranKrishna.P.R, KFC",
                                    c: "2nd Place: Vipin.M, Individual",
                                    d: "3rd Place: Sabarish.J, New Bhavana"
                                },
                                {
                                    a: "5000m RACE SENIOR BOYS",
                                    b: "1st Place: Vineeth, New Bhavana",
                                    c: "2nd Place: Sreenath, KFC",
                                    d: "3rd Place: Sudheesh, New Bhavana"
                                },
                                {
                                    a: "200m RACE JUNIOR BOYS",
                                    b: "1st Place: Subin, New Bhavana",
                                    c: "2nd Place: Ramesh.B, KFC",
                                    d: "3rd Place: Shafeer, Friends"
                                },
                                {
                                    a: "200m RACE SENIOR BOYS",
                                    b: "1st Place: Nived, KFC",
                                    c: "2nd Place: Dinesh, KFC",
                                    d: "3rd Place: Sanjay, KFC"
                                },
                                {
                                    a: "1500m RACE JUNIOR BOYS",
                                    b: "1st Place: Vipin.M, Individual",
                                    c: "2nd Place: Binu Prasad, KFC",
                                    d: "3rd Place: Sijin, KFC"
                                },
                                {
                                    a: "1500m RACE SENIOR BOYS",
                                    b: "1st Place: Praveen.V, KFC",
                                    c: "2nd Place: Sanoop, KFC",
                                    d: "3rd Place: Sudeep, New Boys"
                                },
                                {
                                    a: "400m RACE JUNIOR BOYS",
                                    b: "1st Place: BinuPrasad, KFC",
                                    c: "2nd Place: Ajith, KFC",
                                    d: "3rd Place: Muhamed Farvesh, CHM"
                                },
                                {
                                    a: "400m RACE SENIOR BOYS",
                                    b: "1st Place: Nived, KFC",
                                    c: "2nd Place: Praveen.V, KFC",
                                    d: "3rd Place: Arjun, KFC"
                                },
                                {
                                    a: "100m RACE JUNIOR BOYS",
                                    b: "1st Place: Ramesh.B, KFC",
                                    c: "2nd Place: Sujith.S, KFC",
                                    d: "3rd Place: Haridas, Madathil"
                                },
                                {
                                    a: "100m RACE SENIOR BOYS",
                                    b: "1st Place: Nived, KFC",
                                    c: "2nd Place: Mahesh, Star Arts",
                                    d: "3rd Place: Dinesh.B, KFC"
                                },
                                {
                                    a: "800m RACE JUNIOR BOYS",
                                    b: "1st Place: Sijin, KFC",
                                    c: "2nd Place: Sivadas.N, Star Arts",
                                    d: "3rd Place: Vipin.M, Individual"
                                },
                                {
                                    a: "800m RACE SENIOR BOYS",
                                    b: "1st Place: Aneesh.P, KFC",
                                    c: "2nd Place: Sreenath, KFC",
                                    d: "3rd Place: Praveen.V, KFC"
                                },
                                {
                                    a:"4x100m RELAY JUNIOR BOYS",
                                    b: "1st Place: KFC",
                                    c: "2nd Place: New Bhavana",
                                    d: "3rd Place: New Boys"
                                },
                                {
                                    a:"4x100m RELAY SENIOR BOYS",
                                    b: "1st Place: KFC",
                                    c: "2nd Place: Star Arts",
                                    d: "3rd Place: Friends Club"
                                }
                            ]
                        },
                        {
                            title: "THROW EVENTS",
                            list : [
                                {
                                    a: "SHOT PUT JUNIOR BOYS",
                                    b: "1st Place: Ramesh.B, KFC",
                                    c: "2nd Place: Aditya Rajesh, KFC",
                                    d: "3rd Place: Abdul Rehman, Yuvadhara"
                                },
                                {
                                    a: "SHOT PUT SENIOR BOYS",
                                    b: "1st Place: Nithin, New Bhavana",
                                    c: "2nd Place: Mahesh, Star Arts",
                                    d: "3rd Place: Nithin, Yuvathara"

                                },
                                {
                                    a: "JAVELIN THROW SENIOR BOYS",
                                    b: "1st Place: Nithin, Yuvathara",
                                    c: "2nd Place: Prateesh, Star Arts",
                                    d: "3rd Place: Sainuddheen, Friends Club"

                                },
                                {
                                    a: "JAVELIN THROW JUNIOR BOYS",
                                    b: "1st Place: Pranav.M, Star Arts",
                                    c: "2nd Place: Ajith Prasad, New Bhavana",
                                    d: "3rd Place: Aditya Rajesh, KFC"
                                },
                                {
                                    a: "DISCUSS THROW SENIOR BOYS",
                                    b: "1st Place: Arjun.R.Das, KFC",
                                    c: "2nd Place: Mahesh, Star Arts",
                                    d: "3rd Place: Abu Thahir, CHM"
                                },
                                {
                                    a: "DISCUSS THROW JUNIOR BOYS",
                                    b: "1st Place: Sujith.S, KFC",
                                    c: "2nd Place: Ajith Prasad, New Bhavana",
                                    d: "3rd Place: Aditya Rajesh, KFC"
                                }
                            ]
                        },
                        {
                            title: "CRICKET",
                            list: [
                                {
                                    b: "Cancelled due to Damp Pitch and Bad Weather",
                                    c: "Mixed team to be sent for Block Tournament"
                                }
                            ]
                        },
                        {
                            title: "FOOTBALL",
                            list: [
                                {
                                    a: "FIRST ROUND",
                                    b: "LEGENDS-B 0-0 GALAXY FC. LEGENDS-B win on Penalties.",
                                    c: "KFC-B 0-0 MAJESTIC FC. MAJESTIC FC win on Penalties.",
                                    d: "NFC-A 2-0 STAR CLUB",
                                    e: "THIRA-B wins vs EFC. Walk Over",
                                    f: "THIRA-A 0-0 NEW BHAVANA. THIRA-A wins on Penalties.",
                                    g: "RYDERS 1-0 BLUE BOYS(FRIENDS)"
                                },
                                {
                                    a: "SECOND ROUND",
                                    b: "LEGENDS-A 1-0 MADATHIL FC.",
                                    c: "YUVADHARA 0-0 LEGENDS-B. YUVADHARA wins on Penalties.",
                                    d: "MAJESTCIC FC 0-0 NFC-A. NFC-A wins on Penalties.",
                                    e: "NEW BOYS 0-0 CHM. NEW BOYS wins in Penalties.",
                                    f: "SEVENS wins vs VFC. Walk over.",
                                    g: "THIRA-B wins vs THIRA-A. Walk over.",
                                    h: "RYDERS 0-0 CFC. CFC wins in Penalties.",
                                    i: "NFC-B 0-1 KFC"
                                },
                                {
                                    a: "QUARTER FINALS",
                                    b: "LEGENDS-A 1-0 YUVADHARA",
                                    c: "NFC 0-0 NEW BOYS. NFC wins in Penalties.",
                                    d: "SEVENS 0-0 THIRA-B. SEVENS wins in Penalties.",
                                    e: "KFC 0-0 CFC. CFC wins in Penalties."
                                },
                                {
                                    a: "SEMI FINALS",
                                    b: "LEGENDS-A 1-0 NFC.",
                                    c: "SEVENS 0-3 CFC"
                                },
                                {
                                    a: "FINALE",
                                    b: "LEGENDS-A 0-0 CFC. CFC wins in Penalties.",
                                    c: "CFC are the KERALOTSAVAM 2017 FOOTBALL CHAMPIONS !!!"
                                }


                            ]
                        },
                        {
                            title: "VOLLEYBALL",
                            list: [
                                {
                                    a: "FIRST ROUND",
                                    b: "KFC wins vs FRIENDS-A."
                                },
                                {
                                    a: "SECOND ROUND",
                                    b: "CHEATERS-ETR wins vs NFC.",
                                    c: "KFC wins vs CHANGAYIES.",
                                    d: "CHM wins vs FRIENDS-B",
                                    e: "CHALLENGERS wins vs MST"
                                },
                                {
                                    a: "SEMI FINALS",
                                    b: "KFC wins vs CHEATERS-ETR",
                                    c: "CHALLENGERS wins vs CHM"
                                },
                                {
                                    a: "FINALE",
                                    b: "KFC wins vs CHALLENGERS",
                                    c: "KFC aka KAKKAYUR UNITED are the KERALOTSAVAM 2017 VOLLEYBALL CHAMPIONS !!!"
                                }
                            ]
                        },
                        {
                            title: "ATHLETICS CHAMPIONSHIP",
                            list: [
                                {
                                    a: "KFC aka KAKKAYUR UNITED are the KERALOTSAVAM 2017 OVERALL ATHLETIC CHAMPIONS !!!"
                                }
                            ]
                        }
                    ],
                    gallery: "PHOTO GALLERY",
                    photolist: [
                        {
                            img: "./images/events/keralothsavam2017/1.jpg",
                            desc1: "KERALOTSAVAM 2017 - NOTICE",
                            desc2: "Propoganda and Schedule of the Events."
                        },
                        {
                            img: "./images/events/keralothsavam2017/inaug1.jpg",
                            desc1: "KERALOTSAVAM 2017 - INAUGRAL FUNCTION",
                            desc2: "Inaugrated by: Smt. Saratha Thulasidas, Hon'ble Kollengode Block Panchayat President."
                        },
                        {
                            img: "./images/events/keralothsavam2017/inaug2.jpg",
                            desc1: "KERALOTSAVAM 2017 - INAUGRAL FUNCTION",
                            desc2: "Addressing by: Sri. G.Krishnaprasad, Hon'ble Koduvayur Grama Panchayat President."
                        },
                        {
                            img: "./images/events/keralothsavam2017/2.jpg",
                            desc1: "KERALOTSAVAM 2017 - THE GAME BEGINS",
                            desc2: "The Ground And the Crowd."
                        },
                        {
                            img: "./images/events/keralothsavam2017/3.jpg",
                            desc1: "KERALOTSAVAM 2017 - VOLLEYBALL",
                            desc2: "The Volley Court surrounded by crowd."
                        },
                        {
                            img: "./images/events/keralothsavam2017/4.jpg",
                            desc1: "KERALOTSAVAM 2017 - FOOTBALL",
                            desc2: "The View from the top."
                        },
                        {
                            img: "./images/events/keralothsavam2017/5.jpg",
                            desc1: "KERALOTSAVAM 2017 - FOOTBALL",
                            desc2: "The Fight is Intense."
                        },
                        {
                            img: "./images/events/keralothsavam2017/6.jpg",
                            desc1: "KERALOTSAVAM 2017 - FOOTBALL",
                            desc2: "So who gets the ball?."
                        }
                    ]
                }

            }
        },
        ours: {
            title: "MYKODUVAYUR",
            list: {

                mobilephotographycontest2017: {
                    pagetitle: "MOBILE PHOTOGRAPHY CONTEST 2017",
                    cover: "./images/events/contest2017/contest2017cover.jpg",
                    thumb: "./images/events/contest2017/contest2017thumb.jpg",
                    pic: "./images/events/contest2017/pic.jpg",
                    intro: {
                        title: "INTRODUCTION",
                        info: "Team BehindBrains organised a Mobile Photography Contest in connection to the announcement of their venture of a web platform - MYKODUVAYUR, during the festive season of Koduvayur Ratholsavam on January 2017."
                    },
                    theme: {
                        title: "THEME : ",
                        info: "KODUVAYUR RATHOLSAVAM"
                    },
                    from: {
                        title: "FROM : ",
                        info: "07 January 2017 (Sat) 7pm"
                    },
                    to: {
                        title: "TO : ",
                        info: "13 January 2017 (Fri) 7pm"
                    },
                    eligibility: {
                        title: "ELIGIBILITY",
                        e1: "People of ANY AGE GROUP can participate in this contest.",
                        e2: "Mobile Cameras of ANY RANGE can be used for this contest.",
                        e3: "Only Photos submitted through EMAIL are considered eligible for the contest.",
                    },
                    rules: {
                        title: "RULES",
                        r1: "Only photos less than 10 MB size shall be submitted for the contest.",
                        r2: "A Maximum of 3 PHOTOS is allowed for 1 PERSON.",
                        r3: "Any Digital Alteration Or Editing done to the Captured Image will result in DISQUALIFICATION.",
                        r4: "The Original Photo Should Be Presented for Verification if announced WINNER."
                    },
                    howtoenter: {
                        title: "HOW TO ENTER",
                        intro1: "Anyone who wish to Participate in this CONTEST should Send the Captured Photo to the following E-MAIL ID – ",
                        intromail: " contest.mykoduvayur@gmail.com ",
                        intro2: "along with following details : ",
                        hte1: "PHOTO CAPTION",
                        hte2: "NAME OF THE PHOTOGRAPHER",
                        hte3: "CONTACT PHONE NO.",
                        hte4: "MOBILE PHONE MODEL",
                        ps: "P.S. ONLY 3 PHOTOS PER E-MAIL/CONTESTANT IS PERMITTED."
                    },
                    judging: {
                        title: "JUDGING",
                        info: "The Submitted Photographs will be judged based on the following criteria:",
                        j1: "QUALITY",
                        j2: "RELEVANCE TO THE THEME",
                        j3: "ORIGINALITY",
                        j4: "CREATIVE ELEMENT",
                        j5: "OVERALL IMPACT"
                    },
                    results: {
                        title: "RESULTS",
                        intro: "Winners of this Contest was announced on 23 February 2017, Sunday during the Official Preview of our website - ",
                        introsite: "www.mykoduvayur.in",
                        first: {
                            title: "WINNER",
                            pic: "./images/events/contest2017/1.jpg",
                            name: "MIDHUN.P.V",
                            certificate: "./images/events/contest2017/first.jpg",
                            caption: ""
                        },
                        second: {
                            title: "RUNNER UP",
                            pic: "./images/events/contest2017/2.jpg",
                            name: "SUJESH.K.APPU",
                            certificate: "./images/events/contest2017/second.jpg",
                            caption: ""
                        }
                    },
                    gallery: {
                        title: "SELECTED BEST PHOTOS",
                        info: "",
                        list: [
                            {
                                pic: "./images/events/contest2017/3.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/4.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/5.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/6.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/7.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/8.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/9.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/10.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/11.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/12.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/13.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/14.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/15.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/16.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/17.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/18.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/19.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/20.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/21.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/22.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/23.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/24.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/25.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/26.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/27.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/28.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/29.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/30.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/31.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/32.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/33.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/34.jpg",
                                caption: ""
                            }
                        ]
                    },
                    officialpreview: {
                        title: "OFFICIAL ANNOUNCEMENT",
                        info: "Prizes were distributed and the Official Preview of the Website was announced on 23 February 2017 at Althara, Keralapuram Gramam, Koduvayur.",
                        chiefguest: {
                            title: "CHIEF GUEST",
                            info: "The session was headed and prizes were distributed by our beloved Gopal Sir, who was on our side right from the beginning and provided us with his support.",
                        },
                        list: [
                            {
                                pic: "./images/events/contest2017/preview1.jpg"
                            },
                            {
                                pic: "./images/events/contest2017/preview2.jpg"
                            }
                        ]
                    }
                }

            }
        }

    };

    $rootScope.maldata.eventpage = {
        intro: {
            title: "ആമുഖം",
            para1: "നമ്മുടെ തിരക്കുപിടിച്ച ജീവിതം കാരണം നാം കാണുന്നതും പങ്കെടുക്കാൻ ആഗ്രഹിക്കുന്നതുമായ നിരവധി സംഭവങ്ങളിൽ നമുക്ക് എത്താൻ പറ്റാതെ വന്നേക്കാം. കൂടാതെ, നാം ഭാഗമായിരുന്നവയുടെ ഓർമ്മകൾ വീണ്ടും കാണാനും വായിക്കാനും കഴിയുന്നത് നമുക്ക് അതിയായ സന്തോഷം നൽകും. ഈ സ്ഥലത്ത് ചുറ്റുമുള്ള എല്ലാ പ്രധാന സംഭവങ്ങളും ഈ പേജ് ഉപയോഗിച്ച് ഞങ്ങൾ നിങ്ങളിലേക്ക് എത്തിക്കുന്നു. അനുഭവം ആസ്വദിക്കൂ..."
        },
        general: {
            title: "പൊതു പരിപാടികൾ",
            list: [
                {

                }
            ]
        },
        festive: {
            title: "ആഘോഷങ്ങൾ",
            list: [
                {
                    ganeshothsavam2017: {
                        pagetitle: "ഗണേശോത്സവം 2017",
                        cover: "./images/events/ganeshothsavam2017/cover.jpg",
                        thumb: "./images/events/ganeshothsavam2017/thumb.jpg",
                        gallery: {
                            title: "PHOTO ALBUM",
                            info: "",
                            list: [
                                {
                                    pic: "./images/events/ganeshothsavam2017/1.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/2.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/3.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/4.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/5.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/6.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/7.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/8.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/9.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/10.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/11.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/12.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/13.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/14.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/15.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/16.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/17.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/18.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/19.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/20.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/21.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/22.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/23.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/24.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/25.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/26.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/27.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/28.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/29.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/30.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/31.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/32.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/33.jpg",
                                    caption: ""
                                },
                                {
                                    pic: "./images/events/ganeshothsavam2017/34.jpg",
                                    caption: ""
                                }
                            ]
                        }
                    }
                }
            ]
        },
        artsnsports: {
            title: "കലാ - കായികം",
            list: {

                keralotsavam2017 : {
                    coverpic:  "./images/events/keralothsavam2017/klogo.jpg",
                    thumb:  "./images/events/keralothsavam2017/kthumbs.jpg",
                    pagetitle: "കേരളോത്സവം 2017",
                    title: "സ്വാഗതം",
                    intro1: "കൊടുവായൂരിലെ കരുത്തരായ 22 ടീമിന്റെ ആവേശകരമായ 21 ഫുട്ബോൾ മത്സരങ്ങൾ ...",
                    intro2: "തീപാറുന്ന കളികൾ കാഴ്ചവയ്ക്കാൻ 9 ക്രിക്കറ്റ് ടീമുകൾ ( സ്റ്റിച്ച് ബോൾ ക്രിക്കറ്റ് ടൂർണമെന്റ് )...",
                    intro3: "വായുവിൽ ഉയരുന്ന പന്തിന്റെ ഒപ്പം കാണികളെ ആവേശമൂർച്ചയിൽ എത്തിക്കുന്ന 8 ടീമിന്റെ വോളീബോൾ ടൂർണമെന്റ് ...",
                    intro4: "സെക്കൻഡ്കളുടെ വ്യത്യാസത്തിൽ ഫിനിഷിങ് ലൈനിലെ ഫോട്ടോഫിനിഷ്‌കൾ കാഴ്ച വെക്കുന്ന അത്ലറ്റിക്‌സ് ഇനങ്ങൾ ....",
                    intro5: "കൂടാതെ മറ്റു അനവധി മത്സരങ്ങൾ...",
                    intro6: "ഇതു ഞങ്ങളുടെ ഉത്സവം , കൊടുവായൂരിലെ യുവാക്കൾ ഒന്നടങ്കം ഏറ്റെടുത്തു നടത്തുന്ന കായിക മാമാങ്കം കേരളോത്സവം ...",
                    intro7: "2017 കേരളോത്സവം , കൊടുവായൂർ പഞ്ചായത്ത് Sep 29,30 & Oct 1...",
                    intro8: "'ഷോ ദി റിയൽ സ്പോർട്സ്മാൻ സ്പിരിറ്റ് '",
                    cricket: "ക്രിക്കറ്റ്",
                    cricketpic: "./images/events/keralothsavam2017/kcricket.jpg",
                    football: "ഫുട്ബോൾ",
                    footballpic : "./images/events/keralothsavam2017/kfootball.jpg",
                    volleyball: "വോളീബോൾ",
                    volleyballpic : "./images/events/keralothsavam2017/kvolleyball.jpg",
                    results : "ഫലങ്ങൾ",
                    resultlist: [
                        {
                            title: "TRACK EVENTS",
                            list: [
                                {
                                    a: "5000m RACE JUNIOR BOYS",
                                    b: "1st Place: KiranKrishna.P.R, KFC",
                                    c: "2nd Place: Vipin.M, Individual",
                                    d: "3rd Place: Sabarish.J, New Bhavana"
                                },
                                {
                                    a: "5000m RACE SENIOR BOYS",
                                    b: "1st Place: Vineeth, New Bhavana",
                                    c: "2nd Place: Sreenath, KFC",
                                    d: "3rd Place: Sudheesh, New Bhavana"
                                },
                                {
                                    a: "200m RACE JUNIOR BOYS",
                                    b: "1st Place: Subin, New Bhavana",
                                    c: "2nd Place: Ramesh.B, KFC",
                                    d: "3rd Place: Shafeer, Friends"
                                },
                                {
                                    a: "200m RACE SENIOR BOYS",
                                    b: "1st Place: Nived, KFC",
                                    c: "2nd Place: Dinesh, KFC",
                                    d: "3rd Place: Sanjay, KFC"
                                },
                                {
                                    a: "1500m RACE JUNIOR BOYS",
                                    b: "1st Place: Vipin.M, Individual",
                                    c: "2nd Place: Binu Prasad, KFC",
                                    d: "3rd Place: Sijin, KFC"
                                },
                                {
                                    a: "1500m RACE SENIOR BOYS",
                                    b: "1st Place: Praveen.V, KFC",
                                    c: "2nd Place: Sanoop, KFC",
                                    d: "3rd Place: Sudeep, New Boys"
                                },
                                {
                                    a: "400m RACE JUNIOR BOYS",
                                    b: "1st Place: BinuPrasad, KFC",
                                    c: "2nd Place: Ajith, KFC",
                                    d: "3rd Place: Muhamed Farvesh, CHM"
                                },
                                {
                                    a: "400m RACE SENIOR BOYS",
                                    b: "1st Place: Nived, KFC",
                                    c: "2nd Place: Praveen.V, KFC",
                                    d: "3rd Place: Arjun, KFC"
                                },
                                {
                                    a: "100m RACE JUNIOR BOYS",
                                    b: "1st Place: Ramesh.B, KFC",
                                    c: "2nd Place: Sujith.S, KFC",
                                    d: "3rd Place: Haridas, Madathil"
                                },
                                {
                                    a: "100m RACE SENIOR BOYS",
                                    b: "1st Place: Nived, KFC",
                                    c: "2nd Place: Mahesh, Star Arts",
                                    d: "3rd Place: Dinesh.B, KFC"
                                },
                                {
                                    a: "800m RACE JUNIOR BOYS",
                                    b: "1st Place: Sijin, KFC",
                                    c: "2nd Place: Sivadas.N, Star Arts",
                                    d: "3rd Place: Vipin.M, Individual"
                                },
                                {
                                    a: "800m RACE SENIOR BOYS",
                                    b: "1st Place: Aneesh.P, KFC",
                                    c: "2nd Place: Sreenath, KFC",
                                    d: "3rd Place: Praveen.V, KFC"
                                },
                                {
                                    a:"4x100m RELAY JUNIOR BOYS",
                                    b: "1st Place: KFC",
                                    c: "2nd Place: New Bhavana",
                                    d: "3rd Place: New Boys"
                                },
                                {
                                    a:"4x100m RELAY SENIOR BOYS",
                                    b: "1st Place: KFC",
                                    c: "2nd Place: Star Arts",
                                    d: "3rd Place: Friends Club"
                                }
                            ]
                        },
                        {
                            title: "THROW EVENTS",
                            list : [
                                {
                                    a: "SHOT PUT JUNIOR BOYS",
                                    b: "1st Place: Ramesh.B, KFC",
                                    c: "2nd Place: Aditya Rajesh, KFC",
                                    d: "3rd Place: Abdul Rehman, Yuvadhara"
                                },
                                {
                                    a: "SHOT PUT SENIOR BOYS",
                                    b: "1st Place: Nithin, New Bhavana",
                                    c: "2nd Place: Mahesh, Star Arts",
                                    d: "3rd Place: Nithin, Yuvathara"

                                },
                                {
                                    a: "JAVELIN THROW SENIOR BOYS",
                                    b: "1st Place: Nithin, Yuvathara",
                                    c: "2nd Place: Prateesh, Star Arts",
                                    d: "3rd Place: Sainuddheen, Friends Club"

                                },
                                {
                                    a: "JAVELIN THROW JUNIOR BOYS",
                                    b: "1st Place: Pranav.M, Star Arts",
                                    c: "2nd Place: Ajith Prasad, New Bhavana",
                                    d: "3rd Place: Aditya Rajesh, KFC"
                                },
                                {
                                    a: "DISCUSS THROW SENIOR BOYS",
                                    b: "1st Place: Arjun.R.Das, KFC",
                                    c: "2nd Place: Mahesh, Star Arts",
                                    d: "3rd Place: Abu Thahir, CHM"
                                },
                                {
                                    a: "DISCUSS THROW JUNIOR BOYS",
                                    b: "1st Place: Sujith.S, KFC",
                                    c: "2nd Place: Ajith Prasad, New Bhavana",
                                    d: "3rd Place: Aditya Rajesh, KFC"
                                }
                            ]
                        },
                        {
                            title: "CRICKET",
                            list: [
                                {
                                    b: "Cancelled due to Damp Pitch and Bad Weather",
                                    c: "Mixed team to be sent for Block Tournament"
                                }
                            ]
                        },
                        {
                            title: "FOOTBALL",
                            list: [
                                {
                                    a: "FIRST ROUND",
                                    b: "LEGENDS-B 0-0 GALAXY FC. LEGENDS-B win on Penalties.",
                                    c: "KFC-B 0-0 MAJESTIC FC. MAJESTIC FC win on Penalties.",
                                    d: "NFC-A 2-0 STAR CLUB",
                                    e: "THIRA-B wins vs EFC. Walk Over",
                                    f: "THIRA-A 0-0 NEW BHAVANA. THIRA-A wins on Penalties.",
                                    g: "RYDERS 1-0 BLUE BOYS(FRIENDS)"
                                },
                                {
                                    a: "SECOND ROUND",
                                    b: "LEGENDS-A 1-0 MADATHIL FC.",
                                    c: "YUVADHARA 0-0 LEGENDS-B. YUVADHARA wins on Penalties.",
                                    d: "MAJESTCIC FC 0-0 NFC-A. NFC-A wins on Penalties.",
                                    e: "NEW BOYS 0-0 CHM. NEW BOYS wins in Penalties.",
                                    f: "SEVENS wins vs VFC. Walk over.",
                                    g: "THIRA-B wins vs THIRA-A. Walk over.",
                                    h: "RYDERS 0-0 CFC. CFC wins in Penalties.",
                                    i: "NFC-B 0-1 KFC"
                                },
                                {
                                    a: "QUARTER FINALS",
                                    b: "LEGENDS-A 1-0 YUVADHARA",
                                    c: "NFC 0-0 NEW BOYS. NFC wins in Penalties.",
                                    d: "SEVENS 0-0 THIRA-B. SEVENS wins in Penalties.",
                                    e: "KFC 0-0 CFC. CFC wins in Penalties."
                                },
                                {
                                    a: "SEMI FINALS",
                                    b: "LEGENDS-A 1-0 NFC.",
                                    c: "SEVENS 0-3 CFC"
                                },
                                {
                                    a: "FINALE",
                                    b: "LEGENDS-A 0-0 CFC. CFC wins in Penalties.",
                                    c: "CFC are the KERALOTSAVAM 2017 FOOTBALL CHAMPIONS !!!"
                                }


                            ]
                        },
                        {
                            title: "VOLLEYBALL",
                            list: [
                                {
                                    a: "FIRST ROUND",
                                    b: "KFC wins vs FRIENDS-A."
                                },
                                {
                                    a: "SECOND ROUND",
                                    b: "CHEATERS-ETR wins vs NFC.",
                                    c: "KFC wins vs CHANGAYIES.",
                                    d: "CHM wins vs FRIENDS-B",
                                    e: "CHALLENGERS wins vs MST"
                                },
                                {
                                    a: "SEMI FINALS",
                                    b: "KFC wins vs CHEATERS-ETR",
                                    c: "CHALLENGERS wins vs CHM"
                                },
                                {
                                    a: "FINALE",
                                    b: "KFC wins vs CHALLENGERS",
                                    c: "KFC aka KAKKAYUR UNITED are the KERALOTSAVAM 2017 VOLLEYBALL CHAMPIONS !!!"
                                }
                            ]
                        },
                        {
                            title: "ATHLETICS CHAMPIONSHIP",
                            list: [
                                {
                                    a: "KFC aka KAKKAYUR UNITED are the KERALOTSAVAM 2017 OVERALL ATHLETIC CHAMPIONS !!!"
                                }
                            ]
                        }
                    ],
                    gallery: "PHOTO GALLERY",
                    photolist: [
                        {
                            img: "./images/events/keralothsavam2017/1.jpg",
                            desc1: "KERALOTSAVAM 2017 - NOTICE",
                            desc2: "Propoganda and Schedule of the Events."
                        },
                        {
                            img: "./images/events/keralothsavam2017/inaug1.jpg",
                            desc1: "KERALOTSAVAM 2017 - INAUGRAL FUNCTION",
                            desc2: "Inaugrated by: Smt. Saratha Thulasidas, Hon'ble Kollengode Block Panchayat President."
                        },
                        {
                            img: "./images/events/keralothsavam2017/inaug2.jpg",
                            desc1: "KERALOTSAVAM 2017 - INAUGRAL FUNCTION",
                            desc2: "Addressing by: Sri. G.Krishnaprasad, Hon'ble Koduvayur Grama Panchayat President."
                        },
                        {
                            img: "./images/events/keralothsavam2017/2.jpg",
                            desc1: "KERALOTSAVAM 2017 - THE GAME BEGINS",
                            desc2: "The Ground And the Crowd."
                        },
                        {
                            img: "./images/events/keralothsavam2017/3.jpg",
                            desc1: "KERALOTSAVAM 2017 - VOLLEYBALL",
                            desc2: "The Volley Court surrounded by crowd."
                        },
                        {
                            img: "./images/events/keralothsavam2017/4.jpg",
                            desc1: "KERALOTSAVAM 2017 - FOOTBALL",
                            desc2: "The View from the top."
                        },
                        {
                            img: "./images/events/keralothsavam2017/5.jpg",
                            desc1: "KERALOTSAVAM 2017 - FOOTBALL",
                            desc2: "The Fight is Intense."
                        },
                        {
                            img: "./images/events/keralothsavam2017/6.jpg",
                            desc1: "KERALOTSAVAM 2017 - FOOTBALL",
                            desc2: "So who gets the ball?."
                        }
                    ]
                }


            }

        },
        ours: {
            title: "MYKODUVAYUR",
            list: {
                mobilephotographycontest2017: {
                    pagetitle: "മൊബൈല്‍ ഫോട്ടോഗ്രഫി മത്സരം - 2017",
                    cover: "./images/events/contest2017/contest2017cover.jpg",
                    thumb: "./images/events/contest2017/contest2017thumb.jpg",
                    pic: "./images/events/contest2017/pic.jpg",
                    intro: {
                        title: "INTRODUCTION",
                        info: "Team BehindBrains organised a Mobile Photography Contest in connection to the announcement of their venture of a web platform - MYKODUVAYUR, during the festive season of Koduvayur Ratholsavam on January 2017."
                    },
                    theme: {
                        title: "THEME : ",
                        info: "KODUVAYUR RATHOLSAVAM"
                    },
                    from: {
                        title: "FROM : ",
                        info: "07 January 2017 (Sat) 7pm"
                    },
                    to: {
                        title: "TO : ",
                        info: "13 January 2017 (Fri) 7pm"
                    },
                    eligibility: {
                        title: "ELIGIBILITY",
                        e1: "People of ANY AGE GROUP can participate in this contest.",
                        e2: "Mobile Cameras of ANY RANGE can be used for this contest.",
                        e3: "Only Photos submitted through EMAIL are considered eligible for the contest.",
                    },
                    rules: {
                        title: "RULES",
                        r1: "Only photos less than 10 MB size shall be submitted for the contest.",
                        r2: "A Maximum of 3 PHOTOS is allowed for 1 PERSON.",
                        r3: "Any Digital Alteration Or Editing done to the Captured Image will result in DISQUALIFICATION.",
                        r4: "The Original Photo Should Be Presented for Verification if announced WINNER."
                    },
                    howtoenter: {
                        title: "HOW TO ENTER",
                        intro1: "Anyone who wish to Participate in this CONTEST should Send the Captured Photo to the following E-MAIL ID – ",
                        intromail: " contest.mykoduvayur@gmail.com ",
                        intro2: "along with following details : ",
                        hte1: "PHOTO CAPTION",
                        hte2: "NAME OF THE PHOTOGRAPHER",
                        hte3: "CONTACT PHONE NO.",
                        hte4: "MOBILE PHONE MODEL",
                        ps: "P.S. ONLY 3 PHOTOS PER E-MAIL/CONTESTANT IS PERMITTED."
                    },
                    judging: {
                        title: "JUDGING",
                        info: "The Submitted Photographs will be judged based on the following criteria:",
                        j1: "QUALITY",
                        j2: "RELEVANCE TO THE THEME",
                        j3: "ORIGINALITY",
                        j4: "CREATIVE ELEMENT",
                        j5: "OVERALL IMPACT"
                    },
                    results: {
                        title: "RESULTS",
                        intro: "Winners of this Contest was announced on 23 February 2017, Sunday during the Official Preview of our website - ",
                        introsite: "www.mykoduvayur.in",
                        first: {
                            title: "WINNER",
                            pic: "./images/events/contest2017/1.jpg",
                            name: "MIDHUN.P.V",
                            certificate: "./images/events/contest2017/first.jpg",
                            caption: ""
                        },
                        second: {
                            title: "RUNNER UP",
                            pic: "./images/events/contest2017/2.jpg",
                            name: "SUJESH.K.APPU",
                            certificate: "./images/events/contest2017/second.jpg",
                            caption: ""
                        }
                    },
                    gallery: {
                        title: "SELECTED BEST PHOTOS",
                        info: "",
                        list: [
                            {
                                pic: "./images/events/contest2017/3.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/4.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/5.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/6.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/7.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/8.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/9.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/10.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/11.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/12.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/13.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/14.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/15.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/16.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/17.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/18.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/19.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/20.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/21.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/22.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/23.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/24.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/25.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/26.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/27.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/28.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/29.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/30.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/31.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/32.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/33.jpg",
                                caption: ""
                            },
                            {
                                pic: "./images/events/contest2017/34.jpg",
                                caption: ""
                            }
                        ]
                    },
                    officialpreview: {
                        title: "OFFICIAL ANNOUNCEMENT",
                        info: "Prizes were distributed and the Official Preview of the Website was announced on 23 February 2017 at Althara, Keralapuram Gramam, Koduvayur.",
                        chiefguest: {
                            title: "CHIEF GUEST",
                            info: "The session was headed and prizes were distributed by our beloved Gopal Sir, who was on our side right from the beginning and provided us with his support.",
                        },
                        list: [
                            {
                                pic: "./images/events/contest2017/preview1.jpg"
                            },
                            {
                                pic: "./images/events/contest2017/preview2.jpg"
                            }
                        ]
                    }
                }
            }
        }

    };


    $rootScope.dataSelected = $rootScope.engdata ;

}
]);



// create the controller and inject Angular's $scope
mykdrApp.controller('mainController', function($rootScope, $scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    document.body.scrollTop = 0;

    // inject rootScope variables
    $rootScope.fbloader = true;


    $rootScope.closed = function() {
        var z= document.getElementById("mymenuglyph");
        z.style.display="inline-block";
        var x= document.getElementById("mykdr_menu");
        x.style.display="none";
        var y= document.getElementById("closenav");
        y.style.display="none";
    };

    $rootScope.opened = function() {
        var z= document.getElementById("closenav");
        z.style.display="inline-block";
        var x= document.getElementById("mykdr_menu");
        x.style.display="block";
        var y= document.getElementById("mymenuglyph");
        y.style.display="none";
    };

    $rootScope.eng = function() {

        var x= document.getElementById("english");
        var y= document.getElementById("malayalam");

        x.style.backgroundColor = "#34495E";
        x.style.color = "#FF6347";

        y.style.color = "#5b3930";
        y.style.background = "none";



        var mm = window.matchMedia("(max-width:1080px)");
        if(mm.matches) {
            $rootScope.closed();
        }

        if($rootScope.langChange === true) {
            var w = document.getElementById("alertlang");
            w.style.display = "block";
        }

        $rootScope.myLang = "ENGLISH";
        $rootScope.dataSelected = $rootScope.engdata ;



    };

    $rootScope.mal = function() {

        var y= document.getElementById("english");
        var x= document.getElementById("malayalam");

        x.style.backgroundColor = "#34495E";
        x.style.color = "#FF6347";

        y.style.color = "#5b3930";
        y.style.background = "none";


        var mml = window.matchMedia("(max-width:1080px)");
        if(mml.matches) {
            $rootScope.closed();
        }

        if($rootScope.langChange === true) {
            var w = document.getElementById("alertlang");
            w.style.display = "block";
        }

        $rootScope.myLang = " മലയാളം";
        $rootScope.dataSelected = $rootScope.maldata;

    };

    $rootScope.changetoeng = function () {

        $rootScope.langChange=true;
        $rootScope.eng();

    };
    $rootScope.changetomal = function () {

        $rootScope.langChange=true;
        $rootScope.mal();

    };


    if( $rootScope.myLang === "ENGLISH") {
        $rootScope.eng();
    }
    else {
        $rootScope.mal();
    }

    $rootScope.alertClose = function() {

        var x = document.getElementById("alertlang");
        x.style.display = "none";

        $rootScope.langChange = false;
    };

    $rootScope.menuload = function() {

        var x = document.getElementById("alertlang");
        x.style.display = "none";

        $rootScope.langChange = false;

    };



});

mykdrApp.controller('homeController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebook Server not loaded! Press OK to Try Again..")
    }

    // alert($scope.message);

});

mykdrApp.controller('localityController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';

    $scope.kdrMapUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCjyFs7nzkwdQ9YhT1AeALSYEeGEBbFpuQ";

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebook Server not loaded! Press OK to Try Again..")
    }

    $scope.myMap = function() {
        var mapProp= {
            center:new google.maps.LatLng(10.678849, 76.646882),
            zoom:13
        };
        var map=new google.maps.Map(document.getElementById("kdrmap"),mapProp);
    };

    $scope.myMap();


});

mykdrApp.controller('aboutController', function($rootScope, $scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebook Server not loaded! Press OK to Try Again..")
    }


});

mykdrApp.controller('servicesController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebook Server not loaded! Press OK to Try Again..")
    }

});

mykdrApp.controller('cultureController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebook Server not loaded! Press OK to Try Again..")
    }

});

mykdrApp.controller('eventsController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebook Server not loaded! Press OK to Try Again..")
    }

});

mykdrApp.controller('trendingController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';


    $scope.showNews = true;
    $scope.showArticles = false;
    $scope.showPictures = false;
    $scope.showVideos = false;

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebook Server not loaded! Press OK to Try Again..")
    }

    $scope.news = function() {

        $scope.showNews = true;
        $scope.showArticles = false;
        $scope.showPictures = false;
        $scope.showVideos = false;

    };

    $scope.articles = function() {

        $scope.showNews = false;
        $scope.showArticles = true;
        $scope.showPictures = false;
        $scope.showVideos = false;

    };

    $scope.pictures = function() {

        $scope.showNews = false;
        $scope.showArticles = false;
        $scope.showPictures = true;
        $scope.showVideos = false;

    };

    $scope.videos = function() {

        $scope.showNews = false;
        $scope.showArticles = false;
        $scope.showPictures = false;
        $scope.showVideos = true;

    };

});

mykdrApp.controller('feedbackController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';

    // alert("hi");

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebook Server not loaded! Press OK to Try Again..")
    }

});