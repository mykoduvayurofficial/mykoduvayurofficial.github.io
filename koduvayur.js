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

});

mykdrApp.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
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
            lastupdated: "17 August 2017"
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
                pic1: "./images/theme/mountmob.jpg",
                pic2: "./images/theme/mountmob.jpg",
                pic3: "./images/theme/mountmob.jpg",
                pic1alt: "Kottamala, Koduvayur.",
                pic2alt: "",
                pic3alt: ""
            },
            landscape: {
                pic1: "./images/theme/mountpc.jpg",
                pic2: "./images/theme/mountpc.jpg",
                pic3: "./images/theme/mountpc.jpg",
                pic1alt: "Kottamala, Koduvayur.",
                pic2alt: "",
                pic3alt: ""
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
            list1: "Delivering any and every kind of regularly updated Information related to Koduvayur.",
            list2: "Providing Technical Assistance and Promotion to institutions, businesses, events and schemes for Public Welfare, happening in and around Koduvayur.",
            para3: "This website intends to be a Library about Koduvayur for people from outside, a trustable and informative friend for those who live here, and an everlasting book of memories for those who miss this place.",
            para4: "Read on to find out more…"
        },
        aboutthis: {
            title: "ABOUT THIS WEBSITE",
            list1: "This website is a collection of information regarding anything and everything that is related to Koduvayur.",
            list2: "All the different institutions, Govt. offices, schools, hospitals, historic and religious places, festivals, commerce, events, associations etc. find their place on our website, presented in a clean ordered way.",
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
            para4: "The speaking tongues are mainly Malayalam and Tamil, although the slang varies for each locality and community of people. Population has a majority of Hindus belonging to a number of sub-castes. Muslim community is concentrated on some parts of Koduvayur and there are a number of Christian families spread around even though it is a minority here.  Koduvayur is known for its cultural diversity. From Eid, Easter and Onam to a number of Regional Festivals spread around, there is something to celebrate each time of the year."
        },
        administration: {
            title: "ADMINISTRATION",
        },
        institutions: {
            title: "INSTITUTIONS"
        },
        society: {
            title: "SOCIETY",
            party: {
                title: "POLITICAL PARTIES"
            },
            clubs: {
                title: "ARTS & SPORTS CLUBS"
            },
            other: {
                title: "OTHER ASSOCIATIONS"
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
                subtitle: "TEMPLES IN KODUVAYUR"
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
            title: "FESTIVALS"
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
            list: {
                education: {
                    title: "EDUCATION",
                    sublist: {

                    }
                },
                health: {
                    title: "HEALTH",
                    sublist: {

                    }
                },
                transport: {
                    title: "TRANSPORT",
                    sublist: {

                    }
                },
                household: {
                    title: "HOUSEHOLD",
                    sublist: {

                    }
                },
                foodnstay: {
                    title: "FOOD & STAY",
                    sublist: {

                    }
                },
                shopping: {
                    title: "SHOPPING",
                    sublist: {

                    }
                },
                govt: {
                    title: "GOVT. SERVICES",
                    sublist: {

                    }
                },
                events: {
                    title: "EVENTS",
                    sublist: {

                    }
                },
                repair: {
                    title: "SERVICE & REPAIR",
                    sublist: {

                    }
                }
            }

        }
    };

    $rootScope.engdata.trending = {
        alerts: {
            title: "ALERTS",
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

    $rootScope.engdata.feedback = {
        intro: {
            title: "INTRODUCTION",
            para1: "This venture - MyKoduvayur, was planned and processed with the motive of making the Life better for the people in and from this place, using the Web Technology that is growing higher and reaching farther each passing day. So each one of you definitely have a say in here. Your opinions, suggestions and appreciations are a huge motivation for us to go forward and do further. We appreciate each of your support. "
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

            }
        },
        artsnsports: {
            title: "ARTS & SPORTS",
            list: {

            }
        },
        ours: {
            title: "OUR EVENTS",
            list: {

            }
        }

    };

    $rootScope.maldata.mainData = {

        general: {
            author: "kriz815",
            url: "http://www.mykoduvayur.in",
            logo: "./images/mylogo.png",
            lastupdated: "17 August 2017"
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
                pic1: "./images/theme/mountmob.jpg",
                pic2: "./images/theme/mountmob.jpg",
                pic3: "./images/theme/mountmob.jpg",
                pic1alt: "Kottamala, Koduvayur.",
                pic2alt: "",
                pic3alt: ""
            },
            landscape: {
                pic1: "./images/theme/mountpc.jpg",
                pic2: "./images/theme/mountpc.jpg",
                pic3: "./images/theme/mountpc.jpg",
                pic1alt: "Kottamala, Koduvayur.",
                pic2alt: "",
                pic3alt: ""
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

    $rootScope.maldata.home = {
        intro: {
            title: "INTRODUCTION",
            para1: "Koduvayur is a town located in the Southern part of Palakkad district in Kerala. It’s a Village Panchayat that comes under the Chittur Taluk. It is a place known for its Diversity. Be it the population, slang, festivals, business, culture or the livelihood, there are various kinds of it all in this place.",
            para2_1: "MyKoduvayur",
            para2_2: " is a Web Project initiated by ",
            para2_3: "Team BehindBrains ",
            para2_4: "based on Koduvayur. This is an Information Website which primarily focuses on :",
            list1: "Delivering any and every kind of regularly updated Information related to Koduvayur.",
            list2: "Providing Technical Assistance and Promotion to institutions, businesses, events and schemes for Public Welfare, happening in and around Koduvayur.",
            para3: "This website intends to be a Library about Koduvayur for people from outside, a trustable and informative friend for those who live here, and an everlasting book of memories for those who miss this place.",
            para4: "Read on to find out more…"
        },
        aboutthis: {
            title: "ABOUT THIS WEBSITE",
            list1: "This website is a collection of information regarding anything and everything that is related to Koduvayur.",
            list2: "All the different institutions, Govt. offices, schools, hospitals, historic and religious places, festivals, commerce, events, associations etc. find their place on our website, presented in a clean ordered way.",
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

    $rootScope.maldata.locality = {
        intro: {
            title: "INTRODUCTION",
            para1: "Koduvayur is one of the most prominent regions in the Southern part of Palakkad. The population here is a diverse combination of people with different lifestyles, belonging to several communities and speak different languages and slang. Nochur, Ethanur, Kakkayur, Keralapuram Gramam, Navakkode, Pittupeedika, Mini Estate etc are some of the notable places of this region, divided into 10 administrative wards."
        },
        koduvayur: {
            title: "KODUVAYUR",
            para1: "The domain of Koduvayur stretches to Mannathukavu in the North-West, Nochur in the North-East, Ethanur in the West, Karippode in the East, Kakkayur in the South-West and Annakode in the South.",
            para2: "Koduvayur is the Geographical Intersection between a number of places like Palakkad, Nemmara, Alathur, Chittur, Pollachi, Kollengode etc. The Vehicle Traffic that frequently occurs here is a stand out feature. The road is busy 24/7 as it connects a number of places. KSRTC operates long route buses to Thrissur, Trivandrum, Kochi and Coimbatore through here.",
            para3: "Being the prime Business Center for the south-west region of Palakkad district, most of the population depends upon Koduvayur for their day-to-day needs like vegetables & other groceries, cloth and meat products. This place acts as a hub for merchandise coming from Coimbatore and Pollachi in Tamil Nadu. Koduvayur Market is one of the prominent places and business range from small scale shops to wholesale godowns, active 24/7.",
            para4: "The speaking tongues are mainly Malayalam and Tamil, although the slang varies for each locality and community of people. Population has a majority of Hindus belonging to a number of sub-castes. Muslim community is concentrated on some parts of Koduvayur and there are a number of Christian families spread around even though it is a minority here.  Koduvayur is known for its cultural diversity. From Eid, Easter and Onam to a number of Regional Festivals spread around, there is something to celebrate each time of the year."
        },
        administration: {
            title: "ADMINISTRATION",
        },
        institutions: {
            title: "INSTITUTIONS"
        },
        society: {
            title: "SOCIETY",
            party: {
                title: "POLITICAL PARTIES"
            },
            clubs: {
                title: "ARTS & SPORTS CLUBS"
            },
            other: {
                title: "OTHER ASSOCIATIONS"
            }
        }
    };

    $rootScope.maldata.culture = {
        intro: {
            title: "INTRODUCTION",
            para1: "The lifestyle and traditions of people vary for each locality and community of people, here in Koduvayur. This Cultural Diversity results in numerous festivals to celebrate. Koduvayur Radholsavam is a Special Occasion for everyone here, regardless of their religion, gender, caste or age. From Eid, Easter and Onam to a number of other Regional Festivals spread around like the Ethanur Kummaty, Ganeshotsavam or Navarathri, there is something to celebrate each time of the year. This page throws light upon the Religious Places of Worship and the details of all the important festivals that are celebrated in and around Koduvayur."
        },
        worship: {
            title: "PLACES OF WORSHIP",
            temples: {
                title: "TEMPLES",
                subtitle: "TEMPLES IN KODUVAYUR"
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
            title: "FESTIVALS"
        }
    };

    $rootScope.maldata.services = {
        intro: {
            title: "INTRODUCTION",
            para1: "Koduvayur is the prime Business Center for the south-west region of Palakkad district. Almost every kind of services that one needs is available in and around this place. Its hard to keep record of every one of them and use them at the time of need. MyKoduvayur brings to you the entire list and details of every kind of services that is available around this place, presented in a clean and ordered way with categories and sub-categories. One can look through it whenever needed, choose one and use it. We believe that this page will be the most useful one in this website. We hope you find it useful."
        },
        emergency: {
            title: "EMERGENCY"
        },
        categories: {
            title: "CATEGORIES",
            list: {
                education: {
                    title: "EDUCATION",
                    sublist: {

                    }
                },
                health: {
                    title: "HEALTH",
                    sublist: {

                    }
                },
                transport: {
                    title: "TRANSPORT",
                    sublist: {

                    }
                },
                household: {
                    title: "HOUSEHOLD",
                    sublist: {

                    }
                },
                foodnstay: {
                    title: "FOOD & STAY",
                    sublist: {

                    }
                },
                shopping: {
                    title: "SHOPPING",
                    sublist: {

                    }
                },
                govt: {
                    title: "GOVT. SERVICES",
                    sublist: {

                    }
                },
                events: {
                    title: "EVENTS",
                    sublist: {

                    }
                },
                repair: {
                    title: "SERVICE & REPAIR",
                    sublist: {

                    }
                }
            }

        }
    };

    $rootScope.maldata.trending = {
        alerts: {
            title: "ALERTS",
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

    $rootScope.maldata.feedback = {
        intro: {
            title: "INTRODUCTION",
            para1: "This venture - MyKoduvayur, was planned and processed with the motive of making the Life better for the people in and from this place, using the Web Technology that is growing higher and reaching farther each passing day. So each one of you definitely have a say in here. Your opinions, suggestions and appreciations are a huge motivation for us to go forward and do further. We appreciate each of your support. "
        },
        haveyoursay: {
            title: "HAVE YOUR SAY"
        }

    };

    $rootScope.maldata.eventpage = {
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

            }
        },
        artsnsports: {
            title: "ARTS & SPORTS",
            list: {

            }
        },
        ours: {
            title: "OUR EVENTS",
            list: {

            }
        }

    };


    $rootScope.dataSelected = $rootScope.engdata ;

}]);



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
        alert("Facebbook Server not loaded! Press OK to Try Again..")
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
        alert("Facebbook Server not loaded! Press OK to Try Again..")
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
        alert("Facebbook Server not loaded! Press OK to Try Again..")
    }


});

mykdrApp.controller('servicesController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebbook Server not loaded! Press OK to Try Again..")
    }


});

mykdrApp.controller('cultureController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebbook Server not loaded! Press OK to Try Again..")
    }

});

mykdrApp.controller('eventsController', function($rootScope, $scope) {
    $scope.message = 'Look! I am an about page.';

    if (typeof(FB) != 'undefined' && FB != null ) {
        FB.XFBML.parse();
        // run the app
    } else {
        // alert the user
        alert("Facebbook Server not loaded! Press OK to Try Again..")
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
        alert("Facebbook Server not loaded! Press OK to Try Again..")
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
        alert("Facebbook Server not loaded! Press OK to Try Again..")
    }

});





