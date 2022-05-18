<html>
<head>
<title> Query </title>
</head>
<style>

</style>
<body bgcolor="cyan">
<?php

$quote=$_POST['quote'];
$author=$_POST['author'];

$servername="localhost:3307";
$username="root";
$password="karam";

$dbname="dbinfo";

$conn=new mysqli($servername, $username, $password, $dbname);

if(!$conn)
{
die('could not connect' . mysqli_connect_error());
}
else
{
echo "MySql Connect Successfully" . "<br/>";    
}

$sqlquery="insert into quotations('quote', 'author') values($quote,$author)";

if($conn->query($sqlquery)==true){
    $result=$conn->query($sqlquery);
while($row =$result->fetch_assoc())
{
echo $row['quote']. "<br/>";
echo $row['author']. "<br/>";

}
}
else{
    echo " error" . $sqlquery. "<br>" .$conn->error
}




mysqli_close($conn);
?>
<br>
<a href="http://localhost/php_class/index2.html"> Go To Home Page </a>
<br>
</body>
</html>