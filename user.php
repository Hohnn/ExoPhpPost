<?php
$name = htmlspecialchars($_POST['name'] ?? 'Vide') ;
$firstName = htmlspecialchars($_POST['firstName'] ?? 'Vide') ;
$date = htmlspecialchars($_POST['date'] ?? 'Vide') ;
$email = htmlspecialchars($_POST['email'] ?? 'Vide') ;
$nickname = htmlspecialchars($_POST['nickname'] ?? 'Vide') ;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/style.css">
    <title>Abstract</title>
</head>
<body class="info">
    <h1 class="mb-5">VOTRE DEMANDE</h1>
    <table>
    <tbody>
        <tr>
            <td>Nom :</td>
            <td><?= $name ?></td>
        </tr>
        <tr>
            <td>Prénom :</td>
            <td><?= $firstName ?></td>
        </tr>
        <tr>
            <td>Date de naissance :</td>
            <td><?= $date ?></td>
        </tr>
        <tr>
            <td>Adresse mail :</td>
            <td><?= $email ?></td>
        </tr>
        <tr>
            <td>Pseudo :</td>
            <td><?= $nickname ?></td>
        </tr>
    </tbody>
</table>
<div class="btn  mt-5">
    <a href="index.php" type="submit" class="btn btn-secondary" >Changer</a>
    <button type="submit" class="btn btn-primary" id="btn">Valider</button>
</div>


</body>
</html>