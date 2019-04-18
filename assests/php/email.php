<?php



    $nome = addslashes($_POST['name']);
    $email = addslashes($_POST['sub']);
    $assunto = addslashes($_POST['email']);
    $mensagem = addslashes($_POST['message']);

    $to = "viniciuspih@gmail.com";
    $subject = "Contato - Tais Fotografia";
    $body = "Nome: ".$nome. "\r\n".
            "Email: " .$email. "\r\n".
            "Assunto: ".$assunto. "\r\n".
            "Menssagem: " .$mensagem ."\r\n";

    $header = "From: vns.gamesinfo@gmail.com"."\r\n".
    "Replay-to:".$email."\r\n".
    "X=Mailer:PHP/".phpversion();

    if (mail($to,$subject,$body,$header)) {

        echo("Email enviado com sucesso!!");

    } else {
        echo("Ops... Ocorreu um erro, email não pode ser enviado!!!");
    }

?>

