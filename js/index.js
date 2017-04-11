   $(document).ready(function() {
       var inputString;
       var i;
       var flag = -1;
       var searchResult = {};

       var userDetail = {
           "name": "Felisa Oshiro",
           "userdescribtion": "lorem ipsum dollor sit lorem ipsum dollor sitlorem ipsum dollor sit",
           "mail": "abc@fff.com",
           "number": "4564646546",
           "seatingPreference": [{ name: "3" }, { name: "11" }, { name: "27" }],
           "foodPreference": [{ name: "tuna" }, { name: "hamburger" }, { name: "vegetaarian pizza" }],
           "userTag": [{ name: "seafood" }, { name: "football" }, { name: "baseball" }, { name: "bear" }],
           "upcomingevents": [{
                   "date": "18",
                   "day": "saturday,May12",
                   "table": "table3"
               },

               {
                   "date": "19",
                   "day": "saturday,May12",
                   "table": "table8"
               }, {
                   "date": "20",
                   "day": "saturday,May12",
                   "table": "table9"
               },
           ],
           "DinningHistory": [

               {
                   "date": "18",
                   "day": "wednesday,May2",
                   "table": "table3"
               },
               {
                   "date": "18",
                   "day": "saturday,May12",
                   "table": "table3"
               },
               {
                   "date": "18",
                   "day": "saturday,May12",
                   "table": "table3"
               },
           ]

       }

       var userName = {
           user: [{
                   "name": "shivam",
                   "number": "238783",
                   "vip": "0"
               },
               {
                   "name": "Felisa Oshiro",
                   "number": "64564563",
                   "vip": "1"
               },
               {
                   "name": "Rohit singh",
                   "number": "121564563",
                   "vip": "1"
               },
               {
                   "name": "yogi",
                   "number": "787r563",
                   "vip": "1"
               },

               {
                   "name": "c singh",
                   "number": "231364563",
                   "vip": "0"
               }
           ]

       }
       var people = [];
       people = userName;

       var people1 = [];
       people1 = userName;

       var userJson = {
           people: [{
                   "name": "Felisa Oshiro",
                   "userdescribtion": "lorem ipsum dollor sit lorem ipsum dollor sitlorem ipsum dollor sit",
                   "mail": "abc@fff.com",
                   "number": "4564646546",
                   "seatingPreference": [{ name: "3" }, { name: "11" }, { name: "27" }],
                   "foodPreference": [{ name: "tuna" }, { name: "hamburger" }, { name: "vegetaarian pizza" }],
                   "userTag": [{ name: "seafood" }, { name: "football" }, { name: "baseball" }, { name: "bear" }],
                   "upcomingevents": [{
                           "date": "18",
                           "day": "saturday,May12",
                           "table": "table3"
                       },

                       {
                           "date": "19",
                           "day": "saturday,May12",
                           "table": "table8"
                       }, {
                           "date": "20",
                           "day": "saturday,May12",
                           "table": "table9"
                       },
                   ],
                   "DinningHistory": [

                       {
                           "date": "18",
                           "day": "wednesday,May2",
                           "table": "table3"
                       },
                       {
                           "date": "18",
                           "day": "saturday,May12",
                           "table": "table3"
                       },
                       {
                           "date": "18",
                           "day": "saturday,May12",
                           "table": "table3"
                       },
                   ]

               },


               {
                   "name": "Rohit singh",
                   "userdescribtion": "lorem ipsum dollor sit lorem ipsum dollor sitlorem ipsum dollor sit",
                   "mail": "yvsingh1001@gmail.com",
                   "number": "1223243546",
                   "seatingPreference": [{ name: "2" }, { name: "1" }, { name: "7" }],
                   "foodPreference": [{ name: "hamburger" }, { name: "tuna" }, { name: "vegetaarian pizza" }],
                   "userTag": [{ name: "baseball" }, { name: "football" }, { name: "seafood" }, { name: "bear3" }],
                   "upcomingevents": [{
                           "date": "8",
                           "day": "sunday,june 12",
                           "table": "table3"
                       },

                       {
                           "date": "1",
                           "day": "saturday,May12",
                           "table": "table8"
                       }, {
                           "date": "21",
                           "day": "sunday,june 12",
                           "table": "table9"
                       },
                   ],
                   "DinningHistory": [

                       {
                           "date": "18",
                           "day": "sunday,june 12",
                           "table": "table3"
                       },
                       {
                           "date": "18",
                           "day": "sunday,june 12",
                           "table": "table3"
                       },
                       {
                           "date": "18",
                           "day": "saturday,May12",
                           "table": "table3"
                       },
                   ]

               },

               {
                   "name": "yogi",
                   "userdescribtion": "lorem ipsum dollor sit lorem ipsum dollor sitlorem ipsum dollor sit",
                   "mail": "abc@fff.com",
                   "number": "4564646546",
                   "seatingPreference": [{ name: "3" }, { name: "11" }, { name: "27" }],
                   "foodPreference": [{ name: "tuna" }, { name: "hamburger" }, { name: "vegetaarian pizza" }],
                   "userTag": [{ name: "seafood" }, { name: "football" }, { name: "baseball" }, { name: "bear" }],
                   "upcomingevents": [{
                           "date": "18",
                           "day": "saturday,May12",
                           "table": "table3"
                       },

                       {
                           "date": "19",
                           "day": "saturday,May12",
                           "table": "table8"
                       }, {
                           "date": "20",
                           "day": "saturday,May12",
                           "table": "table9"
                       },
                   ],
                   "DinningHistory": [

                       {
                           "date": "18",
                           "day": "wednesday,May2",
                           "table": "table3"
                       },
                       {
                           "date": "18",
                           "day": "saturday,May12",
                           "table": "table3"
                       },
                       {
                           "date": "18",
                           "day": "saturday,May12",
                           "table": "table3"
                       },
                   ]

               },

               {
                   "name": "shivam",
                   "userdescribtion": " ipsum dollor sitlorem ipsum dollor sit lorem ipsum dollor sit lorem",
                   "mail": "abc@fff.com",
                   "number": "4564646546",
                   "seatingPreference": [{ name: "3" }, { name: "11" }, { name: "27" }],
                   "foodPreference": [{ name: "tuna" }, { name: "hamburger" }, { name: "vegetaarian pizza" }],
                   "userTag": [{ name: "seafood" }, { name: "football" }, { name: "baseball" }, { name: "bear" }],
                   "upcomingevents": [{
                           "date": "18",
                           "day": "saturday,May12",
                           "table": "table3"
                       },

                       {
                           "date": "19",
                           "day": "saturday,May12",
                           "table": "table8"
                       }, {
                           "date": "20",
                           "day": "saturday,May12",
                           "table": "table9"
                       },
                   ],
                   "DinningHistory": [

                       {
                           "date": "18",
                           "day": "wednesday,May2",
                           "table": "table3"
                       },
                       {
                           "date": "18",
                           "day": "saturday,May12",
                           "table": "table3"
                       },
                       {
                           "date": "18",
                           "day": "saturday,May12",
                           "table": "table3"
                       },
                   ]

               },

               {
                   "name": "c singh",
                   "userdescribtion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when .t",
                   "mail": "abc@fff.com",
                   "number": "4564646546",
                   "seatingPreference": [{ name: "3" }, { name: "11" }, { name: "27" }],
                   "foodPreference": [{ name: "tuna" }, { name: "hamburger" }, { name: "vegetaarian pizza" }],
                   "userTag": [{ name: "seafood" }, { name: "football" }, { name: "baseball" }, { name: "bear" }],
                   "upcomingevents": [{
                           "date": "18",
                           "day": "saturday,May12",
                           "table": "table3"
                       },

                       {
                           "date": "19",
                           "day": "saturday,May12",
                           "table": "table8"
                       }, {
                           "date": "20",
                           "day": "saturday,May12",
                           "table": "table9"
                       },
                   ],
                   "DinningHistory": [

                       {
                           "date": "18",
                           "day": "wednesday,May2",
                           "table": "table3"
                       },
                       {
                           "date": "18",
                           "day": "saturday,May12",
                           "table": "table3"
                       },
                       {
                           "date": "18",
                           "day": "saturday,May12",
                           "table": "table3"
                       },
                   ]

               }
           ]
       }

       $('.latestAdded').on('click', function() {

           people.user.sort(function(a, b) {
               var nameA = a.name.toUpperCase(); // ignore upper and lowercase
               var nameB = b.name.toUpperCase(); // ignore upper and lowercase
               if (nameA > nameB) {
                   return -1;
               }
               if (nameA < nameB) {
                   return 1;
               }
               return 0;
           });


           rb(".guestListRender", "guestList", people, '.singleguest', '', function(cls, data) {
               for (i = 0; i < 10; i++) {
                   if (data.name === userJson.people[i].name) {
                       searchResult = userJson.people[i];
                       rb(".renderingContainer", "guestData", searchResult);
                   }
               }
           });
       });

       $('.vip').on('click', function() {
           var vipPerson = {
               user: []
           }
           for (i in userName.user) {
               if (userName.user[i].vip == 1)

               {

                   vipPerson.user.push(userName.user[i]);

               }
           }

           rb(".guestListRender", "guestList", vipPerson, '.singleguest', '', function(cls, data) {
               for (i = 0; i < 10; i++) {
                   if (data.name === userJson.people[i].name) {
                       searchResult = userJson.people[i];
                       rb(".renderingContainer", "guestData", searchResult);
                   }
               }
           });
       });

       $('.alphabetically').on('click', function() {


           people.user.sort(function(a, b) {
               var nameA = a.name.toUpperCase(); // ignore upper and lowercase
               var nameB = b.name.toUpperCase(); // ignore upper and lowercase
               if (nameA < nameB) {
                   return -1;
               }
               if (nameA > nameB) {
                   return 1;
               }
               return 0;
           });


           rb(".guestListRender", "guestList", people, '.singleguest', '', function(cls, data) {
               for (i = 0; i < 10; i++) {
                   if (data.name === userJson.people[i].name) {
                       searchResult = userJson.people[i];
                       rb(".renderingContainer", "guestData", searchResult);
                   }
               }
           });
       });




       $('.guestSearchInput').on('keyup', function(e) {

           if ($('.guestSearchInput').val() === "") {

               rb(".guestListRender", "guestList", userName)

           } else {




               $('.singleguest').hide();
               inputString = $('.guestSearchInput').val();


               for (i = 0; i <= 10; i++) {

                   flag = userJson.people[i].name.search(inputString)

                   if (flag > -1) {



                       $('.guestList').append('<div class="singleguest" dataId= "' + userJson.people[i].name + '" ><span class="guestName">' + userJson.people[i].name + '</span> <span class="guestNumber">' + userJson.people[i].number + ' </span></div>');

                       $('.singleguest').on('click', function(e) {

                           for (i = 0; i < 10; i++) {
                               //  console.log($('.singleguest').id);
                               if ($(this).attr('dataId') === userJson.people[i].name) {
                                   searchResult = userJson.people[i];
                                   rb(".renderingContainer", "guestData", searchResult);
                               }
                           }




                       });

                   }
               }
           }

           // }

       });




       makeTemplates();
       rb(".renderingContainer", "guestData", userDetail);
       rb(".guestListRender", "guestList", userName, '.singleguest', '', function(cls, data) {
           for (i = 0; i < 10; i++) {
               if (data.name === userJson.people[i].name) {
                   searchResult = userJson.people[i];
                   rb(".renderingContainer", "guestData", searchResult);
               }
           }
       });
   });