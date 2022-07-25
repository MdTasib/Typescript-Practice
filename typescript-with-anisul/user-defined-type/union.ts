/**
 *
 * Class ( 05 )
 *  Union Data type
 * 
 */

let userId: string | number | boolean;

userId = '101';
userId = 101;
userId = true;

function displayUserId(userId: string | number){
  console.log(userId);
}

displayUserId(101);
displayUserId("101");