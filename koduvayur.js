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
            lastupdated: "19 August 2017"
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
            title: "MYKODUVAYUR",
            list: {

            }
        }

    };

    $rootScope.maldata.mainData = {

        general: {
            author: "kriz815",
            url: "http://www.mykoduvayur.in",
            logo: "./images/mylogo.png",
            lastupdated: "19 August 2017"
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

    $rootScope.maldata.locality = {
        intro: {
            title: "ആമുഖം",
            para1: "Koduvayur is one of the most prominent regions in the Southern part of Palakkad. The population here is a diverse combination of people with different lifestyles, belonging to several communities and speak different languages and slang. Nochur, Ethanur, Kakkayur, Keralapuram Gramam, Navakkode, Pittupeedika, Mini Estate etc are some of the notable places of this region, divided into 10 administrative wards."
        },
        koduvayur: {
            title: "കൊടുവായൂർ",
            para1: "The domain of Koduvayur stretches to Mannathukavu in the North-West, Nochur in the North-East, Ethanur in the West, Karippode in the East, Kakkayur in the South-West and Annakode in the South.",
            para2: "Koduvayur is the Geographical Intersection between a number of places like Palakkad, Nemmara, Alathur, Chittur, Pollachi, Kollengode etc. The Vehicle Traffic that frequently occurs here is a stand out feature. The road is busy 24/7 as it connects a number of places. KSRTC operates long route buses to Thrissur, Trivandrum, Kochi and Coimbatore through here.",
            para3: "Being the prime Business Center for the south-west region of Palakkad district, most of the population depends upon Koduvayur for their day-to-day needs like vegetables & other groceries, cloth and meat products. This place acts as a hub for merchandise coming from Coimbatore and Pollachi in Tamil Nadu. Koduvayur Market is one of the prominent places and business range from small scale shops to wholesale godowns, active 24/7.",
            para4: "The speaking tongues are mainly Malayalam and Tamil, although the slang varies for each locality and community of people. Population has a majority of Hindus belonging to a number of sub-castes. Muslim community is concentrated on some parts of Koduvayur and there are a number of Christian families spread around even though it is a minority here.  Koduvayur is known for its cultural diversity. From Eid, Easter and Onam to a number of Regional Festivals spread around, there is something to celebrate each time of the year."
        },
        administration: {
            title: "ഭരണഘടന",
        },
        institutions: {
            title: "സ്ഥാപനങ്ങൾ"
        },
        society: {
            title: "സമൂഹം",
            party: {
                title: "രാഷ്ട്രീയ പാർട്ടികൾ"
            },
            clubs: {
                title: "ക്ലബ്ബുകൾ"
            },
            other: {
                title: "മറ്റു കൂട്ടായ്‌മകൾ"
            }
        }
    };

    $rootScope.maldata.culture = {
        intro: {
            title: "ആമുഖം",
            para1: "The lifestyle and traditions of people vary for each locality and community of people, here in Koduvayur. This Cultural Diversity results in numerous festivals to celebrate. Koduvayur Radholsavam is a Special Occasion for everyone here, regardless of their religion, gender, caste or age. From Eid, Easter and Onam to a number of other Regional Festivals spread around like the Ethanur Kummaty, Ganeshotsavam or Navarathri, there is something to celebrate each time of the year. This page throws light upon the Religious Places of Worship and the details of all the important festivals that are celebrated in and around Koduvayur."
        },
        worship: {
            title: "ആരാധനാലയങ്ങൾ",
            temples: {
                title: "അമ്പലങ്ങൾ",
                subtitle: "അമ്പലങ്ങൾ"
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
            title: "ഉത്സവ കലണ്ടർ"
        },
        festivals: {
            title: "ഉത്സവങ്ങൾ"
        }
    };

    $rootScope.maldata.services = {
        intro: {
            title: "ആമുഖം",
            para1: "Koduvayur is the prime Business Center for the south-west region of Palakkad district. Almost every kind of services that one needs is available in and around this place. Its hard to keep record of every one of them and use them at the time of need. MyKoduvayur brings to you the entire list and details of every kind of services that is available around this place, presented in a clean and ordered way with categories and sub-categories. One can look through it whenever needed, choose one and use it. We believe that this page will be the most useful one in this website. We hope you find it useful."
        },
        emergency: {
            title: "അത്യാവശ്യം"
        },
        categories: {
            title: "വിഭാഗങ്ങൾ",
            list: {
                education: {
                    title: "വിദ്യാഭ്യാസം",
                    sublist: {

                    }
                },
                health: {
                    title: "ആരോഗ്യം",
                    sublist: {

                    }
                },
                transport: {
                    title: "വാഹനം",
                    sublist: {

                    }
                },
                household: {
                    title: "വീട്ടുകാര്യങ്ങൾ",
                    sublist: {

                    }
                },
                foodnstay: {
                    title: "ഭക്ഷണം & താമസം",
                    sublist: {

                    }
                },
                shopping: {
                    title: "ഷോപ്പിംഗ്",
                    sublist: {

                    }
                },
                govt: {
                    title: "ഗവ. സേവനങ്ങൾ",
                    sublist: {

                    }
                },
                events: {
                    title: "പരിപാടികൾ",
                    sublist: {

                    }
                },
                repair: {
                    title: "സർവീസ് & റിപ്പയർ",
                    sublist: {

                    }
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
        trends: {
            news: {
                title: "വാർത്ത",
                list: {

                }
            },
            articles: {
                title: "ലേഖനം",
                list: {

                }
            },
            pictures: {
                title: "ചിത്രങ്ങൾ",
                list: {

                }
            },
            videos: {
                title: "വീഡിയോ",
                list: {

                }
            }

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

    $rootScope.maldata.eventpage = {
        intro: {
            title: "ആമുഖം",
            para1: "Our busy lives may hinder us from witnessing and attending many events we wish to watch and participate. Also, memories of the ones we were part of will give us the sheer joy of watching and reading through them again and again. MyKoduvayur gives you the chance to do this with this page, where you can go through every kind of important events that happen in and around this place. Do enjoy the experience..."
        },
        general: {
            title: "പൊതു പരിപാടികൾ",
            list: {

            }
        },
        festive: {
            title: "ആഘോഷങ്ങൾ",
            list: {

            }
        },
        artsnsports: {
            title: "കലാ - കായികം",
            list: {

            }
        },
        ours: {
            title: "MYKODUVAYUR",
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





