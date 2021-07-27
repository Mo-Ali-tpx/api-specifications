(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/person_api_arch_diagram-0fcf91aef0db1269b8509d37e735195c.png"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(94)),o=["components"],s={id:"person-api",title:"Person API"},l={unversionedId:"person-api",id:"person-api",isDocsHomePage:!1,title:"Person API",description:"Purpose:",source:"@site/docs/person-api.md",slug:"/person-api",permalink:"/api-specifications/person-api",editUrl:"https://github.com/LBHackney-IT/api-specifications/edit/master/docs/person-api.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/api-specifications/"}},c=[{value:"Purpose:",id:"purpose",children:[]},{value:"Vision",id:"vision",children:[]},{value:"Our users and their needs",id:"our-users-and-their-needs",children:[]},{value:"Workshop outcome",id:"workshop-outcome",children:[{value:"Workshop 1 &amp; 2",id:"workshop-1--2",children:[]},{value:"Workshop 3:",id:"workshop-3",children:[]},{value:"Entities dependent on Person API.",id:"entities-dependent-on-person-api",children:[]},{value:"Endpoints to be created for core person microservice",id:"endpoints-to-be-created-for-core-person-microservice",children:[]},{value:"Architecture Diagram",id:"architecture-diagram",children:[]}]}],d={toc:c};function p(e){var t=e.components,s=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(a.a)({},d,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"purpose"},"Purpose:"),Object(r.b)("p",null,"To identify all information to be captured with regards to the Core Person domain. "),Object(r.b)("p",null,"As one of the core entities for all interactions with the council, we understand that the Person entity had to be brainstormed thoroughly between all three streams of MFTH( as the starting point of conversation for a single view for person related data). "),Object(r.b)("p",null,"This will be the core platform API to be used by other areas within the housing domain for the current needs, however with the scope of extending this to other datasets. With no Citizens Index in place due to the cyber-attack, we will be posed with the question of a single view of all resident information and their interactions with the council. Also, it will enable Hackney to conduct resident profiling to improve the services the council offers so good that people prefer to use them all the time."),Object(r.b)("p",null,"As part of our solution we are proposing for a housing stream to develop the first version of this service as a pilot. This will help to target services more effectively, achieve better outcomes and enhance performance monitoring while reducing cost and risk. This means that we can offer a deeper, more citizen-centric self-service capability, enabling even more service transactions to be carried out online. "),Object(r.b)("p",null,"Our goal is for this solution to be implemented in MFTH and gradually extended to other domains. The current silos of citizen data make this a very difficult and time-consuming challenge to overcome. As the user needs for all services are similar in terms of resident domain lookup, we end up having longer development cycles and strongly coupled services that cannot be reused for similar needs in other domain services. Due to this, residents do not get the right support at the right time and the data cleansing process becomes ever so difficult."),Object(r.b)("p",null,"Having a single person domain will enable us to remove the silos mechanism for resident information collection and help us to present a single and updated view on the resident which means less development cost and better ROI in future. Also, it will help the contact centre in better and informed decision making for managing the ongoing service demands. "),Object(r.b)("h2",{id:"vision"},"Vision"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A single, centralized data source, holding all core persons data, updated by multiple services."),Object(r.b)("li",{parentName:"ul"},"A reusable microservice API used for managing that data."),Object(r.b)("li",{parentName:"ul"},"Single data source to help us achieve consistency in data structure related to person\u2019s data and remove duplication of resident data we hold. "),Object(r.b)("li",{parentName:"ul"},"Reducing development efforts "),Object(r.b)("li",{parentName:"ul"},"Flexibility to store \u2018extended\u2019 data, related to a person, that might be sensitive and only accessible by a single service area"),Object(r.b)("li",{parentName:"ul"},"A future goal of all services dealing with residents (and other types of contacts) interacting with a single data source, which will improve:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Staff experience - if we already have a record of a person, they don\u2019t need to create a new one"),Object(r.b)("li",{parentName:"ul"},"Residents experience - do not need to provide us with data more than once"))),Object(r.b)("li",{parentName:"ul"},"Remove the need for the difficult task of data matching in the future (where multiple records of the same person across systems need to be matched) as all data will be saved in the same location")),Object(r.b)("h2",{id:"our-users-and-their-needs"},"Our users and their needs"),Object(r.b)("p",null,"As a service user I would like to see the resident information so that"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"I can make an informed decision with regards to the resident query I am dealing with."),Object(r.b)("li",{parentName:"ul"},"I have the basic information about the council tenant when a house visit is made."),Object(r.b)("li",{parentName:"ul"},"I can identify the resident who has reported for the repair."),Object(r.b)("li",{parentName:"ul"},"I can perform my tasks - creating tenancy management processes, raising notes and alerts and more")),Object(r.b)("p",null,"As a service user, I would like"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To search for people and know if they have already interacted with the council"),Object(r.b)("li",{parentName:"ul"},"Search and update existing records of people, instead of creating new ones"),Object(r.b)("li",{parentName:"ul"},"An easy way to find out information about a person so that I don\u2019t have to search multiple systems in order to find details about the same person recorded by separate systems")),Object(r.b)("p",null,"As a consumer of this API I would like to see"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The name of the person so that this data is available for any housing service (at present) that requires it."),Object(r.b)("li",{parentName:"ul"},"The nationality of the person so that this data is available to any service that requires it."),Object(r.b)("li",{parentName:"ul"},"The gender of the person so that this data is available for any service that requires it."),Object(r.b)("li",{parentName:"ul"},"The ethnic origin of the person, so that I have this data available for any service that requires it."),Object(r.b)("li",{parentName:"ul"},"The title of the person, so that I have this data available for any service that requires it."),Object(r.b)("li",{parentName:"ul"},"The DOB of the person so that I have this data available for any service that requires it."),Object(r.b)("li",{parentName:"ul"},"The cross references to other microservices so that I can retrieve any related data if necessary ")),Object(r.b)("p",null,"As a developer, I want to"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"built and reuse a single Person API microservice so that development efforts can be focused on other requirements"),Object(r.b)("li",{parentName:"ul"},"Ensure data updated, retrieved and inserted is consistent across services and reliable"),Object(r.b)("li",{parentName:"ul"},"Have an easy way to retrieve any data related to a person so that I don\u2019t need to make additional calls to find references for related systems")),Object(r.b)("p",null,"As an application  support analyst I need to understand the queries being used by the API so that I can deal with support requests accordingly and resolve the potential issues in the underlying data,"),Object(r.b)("p",null,"As a data analyst I need to connect to the API via Qlik so that data is easy to interpret and available for further reporting purpose.and analysis."),Object(r.b)("h2",{id:"workshop-outcome"},"Workshop outcome"),Object(r.b)("h3",{id:"workshop-1--2"},"Workshop 1 & 2"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Summary"),"\nOur first workshop started looking at the various domains that we expect would have requirements for person information.  This includes contacts for Residents, Landlords, TMOs, etc and the various services that may require contact such as finance, repairs, tenancy & leaseholding, etc.Identifying these sources was crucial along with different types of contacts and how do they relate to each of the MFTH workstream."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://ideaflip.com/b/kna94c7d6vg6/"},"https://ideaflip.com/b/kna94c7d6vg6/")),Object(r.b)("h3",{id:"workshop-3"},"Workshop 3:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Summary"),"\nThe third workshop re-focused on identifying areas (domains) that depend on person data. Those include cautionary alerts, activities, notes, patches, vulnerabilities, housing register applications, etc. and established the concept of a core contact entity.  We\u2019ve agreed that the core contact entity will maintain and return cross references to other services. We discussed what properties the core contact entity may contain. "),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://ideaflip.com/b/tk5mzrgytdri/"},"https://ideaflip.com/b/tk5mzrgytdri/")),Object(r.b)("h3",{id:"entities-dependent-on-person-api"},"Entities dependent on Person API."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Cautionary Alerts"),Object(r.b)("li",{parentName:"ol"},"Vulnerabilities"),Object(r.b)("li",{parentName:"ol"},"Addresses"),Object(r.b)("li",{parentName:"ol"},"Properties"),Object(r.b)("li",{parentName:"ol"},"Notes"),Object(r.b)("li",{parentName:"ol"},"Patches/areas"),Object(r.b)("li",{parentName:"ol"},"Tenure"),Object(r.b)("li",{parentName:"ol"},"Activities"),Object(r.b)("li",{parentName:"ol"},"Universal credit"),Object(r.b)("li",{parentName:"ol"},"Housing register applications"),Object(r.b)("li",{parentName:"ol"},"Homelessness cases (TAPL)?"),Object(r.b)("li",{parentName:"ol"},"Communication details")),Object(r.b)("h3",{id:"endpoints-to-be-created-for-core-person-microservice"},"Endpoints to be created for core person microservice"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"GET ",Object(r.b)("strong",{parentName:"p"},"/persons/?")),Object(r.b)("p",{parentName:"li"},"a. Query parameters:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"i.      First name\nii.     Last name\niii.    Address?\niv.     Date of Birth\nv.      NI?\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"GET ",Object(r.b)("strong",{parentName:"p"},"/persons/{person-id}"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"PATCH ",Object(r.b)("strong",{parentName:"p"},"/persons/{person-id}"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"POST ",Object(r.b)("strong",{parentName:"p"},"/persons/{person-id}")))),Object(r.b)("p",null,"Proposed Data Model by Amido:"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://docs.google.com/document/d/1DjZiUw8yzN3OxlQOudtiSdwbG84coGKI8eYIWJv-o8g/edit"},"https://docs.google.com/document/d/1DjZiUw8yzN3OxlQOudtiSdwbG84coGKI8eYIWJv-o8g/edit"),"\nHackIT proposal for Person data model based on the model proposed by Amido."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example payload")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{\n    "id": "TWVoZGlLaW1ha2hlCg==",\n    "title": "Mr",\n    "forename": "Mehdi",\n    "Preferred forename": "Mehdi",\n    "middle name": "",\n    "surname": "Kimakhe",\n    "Preferred surname": "Kimakhe",\n    "nationality": "Morrocan",\n    "place of birth": "Rabat",\n    "date of birth": "1989-10-11",\n    "gender": "M",\n    "identification": [\n        {\n            "type": "NI",\n            "value": "1234A",\n            "Original Document Seen": false,\n            \u2018Link to document\u2019: \u2018link\u2019\n        },\n        {\n            "type": "passport",\n            "value": "A11111",\n            "Original Document Seen": true\n        }\n    ],\n    "languages": [\n        {\n            "language": "French",\n            "is primary": false\n        },\n        {\n            "language": "English",\n            "is primary": true\n        }\n    ],\n    "communication": [\n        {\n            "channel": "email",\n            "value": "mehdi.kimakhe@hackney.gov.uk"\n        },\n        {\n            "channel": "phone",\n            "value": "07000000000"\n        }\n    ],\n    "communication requirements": [\n        "sign language",\n        "interpreter needed"\n    ],\n\n    "links": [\n            {\n                "href": "http://vulnerabilities/TWVoZGlLaW1ha2hlCg==",\n                "rel": "vulnerabilities",\n                "type" : "GET"\n            },\n            {\n                "href": "http://activities/TWVoZGlLaW1ha2hlCg==",\n                "rel": "activities",\n                "type" : "GET"\n            },\n            {\n                "href": "http://socialcare/TWVoZGlLaW1ha2hlCg==",\n                "rel": "socialcare",\n                "type" : "GET"\n            },\n            {\n                "href": "http://tenure/TWVoZGlLaW1ha2hlCg==",\n                "rel": "tenure",\n                "type" : "GET"\n            },\n            {\n                "href": "http://notes/TWVoZGlLaW1ha2hlCg==",\n                "rel": "notes",\n                "type" : "GET"\n            },\n            {\n                "href": "http://cautionarycontact/TWVoZGlLaW1ha2hlCg==",\n                "rel": "cautionarycontact",\n                "type" : "GET"\n            },\n            {\n                "href": "http://correspondenceaddresses/TWVoZGlLaW1ha2hlCg==",\n                "rel": "correspondenceaddresses",\n                "type" : "GET"\n            },\n    etc\u2026...\n\n    ]\n\n}\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Core person API microservice: Nice to have")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"A way to deliver the links based on what a user is allowed to link to or what is available (eg if a service is down the link doesn\u2019t get returned).  This would add a layer of complexity to the API but would make the front end implementation easier.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Links would be built using a cross-references table"))),Object(r.b)("h3",{id:"architecture-diagram"},"Architecture Diagram"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Platform API vs Service API comparison",src:n(152).default})))}p.isMDXComponent=!0}}]);