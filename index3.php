<?php
$xml =new DOMDOCUMENT();
$xml->load("index3.xml");
if($xml -> schemavalidate("index3.xsd")) {
    # code...
    echo "valid";
}
else {
    echo "not valid";
}
?>