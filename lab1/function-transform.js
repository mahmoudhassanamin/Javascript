
var detailedUsers = [
  {
    firstName: 'Ahmed',
    lastName: 'Ali',
    dateOfBirth: '1995-10-10',
    address: 'Alexadria, Egypt'
  },
  {
    firstName: 'Hossam',
    lastName: 'Mohamed',
    dateOfBirth: '1980-05-10',
    address: 'Nasr City, Cairo, Egypt'
  },
  {
    firstName: 'John',
    lastName: 'James',
    dateOfBirth: '1975-03-05',
    address: 'Nasr street, Nasr City, Cairo, Egypt'
  },
  {
    firstName: 'Tarek',
    lastName: 'Hassan',
    dateOfBirth: '1999-12-03',
    address: '15, street name, district, city, country'
  },
  {
    firstName: 'Hussein',
    lastName: 'Youssuf',
    dateOfBirth: '2005-12-03',
    address: 'abc, street name, district, city, country'
  }
];

function transform(arr){
  var users= [];
  const year = 1000*3600*24*365;
  const d = new Date();
  var curryears = Math.floor(d.getTime() / year);
  for(var i=0;i<arr.length;i++){
      var user={};
      user.fullName=arr[i].firstName+" "+arr[i].lastName;
      var usery=new Date(arr[i].dateOfBirth);
      var useryears = Math.floor(usery.getTime() / year);
      user.age=curryears-useryears;
      useraddr=arr[i].address.split(",");
      for(j=useraddr.length-1;j>=0;j--){
          if(j==useraddr.length-1){
              user.country=useraddr[j];
          }
          else if(j==useraddr.length-2){
              user.city=useraddr[j];
          }
          else if(j==useraddr.length-3){
              user.district=useraddr[j];
          }
          else if(j==useraddr.length-4){
              user.streetName=useraddr[j];
          }
          else if(j==useraddr.length-5 && !(isNaN(Number(useraddr[j])))){
              user.buildingNumber=useraddr[j];
          }

      }
      users[i]=user;
  }
  return users;
}

var arr =transform(detailedUsers);