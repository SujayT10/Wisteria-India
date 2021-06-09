<?php
include_once("../database.php");

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $referal_id = trim($request->partner_id);
    $fullname = trim($request->fullname);
    $m_DOB = trim($request->m_DOB);
    $nominee = trim($request->nominee);
    $relation = trim($request->relation);
    $n_DOB = trim($request->n_DOB);
    $childName1 = trim($request->childName1);
    $c1_DOB = trim($request->c1_DOB);
    $childName2 = trim($request->childName2);
    $c2_DOB = trim($request->c2_DOB);
    $gf_name = trim($request->gf_name);
    $gf_DOB = trim($request->gf_DOB);
    $gm_name = trim($request->gm_name);
    $gm_DOB = trim($request->gm_DOB);
    $panNumber = trim($request->panNumber);
    $accNumber = trim($request->accNumber);
    $bankName = trim($request->bankName);
    $ifscCode = trim($request->ifscCode);
    $eContactNo = trim($request->eContactNo);

    $sql = "INSERT INTO profiledata(referal_id,fullname,m_DOB,nominee,relation,n_DOB,childName1,c1_DOB,childName2,c2_DOB,gf_name,gf_DOB,gm_name,gm_DOB,panNumber,accNumber,bankName,ifscCode,eContactNo)
                             VALUES ('$referal_id','$fullname','$m_DOB','$nominee','$relation', '$n_DOB', '$childName1', '$c1_DOB','$childName2', '$c2_DOB', '$gf_name', '$gf_DOB', '$gm_name','$gm_DOB', '$panNumber', '$accNumber', '$bankName', '$ifscCode', '$eContactNo')";

      $res = mysqli_query($mysqli, $sql);

    if ($mysqli->query($sql1) === TRUE) {
        $authdata = [
                    'Id' => mysqli_insert_id($mysqli),
                    'referal_id' => $referal_id,
                    'fullname' => $fullname,
                    'm_DOB' => $m_DOB,
                    'nominee' => $nominee,
                    'relation' => $relation,
                    'n_DOB' => $n_DOB,
                    'childName1' => $childName1,
                    'c1_DOB'=> $c1_DOB,
                    'childName2' => $childName2,
                    'c2_DOB' => $c2_DOB,
                    'gf_name'=> $gf_name,
                    'gf_DOB' => $gf_DOB,
                    'gm_name' => $gm_name,
                    'gm_DOB' => $gm_DOB,
                    'panNumber'=> $panNumber,
                    'accNumber'=> $accNumber,
                    'bankName' => $bankName,
                    'ifscCode' => $ifscCode,
                    'eContactNo'=> $eContactNo,
                   ];

         echo json_encode($authdata);
    } else{
      http_response_code(404);
      }

}

?>
