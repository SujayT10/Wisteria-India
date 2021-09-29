<?php
include_once("../database.php");
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){

  $request = json_decode($postdata);
  $vendor_id = trim($request->vendor_id);
    $vendorsProducts = [];

    $sql = "SELECT * FROM vendorproducts where vendor_id = '$vendor_id' ";

    if($result = mysqli_query($mysqli, $sql)){
      $request = json_decode($postdata);
      $cr = 0;
      while($row = mysqli_fetch_assoc($result)){
        $vendorsProducts[$cr]['id'] = $row['id'];
        $vendorsProducts[$cr]['sku'] = $row['sku'];
        $vendorsProducts[$cr]['productName'] = $row['productName'];
        $vendorsProducts[$cr]['description'] = $row['description'];
        $vendorsProducts[$cr]['unitPrice'] = $row['unitPrice'];
        $vendorsProducts[$cr]['imgUrl'] = $row['imgUrl'];
        $vendorsProducts[$cr]['unitInStocks'] = $row['unitInStocks'];
        $vendorsProducts[$cr]['vendor_id'] = $row['vendor_id'];
        $vendorsProducts[$cr]['todayDate'] = $row['todayDate'];
        // $partner[$cr]['password'] = $row['password'];
        $cr++;
      }
      // print_r(($vendorsProducts));
      echo json_encode($vendorsProducts);
    }
    else{
      http_response_code(404);
    }
}
?>
