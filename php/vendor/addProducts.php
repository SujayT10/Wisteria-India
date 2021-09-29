<?php
include_once("../database.php");
include_once("../PHPMailerAutoload.php");

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $sku = trim($request->sku);
    $productName = trim($request->productName);
    $description = trim($request->description);
    $unitPrice = trim($request->unitPrice);
    $imgUrl = trim($request->imgUrl);
    $unitInStocks = trim($request->unitInStocks);
    $vendor_id = trim($request->vendor_id);
    $todayDate = trim($request->todayDate);
    $active = trim($request->active);

    $sql = "INSERT INTO vendorproducts(sku, productName, description, unitPrice, imgUrl, unitInStocks, vendor_id, todayDate, active)
                             VALUES ('$sku','$productName', '$description','$unitPrice','$imgUrl','$unitInStocks','$vendor_id','$todayDate','$active')";


    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
                    'Id' => mysqli_insert_id($mysqli),
                    'sku' => $sku,
                    'productName' =>  $productName,
                    'description' => $description,
                    'unitPrice' => $unitPrice,
                    'imgUrl' => $imgUrl,
                    'unitInStocks'=> $unitInStocks,
                    'vendor_id' => $vendor_id,
                    'todayDate' => $todayDate,
                    'active' => $active,
                   ];

    } else{
      http_response_code(404);
      }

}

?>
