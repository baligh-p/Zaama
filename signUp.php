<?php
include "./infoServer.php";
header("Access-Control-Allow-Origin:" . $access);
header("Access-Control-Allow-Methods:GET,POST,OPTIONS,PUT,DELETE");
header("Access-Control-Allow-Headers:Content-Disposition,Content-Type,content-Length,Accept-Encoding");
header("Content-type:application/json");
include "./generateID.php";
if (isset($_POST["username"])) {
    $id = generateID(30);
    $cnx = new PDO("mysql:host=" . $host . ";dbname=" . $dbName, $userName, $passWord);
    $checkExist = $cnx->query("SELECT count(*) as nbrUser FROM profil where email='$_POST[email]'");
    $resultCheck = $checkExist->fetch();
    if ($resultCheck["nbrUser"] == 0) {
        if (isset($_FILES["photo"])) {
            $h = pathinfo($_FILES["photo"]["name"]);
            $o = $h['extension'];
            $image = generateID(20);
            move_uploaded_file($_FILES['photo']['tmp_name'], './../public/photoProfil/' . basename($image) . '.' . $o);
            $image = 'photoProfil/' . $image . '.' . $o;
            $req1 = $cnx->prepare("INSERT INTO profil VALUES (?,?,?,Now(),?,?)");
            $req1->execute(array($_POST["username"], $_POST["password"], $_POST["email"], $id, $image));
        } else {
            $req1 = $cnx->prepare("INSERT INTO profil (username,pwd,email,dateCreation,idProfil)VALUES (?,?,?,Now(),?)");
            $req1->execute(array($_POST["username"], $_POST["password"], $_POST["email"], $id));
        }
    }
    $resultCheck["id"] = $id;
    print_r(json_encode($resultCheck));
} else if (isset($_GET["user"])) {/*FOR CHECK EXIST OF USERNAME*/
    $base = mysqli_connect($host, $userName, $passWord, $dbName);
    $request = "SELECT count(*) as nbrUser FROM PROFIL WHERE username='$_GET[user]'";
    $result = mysqli_query($base, $request);
    $send = mysqli_fetch_assoc($result);
    print_r(json_encode($send));
}