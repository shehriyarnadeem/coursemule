import React from "react";


export function convertDate(date) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const formatDate = new Date(date).toLocaleDateString();
  let temp_date = formatDate.split("/");
  return  months[Number(temp_date[1]) - 1] + " "  + temp_date[2] + "," + " " + temp_date[0];
}
