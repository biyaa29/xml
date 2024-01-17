<?php
$xml =new DOMDOCUMENT();
$xml->load("index3.xml");
if($xml -> schemavalidate("index3.xsd")) {
    # code...
    echo "valid xml schema";
}
else {
    echo "not valid xml schema";
}
?>