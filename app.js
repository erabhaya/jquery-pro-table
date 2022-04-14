$(".success").hide();
$(".error").hide();
$("#update_product").hide();
var product = [];
$("#add_product").click(()=>{
    var Pro_skn = $("#pro_sku").val();
    var Pro_name = $("#pro_name").val();
    var Pro_price = $("#pro_price").val();
    var Pro_quantity =$("#pro_quantity").val();

    if(Pro_skn == "" ){
        $("#pro_sku").css({"border": "1px solid red"});
    }else if(Pro_name == ""){
        $("#pro_sku").css({"border": "1px solid black"});
        $("#pro_name").css({"border": "1px solid red"});
    } else if(Pro_price == ""){
        $("#pro_sku").css({"border": "1px solid black"});
        $("#pro_name").css({"border": "1px solid black"});
        $("#pro_price").css({"border": "1px solid red"});
    } else if (Pro_quantity == ""){
        $("#pro_sku").css({"border": "1px solid black"});
        $("#pro_price").css({"border": "1px solid black"});
        $("#pro_name").css({"border": "1px solid black"});
        $("#pro_quantity").css({"border": "1px solid red"});
    } else{
        $("#pro_quantity").css({"border": "1px solid black"});
        var data = {
        "sn":Pro_skn,
        "name":Pro_name,
        "price":Pro_price,
        "quantity":Pro_quantity,
        }
        product.push(data);
        console.log(product)
        $(".success").append("your product is added successfuly").show();
        setTimeout(()=>{$(".success").hide();},6000)
        $("#pro_sku").val("");
        $("#pro_name").val("");
        $("#pro_price").val("");
        $("#pro_quantity").val("");
        display();
    }
    
});
var table = `	<table>
<tr>
    <th>SKU</th>
    <th>Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Action</th>
</tr>`


function display(){
    var row = ""
    product.forEach((e,i) => {
        row += `<tr>
        <td>${e.sn}</td>
        <td>${e.name}</td>
        <td>${e.price}</td>
        <td>${e.quantity}</td>
        <td><a href="#" id="${i}" class="edit">Edit</a><a href="#"  class="delete">Delete</a></td>
        </tr>`
    });
    $("#pro_list").empty();
    $("#pro_list").append(table+row+"</table>");
}

$(document).on('click','.delete',function(){
    console.log("working")
    console.log(this.id)
    $(this).parent('td').parent("tr").remove();
})

$(document).on("click", '.edit', function(){
    console.log("working")
    console.log(this.id)
    var i = this.id;
    $(this).parent('td').parent("tr").css({"color": "red"});
    var info = product[i];
    console.log(info.sn);
    $("#id").val(`${i}`);
    $("#pro_sku").val(`${info.sn}`);
    $("#pro_name").val(`${info.name}`);
    $("#pro_price").val(`${info.price}`);
    $("#pro_quantity").val(`${info.quantity}`);
    $("#update_product").show();
    $("#add_product").hide();
});

$("#update_product").click(()=>{
    var id = $("#id").val();
    console.log(id);
    var product_info = product[id];
    product_info.sn = $("#pro_sku").val();
    product_info.name = $("#pro_name").val();
    product_info.price = $("#pro_price").val();
    product_info.quantity = $("#pro_quantity").val();

    display()
    $("#pro_sku").val("");
    $("#pro_name").val("");
    $("#pro_price").val("");
    $("#pro_quantity").val("");
    $("#update_product").hide();
    $("#add_product").show();
    console.log(product)
});

