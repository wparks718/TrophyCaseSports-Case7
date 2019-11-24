"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: William Parks
   Date: 11/24/2019

   Filename: tc_cart.js

*/

var orderTotal = 0;

var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th></tr>";

var i;
for (i = 0; i < item.length; i++)
{
    cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td>";
    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    orderTotal = orderTotal + itemCost;
}

cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";
document.getElementById("cart").innerHTML = cartHTML;
